import Image from "next/image";
import Header from "@/components/header";
import Motion from "@/components/motion";
import LineShowcase from "@/components/line-showcase";
import ProductShelf from "@/components/product-shelf";
import { Icon, ShopButton } from "@/components/icons";
import { getFeaturedProducts } from "@/lib/catalog.mjs";
import {
  CONTACT_EMAIL,
  CORPORATE_URL,
  FACEBOOK_URL,
  SHOP_URL,
  stores,
  structuredData,
} from "@/lib/site-data.mjs";

export const revalidate = 900;

export default async function Home() {
  const { products, source } = await getFeaturedProducts(fetch, {
    offline: process.env.CSM_CATALOG_OFFLINE === "1",
  });
  return (
    <>
      <Header />
      <Motion />
      <main id="contenido">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="hero-photo">
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet="/brand/hero-grill-mobile.avif"
                type="image/avif"
              />
              <source
                media="(max-width: 700px)"
                srcSet="/brand/hero-grill-mobile.webp"
                type="image/webp"
              />
              <Image
                src="/brand/hero-grill.webp"
                alt="Cortes de res sobre una parrilla caliente, fotografía oficial de Carnes San Martín"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
              />
            </picture>
          </div>
          <div className="hero-topline">
            <span>EL SABOR COMIENZA AQUÍ</span>
            <span>NICARAGUA / DESDE 1975</span>
          </div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              <span className="brand-dot" /> Carne de verdad. Momentos de
              verdad.
            </p>
            <h1 id="hero-title">
              <span>LA CARNE</span>
              <span>PERFECTA.</span>
              <span className="hero-outro">TODOS LOS DÍAS.</span>
            </h1>
            <p className="hero-description">
              Desde el sabor de cada día hasta nuestra selección Gold. Descubrí
              todo lo que se puede compartir con Carnes San Martín.
            </p>
            <div className="hero-actions">
              <ShopButton location="hero" />
              <a className="hero-explore" href="#cortes">
                Explorar nuestros cortes <Icon name="down" />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>BUEN FUEGO. BUENA CARNE. BUENA COMPAÑÍA.</span>
            <a href="#lineas" aria-label="Descubrir nuestras líneas">
              <Icon name="down" />
            </a>
            <span>GRANADA · MASAYA · NINDIRÍ</span>
          </div>
        </section>

        <section id="lineas" className="lines-section section-space">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">
                  <span>01</span> Descubrí nuestras líneas
                </p>
                <h2>
                  CADA MOMENTO
                  <br />
                  TIENE SU CORTE.
                </h2>
              </div>
              <p className="section-intro">
                Hay días de parrilla. Días de celebrar.
                <br />Y días que simplemente saben a casa.
                <br />
                <strong>Tenemos un corte para cada uno.</strong>
              </p>
            </div>
            <LineShowcase />
          </div>
        </section>

        <section id="cortes" className="cuts-section section-space">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">
                  <span>02</span> Nuestros cortes favoritos
                </p>
                <h2>
                  EL ANTOJO
                  <br />
                  TIENE NOMBRE.
                </h2>
              </div>
              <a
                href={SHOP_URL}
                className="text-link"
                data-commerce="shop"
                data-location="full-catalog"
              >
                Ver todo el catálogo <Icon name="diagonal" />
              </a>
            </div>
            <ProductShelf products={products} source={source} />
          </div>
        </section>

        <section
          id="a-tu-mesa"
          className="table-section"
          aria-labelledby="table-title"
        >
          <div className="table-heading container" data-reveal>
            <p className="eyebrow">
              <span>03</span> De nuestra carne a tu mesa
            </p>
            <h2 id="table-title">
              EL INGREDIENTE
              <br />
              ESPECIAL ES
              <br />
              <span>COMPARTIR.</span>
            </h2>
            <p>Los mejores momentos se comparten con el mejor sabor.</p>
          </div>
          <div className="story-grid container">
            <article className="story story-main" data-reveal="image">
              <div className="story-photo">
                <Image
                  src="/brand/line-gold.webp"
                  alt="Steak en su punto, servido en una tabla con romero y sal"
                  fill
                  sizes="(min-width: 800px) 55vw, 100vw"
                  className="parallax-photo"
                />
              </div>
              <div className="story-caption">
                <span>01 / SIN PRISA</span>
                <h3>La cena se vuelve ocasión.</h3>
                <a
                  href={SHOP_URL}
                  className="text-link"
                  data-commerce="category"
                  data-category="gold"
                  data-location="story-steak"
                >
                  Encontrá tu corte Gold <Icon name="diagonal" />
                </a>
              </div>
            </article>
            <article className="story story-side" data-reveal="image">
              <div className="story-photo">
                <Image
                  src="/brand/lasagna.webp"
                  alt="Lasaña de carne recién servida, fotografía de la guía de Carnes San Martín"
                  fill
                  sizes="(min-width: 800px) 35vw, 100vw"
                />
              </div>
              <div className="story-caption">
                <span>02 / SABE A CASA</span>
                <h3>Una receta. Muchos recuerdos.</h3>
                <a
                  href={SHOP_URL}
                  className="text-link"
                  data-commerce="shop"
                  data-location="story-lasagna"
                >
                  Elegí para tu próxima receta <Icon name="diagonal" />
                </a>
              </div>
            </article>
          </div>
          <div className="shared-table container">
            <span aria-hidden="true">A LA MESA.</span>
            <p>
              El fuego reúne.
              <br />
              El sabor se queda.
            </p>
            <a
              href={SHOP_URL}
              className="circle-link"
              aria-label="Comprar cortes para compartir"
              data-commerce="shop"
              data-location="table-end"
            >
              <Icon name="diagonal" />
            </a>
          </div>
        </section>

        <section id="pedi-en-linea" className="order-section section-space">
          <div className="container order-grid">
            <div className="order-copy" data-reveal>
              <p className="eyebrow">
                <span>04</span> Pedí en línea
              </p>
              <h2>
                DE TU ANTOJO
                <br />A TU PEDIDO.
              </h2>
              <p className="order-intro">
                Toda la tienda, donde estés.
                <br />
                Sin hacer fila. A tu ritmo.
              </p>
              <ol className="order-steps">
                <li>
                  <span>01</span>
                  <div>
                    <h3>Elegí tus productos.</h3>
                    <p>Entrá al catálogo y seleccioná tu sucursal.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Prepará tu pedido.</h3>
                    <p>Agregá tus cortes y revisá las cantidades.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Elegí cómo recibirlo.</h3>
                    <p>
                      Consultá las opciones y cobertura disponibles en la
                      tienda.
                    </p>
                  </div>
                </li>
              </ol>
              <ShopButton location="order-section" className="button-dark">
                Hacé tu pedido ahora
              </ShopButton>
              <p className="order-benefit">
                También podés conocer Miembro Gold y sus beneficios dentro de la
                tienda.
              </p>
            </div>
            <div className="order-visual" data-reveal="image">
              <div className="order-stamp" aria-hidden="true">
                BUENA CARNE.
                <br />A UN CLIC.
              </div>
              <a
                href={SHOP_URL}
                className="phone"
                aria-label="Abrir tienda.sanmartinsr.com, la tienda virtual de Carnes San Martín"
                data-commerce="shop"
                data-location="phone-preview"
              >
                <div className="phone-top">
                  <span />
                  <span>tienda.sanmartinsr.com</span>
                  <span />
                </div>
                <Image
                  src="/brand/store-preview-current.webp"
                  alt="Captura real de la tienda virtual en un teléfono: buscador, sucursal y acceso al catálogo"
                  width={780}
                  height={980}
                  sizes="(max-width: 600px) 75vw, 340px"
                />
                <div className="phone-bottom">
                  <span />
                </div>
              </a>
              <p className="phone-caption">
                TU TIENDA, EN TU TELÉFONO.
                <br />
                <span>Vista real del sitio. El contenido puede cambiar.</span>
              </p>
            </div>
          </div>
        </section>

        <section id="calidad" className="quality-section section-space">
          <div className="container quality-grid">
            <div className="quality-photo" data-reveal="image">
              <Image
                src="/brand/grill-story.webp"
                alt="Preparación de una parrillada al aire libre, fotografía del manual de la marca"
                fill
                sizes="(min-width: 900px) 45vw, 100vw"
              />
              <span className="quality-photo-label">
                EL SABOR TIENE HISTORIA.
              </span>
            </div>
            <div className="quality-copy" data-reveal>
              <p className="eyebrow">
                <span>05</span> Calidad y trayectoria
              </p>
              <h2>
                DE NICARAGUA.
                <br />
                CON ORGULLO.
              </h2>
              <div className="history-year">
                <strong>1975</strong>
                <span>
                  El inicio de la historia
                  <br />
                  de Carnes San Martín.
                </span>
              </div>
              <p>
                Industrial Comercial San Martín S.A. nació en Nicaragua y tiene
                su planta principal en Nandaime. Su historia se construye
                alrededor de la carne, su origen y el cuidado de cada proceso.
              </p>
              <p>
                Nosotros somos Distribuidores SR. Desde nuestras tiendas en
                Granada, Masaya y Nindirí acercamos esa marca a tu cocina, con
                atención local para elegir tu próximo corte.
              </p>
              <a
                href={CORPORATE_URL}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocé la historia y calidad de la marca{" "}
                <Icon name="diagonal" />
                <span className="sr-only"> (abre en otra pestaña)</span>
              </a>
              <p className="corporate-note">
                La información industrial y las certificaciones corresponden a
                la empresa titular de la marca, no a las tiendas locales.
              </p>
            </div>
          </div>
        </section>

        <section id="sucursales" className="stores-section section-space">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">
                  <span>06</span> Nuestras sucursales
                </p>
                <h2>
                  BUENA CARNE.
                  <br />
                  CERCA DE VOS.
                </h2>
              </div>
              <p className="section-intro">
                Pasá por tu corte favorito.
                <br />O escribinos y te ayudamos a elegir.
                <br />
                Consultá horarios por WhatsApp.
              </p>
            </div>
            <div className="store-grid">
              {stores.map((store, index) => (
                <article className="store-card" key={store.id} data-reveal>
                  <div className="store-photo">
                    <Image
                      src={store.image}
                      alt={`Fachada real de Carnes San Martín ${store.name}`}
                      fill
                      sizes="(min-width: 1000px) 30vw, (min-width: 650px) 45vw, 100vw"
                    />
                    <span>{store.kind}</span>
                  </div>
                  <div className="store-heading">
                    <h3>{store.name}</h3>
                    <span>0{index + 1}</span>
                  </div>
                  <address>{store.address}</address>
                  <a href={`tel:${store.phoneRaw}`} className="store-phone">
                    {store.phone}
                  </a>
                  <div className="store-links">
                    <a
                      href={store.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-commerce="map"
                      data-location={store.id}
                    >
                      <Icon name="pin" /> Cómo llegar
                      <span className="sr-only">
                        {" "}
                        a {store.name} (abre en otra pestaña)
                      </span>
                    </a>
                    <a
                      href={store.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-commerce="whatsapp"
                      data-location={store.id}
                    >
                      <Icon name="chat" /> WhatsApp
                      <span className="sr-only">
                        {" "}
                        de {store.name} (abre en otra pestaña)
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <details className="store-film">
              <summary>
                <span>
                  <Icon name="play" /> Una mirada a nuestra tienda en Granada
                </span>
                <span>VER VIDEO +</span>
              </summary>
              <div className="store-film-content">
                <video
                  controls
                  muted
                  playsInline
                  preload="none"
                  poster="/brand/granada.webp"
                  aria-label="Recorrido visual por la tienda de Carnes San Martín en Granada"
                >
                  <source src="/ReelGranada.mp4" type="video/mp4" />
                  Tu navegador no permite reproducir este video.
                </video>
                <p>
                  Conocé de cerca la tienda y sus productos.
                  <br />
                  Para ubicación y atención actual, consultá los datos de la
                  sucursal.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner" data-reveal>
            <p className="eyebrow">Ya sabés qué se te antoja.</p>
            <h2>
              EL MEJOR SABOR
              <br />
              ESTÁ A UN CLIC.
            </h2>
            <ShopButton location="closing" className="button-light">
              Vamos a la tienda
            </ShopButton>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a href="#inicio" className="footer-logo">
              <Image
                src="/logocsm.svg"
                alt="Carnes San Martín"
                width={168}
                height={77}
              />
            </a>
            <p>
              Carne de verdad.
              <br />
              Momentos de verdad.<span>Distribuidores SR · Nicaragua</span>
            </p>
            <div className="footer-nav">
              <a href="#lineas">Nuestras líneas</a>
              <a href="#sucursales">Sucursales</a>
              <a href={SHOP_URL} data-commerce="shop" data-location="footer">
                Tienda en línea <Icon name="diagonal" />
              </a>
            </div>
            <div className="footer-contact">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Seguinos en Facebook <Icon name="diagonal" />
                <span className="sr-only"> (abre en otra pestaña)</span>
              </a>
              <a href={CORPORATE_URL} target="_blank" rel="noopener noreferrer">
                Sitio corporativo <Icon name="diagonal" />
                <span className="sr-only"> (abre en otra pestaña)</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Distribuidores SR · Carnes San Martín
            </span>
            <span>Granada / Masaya / Nindirí</span>
            <a href={`${SHOP_URL}/privacidad`}>Privacidad de la tienda</a>
          </div>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
