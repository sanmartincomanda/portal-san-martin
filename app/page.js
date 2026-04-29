import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Portal", href: "#portal" },
];

const promiseCards = [
  {
    number: "01",
    title: "Vitrina con pulso",
    copy:
      "Fotos grandes, ritmo editorial y una marca que se siente premium antes del primer click.",
  },
  {
    number: "02",
    title: "Compra mas simple",
    copy:
      "La tienda, el WhatsApp y el retiro rapido conviven sin ruido ni pasos innecesarios.",
  },
  {
    number: "03",
    title: "Operacion local real",
    copy:
      "Granada y Masaya quedan al frente, con servicio diario y lenguaje mas cercano al cliente.",
  },
];

const stores = [
  {
    name: "Granada Gold",
    badge: "Flagship",
    description: "La sucursal que pone la barra visual y la experiencia de servicio.",
    image: "/granadagold.webp",
    address: "De la Calzada, 1/2 cuadra al Este, Granada",
    phone: "8980-5608",
    hours: "Lunes a Domingo / 8:00 AM - 8:00 PM",
    map: "https://maps.google.com/?q=Carnes+San+Martin+Granada",
    whatsapp: "https://wa.me/50589805608",
  },
  {
    name: "Masaya Gold",
    badge: "Servicio diario",
    description: "Atencion directa, vitrina cuidada y la misma calidad premium en Masaya.",
    image: "/fachadamasaya.webp",
    address: "Del Parque Central, 2 cuadras al Sur, Masaya",
    phone: "8980-5608",
    hours: "Lunes a Domingo / 8:00 AM - 8:00 PM",
    map: "https://maps.google.com/?q=Carnes+San+Martin+Masaya",
    whatsapp: "https://wa.me/50589805608",
  },
];

const upcomingStores = [
  { name: "Express Inmaculada", place: "Granada Inmaculada" },
  { name: "Express Nindiri", place: "Nindiri, Masaya" },
];

const internalApps = [
  {
    name: "Pedidos delivery",
    desc: "Rutas, reparto y seguimiento operativo.",
  },
  {
    name: "Pedidos internos",
    desc: "Traspasos y movimiento entre sucursales.",
  },
  {
    name: "Finanzas",
    desc: "Caja, reportes y lectura rapida del negocio.",
  },
  {
    name: "Bodega",
    desc: "Inventario y control de stock interno.",
  },
];

export const metadata = {
  title: "Carnes San Martin",
  description:
    "Distribuidores oficiales de Carnes San Martin en Granada y Masaya, con tienda virtual, sucursales Gold y portal interno.",
};

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <main className="page-shell overflow-x-hidden text-[var(--foreground)]">
      <div className="orb pointer-events-none absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-[var(--brand)]/18 blur-3xl" />
      <div className="orb pointer-events-none absolute right-[-5rem] top-[38rem] h-80 w-80 rounded-full bg-[var(--ember)]/16 blur-3xl [animation-delay:-3s]" />

      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(5,10,11,0.74)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:px-6">
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-[var(--paper)] p-2 shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
              <Image
                src="/logocsm.svg"
                alt="Carnes San Martin"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[var(--paper-soft)]">
                Distribuidores oficiales
              </p>
              <p className="font-display text-2xl leading-none text-[var(--paper)]">
                SR
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.28em] text-[var(--paper-soft)] transition hover:text-[var(--paper)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/hub"
              className="rounded-full border border-[var(--line-strong)] px-5 py-2 text-sm uppercase tracking-[0.24em] text-[var(--paper)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
            >
              Portal interno
            </Link>
            <a
              href="https://tienda.distribuidoressr.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
            >
              Ir a la tienda
            </a>
          </div>

          <details className="relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/5 text-[var(--paper)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]">
              <span className="sr-only">Abrir menu</span>
              <span className="flex flex-col gap-1">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
            </summary>
            <div className="panel absolute right-0 top-14 w-72 rounded-[1.75rem] p-5">
              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-white/5 px-4 py-3 text-sm uppercase tracking-[0.24em] text-[var(--paper-soft)] transition hover:border-[var(--line-strong)] hover:text-[var(--paper)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/hub"
                  className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-sm uppercase tracking-[0.24em] text-[var(--paper)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
                >
                  Portal interno
                </Link>
                <a
                  href="https://tienda.distribuidoressr.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[var(--brand)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
                >
                  Ir a la tienda
                </a>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <section id="inicio" className="relative px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <p className="section-kicker">Granada + Masaya / tienda virtual / entrega local</p>
            <h1 className="gold-line mt-5 max-w-4xl font-display text-[clamp(4.2rem,12vw,9.4rem)] leading-[0.84] text-[var(--paper)]">
              Cortes con
              <span className="block text-[var(--brand-strong)]">caracter</span>
              <span className="mt-3 block font-accent text-[clamp(2.4rem,5vw,4.8rem)] normal-case leading-[0.95] tracking-normal text-[var(--paper-soft)]">
                de vitrina premium a pedido rapido
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-[var(--paper-soft)] sm:text-xl">
              Distribuidores SR conecta la calidad de Carnes San Martin con una
              experiencia mas refinada: linea Gold, soluciones practicas y
              compra directa desde la web o por WhatsApp.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://tienda.distribuidoressr.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
              >
                Entrar a la tienda
              </a>
              <Link
                href="#sucursales"
                className="rounded-full border border-[var(--line-strong)] px-7 py-4 text-sm uppercase tracking-[0.24em] text-[var(--paper)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
              >
                Ver sucursales
              </Link>
              <a
                href="https://wa.me/50589805608"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/8 px-7 py-4 text-sm uppercase tracking-[0.24em] text-[var(--paper-soft)] transition hover:border-[var(--line-strong)] hover:text-[var(--paper)]"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="panel-soft rounded-[1.5rem] p-5">
                <p className="font-display text-4xl text-[var(--brand-strong)]">4</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--paper-soft)]">
                  Puntos de venta
                </p>
              </div>
              <div className="panel-soft rounded-[1.5rem] p-5">
                <p className="font-display text-4xl text-[var(--brand-strong)]">
                  Gold
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--paper-soft)]">
                  Linea premium + practica
                </p>
              </div>
              <div className="panel-soft rounded-[1.5rem] p-5">
                <p className="font-display text-4xl text-[var(--brand-strong)]">
                  Diario
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--paper-soft)]">
                  Atencion de 8AM a 8PM
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <article className="panel editorial-card relative overflow-hidden rounded-[2.4rem] p-3">
              <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] md:min-h-[36rem]">
                <Image
                  src="/tomahawkpoder.jpg"
                  alt="Tomahawk y cortes premium"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,9,0.18),rgba(4,8,9,0.26)_32%,rgba(4,8,9,0.92))]" />
                <div className="absolute left-6 top-6 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.35em] text-[var(--paper-soft)] backdrop-blur">
                  Curado para parrilla
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div className="max-w-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                      Edicion Gold
                    </p>
                    <h2 className="mt-3 font-display text-5xl leading-none text-[var(--paper)] sm:text-6xl">
                      Tomahawk
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                      Marmoleo, grosor y una presencia capaz de abrir el
                      apetito antes de pasar al carrito.
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-black/25 px-5 py-4 backdrop-blur">
                    <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--paper-soft)]">
                      Disponible
                    </p>
                    <p className="mt-2 font-display text-3xl text-[var(--brand-strong)]">
                      Granada / Masaya
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="panel editorial-card absolute -bottom-10 -left-4 hidden w-56 rounded-[1.8rem] p-3 lg:block">
              <div className="relative aspect-[10/16] overflow-hidden rounded-[1.4rem]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/ReelGranada.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,9,0.08),rgba(4,8,9,0.78))]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-[var(--brand-strong)]">
                    Granada Gold
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--paper)]">
                    Una vitrina que se siente fisica incluso en pantalla.
                  </p>
                </div>
              </div>
            </article>

            <article className="panel absolute -right-4 top-10 hidden w-60 rounded-[1.8rem] p-5 xl:block">
              <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[var(--paper-soft)]">
                Pulso diario
              </p>
              <p className="mt-4 font-display text-4xl leading-none text-[var(--paper)]">
                Abierto todos
                <span className="block text-[var(--brand-strong)]">los dias</span>
              </p>
              <div className="section-divider mt-5" />
              <p className="mt-5 text-sm leading-7 text-[var(--paper-soft)]">
                Compra en linea, recoge en tienda o termina tu pedido por
                WhatsApp sin perder el tono premium de la marca.
              </p>
            </article>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
              <article className="panel-soft rounded-[1.5rem] p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--brand-strong)]">
                  Granada Gold
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--paper-soft)]">
                  Una vitrina con movimiento real, ahora integrada a una
                  experiencia mas elegante.
                </p>
              </article>
              <article className="panel-soft rounded-[1.5rem] p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--brand-strong)]">
                  Pulso diario
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--paper-soft)]">
                  Abierto todos los dias de 8:00 AM a 8:00 PM con atencion en
                  Granada y Masaya.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-6 px-6 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {promiseCards.map((card) => (
            <article
              key={card.number}
              className="panel-soft editorial-card rounded-[1.75rem] p-6"
            >
              <p className="font-display text-5xl text-[var(--brand-strong)]">
                {card.number}
              </p>
              <h2 className="mt-6 font-display text-3xl leading-none text-[var(--paper)]">
                {card.title}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--paper-soft)]">
                {card.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="colecciones" className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">Colecciones con mejor ritmo visual</p>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(3.2rem,8vw,6rem)] leading-[0.88] text-[var(--paper)]">
                La tienda entra
                <span className="block text-[var(--brand-strong)]">por los ojos</span>
                <span className="mt-3 block font-accent text-[clamp(2rem,4.2vw,3.7rem)] normal-case leading-[0.95] tracking-normal text-[var(--paper-soft)]">
                  y despues convierte mas facil
                </span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
              En lugar de una lista plana, la pagina ahora pone en escena cada
              linea con su propio tempo: premium para antojar, practica para
              resolver y cortes de parrilla para empujar compra impulsiva.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:grid-rows-[1fr_auto]">
            <article className="panel editorial-card relative overflow-hidden rounded-[2.2rem] p-3 lg:col-span-7 lg:row-span-2">
              <div className="relative h-full min-h-[28rem] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/lineagold.jpg"
                  alt="Linea Gold"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,8,9,0.14),rgba(4,8,9,0.28)_35%,rgba(4,8,9,0.94))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                    Gold line
                  </p>
                  <h3 className="mt-4 max-w-lg font-display text-5xl leading-none text-[var(--paper)] sm:text-6xl">
                    La vitrina para mesas que quieren presencia
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--paper-soft)]">
                    Cortes premium, mejor lectura de marca y una composicion que
                    le da escenario a la categoria mas aspiracional del negocio.
                  </p>
                  <a
                    href="https://tienda.distribuidoressr.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex rounded-full border border-white/12 bg-black/20 px-5 py-3 text-sm uppercase tracking-[0.24em] text-[var(--paper)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
                  >
                    Explorar Gold
                  </a>
                </div>
              </div>
            </article>

            <article className="panel editorial-card relative overflow-hidden rounded-[2rem] p-3 lg:col-span-5">
              <div className="relative min-h-[20rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/lineapractica.jpg"
                  alt="Linea practica"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,9,0.08),rgba(4,8,9,0.84))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                    Practica line
                  </p>
                  <h3 className="mt-3 font-display text-4xl leading-none text-[var(--paper)]">
                    Resuelve rapido sin bajar la calidad
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[var(--paper-soft)]">
                    Empaque listo, lectura simple y una narrativa pensada para
                    quien compra con hambre, prisa o necesidad puntual.
                  </p>
                </div>
              </div>
            </article>

            <article className="panel editorial-card relative overflow-hidden rounded-[2rem] p-3 lg:col-span-3">
              <div className="relative min-h-[18rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/puyaso.jpg"
                  alt="Puyaso"
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,9,0.04),rgba(4,8,9,0.92))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                    Parrilla
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-none text-[var(--paper)]">
                    Puyaso con mas apetito visual
                  </h3>
                </div>
              </div>
            </article>

            <article className="panel-soft editorial-card rounded-[2rem] p-6 lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                Ritmo comercial
              </p>
              <h3 className="mt-4 font-display text-4xl leading-none text-[var(--paper)]">
                Menos relleno,
                <span className="block text-[var(--brand-strong)]">mas venta</span>
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--paper-soft)]">
                <li>Tienda virtual visible desde el primer scroll.</li>
                <li>Sucursales mas legibles y mejor jerarquia.</li>
                <li>Portal interno presente, pero sin competir.</li>
              </ul>
              <a
                href="https://tienda.distribuidoressr.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
              >
                Comprar ahora
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="sucursales" className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="section-kicker">Donde se concreta el pedido</p>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(3.1rem,7vw,5.8rem)] leading-[0.88] text-[var(--paper)]">
                Sucursales con
                <span className="block text-[var(--brand-strong)]">presencia real</span>
                <span className="mt-3 block font-accent text-[clamp(2rem,4vw,3.5rem)] normal-case leading-[0.95] tracking-normal text-[var(--paper-soft)]">
                  mas claras, mas utiles y mejor contadas
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
              Las tiendas Gold ahora se leen como destinos, no como simples
              tarjetas repetidas. La informacion operativa esta mas ordenada y
              las acciones de mapa o WhatsApp quedan donde el usuario las espera.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {stores.map((store) => (
              <article
                key={store.name}
                className="group panel editorial-card overflow-hidden rounded-[2.2rem] p-3"
              >
                <div className="relative min-h-[19rem] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,9,0.06),rgba(4,8,9,0.78))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.35em] text-[var(--paper-soft)] backdrop-blur">
                    {store.badge}
                  </div>
                </div>

                <div className="grid gap-8 px-2 pb-2 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <h3 className="font-display text-4xl leading-none text-[var(--paper)] sm:text-5xl">
                      {store.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--paper-soft)]">
                      {store.description}
                    </p>

                    <dl className="mt-8 space-y-4">
                      <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                        <dt className="text-[0.68rem] uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                          Direccion
                        </dt>
                        <dd className="max-w-sm text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                          {store.address}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                        <dt className="text-[0.68rem] uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                          Contacto
                        </dt>
                        <dd className="text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                          {store.phone}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-2 border-t border-white/8 pt-4 sm:flex-row sm:justify-between">
                        <dt className="text-[0.68rem] uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                          Horario
                        </dt>
                        <dd className="text-sm leading-7 text-[var(--paper-soft)] sm:text-right">
                          {store.hours}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:flex-col sm:items-stretch">
                    <a
                      href={store.map}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[var(--brand)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
                    >
                      Ver mapa
                    </a>
                    <a
                      href={store.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--line-strong)] px-5 py-3 text-center text-sm uppercase tracking-[0.24em] text-[var(--paper)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {upcomingStores.map((store) => (
              <article
                key={store.name}
                className="panel-soft editorial-card rounded-[1.8rem] border border-dashed border-[var(--line-strong)] p-6"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                  Proximamente
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-[var(--paper)]">
                  {store.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                  {store.place}
                </p>
              </article>
            ))}

            <article className="panel-soft editorial-card rounded-[1.8rem] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                Formas de compra
              </p>
              <h3 className="mt-4 font-display text-3xl leading-none text-[var(--paper)]">
                Web, retiro y contacto directo
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--paper-soft)]">
                <li>Tienda virtual para compra inmediata.</li>
                <li>WhatsApp para cerrar pedidos sin friccion.</li>
                <li>Retiro y atencion en sucursales Gold.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="portal" className="px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="panel overflow-hidden rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker">Capa interna, ahora mas ordenada</p>
                <h2 className="mt-5 max-w-lg font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.88] text-[var(--paper)]">
                  Portal interno
                  <span className="block text-[var(--brand-strong)]">sin ruido</span>
                  <span className="mt-3 block font-accent text-[clamp(2rem,3.8vw,3.4rem)] normal-case leading-[0.95] tracking-normal text-[var(--paper-soft)]">
                    visible cuando hace falta, secundario cuando no
                  </span>
                </h2>
                <p className="mt-8 max-w-xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
                  La pagina publica ahora vende mejor y el acceso a operacion
                  interna sigue presente, pero sin robar protagonismo al flujo
                  comercial principal.
                </p>
                <Link
                  href="/hub"
                  className="mt-8 inline-flex rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink)] transition hover:bg-[var(--brand-strong)]"
                >
                  Abrir portal interno
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {internalApps.map((app, index) => (
                  <article
                    key={app.name}
                    className="panel-soft editorial-card rounded-[1.8rem] p-6"
                  >
                    <p className="font-display text-4xl text-[var(--brand-strong)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 font-display text-3xl leading-none text-[var(--paper)]">
                      {app.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                      {app.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-black/10 px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-[var(--paper)] p-2">
                <Image
                  src="/logocsm.svg"
                  alt="Carnes San Martin"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[var(--paper-soft)]">
                  Distribuidores oficiales
                </p>
                <p className="font-display text-3xl leading-none text-[var(--paper)]">
                  Distribuidores SR
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--paper-soft)]">
              Carnes San Martin en Granada y Masaya con una presencia digital
              mas fuerte, mas clara y mas lista para vender.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm uppercase tracking-[0.22em] text-[var(--paper-soft)] sm:flex-row sm:items-center sm:gap-6">
            <Link href="#inicio" className="transition hover:text-[var(--paper)]">
              Inicio
            </Link>
            <Link
              href="#colecciones"
              className="transition hover:text-[var(--paper)]"
            >
              Colecciones
            </Link>
            <Link
              href="#sucursales"
              className="transition hover:text-[var(--paper)]"
            >
              Sucursales
            </Link>
            <a
              href="https://tienda.distribuidoressr.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--paper)]"
            >
              Tienda virtual
            </a>
          </div>

          <div className="text-sm leading-7 text-[var(--paper-soft)]">
            <p>Contacto directo: 8980-5608</p>
            <p>Granada y Masaya, Nicaragua</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em]">
              Copyright {currentYear} Distribuidores SR
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
