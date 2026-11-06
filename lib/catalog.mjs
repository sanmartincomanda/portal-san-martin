import { SHOP_URL } from "./site-data.mjs";

export const CATALOG_URL =
  "https://comanda-digital-ac1ec-default-rtdb.firebaseio.com/storeCatalog.json?orderBy=%22active%22&equalTo=true";
export const featuredSelection = [
  { code: "00036", name: "Filet Mignon Gold", line: "gold" },
  { code: "00047", name: "New York sin hueso", line: "gold" },
  { code: "00056", name: "Churrasco parrillero", line: "parrillera" },
  { code: "00393", name: "Bistec posta de pierna", line: "diaria" },
  { code: "00034", name: "Puyazo Gold", line: "gold" },
  { code: "00051", name: "Tomahawk Steak Bone In", line: "gold" },
];

export function safeProductImage(value, fallback) {
  if (typeof value !== "string") return fallback;
  try {
    const url = new URL(value, SHOP_URL);
    const firebaseImage =
      url.hostname === "firebasestorage.googleapis.com" &&
      url.pathname.startsWith(
        "/v0/b/comanda-digital-ac1ec.firebasestorage.app/o/store%2Fcatalog%2F",
      );
    const storeImage =
      url.hostname === "tienda.sanmartinsr.com" &&
      url.pathname.startsWith("/tienda/");
    return url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      (firebaseImage || storeImage)
      ? url.href
      : fallback;
  } catch {
    return fallback;
  }
}

export function fallbackProducts() {
  return featuredSelection.map((product) => ({
    ...product,
    image: `/brand/product-${product.code}.webp`,
    fallbackImage: `/brand/product-${product.code}.webp`,
    href: SHOP_URL,
  }));
}

export function normalizeCatalog(data) {
  if (!data || typeof data !== "object" || Array.isArray(data))
    throw new Error("Invalid catalog");
  const records = Object.values(data).filter(
    (item) => item && typeof item === "object",
  );
  return featuredSelection.flatMap((selection) => {
    const product = records.find((item) => item.code === selection.code);
    if (
      !product ||
      product.active !== true ||
      typeof product.name !== "string" ||
      !product.name.trim()
    )
      return [];
    const fallbackImage = `/brand/product-${selection.code}.webp`;
    // Only public presentation fields reach the client. Never forward prices or internal metadata.
    return [
      {
        code: selection.code,
        name: product.name.trim().slice(0, 140),
        line: selection.line,
        image: safeProductImage(product.image, fallbackImage),
        fallbackImage,
        href: SHOP_URL,
      },
    ];
  });
}

export async function getFeaturedProducts(
  fetcher = fetch,
  { offline = false } = {},
) {
  if (offline) return { products: fallbackProducts(), source: "selection" };
  try {
    const response = await fetcher(CATALOG_URL, {
      method: "GET",
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
    return {
      products: normalizeCatalog(await response.json()),
      source: "catalog",
    };
  } catch {
    return { products: fallbackProducts(), source: "selection" };
  }
}
