// app/page.jsx - Portal Distribuidores SR
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-red-900/30 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo Carnes San Martín */}
            <div className="relative w-16 h-16">
              <Image
                src="/logocsm.svg" // Descargar de: https://sanmartin.com.ni/wp-content/uploads/2025/02/logo.svg
                alt="Carnes San Martín"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="text-xs text-red-500 font-bold tracking-widest uppercase mb-0.5">Distribuidores Oficiales</div>
              <div className="text-2xl font-black tracking-tight text-white">Distribuidores <span className="text-red-600">SR</span></div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-sm font-medium hover:text-red-500 transition">Inicio</Link>
            <Link href="#sucursales" className="text-sm font-medium hover:text-red-500 transition">Sucursales</Link>
            <Link href="https://tienda.distribuidoressr.com" className="px-5 py-2.5 bg-red-700 hover:bg-red-800 rounded-lg text-sm font-bold transition">
              Tienda Virtual →
            </Link>
            <Link 
              href="https://sanmartinsr.netlify.app/hub" 
              className="px-5 py-2.5 border-2 border-red-700 hover:bg-red-700/20 rounded-lg text-sm font-bold transition flex items-center gap-2"
            >
              🔐 Portal Interno
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section con Video/Foto de Tienda */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-24">
        {/* Background - Foto de tienda Granada */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tienda-granada.jpg" // Foto: https://scontent.fmga3-1.fna.fbcdn.net/v/t39.30808-6/637459277_1482740460525070_5605642484008125029_n.jpg
            alt="Tienda Granada Gold"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-700/20 border border-red-700/40 rounded-full text-red-400 text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Distribuidores Autorizados
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] mb-6">
              <span className="text-white">CARNES</span><br />
              <span className="text-red-600">SAN MARTÍN</span><br />
              <span className="text-3xl lg:text-4xl font-bold text-neutral-300">EN GRANADA Y MASAYA</span>
            </h1>
            
            <p className="text-xl text-neutral-300 mb-8 max-w-lg leading-relaxed">
              Somos <strong>Distribuidores SR</strong>, distribuidores oficiales de Carnes San Martín. 
              Llevamos la mejor carne premium a tu mesa con el sello de calidad que nos caracteriza.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="https://tienda.distribuidoressr.com" className="px-8 py-4 bg-red-700 hover:bg-red-800 rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg shadow-red-900/30">
                🛒 Comprar Ahora
              </Link>
              <Link href="#sucursales" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl font-bold text-lg transition backdrop-blur">
                📍 Visítanos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-red-500">2+</div>
                <div className="text-sm text-neutral-400">Años como distribuidores</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500">4</div>
                <div className="text-sm text-neutral-400">Puntos de venta</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500">10K+</div>
                <div className="text-sm text-neutral-400">Clientes atendidos</div>
              </div>
            </div>
          </div>

{/* Video Reel Embed - Versión Pro Propia */}
          <div className="hidden lg:block">
            <div className="relative group">
              {/* Efecto de resplandor rojo detrás */}
              <div className="absolute -inset-1 bg-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative aspect-[9/16] max-w-sm mx-auto bg-neutral-900 rounded-[2rem] overflow-hidden border-4 border-neutral-800 shadow-2xl">
                
                {/* Video desde /public/ReelGranada.mp4 */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/ReelGranada.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>

                {/* Capas de diseño sobre el video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

                <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-[10px] font-black text-white">SR</span>
                  </div>
                  <span className="text-xs font-bold text-white drop-shadow-lg">Distribuidores SR</span>
                </div>

                {/* Texto Inferior informativo */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">En Vivo - Granada</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-1 leading-tight">
                    CALIDAD <span className="text-red-600">SAN MARTÍN</span>
                  </h3>
                  <p className="text-xs text-neutral-300">Sucursal Granada Gold</p>
                </div>

                {/* Barra de progreso decorativa inferior */}
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Distribuidores Oficiales */}
      <section className="py-16 bg-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
                <Image
                  src="/logo-sanmartin.svg"
                  alt="Carnes San Martín"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white mb-1">Distribuidores Oficiales</h2>
                <p className="text-red-100 text-lg">Productos 100% originales Carnes San Martín</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-3 bg-white/10 rounded-xl">
                <div className="text-2xl font-black text-white">✓</div>
                <div className="text-xs text-red-100">Garantía de calidad</div>
              </div>
              <div className="text-center px-6 py-3 bg-white/10 rounded-xl">
                <div className="text-2xl font-black text-white">✓</div>
                <div className="text-xs text-red-100">Precios oficiales</div>
              </div>
              <div className="text-center px-6 py-3 bg-white/10 rounded-xl">
                <div className="text-2xl font-black text-white">✓</div>
                <div className="text-xs text-red-100">Productos frescos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sucursales */}
      <section id="sucursales" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold tracking-widest text-sm uppercase">Encuéntranos</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-2 mb-4">NUESTRAS <span className="text-red-600">SUCURSALES</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Visítanos en Granada o Masaya. Servicio delivery disponible en ambas ciudades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Granada Gold */}
            <div className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-red-600/50 transition">
              <div className="relative h-64">
                <Image
                  src="/granadagold.webp" // Foto interior tienda
                  alt="Granada Gold"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-black uppercase">
                  Gold
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Granada Gold</h3>
                <p className="text-neutral-400 mb-4">Nuestra tienda flagship en Granada</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-red-500 mt-0.5">📍</span>
                    <span className="text-neutral-300">De la Calzada, 1/2 cuadra al Este, Granada</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-red-500">📞</span>
                    <span className="text-neutral-300 font-mono">8980-5608</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-red-500">🕐</span>
                    <span className="text-neutral-300">Lunes a Domingo: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href="https://maps.google.com/?q=Carnes+San+Martin+Granada"
                    target="_blank"
                    className="flex-1 py-3 bg-red-700 hover:bg-red-800 rounded-xl text-center font-bold text-sm transition"
                  >
                    Ver en Mapa
                  </a>
                  <a 
                    href="https://wa.me/50589805608"
                    className="flex-1 py-3 bg-green-700 hover:bg-green-800 rounded-xl text-center font-bold text-sm transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Masaya Gold */}
            <div className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-red-600/50 transition">
              <div className="relative h-64 bg-neutral-800">
                <Image
                  src="/fachadamasaya.webp" // Foto tienda Masaya
                  alt="Masaya Gold"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-black uppercase">
                  Gold
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Masaya Gold</h3>
                <p className="text-neutral-400 mb-4">El mejor servicio en la ciudad de las flores</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-red-500 mt-0.5">📍</span>
                    <span className="text-neutral-300">Del Parque Central, 2 cuadras al Sur, Masaya</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-red-500">📞</span>
                    <span className="text-neutral-300 font-mono">8980-5608</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-red-500">🕐</span>
                    <span className="text-neutral-300">Lunes a Domingo: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href="https://maps.google.com/?q=Carnes+San+Martin+Masaya"
                    target="_blank"
                    className="flex-1 py-3 bg-red-700 hover:bg-red-800 rounded-xl text-center font-bold text-sm transition"
                  >
                    Ver en Mapa
                  </a>
                  <a 
                    href="https://wa.me/50589805608"
                    className="flex-1 py-3 bg-green-700 hover:bg-green-800 rounded-xl text-center font-bold text-sm transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Express Inmaculada - Próximamente */}
            <div className="relative bg-neutral-900/50 rounded-3xl overflow-hidden border-2 border-dashed border-neutral-700 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-20 h-20 bg-neutral-800 rounded-2xl flex items-center justify-center text-4xl mb-4">
                🚧
              </div>
              <h3 className="text-xl font-bold text-neutral-300 mb-2">Express Inmaculada</h3>
              <p className="text-neutral-500 mb-4">Granada Inmaculada</p>
              <span className="px-4 py-2 bg-neutral-800 text-neutral-400 rounded-full text-sm font-bold">
                PRÓXIMAMENTE
              </span>
            </div>

            {/* Express Nindirí - Próximamente */}
            <div className="relative bg-neutral-900/50 rounded-3xl overflow-hidden border-2 border-dashed border-neutral-700 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-20 h-20 bg-neutral-800 rounded-2xl flex items-center justify-center text-4xl mb-4">
                🚧
              </div>
              <h3 className="text-xl font-bold text-neutral-300 mb-2">Express Nindirí</h3>
              <p className="text-neutral-500 mb-4">Nindirí, Masaya</p>
              <span className="px-4 py-2 bg-neutral-800 text-neutral-400 rounded-full text-sm font-bold">
                PRÓXIMAMENTE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold tracking-widest text-sm uppercase">Catálogo</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-2 mb-4">PRODUCTOS <span className="text-red-600">DESTACADOS</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nombre: 'Lomo de Res', precio: 'C$ 280', unidad: '/lb', img: '/producto-lomo.jpg', tag: 'Premium' },
              { nombre: 'Pechuga de Pollo', precio: 'C$ 95', unidad: '/lb', img: '/producto-pollo.jpg', tag: 'Fresco' },
              { nombre: 'Molida Especial', precio: 'C$ 145', unidad: '/lb', img: '/producto-molida.jpg', tag: 'Más vendido' },
            ].map((prod, idx) => (
              <div key={idx} className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:border-red-600/50 transition group">
                <div className="relative h-48 bg-neutral-700">
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {prod.tag}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:scale-110 transition">
                    🥩
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{prod.nombre}</h3>
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-3xl font-black text-red-500">{prod.precio}</span>
                      <span className="text-neutral-400 text-sm">{prod.unidad}</span>
                    </div>
                  </div>
                  <Link href="https://tienda.distribuidoressr.com" className="block w-full py-3 bg-red-700 hover:bg-red-800 rounded-xl text-center font-bold transition">
                    Agregar al carrito
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://tienda.distribuidoressr.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-xl font-bold text-lg hover:bg-neutral-200 transition">
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Portal Interno CTA */}
      <section className="py-24 bg-gradient-to-br from-red-950 via-neutral-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-red-700 rounded-2xl mx-auto mb-8 flex items-center justify-center text-4xl shadow-2xl shadow-red-900/50">
            🔐
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">¿ERES COLABORADOR?</h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Accede al portal interno para gestionar pedidos, finanzas, inventario y traspasos entre sucursales.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { icon: '📦', nombre: 'Delivery', desc: 'Gestión de pedidos', color: 'bg-blue-600' },
              { icon: '💰', nombre: 'Finanzas', desc: 'Reportes y caja', color: 'bg-green-600' },
              { icon: '📋', nombre: 'Bodega', desc: 'Inventario interno', color: 'bg-orange-600' }
            ].map((app, idx) => (
              <div key={idx} className="bg-neutral-800/80 backdrop-blur p-6 rounded-2xl border border-neutral-700">
                <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto`}>
                  {app.icon}
                </div>
                <div className="font-bold text-lg">{app.nombre}</div>
                <div className="text-sm text-neutral-400">{app.desc}</div>
              </div>
            ))}
          </div>

          <Link 
            href="https://sanmartinsr.netlify.app/hub" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-red-700 hover:bg-red-800 rounded-2xl font-bold text-xl transition shadow-2xl shadow-red-900/30"
          >
            <span>Acceder al Portal Interno</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo-sanmartin.svg"
                    alt="Carnes San Martín"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs text-red-500 font-bold tracking-widest">DISTRIBUIDORES OFICIALES</div>
                  <div className="text-xl font-black">Distribuidores SR</div>
                </div>
              </div>
              <p className="text-neutral-400 max-w-sm mb-6">
                Distribuidores autorizados de Carnes San Martín en Granada y Masaya. 
                Comprometidos con la calidad y el mejor servicio.
              </p>
              <div className="flex gap-3">
                <a href="https://facebook.com/distribuidoressr" target="_blank" className="w-10 h-10 bg-neutral-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="https://instagram.com/distribuidoressr" target="_blank" className="w-10 h-10 bg-neutral-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                  <span className="sr-only">Instagram</span>
                  📸
                </a>
                <a href="https://wa.me/50589805608" className="w-10 h-10 bg-neutral-800 hover:bg-green-600 rounded-full flex items-center justify-center transition">
                  <span className="sr-only">WhatsApp</span>
                  💬
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Enlaces</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="#inicio" className="hover:text-red-500 transition">Inicio</Link></li>
                <li><Link href="#sucursales" className="hover:text-red-500 transition">Sucursales</Link></li>
                <li><Link href="https://tienda.distribuidoressr.com" className="hover:text-red-500 transition">Tienda Virtual</Link></li>
                <li><Link href="https://sanmartinsr.netlify.app/hub" className="hover:text-red-500 transition">Portal Interno</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>📞 8980-5608</li>
                <li>✉️ info@distribuidoressr.com</li>
                <li>📍 Granada, Nicaragua</li>
                <li>📍 Masaya, Nicaragua</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <div>© 2024 Distribuidores SR. Todos los derechos reservados.</div>
            <div className="flex items-center gap-2">
              <span>Una marca</span>
              <Image src="/logo-sanmartin.svg" alt="Carnes San Martín" width={80} height={20} className="opacity-50" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}