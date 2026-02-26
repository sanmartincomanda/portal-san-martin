// app/hub/page.jsx - Portal de acceso a apps internas

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

      nombre: 'Pedidos Internos',

      desc: 'Traspasos y pedidos entre sucursales',

      icon: '📋',

      color: 'from-orange-600 to-orange-800',

      url: '#',

      activo: false,

      proximamente: true

    }

  ];



  return (

    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">

      <div className="max-w-4xl w-full">

        <div className="text-center mb-12">

          <div className="w-20 h-20 bg-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl">

            🔐

          </div>

          <h1 className="text-4xl font-black text-white mb-2">Portal Interno</h1>

          <p className="text-neutral-400">Selecciona la aplicación que necesitas usar</p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">

          {apps.map((app) => (

            <a

              key={app.id}

              href={app.url}

              className={`relative group rounded-2xl p-8 bg-gradient-to-br ${app.color} ${!app.activo && 'opacity-60 cursor-not-allowed'}`}

            >

              {app.proximamente && (

                <span className="absolute top-4 right-4 bg-black/30 px-3 py-1 rounded-full text-xs font-bold">

                  PRÓXIMAMENTE

                </span>

              )}

              <div className="text-5xl mb-4">{app.icon}</div>

              <h2 className="text-2xl font-bold text-white mb-2">{app.nombre}</h2>

              <p className="text-white/80 text-sm">{app.desc}</p>

             

              {app.activo && (

                <div className="mt-6 flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition">

                  Abrir aplicación →

                </div>

              )}

            </a>

          ))}

        </div>



        <div className="mt-12 text-center">

          <a href="/" className="text-neutral-500 hover:text-white transition">

            ← Volver al sitio público

          </a>

        </div>

      </div>

    </div>

  );

}