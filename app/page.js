import Image from "next/image";
import Link from "next/link";

const ONLINE_STORE = "https://tienda.sanmartinsr.com";
const OFFICIAL_SITE = "https://sanmartin.com.ni/";
const FACEBOOK_PAGE =
  "https://www.facebook.com/share/1SwN7Njj7s/?mibextid=wwXIfr";

const navLinks = [
  { label: "La marca", href: "#marca" },
  { label: "Calidad", href: "#calidad" },
  { label: "Productos", href: "#productos" },
  { label: "Tiendas", href: "#tiendas" },
];

const qualityPoints = [
  {
    number: "01",
    title: "Inocuidad certificada",
    copy:
      "La planta opera bajo est\u00e1ndares reconocidos por la industria c\u00e1rnica y cuenta con certificaci\u00f3n FSSC 22000, respaldada por auditor\u00edas internacionales.",
  },
  {
    number: "02",
    title: "Trazabilidad desde el origen",
    copy:
      "Cada animal puede rastrearse hasta la finca de procedencia mediante el sistema nacional de trazabilidad bovina y su identificaci\u00f3n individual.",
  },
  {
    number: "03",
    title: "Bienestar animal",
    copy:
      "Los procesos de abastecimiento y manejo incorporan principios internacionales de bienestar animal y las cinco libertades.",
  },
  {
    number: "04",
    title: "Producci\u00f3n sostenible",
    copy:
      "El aprovechamiento de esti\u00e9rcol y residuos org\u00e1nicos para producir biog\u00e1s reduce m\u00e1s de 40,000 toneladas de CO2 cada a\u00f1o.",
  },
];

const products = [
  {
    title: "L\u00ednea Gold",
    subtitle: "Cortes premium para ocasiones especiales",
    image: "/lineagold.jpg",
    alt: "Cortes empacados de la L\u00ednea Gold de Carnes San Mart\u00edn",
    featured: true,
  },
  {
    title: "L\u00ednea pr\u00e1ctica",
    subtitle: "Soluciones f\u00e1ciles para cocinar todos los d\u00edas",
    image: "/lineapractica.jpg",
    alt: "Carne para fajitas y bistec de la l\u00ednea pr\u00e1ctica",
  },
  {
    title: "Cortes para parrilla",
    subtitle: "Sabor, presencia y rendimiento en cada preparaci\u00f3n",
    image: "/tomahawkpoder.jpg",
    alt: "Tomahawk de Carnes San Mart\u00edn preparado a la parrilla",
  },
];

const stores = [
  {
    name: "Granada",
    label: "Distribuidora",
    image: "/granada-distribuidora.png",
    imagePosition: "center 48%",
    address: "Oficinas Claro 50 metros este, Granada",
    phone: "+505 8465 7949",
    phoneDigits: "50584657949",
    map: "https://www.google.com/maps/search/?api=1&query=Carnes+San+Martin+Granada+Nicaragua",
  },
  {
    name: "Masaya",
    label: "Sucursal Gold",
    image: "/fachadamasaya.webp",
    imagePosition: "center",
    address: "Del Parque Central, 2 cuadras al sur, Masaya",
    phone: "+505 8980 5608",
    phoneDigits: "50589805608",
    map: "https://www.google.com/maps/search/?api=1&query=Distribuidora+Carnes+San+Martin+Masaya",
  },
  {
    name: "Nindiri Express",
    displayName: "Nindir\u00ed Express",
    label: "Tienda Express",
    image: "/nindiri-express.jpeg",
    imagePosition: "center 44%",
    address: "Km 29 Carretera a Masaya, Plaza Portas Nindir\u00ed",
    phone: "+505 5745 7960",
    phoneDigits: "50557457960",
    map: "https://www.google.com/maps/search/?api=1&query=Carnes+San+Martin+Nindiri+Express+Plaza+Portas",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Carnes San Mart\u00edn",
  url: "https://sanmartinsr.com",
  logo: "https://sanmartinsr.com/logocsm.svg",
  foundingDate: "1975",
  sameAs: [OFFICIAL_SITE, FACEBOOK_PAGE],
  department: stores.map((store) => ({
    "@type": "Store",
    name: `Carnes San Mart\u00edn ${store.displayName ?? store.name}`,
    image: `https://sanmartinsr.com${store.image}`,
    telephone: store.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address,
      addressCountry: "NI",
    },
  })),
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function BrandLogo({ priority = false }) {
  return (
    <Image
      src="/logocsm.svg"
      alt={"Carnes San Mart\u00edn"}
      width={742}
      height={341}
      className="brand-logo-image"
      priority={priority}
    />
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="announcement">
          <div className="announcement-inner">
            <p>Carne nicarag&uuml;ense desde 1975</p>
            <a href={ONLINE_STORE} target="_blank" rel="noreferrer">
              Comprar en tienda virtual
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="navigation">
          <Link href="#inicio" className="brand-logo" aria-label="Ir al inicio">
            <BrandLogo priority />
          </Link>

          <nav className="desktop-nav" aria-label="Navegacion principal">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="header-shop-link"
            href={ONLINE_STORE}
            target="_blank"
            rel="noreferrer"
          >
            Tienda virtual
            <ArrowIcon />
          </a>

          <details className="mobile-menu">
            <summary>
              <span>Men&uacute;</span>
              <span className="menu-lines" aria-hidden="true">
                <i />
                <i />
              </span>
            </summary>
            <nav aria-label="Navegacion movil">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <a href={ONLINE_STORE} target="_blank" rel="noreferrer">
                Tienda virtual
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-on-dark">Desde 1975 / Nicaragua</p>
              <h1>
                Carne nicarag&uuml;ense.
                <span>Confianza que cruza fronteras.</span>
              </h1>
              <p className="hero-intro">
                De la planta en Nandaime a tu mesa. Cortes frescos y l&iacute;neas
                premium respaldados por una operaci&oacute;n con est&aacute;ndares
                internacionales, trazabilidad y distribuci&oacute;n regional.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-light"
                  href={ONLINE_STORE}
                  target="_blank"
                  rel="noreferrer"
                >
                  Comprar en l&iacute;nea
                  <ArrowIcon />
                </a>
                <Link className="button button-outline" href="#tiendas">
                  Encontrar una tienda
                </Link>
              </div>
            </div>

            <figure className="hero-visual">
              <Image
                src="/nindiri-express.jpeg"
                alt={"Fachada de Carnes San Mart\u00edn Nindir\u00ed Express"}
                fill
                priority
                sizes="(min-width: 900px) 50vw, 100vw"
                className="cover-image"
                style={{ objectPosition: "center 44%" }}
              />
              <figcaption>
                <span>Nindir&iacute; Express</span>
                Km 29 Carretera a Masaya
              </figcaption>
            </figure>
          </div>

          <div className="hero-facts page-width">
            <div>
              <strong>1975</strong>
              <span>Inicio de operaciones</span>
            </div>
            <div>
              <strong>1,500</strong>
              <span>Reses de capacidad diaria instalada</span>
            </div>
            <div>
              <strong>FSSC 22000</strong>
              <span>Certificaci&oacute;n de inocuidad alimentaria</span>
            </div>
          </div>
        </section>

        <section className="section brand-section" id="marca">
          <div className="page-width">
            <div className="section-heading-grid">
              <div>
                <p className="section-number">01 / La marca</p>
                <h2>Una cadena que cuida cada etapa.</h2>
              </div>
              <div className="section-copy">
                <p className="lead">
                  Industrial Comercial San Martin S.A. procesa y comercializa
                  carne bovina y sus derivados desde 1975. Su planta principal
                  est&aacute; ubicada en Nandaime, Nicaragua.
                </p>
                <p>
                  Desde nuestras tiendas en Granada, Masaya y Nindir&iacute; acercamos
                  esa experiencia productiva al consumidor: cortes para el d&iacute;a
                  a d&iacute;a, opciones premium y atenci&oacute;n directa en cada ciudad.
                </p>
                <a
                  className="text-link"
                  href={OFFICIAL_SITE}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conocer la operaci&oacute;n corporativa
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="brand-proof" aria-label="Fortalezas de la marca">
              <div>
                <span className="proof-index">A</span>
                <h3>Liderazgo industrial</h3>
                <p>Capacidad, experiencia y procesos orientados a la calidad.</p>
              </div>
              <div>
                <span className="proof-index">B</span>
                <h3>Distribuci&oacute;n regional</h3>
                <p>Red propia de distribuci&oacute;n con presencia en Centroam&eacute;rica.</p>
              </div>
              <div>
                <span className="proof-index">C</span>
                <h3>Alcance internacional</h3>
                <p>Productos certificados para mercados de varios continentes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section quality-section" id="calidad">
          <div className="page-width quality-layout">
            <div className="quality-intro">
              <p className="section-number">02 / Calidad</p>
              <h2>Calidad que se puede respaldar.</h2>
              <p>
                La confianza no depende de una promesa. Se construye con
                controles, trazabilidad, bienestar animal y una operaci&oacute;n que
                aprovecha mejor sus recursos.
              </p>
              <div className="energy-stat">
                <strong>90%</strong>
                <span>
                  Hasta el 90% de la demanda energ&eacute;tica de la planta se genera
                  con biog&aacute;s.
                </span>
              </div>
            </div>

            <div className="quality-list">
              {qualityPoints.map((point) => (
                <article key={point.number}>
                  <span>{point.number}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="export-section" aria-labelledby="export-title">
          <div className="page-width export-layout">
            <div>
              <p className="eyebrow eyebrow-on-dark">De Nicaragua al mundo</p>
              <h2 id="export-title">
                Producci&oacute;n nacional con alcance internacional.
              </h2>
            </div>
            <div className="export-copy">
              <p>
                San Martin esta certificado para exportar a mercados de
                Am&eacute;rica, Europa, Asia y &Aacute;frica. Esa presencia internacional se
                apoya en est&aacute;ndares de inocuidad, una red regional de
                distribuci&oacute;n y un modelo de producci&oacute;n sostenible.
              </p>
              <p className="market-label">Mercados certificados</p>
              <div className="market-list" aria-label="Regiones de exportacion">
                <span>Estados Unidos y M&eacute;xico</span>
                <span>Centroam&eacute;rica</span>
                <span>Rep. Dominicana y Puerto Rico</span>
                <span>Espa&ntilde;a e Italia</span>
                <span>Jap&oacute;n y Taiw&aacute;n</span>
                <span>Tailandia</span>
                <span>&Aacute;frica Occidental</span>
                <span>Otros mercados globales</span>
              </div>
              <a
                className="export-link"
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noreferrer"
              >
                Conocer m&aacute;s sobre calidad y exportaciones
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="section products-section" id="productos">
          <div className="page-width">
            <div className="products-heading">
              <div>
                <p className="section-number">03 / Productos</p>
                <h2>Un corte para cada momento.</h2>
              </div>
              <p>
                Desde soluciones pr&aacute;cticas para la cocina diaria hasta cortes
                Gold para parrilla y ocasiones especiales. Compra en tienda o
                revisa la disponibilidad en l&iacute;nea.
              </p>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <figure
                  key={product.title}
                  className={product.featured ? "product-featured" : undefined}
                >
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes={
                        product.featured
                          ? "(min-width: 900px) 58vw, 100vw"
                          : "(min-width: 900px) 38vw, 100vw"
                      }
                      className="cover-image"
                    />
                  </div>
                  <figcaption>
                    <div>
                      <h3>{product.title}</h3>
                      <p>{product.subtitle}</p>
                    </div>
                    <span aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="shop-banner" aria-labelledby="shop-title">
          <div className="page-width shop-banner-inner">
            <div>
              <p>Compra desde donde est&eacute;s</p>
              <h2 id="shop-title">La tienda San Mart&iacute;n ahora tambi&eacute;n est&aacute; en l&iacute;nea.</h2>
            </div>
            <a href={ONLINE_STORE} target="_blank" rel="noreferrer">
              Ir a la tienda virtual
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="section video-section" aria-labelledby="video-title">
          <div className="page-width video-layout">
            <div className="video-frame">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                aria-label="Video de la tienda Carnes San Martin Granada"
              >
                <source src="/ReelGranada.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="video-copy">
              <p className="section-number">04 / En tienda</p>
              <h2 id="video-title">As&iacute; se vive San Mart&iacute;n.</h2>
              <p className="lead">
                Entr&aacute;, eleg&iacute; tu corte y llev&aacute;lo listo para cocinar.
              </p>
              <p>
                En Granada te atendemos con producto fresco, opciones para cada
                presupuesto y recomendaciones para tu pr&oacute;xima comida.
              </p>
              <Link className="text-link" href="#tiendas">
                Visitar una sucursal
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="section stores-section" id="tiendas">
          <div className="page-width">
            <div className="stores-heading">
              <p className="section-number">05 / Tiendas</p>
              <h2>Encontr&aacute; tu San Mart&iacute;n m&aacute;s cercano.</h2>
              <p>
                Consult&aacute; la ubicaci&oacute;n en Google, llam&aacute; a la tienda o escrib&iacute;
                directamente por WhatsApp.
              </p>
            </div>

            <div className="stores-list">
              {stores.map((store, index) => (
                <article
                  key={store.name}
                  className={`store-row ${index % 2 === 1 ? "store-reversed" : ""}`}
                >
                  <div className="store-photo">
                    <Image
                      src={store.image}
                      alt={`Fachada de Carnes San Mart\u00edn ${
                        store.displayName ?? store.name
                      }`}
                      fill
                      sizes="(min-width: 900px) 48vw, 100vw"
                      className="cover-image"
                      style={{ objectPosition: store.imagePosition }}
                    />
                  </div>

                  <div className="store-info">
                    <p className="store-label">{store.label}</p>
                    <h3>{store.displayName ?? store.name}</h3>
                    <dl>
                      <div>
                        <dt>Direcci&oacute;n</dt>
                        <dd>{store.address}</dd>
                      </div>
                      <div>
                        <dt>Tel&eacute;fono</dt>
                        <dd>
                          <a href={`tel:+${store.phoneDigits}`}>{store.phone}</a>
                        </dd>
                      </div>
                    </dl>
                    <div className="store-actions">
                      <a
                        className="button button-blue"
                        href={store.map}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Abrir en Google
                        <ArrowIcon />
                      </a>
                      <a
                        className="inline-action"
                        href={`https://wa.me/${store.phoneDigits}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp
                      </a>
                      <a className="inline-action" href={`tel:+${store.phoneDigits}`}>
                        Llamar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="page-width contact-layout">
            <div>
              <p>Granada / Masaya / Nindir&iacute;</p>
              <h2 id="contact-title">Buena carne. Cerca de vos.</h2>
            </div>
            <div className="contact-actions">
              <a href={ONLINE_STORE} target="_blank" rel="noreferrer">
                Comprar en l&iacute;nea
                <ArrowIcon />
              </a>
              <a href="mailto:carnessanmartingranada@gmail.com">
                carnessanmartingranada@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div>
            <div className="footer-logo">
              <BrandLogo />
            </div>
            <p>Tiendas y distribuci&oacute;n de carne en Nicaragua.</p>
          </div>

          <div className="footer-links">
            <p>Navegaci&oacute;n</p>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-links">
            <p>Enlaces</p>
            <a href={ONLINE_STORE} target="_blank" rel="noreferrer">
              Tienda virtual
            </a>
            <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
              Sitio corporativo
            </a>
            <a href={FACEBOOK_PAGE} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>

          <div className="footer-contact">
            <p>Contacto directo</p>
            {stores.map((store) => (
              <a key={store.name} href={`tel:+${store.phoneDigits}`}>
                {store.displayName ?? store.name}: {store.phone}
              </a>
            ))}
          </div>
        </div>

        <div className="page-width footer-bottom">
          <p>Copyright {currentYear} Carnes San Mart&iacute;n.</p>
          <p>Nicaragua</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
