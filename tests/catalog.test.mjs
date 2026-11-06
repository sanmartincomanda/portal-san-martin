import test from "node:test";
import assert from "node:assert/strict";
import {
  CATALOG_URL,
  fallbackProducts,
  getFeaturedProducts,
  normalizeCatalog,
  safeProductImage,
} from "../lib/catalog.mjs";
import { SHOP_URL, stores, structuredData } from "../lib/site-data.mjs";

test("catalog only forwards presentation fields, never internal data or prices", () => {
  const products = normalizeCatalog({
    first: {
      code: "00036",
      name: "FILET MIGNON GOLD",
      active: true,
      image: "/tienda/product.jpg",
      price: 332,
      sync: { private: true },
      branchSettings: {},
    },
  });
  assert.equal(products.length, 1);
  assert.deepEqual(
    Object.keys(products[0]).sort(),
    ["code", "name", "line", "image", "fallbackImage", "href"].sort(),
  );
  assert.equal(products[0].image, `${SHOP_URL}/tienda/product.jpg`);
  assert.equal(products[0].href, SHOP_URL);
});
test("inactive, absent and invalid products are not presented as active", () => {
  assert.deepEqual(
    normalizeCatalog({
      a: { code: "00036", name: "Filet", active: false },
      b: { code: "00047", name: "", active: true },
      c: null,
    }),
    [],
  );
  assert.deepEqual(normalizeCatalog({}), []);
});
test("invalid responses are rejected", () => {
  for (const data of [null, false, "invalid", []])
    assert.throws(() => normalizeCatalog(data));
});
test("remote image hosts, protocols and paths are allowlisted", () => {
  const fallback = "/brand/product-00036.webp";
  for (const bad of [
    "http://tienda.sanmartinsr.com/tienda/x.jpg",
    "https://evil.example/x.jpg",
    "javascript:alert(1)",
    "//evil.example/x.jpg",
    "https://tienda.sanmartinsr.com/private.jpg",
    "https://user:pass@tienda.sanmartinsr.com/tienda/x.jpg",
    null,
  ])
    assert.equal(safeProductImage(bad, fallback), fallback);
  assert.equal(
    safeProductImage("/tienda/product.jpg", fallback),
    `${SHOP_URL}/tienda/product.jpg`,
  );
});
test("request is read-only, time-bounded, cached and credential-free", async () => {
  const result = await getFeaturedProducts(async (url, options) => {
    assert.equal(url, CATALOG_URL);
    assert.equal(options.method, "GET");
    assert.equal(options.next.revalidate, 900);
    assert.ok(options.signal instanceof AbortSignal);
    assert.equal(options.headers, undefined);
    assert.equal(options.body, undefined);
    return { ok: true, json: async () => ({}) };
  });
  assert.equal(result.source, "catalog");
  assert.deepEqual(result.products, []);
});
test("HTTP, network, JSON and timeout failures use the local editorial selection", async () => {
  for (const fetcher of [
    async () => {
      throw Error("offline");
    },
    async () => ({ ok: false, status: 503 }),
    async () => ({
      ok: true,
      json: async () => {
        throw Error("JSON");
      },
    }),
    async () => {
      throw new DOMException("Timed out", "TimeoutError");
    },
  ]) {
    const result = await getFeaturedProducts(fetcher);
    assert.equal(result.source, "selection");
    assert.equal(result.products.length, 6);
    assert.ok(
      result.products.every(
        (p) => p.image.startsWith("/brand/") && !("price" in p),
      ),
    );
  }
});
test("offline test mode never requests the API", async () => {
  const result = await getFeaturedProducts(
    () => {
      throw Error("must not fetch");
    },
    { offline: true },
  );
  assert.deepEqual(result.products, fallbackProducts());
});
test("structured data contains three real stores, no invented ratings or industrial claims", () => {
  const graph = structuredData()["@graph"];
  assert.equal(graph.filter((item) => item["@type"] === "Store").length, 3);
  assert.equal(stores.length, 3);
  assert.equal(stores[0].phoneRaw, "+50584657949");
  assert.equal(stores[2].locality, "Nindirí");
  assert.ok(!JSON.stringify(graph).includes("aggregateRating"));
});
