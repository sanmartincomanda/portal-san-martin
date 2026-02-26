
"use client";

export default function HubPage() {
  const apps = [
    {
      id: 'delivery',
      nombre: 'Pedidos Delivery',
      desc: 'Gestión de pedidos para delivery y ruta',
      icon: '📦',
      color: 'from-blue-600 to-blue-800',
      url: 'https://verdant-youtiao-5cd9d3.netlify.app/',
      activo: true
    },
    {
      id: 'internos',
      nombre: 'Pedidos Internos',
      desc: 'Traspasos y pedidos entre sucursales',
      icon: '🔄',
      color: 'from-purple-600 to-purple-800',
      url: 'https://pedidosinternossr.netlify.app/',
      activo: true
    },
    {
      id: 'finanzas',
      nombre: 'Finanzas',
      desc: 'Caja, reportes y administración',
      icon: '💰',
      color: 'from-green-600 to-green-800',
      url: 'https://sistemacontablesanmartin.netlify.app/',
      activo: true
    },
    {
      id: 'bodega',
      nombre: 'Bodega',
      desc: 'Inventario y control de stock',
      icon: '📋',
      color: 'from-orange-600 to-orange-800',
      url: '#',
      activo: false,
      proximamente: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#004c5c] flex items-center justify-center p-6">
      <style jsx global>{`
        @font-face {
          font-family: 'FatFrank';
          src: url('/fonts/FatFrank-Heavy.woff2') format('woff2');
          font-weight: 900;
        }
        @font-face {
          font-family: 'Handelson';
          src: url('/fonts/HandelsonThree.woff2') format('woff2');
        }
        .font-fatfrank { font-family: 'FatFrank', 'Arial Black', sans-serif; font-weight: 900; }
        .font-handelson { font-family: 'Handelson', 'Brush Script MT', cursive; }
      `}</style>

      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-[#fef1e7] rounded-2xl mx-auto mb-6 flex items-center justify-center p-3 shadow-xl">
            <span className="text-4xl">🔐</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-fatfrank text-[#fef1e7] mb-2">
            Portal <span className="text-[#fac85a] font-handelson text-6xl">Interno</span>
          </h1>
          <p className="text-[#fef1e7]/60 text-lg">Selecciona la aplicación que necesitas usar</p>
        </div>

        {/* Grid de Apps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.activo ? app.url : undefined}
              onClick={(e) => !app.activo && e.preventDefault()}
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${app.color} ${
                !app.activo && 'opacity-60 cursor-not-allowed grayscale'
              } hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
            >
              {app.proximamente && (
                <span className="absolute top-4 right-4 bg-black/40 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur">
                  PRÓXIMAMENTE
                </span>
              )}
              
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              
              <h2 className="text-xl font-fatfrank text-white mb-2">
                {app.nombre}
              </h2>
              
              <p className="text-white/80 text-sm leading-relaxed">
                {app.desc}
              </p>

              {app.activo && (
                <div className="mt-6 flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Abrir aplicación →
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[#fef1e7]/60 hover:text-[#fac85a] transition"
          >
            ← Volver al sitio público
          </a>
        </div>

        {/* Info de sesión */}
        <div className="mt-8 p-4 bg-[#003d4a] rounded-xl border border-[#fef1e7]/10 text-center">
          <p className="text-[#fef1e7]/40 text-sm">
            💡 Tip: Podés agregar estas apps a tu pantalla de inicio para acceso rápido
          </p>
        </div>
      </div>
    </div>
  );
}