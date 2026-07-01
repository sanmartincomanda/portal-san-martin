import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Distribucion", href: "#distribucion" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#contacto" },
];

const distributionPillars = [
  {
    eyebrow: "Cobertura local",
    title: "Distribucion para clientes que compran facil",
    copy:
      "La web ahora explica mejor donde estamos, como atendemos y por que cada sucursal funciona como punto real de compra y retiro.",
  },
  {
    eyebrow: "Atencion directa",
    title: "WhatsApp, llamada y mapa al frente",
    copy:
      "Cada perfil de tienda prioriza acciones rapidas para que el cliente pueda escribir, llamar o ubicarse sin perder tiempo.",
  },
  {
    eyebrow: "Marca visible",
    title: "Una presencia mas clara para San Martin",
    copy:
      "Tomamos el azul del rotulo de Nindiri como nueva base visual para que todo el sitio se sienta mas alineado con la marca actual.",
  },
];

const offerCards = [
  {
    title: "Cortes premium",
    copy:
      "Presentacion limpia y mejor protagonismo para productos que venden por presencia y confianza.",
    image: "/lineagold.jpg",
  },
  {
    title: "Compra practica",
    copy:
      "Una lectura simple para clientes que necesitan resolver rapido desde sucursal o por contacto directo.",
    image: "/lineapractica.jpg",
  },
  {
    title: "Parrilla y mesa",
    copy:
      "La distribucion se cuenta mejor cuando el cliente ve producto real, vitrinas y ambientes de compra autenticos.",
    image: "/tomahawkpoder.jpg",
  },
];

const stores = [
  {
    name: "Granada",
    badge: "Sucursal principal",
    description:
      "Distribuidora Granada con atencion directa, recogida en tienda y una comunicacion mas clara para clientes que buscan carne fresca y servicio confiable.",
    image: "/granadagold.webp",
    address: "Oficinas Claro media cuadra al lago, Granada, Nicaragua",
    phone: "2552-7237",
    secondary: "WhatsApp 8465-7949",
    hours: "Abierto ahora / recogida en el establecimiento",
    map: "https://maps.google.com/?q=Oficinas+Claro+media+cuadra+al+lago,+Granada,+Nicaragua",
    whatsapp: "https://wa.me/50584657949",
    email: "carnessanmartingranada@gmail.com",
    site: "https://sanmartin.com.ni",
  },
  {
    name: "Masaya",
    badge: "Sucursal Gold",
    description:
      "Atencion diaria para clientes que quieren resolver compras agiles, retiro local y contacto rapido por WhatsApp.",
    image: "/fachadamasaya.webp",
    address: "Del Parque Central, 2 cuadras al Sur, Masaya",
    phone: "8980-5608",
    hours: "Lunes a Domingo / 8:00 AM - 8:00 PM",
    map: "https://maps.google.com/?q=Carnes+San+Martin+Masaya",
    whatsapp: "https://wa.me/50589805608",
  },
  {
    name: "Nindiri Express",
    badge: "Nueva imagen",
    description:
      "La referencia visual del nuevo sitio: fachada sobre carretera, azul dominante y una presencia de marca que se entiende desde el primer vistazo.",
    image: "/nindiri-express.jpeg",
    imagePosition: "center 44%",
    address: "Km 29 Carretera a Masaya, Plaza Portas Nindiri",
    phone: "8888-8888",
    hours: "Contacto directo y punto de referencia local",
    map: "https://maps.google.com/?q=Km+29+Carretera+a+Masaya,+Plaza+Portas+Nindiri",
    whatsapp: "https://wa.me/50588888888",
    featured: true,
  },
];

const currentYear = new Date().getFullYear();

export const metadata = {
  title: "Carnes San Martin",
  description:
    "Sitio informativo de Carnes San Martin con sucursales, distribucion local y contacto directo en Granada, Masaya y Nindiri.",
};

export default function Home() {
  return (
    <main className="page-shell overflow-x-hidden text-[var(--foreground)]">
      <div className="orb pointer-events-none absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-[var(--brand)]/22 blur-3xl" />
      <div className="orb pointer-events-none absolute right-[-10rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[var(--brand-strong)]/18 blur-3xl [animation-delay:-3s]" />

      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(4,18,32,0.78)] px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6">
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
              <Image
                src="/logocsm.svg"
                alt="Carnes San Martin"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--paper-soft)]">
                Carniceria y distribucion
              </p>
              <p className="font-display text-2xl leading-none text-white">
                San Martin
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.25em] text-[var(--paper-soft)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/50584657949"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line-strong)] px-5 py-2 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
            >
              WhatsApp
            </a>
            <Link
              href="#sucursales"
              className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
            >
              Ver sucursales
            </Link>
          </div>

          <details className="relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/5 text-white transition hover:border-[var(--brand)]">
              <span className="sr-only">Abrir menu</span>
              <span className="flex flex-col gap-1">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
            </summary>
            <div className="panel absolute right-0 top-14 w-72 rounded-[1.8rem] p-5">
              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-white/6 px-4 py-3 text-sm uppercase tracking-[0.24em] text-[var(--paper-soft)] transition hover:border-[var(--line-strong)] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/50584657949"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
                >
                  WhatsApp
                </a>
                <Link
                  href="#sucursales"
                  className="rounded-2xl bg-[var(--brand)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
                >
                  Ver sucursales
                </Link>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <section id="inicio" className="relative px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative z-10">
            <p className="section-kicker">
              Granada / Masaya / Nindiri / carniceria / distribucion oficial
            </p>

            <h1 className="gold-line mt-6 max-w-5xl font-display text-[clamp(4rem,11vw,8.4rem)] leading-[0.86] text-white">
              Sabor que une,
              <span className="block text-[var(--brand-strong)]">
                calidad que destaca
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--paper-soft)] sm:text-xl">
              Reestructuramos la web para que se sienta mas alineada con la
              imagen actual de San Martin: sucursales claras, informacion
              real, distribucion mejor contada y contacto directo al alcance
              del cliente.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#sucursales"
                className="rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
              >
                Ver tiendas
              </Link>
              <Link
                href="#distribucion"
                className="rounded-full border border-[var(--line-strong)] px-7 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
              >
                Ver distribucion
              </Link>
              <a
                href="https://wa.me/50584657949"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-7 py-4 text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)] transition hover:border-[var(--line-strong)] hover:text-white"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <article className="panel-soft rounded-[1.6rem] p-5">
                <p className="font-display text-4xl text-[var(--brand-strong)]">
                  3
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)]">
                  Sucursales activas
                </p>
              </article>
              <article className="panel-soft rounded-[1.6rem] p-5">
                <p className="font-display text-4xl text-[var(--brand-strong)]">
                  Retiro
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)]">
                  Compra y recogida local
                </p>
              </article>
              <article className="panel-soft rounded-[1.6rem] p-5">
                <p className="font-display text-4xl text-[var(--brand-strong)]">
                  Contacto
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)]">
                  WhatsApp, llamada y mapa
                </p>
              </article>
            </div>
          </div>

          <div className="relative">
            <article className="panel editorial-card overflow-hidden rounded-[2.4rem] p-3">
              <div className="relative min-h-[27rem] overflow-hidden rounded-[2rem] md:min-h-[36rem]">
                <Image
                  src="/nindiri-express.jpeg"
                  alt="Sucursal Nindiri Express"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 44%" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,15,27,0.06),rgba(2,15,27,0.28)_36%,rgba(2,15,27,0.92))]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/12 bg-[rgba(7,24,42,0.54)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-[var(--paper-soft)] backdrop-blur">
                  Nueva referencia visual
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-5">
                  <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--brand-strong)]">
                      Nindiri Express
                    </p>
                    <h2 className="mt-3 font-display text-5xl leading-none text-white sm:text-6xl">
                      Azul San Martin
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)] sm:text-base">
                      Fachada real, mejor ubicacion visual y una paleta que
                      toma fuerza desde el rotulo para refrescar toda la web.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/12 bg-[rgba(6,22,38,0.54)] px-5 py-4 backdrop-blur">
                    <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--paper-soft)]">
                      Ubicacion
                    </p>
                    <p className="mt-2 max-w-[13rem] font-display text-3xl leading-none text-[var(--brand-strong)]">
                      Plaza Portas Nindiri
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="panel absolute -bottom-8 -left-3 hidden w-60 rounded-[1.8rem] p-5 lg:block">
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--paper-soft)]">
                Pagina informativa
              </p>
              <p className="mt-4 font-display text-4xl leading-none text-white">
                Menos ruido,
                <span className="block text-[var(--brand-strong)]">
                  mas claridad
                </span>
              </p>
              <div className="section-divider mt-5" />
              <p className="mt-5 text-sm leading-7 text-[var(--paper-soft)]">
                Tiendas, distribucion y contacto alineados a una sola historia
                visual para la marca.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="distribucion" className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="section-kicker">Distribucion de carne mejor explicada</p>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,8vw,6rem)] leading-[0.88] text-white">
                Una web para
                <span className="block text-[var(--brand-strong)]">
                  informar y ubicar
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
              La pagina deja de competir con herramientas internas y se enfoca
              en lo que el cliente necesita ver: donde estan las tiendas, como
              contactar, que tipo de servicio ofrece la distribucion y que
              imagen real respalda la marca.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {distributionPillars.map((item) => (
              <article
                key={item.title}
                className="panel-soft editorial-card rounded-[1.9rem] p-6"
              >
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-5 font-display text-3xl leading-none text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12">
            {offerCards.map((card, index) => (
              <article
                key={card.title}
                className={`panel editorial-card relative overflow-hidden rounded-[2.1rem] p-3 ${
                  index === 0 ? "lg:col-span-5" : "lg:col-span-3"
                }`}
              >
                <div className="relative min-h-[22rem] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,32,0.06),rgba(4,18,32,0.84))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-4xl leading-none text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-[var(--paper-soft)]">
                      {card.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <article className="panel-soft editorial-card rounded-[2.1rem] p-6 lg:col-span-1">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                Enfoque nuevo
              </p>
              <p className="mt-5 font-display text-4xl leading-none text-white">
                Tiendas
                <span className="block text-[var(--brand-strong)]">
                  primero
                </span>
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--paper-soft)]">
                Todo el recorrido apunta a sucursales, confianza visual y
                contacto inmediato.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="panel overflow-hidden rounded-[2.4rem] p-4 sm:p-6">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[2rem]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[16/10] w-full object-cover"
                >
                  <source src="/ReelGranada.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,22,38,0.08),rgba(6,22,38,0.54)_52%,rgba(6,22,38,0.76))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-[var(--paper-soft)] backdrop-blur">
                  Video de sucursal
                </div>
              </div>

              <div className="px-2 py-2 sm:px-4">
                <p className="section-kicker">Movimiento real de la marca</p>
                <h2 className="mt-5 max-w-lg font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.9] text-white">
                  Dejamos el video
                  <span className="block text-[var(--brand-strong)]">
                    como prueba visual
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
                  El reel sigue presente porque ayuda a que la pagina no se vea
                  solo informativa: tambien transmite ambiente, producto y la
                  energia real de una tienda San Martin en operacion.
                </p>

                <ul className="mt-8 space-y-4 text-sm leading-7 text-[var(--paper-soft)]">
                  <li>Refuerza confianza con imagen real y no solo con texto.</li>
                  <li>Apoya la historia visual de la sucursal Granada.</li>
                  <li>Equilibra informacion util con presencia de marca.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sucursales" className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">Tiendas y puntos de referencia</p>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,8vw,5.8rem)] leading-[0.88] text-white">
                Sucursales con
                <span className="block text-[var(--brand-strong)]">
                  informacion util
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
              Cada tarjeta muestra lo esencial para vender mejor: foto,
              ubicacion, contacto y accion inmediata. La sucursal de Nindiri
              toma protagonismo como nueva referencia de imagen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {stores.map((store) => {
              const callHref = `tel:+505${store.phone.replace(/\D/g, "")}`;

              return (
                <article
                  key={store.name}
                  className={`group panel editorial-card overflow-hidden rounded-[2.2rem] p-3 ${
                    store.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.8rem] ${
                      store.featured
                        ? "min-h-[22rem] lg:min-h-[30rem]"
                        : "min-h-[19rem]"
                    }`}
                  >
                    <Image
                      src={store.image}
                      alt={store.name}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: store.imagePosition ?? "center" }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,32,0.05),rgba(4,18,32,0.8))]" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-[rgba(7,24,42,0.52)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-[var(--paper-soft)] backdrop-blur">
                      {store.badge}
                    </div>
                  </div>

                  <div className="grid gap-8 px-2 pb-2 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <h3
                        className={`font-display leading-none text-white ${
                          store.featured
                            ? "text-5xl sm:text-6xl"
                            : "text-4xl sm:text-5xl"
                        }`}
                      >
                        {store.name}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--paper-soft)]">
                        {store.description}
                      </p>

                      <dl className="mt-8 space-y-4">
                        <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                          <dt className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                            Direccion
                          </dt>
                          <dd className="max-w-sm text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                            {store.address}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                          <dt className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                            Telefono
                          </dt>
                          <dd className="text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                            {store.phone}
                          </dd>
                        </div>
                        {store.secondary ? (
                          <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                            <dt className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                              Contacto extra
                            </dt>
                            <dd className="text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                              {store.secondary}
                            </dd>
                          </div>
                        ) : null}
                        {store.hours ? (
                          <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                            <dt className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                              Servicio
                            </dt>
                            <dd className="text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                              {store.hours}
                            </dd>
                          </div>
                        ) : null}
                        {store.email ? (
                          <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                            <dt className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                              Correo
                            </dt>
                            <dd className="text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                              {store.email}
                            </dd>
                          </div>
                        ) : null}
                      </dl>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:flex-col sm:items-stretch">
                      <a
                        href={store.map}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[var(--brand)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
                      >
                        Ver mapa
                      </a>
                      <a
                        href={store.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--line-strong)] px-5 py-3 text-center text-sm uppercase tracking-[0.22em] text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={callHref}
                        className="rounded-full border border-white/10 px-5 py-3 text-center text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)] transition hover:border-[var(--line-strong)] hover:text-white"
                      >
                        Llamar
                      </a>
                      {store.site ? (
                        <a
                          href={store.site}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 px-5 py-3 text-center text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)] transition hover:border-[var(--line-strong)] hover:text-white"
                        >
                          Ver sitio
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="panel overflow-hidden rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="section-kicker">Contacto y presencia comercial</p>
                <h2 className="mt-5 max-w-lg font-display text-[clamp(3rem,6vw,5.2rem)] leading-[0.88] text-white">
                  Una sola pagina
                  <span className="block text-[var(--brand-strong)]">
                    para ubicar y confiar
                  </span>
                </h2>
                <p className="mt-8 max-w-xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
                  Esta nueva estructura deja a San Martin con un sitio mas
                  enfocado: informa mejor, luce mas coherente con la sucursal
                  de Nindiri y convierte cada visita en una opcion concreta de
                  contacto.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/50584657949"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
                  >
                    Escribir ahora
                  </a>
                  <a
                    href="mailto:carnessanmartingranada@gmail.com"
                    className="rounded-full border border-[var(--line-strong)] px-7 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="panel-soft editorial-card rounded-[1.8rem] p-6">
                  <p className="text-xs uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                    Granada
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-none text-white">
                    2552-7237
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                    Oficinas Claro media cuadra al lago. WhatsApp directo:
                    8465-7949.
                  </p>
                </article>

                <article className="panel-soft editorial-card rounded-[1.8rem] p-6">
                  <p className="text-xs uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                    Masaya
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-none text-white">
                    8980-5608
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                    Del Parque Central, 2 cuadras al Sur. Atencion diaria y
                    retiro local.
                  </p>
                </article>

                <article className="panel-soft editorial-card rounded-[1.8rem] p-6 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.34em] text-[var(--brand-strong)]">
                    Nindiri Express
                  </p>
                  <h3 className="mt-4 font-display text-4xl leading-none text-white">
                    8888-8888
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--paper-soft)]">
                    Km 29 Carretera a Masaya, Plaza Portas Nindiri. La nueva
                    referencia visual del sitio y el punto que inspira la
                    actualizacion completa de la marca en web.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[rgba(3,13,24,0.4)] px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src="/logocsm.svg"
                  alt="Carnes San Martin"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--paper-soft)]">
                  Tiendas y distribucion
                </p>
                <p className="font-display text-3xl leading-none text-white">
                  Carnes San Martin
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--paper-soft)]">
              Sitio informativo para sucursales, distribucion de carne y
              contacto directo en Granada, Masaya y Nindiri.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)] sm:flex-row sm:items-center sm:gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-sm leading-7 text-[var(--paper-soft)]">
            <p>Granada: 2552-7237 / WhatsApp 8465-7949</p>
            <p>Masaya: 8980-5608</p>
            <p>Nindiri Express: 8888-8888</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em]">
              Copyright {currentYear} Carnes San Martin
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
