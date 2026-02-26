// app/page.jsx (Portal Carnes San Martín)
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-red-900/30 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Tu logo aquí */}
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
              C
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">CARNES SAN MARTÍN</span>
              <span className="block text-xs text-red-400 tracking-widest">DESDE 2012</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-sm font-medium hover:text-red-400 transition">Inicio</Link>
            <Link href="#sucursales" className="text-sm font-medium hover:text-red-400 transition">Sucursales</Link>
            <Link href="https://tienda.carnessanmartin.com" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-bold transition">
              Tienda Virtual →
            </Link>
            <Link href="https://hub.carnessanmartin.com" className="px-5 py-2.5 border border-red-600 hover:bg-red-600/10 rounded-lg text-sm font-bold transition">
              Portal Interno
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Estilo Carnicería Tender */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        {/* Background image con overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-carne.jpg" // Tu foto de carne premium aquí
            alt="Carnes San Martín"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-red-600/20 border border-red-600/40 rounded-full text-red-400 text-sm font-semibold mb-6">
              🥩 Calidad Premium Nicaragüense
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              SABOR QUE UNE,<br />
              <span className="text-red-600">CALIDAD QUE DESTACA</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-lg leading-relaxed">
              Más de 12 años llevando los mejores cortes de carne a las familias de Granada y Masaya. 
              Ahora con delivery express y tienda online.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="https://tienda.carnessanmartin.com" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition flex items-center gap-2">
                🛒 Ir a Tienda Virtual
              </Link>
              <Link href="#sucursales" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold text-lg transition">
                📍 Ver Sucursales
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-black text-red-500">12+</div>
                <div className="text-sm text-neutral-400">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500">4</div>
                <div className="text-sm text-neutral-400">Sucursales activas</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500">50K+</div>
                <div className="text-sm text-neutral-400">Clientes satisfechos</div>
              </div>
            </div>
          </div>

          {/* Tarjeta de producto destacado */}
          <div className="hidden md:block">
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-3xl border border-neutral-700 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                MÁS VENDIDO
              </div>
              <div className="aspect-square bg-neutral-800 rounded-2xl mb-6 flex items-center justify-center text-6xl">
                🥩
              </div>
              <h3 className="text-2xl font-bold mb-2">Lomo de Res Premium</h3>
              <p className="text-neutral-400 mb-4">Corte fino, madurado 21 días. Perfecto para parrilla.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-red-500">C$ 280<span className="text-lg text-neutral-400">/lb</span></span>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-bold transition">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sucursales Section */}
      <section id="sucursales" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">NUESTRAS <span className="text-red-600">SUCURSALES</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Visítanos en Granada o Masaya. También contamos con servicio delivery en todas nuestras zonas de cobertura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                nombre: "Granada Gold",
                tipo: "Tienda Premium",
                direccion: "Calle La Calzada, Granada",
                telefono: "8980-5608",
                horario: "Lun-Dom: 8am - 8pm",
                estado: "Abierto",
                color: "gold"
              },
              {
                nombre: "Masaya Gold",
                tipo: "Tienda Premium", 
                direccion: "Del Parque Central 2c al sur, Masaya",
                telefono: "8980-5608",
                horario: "Lun-Dom: 8am - 8pm",
                estado: "Abierto",
                color: "gold"
              },
              {
                nombre: "Express Inmaculada",
                tipo: "Próximamente",
                direccion: "Granada Inmaculada",
                telefono: "-",
                horario: "Próximamente",
                estado: "Próximamente",
                color: "neutral"
              },
              {
                nombre: "Express Nindirí",
                tipo: "Próximamente",
                direccion: "Nindirí, Masaya",
                telefono: "-",
                horario: "Próximamente", 
                estado: "Próximamente",
                color: "neutral"
              }
            ].map((suc, idx) => (
              <div key={idx} className={`bg-neutral-900 rounded-2xl p-6 border ${suc.color === 'gold' ? 'border-yellow-600/30' : 'border-neutral-800'} hover:border-red-600/50 transition group`}>
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl ${suc.color === 'gold' ? 'bg-yellow-600/20' : 'bg-neutral-800'}`}>
                  {suc.color === 'gold' ? '🏪' : '🚧'}
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-red-500 transition">{suc.nombre}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${suc.color === 'gold' ? 'bg-yellow-600/20 text-yellow-500' : 'bg-neutral-800 text-neutral-400'}`}>
                  {suc.tipo}
                </span>
                <div className="mt-4 space-y-2 text-sm text-neutral-400">
                  <p>📍 {suc.direccion}</p>
                  <p>📞 {suc.telefono}</p>
                  <p>🕐 {suc.horario}</p>
                </div>
                {suc.estado === "Abierto" && (
                  <button className="w-full mt-6 py-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-600 rounded-xl font-bold transition">
                    Ver en Mapa
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Interno CTA */}
      <section className="py-24 bg-gradient-to-br from-red-900/20 to-neutral-900 border-y border-red-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">¿ERES COLABORADOR?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Accede al portal interno para gestionar pedidos, finanzas, inventario y más.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { icon: '📦', nombre: 'Delivery', desc: 'Gestión de pedidos' },
              { icon: '💰', nombre: 'Finanzas', desc: 'Reportes y caja' },
              { icon: '📋', nombre: 'Bodega', desc: 'Inventario interno' }
            ].map((app, idx) => (
              <div key={idx} className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700">
                <div className="text-3xl mb-2">{app.icon}</div>
                <div className="font-bold">{app.nombre}</div>
                <div className="text-xs text-neutral-400">{app.desc}</div>
              </div>
            ))}
          </div>

          <Link href="https://hub.carnessanmartin.com" className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 rounded-xl font-bold text-lg transition">
            🔐 Acceder al Portal Interno
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
                C
              </div>
              <span className="font-bold text-lg">CARNES SAN MARTÍN</span>
            </div>
            <div className="text-neutral-500 text-sm">
              © 2024 Carnes San Martín. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">📘</a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">📸</a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">💬</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}