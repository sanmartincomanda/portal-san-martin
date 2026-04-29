import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    id: "delivery",
    number: "01",
    title: "Pedidos delivery",
    desc: "Gestion de pedidos para delivery y ruta.",
    href: "https://verdant-youtiao-5cd9d3.netlify.app/",
    note: "Activo",
  },
  {
    id: "internos",
    number: "02",
    title: "Pedidos internos",
    desc: "Traspasos y pedidos entre sucursales.",
    href: "https://pedidosinternossr.netlify.app/",
    note: "Activo",
  },
  {
    id: "finanzas",
    number: "03",
    title: "Finanzas",
    desc: "Caja, reportes y administracion.",
    href: "https://sistemacontablesanmartin.netlify.app/",
    note: "Activo",
  },
  {
    id: "bodega",
    number: "04",
    title: "Bodega",
    desc: "Inventario y control de stock.",
    href: "#",
    note: "Proximamente",
    disabled: true,
  },
];

export const metadata = {
  title: "Portal interno",
  description:
    "Acceso a pedidos, finanzas y operacion interna de Distribuidores SR.",
};

export default function HubPage() {
  return (
    <main className="page-shell min-h-screen overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
      <div className="orb pointer-events-none absolute left-[-4rem] top-10 h-64 w-64 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="orb pointer-events-none absolute right-[-5rem] top-[18rem] h-72 w-72 rounded-full bg-[var(--ember)]/14 blur-3xl [animation-delay:-2s]" />

      <div className="mx-auto max-w-7xl">
        <div className="panel rounded-[2.6rem] p-4 sm:p-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <Link
                href="/"
                className="inline-flex rounded-full border border-[var(--line-strong)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--paper-soft)] transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
              >
                Volver al sitio publico
              </Link>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-[var(--paper)] p-3">
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
                    Operacion SR
                  </p>
                  <p className="font-display text-4xl leading-none text-[var(--paper)]">
                    Portal interno
                  </p>
                </div>
              </div>

              <h1 className="mt-8 max-w-2xl font-display text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.86] text-[var(--paper)]">
                Herramientas
                <span className="block text-[var(--brand-strong)]">claras</span>
                <span className="mt-3 block font-accent text-[clamp(2rem,4vw,3.8rem)] normal-case leading-[0.96] tracking-normal text-[var(--paper-soft)]">
                  menos ruido visual, mas velocidad operativa
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--paper-soft)] sm:text-lg">
                El acceso interno ahora mantiene el mismo lenguaje visual del
                sitio publico, pero con una lectura mas directa para entrar a
                pedidos, finanzas y operacion sin distracciones.
              </p>
            </div>

            <article className="panel-soft w-full max-w-sm rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-strong)]">
                Acceso rapido
              </p>
              <h2 className="mt-4 font-display text-4xl leading-none text-[var(--paper)]">
                Todo en una sola capa
              </h2>
              <div className="section-divider mt-5" />
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--paper-soft)]">
                <li>Pedidos de ruta y delivery.</li>
                <li>Traspasos entre sucursales.</li>
                <li>Lectura de finanzas y caja.</li>
                <li>Inventario cuando bodega este activa.</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {apps.map((app) => {
              const content = (
                <article
                  className={`editorial-card h-full rounded-[2rem] border p-6 ${
                    app.disabled
                      ? "border-white/8 bg-white/[0.03] opacity-65"
                      : "border-[var(--line)] bg-[linear-gradient(180deg,rgba(18,37,40,0.9),rgba(7,16,18,0.86))]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-display text-5xl text-[var(--brand-strong)]">
                      {app.number}
                    </p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.3em] text-[var(--paper-soft)]">
                      {app.note}
                    </span>
                  </div>

                  <h2 className="mt-10 font-display text-3xl leading-none text-[var(--paper)]">
                    {app.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--paper-soft)]">
                    {app.desc}
                  </p>

                  <div className="mt-8 text-xs uppercase tracking-[0.32em] text-[var(--brand-strong)]">
                    {app.disabled ? "En espera" : "Abrir aplicacion"}
                  </div>
                </article>
              );

              if (app.disabled) {
                return <div key={app.id}>{content}</div>;
              }

              return (
                <a
                  key={app.id}
                  href={app.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-sm leading-7 text-[var(--paper-soft)] sm:flex-row sm:items-center sm:justify-between">
            <p>Tip: puedes anclar estas apps para entrar mas rapido cada dia.</p>
            <Link
              href="/"
              className="uppercase tracking-[0.24em] text-[var(--paper)] transition hover:text-[var(--brand-strong)]"
            >
              Regresar al sitio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
