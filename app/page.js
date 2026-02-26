// app/page.jsx - Portal Distribuidores SR
"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#004c5c] text-[#fef1e7]">
      {/* Tipografías personalizadas */}
      <style jsx global>{`
        @font-face {
          font-family: 'FatFrank';
          src: url('/fonts/FatFrank-Heavy.woff2') format('woff2');
          font-weight: 900;
          font-style: normal;
        }
        @font-face {
          font-family: 'Handelson';
          src: url('/fonts/HandelsonThree.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        .font-fatfrank {
          font-family: 'FatFrank', 'Arial Black', sans-serif;
          font-weight: 900;
        }
        .font-handelson {
          font-family: 'Handelson', 'Brush Script MT', cursive;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#004c5c]/95 backdrop-blur-md border-b border-[#fac85a]/30 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo con fondo crema para que se vea */}
            <div className="relative w-16 h-16 bg-[#fef1e7] rounded-xl flex items-center justify-center p-2">
              <Image
                src="/logocsm.svg"
                alt="Carnes San Martín"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="text-xs text-[#fac85a] font-bold tracking-widest uppercase mb-0.5 font-fatfrank">
                Distribuidores Oficiales
              </div>
              <div className="text-2xl font-fatfrank tracking-tight text-[#fef1e7]">
                Distribuidores <span className="text-[#fac85a] font-handelson text-3xl">SR</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-sm font-bold hover:text-[#fac85a] transition font-fatfrack">Inicio</Link>
            <Link href="#sucursales" className="text-sm font-bold hover:text-[#fac85a] transition font-fatfrank">Sucursales</Link>
            <Link href="https://tienda.distribuidoressr.com" className="px-5 py-2.5 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-lg text-sm font-bold transition font-fatfrank">
              Tienda Virtual →
            </Link>
            <Link 
              href="https://sanmartinsr.netlify.app/hub" 
              className="px-5 py-2.5 border-2 border-[#fac85a] hover:bg-[#fac85a]/20 text-[#fef1e7] rounded-lg text-sm font-bold transition flex items-center gap-2 font-fatfrank"
            >
              🔐 Portal Interno
            </Link>
          </div>

          <button className="md:hidden p-2 text-[#fef1e7]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tomahawkpoder.jpg"
            alt="Tomahawk - Poder en tu parrilla"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004c5c] via-[#004c5c]/85 to-[#004c5c]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004c5c] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fac85a]/20 border border-[#fac85a]/40 rounded-full text-[#fac85a] text-sm font-bold mb-6 font-fatfrank">
              <span className="w-2 h-2 bg-[#fac85a] rounded-full animate-pulse" />
              Distribuidores Autorizados
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-fatfrank leading-[0.95] mb-6 text-[#fef1e7]">
              CARNES{' '}
              <span className="text-[#fac85a] font-handelson text-6xl lg:text-8xl">San Martín</span>
              <br />
              <span className="text-3xl lg:text-4xl text-[#fef1e7]/90">EN GRANADA Y MASAYA</span>
            </h1>
            
            <p className="text-xl text-[#fef1e7]/80 mb-8 max-w-lg leading-relaxed">
              Somos <span className="text-[#fac85a] font-handelson text-2xl">Distribuidores SR</span>, distribuidores oficiales de Carnes San Martín. 
              Llevamos la mejor carne premium a tu mesa.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="https://tienda.distribuidoressr.com" className="px-8 py-4 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg shadow-[#fac85a]/30 font-fatfrank">
                🛒 Comprar Ahora
              </Link>
              <Link href="#sucursales" className="px-8 py-4 bg-[#fef1e7]/10 hover:bg-[#fef1e7]/20 border border-[#fef1e7]/30 text-[#fef1e7] rounded-xl font-bold text-lg transition backdrop-blur font-fatfrank">
                📍 Visítanos
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#fef1e7]/10">
              <div>
                <div className="text-3xl font-fatfrank text-[#fac85a]">2+</div>
                <div className="text-sm text-[#fef1e7]/60">Años como distribuidores</div>
              </div>
              <div>
                <div className="text-3xl font-fatfrank text-[#fac85a]">4</div>
                <div className="text-sm text-[#fef1e7]/60">Puntos de venta</div>
              </div>
              <div>
                <div className="text-3xl font-fatfrank text-[#fac85a]">10K+</div>
                <div className="text-sm text-[#fef1e7]/60">Clientes atendidos</div>
              </div>
            </div>
          </div>

          {/* Video Reel */}
<div className="block w-full px-4 mb-12 lg:mb-0"> 
  <div className="relative group">
    {/* Efecto Glow */}
    <div className="absolute -inset-1 bg-[#fac85a] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
    
    <div className="relative aspect-[9/16] max-w-[280px] md:max-w-sm mx-auto bg-[#004c5c] rounded-[2rem] overflow-hidden border-4 border-[#fef1e7]/20 shadow-2xl">
      <video
        autoPlay
        loop
        muted
        playsInline  // <--- Esto es lo que salva la vida en iPhones
        className="absolute inset-0 w-full h-full object-cover"
      >
                  <source src="/ReelGranada.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#004c5c]/90 via-transparent to-[#004c5c]/20" />
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#fac85a] rounded-full flex items-center justify-center border border-[#fef1e7]/20">
                    <span className="text-[10px] font-black text-[#004c5c] font-fatfrank">SR</span>
                  </div>
                  <span className="text-xs font-bold text-[#fef1e7] drop-shadow-lg font-fatfrank">Distribuidores SR</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fac85a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fac85a]"></span>
                    </span>
                    <span className="text-[10px] font-black text-[#fac85a] uppercase tracking-widest font-fatfrank">En Vivo - Granada</span>
                  </div>
                  <h3 className="text-xl font-fatfrank text-[#fef1e7] mb-1 leading-tight">
                    CALIDAD <span className="text-[#fac85a] font-handelson text-2xl">San Martín</span>
                  </h3>
                  <p className="text-xs text-[#fef1e7]/70">Sucursal Granada Gold</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-[#fac85a] w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Distribuidores - Con imagen de fondo */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/lineagold.jpg"
            alt="Línea Gold"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#004c5c]/80" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-[#fef1e7] rounded-2xl flex items-center justify-center p-3 shadow-xl">
                <Image
                  src="/logocsm.svg"
                  alt="Carnes San Martín"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-4xl font-fatfrank text-[#fef1e7] mb-1">
                  Distribuidores <span className="text-[#fac85a] font-handelson text-5xl">Oficiales</span>
                </h2>
                <p className="text-[#fef1e7]/80 text-lg">Productos 100% originales Carnes San Martín</p>
              </div>
            </div>
            <div className="flex gap-4">
              {['Garantía de calidad', 'Precios oficiales', 'Productos frescos'].map((item, i) => (
                <div key={i} className="text-center px-6 py-4 bg-[#fef1e7]/10 backdrop-blur rounded-xl border border-[#fac85a]/20">
                  <div className="text-2xl font-fatfrank text-[#fac85a]">✓</div>
                  <div className="text-xs text-[#fef1e7]/80 font-bold uppercase">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sucursales */}
      <section id="sucursales" className="py-24 bg-[#003d4a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#fac85a] font-bold tracking-widest text-sm uppercase font-fatfrank">Encuéntranos</span>
            <h2 className="text-4xl lg:text-6xl font-fatfrank mt-2 mb-4 text-[#fef1e7]">
              NUESTRAS <span className="text-[#fac85a] font-handelson text-5xl lg:text-7xl">Sucursales</span>
            </h2>
            <p className="text-[#fef1e7]/60 max-w-2xl mx-auto text-lg">
              Visítanos en Granada o Masaya. Servicio delivery disponible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Granada Gold */}
            <div className="group relative bg-[#004c5c] rounded-3xl overflow-hidden border border-[#fef1e7]/10 hover:border-[#fac85a]/50 transition">
              <div className="relative h-72">
                <Image
                  src="/granadagold.webp"
                  alt="Granada Gold"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004c5c] to-transparent" />
                <div className="absolute top-4 right-4 bg-[#fac85a] text-[#004c5c] px-4 py-2 rounded-full text-sm font-black uppercase font-fatfrank">
                  Gold
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-fatfrank mb-2 text-[#fef1e7]">
                  Granada <span className="text-[#fac85a] font-handelson text-4xl">Gold</span>
                </h3>
                <p className="text-[#fef1e7]/60 mb-6">Nuestra tienda flagship en Granada</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-[#fac85a] mt-0.5 text-lg">📍</span>
                    <span className="text-[#fef1e7]/80">De la Calzada, 1/2 cuadra al Este, Granada</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#fac85a] text-lg">📞</span>
                    <span className="text-[#fef1e7]/80 font-mono font-bold">8980-5608</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#fac85a] text-lg">🕐</span>
                    <span className="text-[#fef1e7]/80">Lunes a Domingo: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href="https://maps.google.com/?q=Carnes+San+Martin+Granada" target="_blank" className="flex-1 py-3 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-xl text-center font-bold transition font-fatfrank">
                    Ver en Mapa
                  </a>
                  <a href="https://wa.me/50589805608" className="flex-1 py-3 bg-[#fef1e7]/10 hover:bg-[#fef1e7]/20 text-[#fef1e7] border border-[#fef1e7]/30 rounded-xl text-center font-bold transition font-fatfrank">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Masaya Gold */}
            <div className="group relative bg-[#004c5c] rounded-3xl overflow-hidden border border-[#fef1e7]/10 hover:border-[#fac85a]/50 transition">
              <div className="relative h-72">
                <Image
                  src="/fachadamasaya.webp"
                  alt="Masaya Gold"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004c5c] to-transparent" />
                <div className="absolute top-4 right-4 bg-[#fac85a] text-[#004c5c] px-4 py-2 rounded-full text-sm font-black uppercase font-fatfrank">
                  Gold
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-fatfrank mb-2 text-[#fef1e7]">
                  Masaya <span className="text-[#fac85a] font-handelson text-4xl">Gold</span>
                </h3>
                <p className="text-[#fef1e7]/60 mb-6">El mejor servicio en la ciudad de las flores</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-[#fac85a] mt-0.5 text-lg">📍</span>
                    <span className="text-[#fef1e7]/80">Del Parque Central, 2 cuadras al Sur, Masaya</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#fac85a] text-lg">📞</span>
                    <span className="text-[#fef1e7]/80 font-mono font-bold">8980-5608</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#fac85a] text-lg">🕐</span>
                    <span className="text-[#fef1e7]/80">Lunes a Domingo: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href="https://maps.google.com/?q=Carnes+San+Martin+Masaya" target="_blank" className="flex-1 py-3 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-xl text-center font-bold transition font-fatfrank">
                    Ver en Mapa
                  </a>
                  <a href="https://wa.me/50589805608" className="flex-1 py-3 bg-[#fef1e7]/10 hover:bg-[#fef1e7]/20 text-[#fef1e7] border border-[#fef1e7]/30 rounded-xl text-center font-bold transition font-fatfrank">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Próximamente */}
            {[
              { nombre: 'Express Inmaculada', lugar: 'Granada Inmaculada' },
              { nombre: 'Express Nindirí', lugar: 'Nindirí, Masaya' }
            ].map((item, i) => (
              <div key={i} className="relative bg-[#004c5c]/50 rounded-3xl overflow-hidden border-2 border-dashed border-[#fef1e7]/20 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#fef1e7]/10 rounded-2xl flex items-center justify-center text-4xl mb-4">
                  🚧
                </div>
                <h3 className="text-xl font-fatfrank text-[#fef1e7]/70 mb-2">{item.nombre}</h3>
                <p className="text-[#fef1e7]/40 mb-4">{item.lugar}</p>
                <span className="px-4 py-2 bg-[#fef1e7]/10 text-[#fef1e7]/50 rounded-full text-sm font-bold font-fatfrank">
                  PRÓXIMAMENTE
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados - Con imagen de fondo */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puyaso.jpg"
            alt="Puyaso"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#004c5c]/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#fac85a] font-bold tracking-widest text-sm uppercase font-fatfrank">Catálogo</span>
            <h2 className="text-4xl lg:text-6xl font-fatfrank mt-2 mb-4 text-[#fef1e7]">
              PRODUCTOS <span className="text-[#fac85a] font-handelson text-5xl lg:text-7xl">Destacados</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nombre: 'Lomo de Res', precio: 'C$ 280', unidad: '/lb', tag: 'Premium' },
              { nombre: 'Pechuga de Pollo', precio: 'C$ 95', unidad: '/lb', tag: 'Fresco' },
              { nombre: 'Molida Especial', precio: 'C$ 145', unidad: '/lb', tag: 'Más vendido' },
            ].map((prod, idx) => (
              <div key={idx} className="bg-[#004c5c] rounded-2xl overflow-hidden border border-[#fef1e7]/10 hover:border-[#fac85a]/50 transition group shadow-xl">
                <div className="relative h-48 bg-[#003d4a]">
                  <div className="absolute top-4 left-4 bg-[#fac85a] text-[#004c5c] px-3 py-1 rounded-full text-xs font-bold font-fatfrank">
                    {prod.tag}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                    🥩
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-fatfrank mb-2 text-[#fef1e7]">{prod.nombre}</h3>
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-3xl font-fatfrank text-[#fac85a]">{prod.precio}</span>
                      <span className="text-[#fef1e7]/60 text-sm">{prod.unidad}</span>
                    </div>
                  </div>
                  <Link href="https://tienda.distribuidoressr.com" className="block w-full py-3 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-xl text-center font-bold transition font-fatfrank">
                    Agregar al carrito
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://tienda.distribuidoressr.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fef1e7] text-[#004c5c] hover:bg-[#fef1e7]/90 rounded-xl font-bold text-lg transition font-fatfrank">
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Línea Práctica - Nueva sección con imagen */}
      <section className="py-20 bg-[#003d4a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="/lineapractica.jpg"
                alt="Línea Práctica San Martín"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004c5c]/60 to-transparent" />
            </div>
            <div>
              <span className="text-[#fac85a] font-bold tracking-widest text-sm uppercase font-fatfrank">Nuevo</span>
              <h2 className="text-4xl lg:text-5xl font-fatfrank mt-2 mb-6 text-[#fef1e7]">
                Línea <span className="text-[#fac85a] font-handelson text-6xl">Práctica</span>
              </h2>
              <p className="text-[#fef1e7]/80 text-lg mb-6 leading-relaxed">
                Productos pre-cortados y empacados al vacío, listos para llevar. 
                La misma calidad San Martín con la conveniencia que necesitas.
              </p>
              <ul className="space-y-3 mb-8">
                {['Pre-cortado y listo', 'Empaque al vacío', 'Conservación prolongada', 'Misma calidad premium'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#fef1e7]/80">
                    <span className="text-[#fac85a]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://tienda.distribuidoressr.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-xl font-bold transition font-fatfrank">
                Explorar línea práctica →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Interno CTA */}
      <section className="py-24 bg-gradient-to-br from-[#003d4a] via-[#004c5c] to-[#004c5c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#fac85a] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fac85a]/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-[#fac85a] rounded-2xl mx-auto mb-8 flex items-center justify-center text-4xl shadow-2xl shadow-[#fac85a]/30">
            🔐
          </div>
          <h2 className="text-4xl lg:text-6xl font-fatfrank mb-6 text-[#fef1e7]">
            ¿ERES <span className="text-[#fac85a] font-handelson text-5xl lg:text-7xl">Colaborador?</span>
          </h2>
          <p className="text-xl text-[#fef1e7]/70 mb-12 max-w-2xl mx-auto">
            Accede al portal interno para gestionar pedidos, finanzas, inventario y traspasos.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { icon: '📦', nombre: 'Delivery', desc: 'Gestión de pedidos', color: 'bg-blue-500' },
              { icon: '💰', nombre: 'Finanzas', desc: 'Reportes y caja', color: 'bg-green-500' },
              { icon: '📋', nombre: 'Bodega', desc: 'Inventario interno', color: 'bg-orange-500' }
            ].map((app, idx) => (
              <div key={idx} className="bg-[#004c5c]/80 backdrop-blur p-6 rounded-2xl border border-[#fef1e7]/10">
                <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto`}>
                  {app.icon}
                </div>
                <div className="font-bold text-lg text-[#fef1e7] font-fatfrank">{app.nombre}</div>
                <div className="text-sm text-[#fef1e7]/60">{app.desc}</div>
              </div>
            ))}
          </div>

          <Link 
            href="https://sanmartinsr.netlify.app/hub" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#fac85a] hover:bg-[#e5b54a] text-[#004c5c] rounded-2xl font-bold text-xl transition shadow-2xl shadow-[#fac85a]/30 font-fatfrank"
          >
            <span>Acceder al Portal Interno</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003d4a] py-16 border-t border-[#fef1e7]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 bg-[#fef1e7] rounded-lg flex items-center justify-center p-1">
                  <Image
                    src="/logocsm.svg"
                    alt="Carnes San Martín"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-xs text-[#fac85a] font-bold tracking-widest font-fatfrank">DISTRIBUIDORES OFICIALES</div>
                  <div className="text-xl font-fatfrank text-[#fef1e7]">Distribuidores <span className="text-[#fac85a] font-handelson">SR</span></div>
                </div>
              </div>
              <p className="text-[#fef1e7]/60 max-w-sm mb-6">
                Distribuidores autorizados de Carnes San Martín en Granada y Masaya. 
                Comprometidos con la calidad y el mejor servicio.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: '📘', href: 'https://facebook.com/distribuidoressr', color: 'hover:bg-blue-600' },
                  { icon: '📸', href: 'https://instagram.com/distribuidoressr', color: 'hover:bg-pink-600' },
                  { icon: '💬', href: 'https://wa.me/50589805608', color: 'hover:bg-green-600' }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" className={`w-10 h-10 bg-[#004c5c] ${social.color} rounded-full flex items-center justify-center transition text-[#fef1e7]`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#fef1e7] font-fatfrank">Enlaces</h4>
              <ul className="space-y-2 text-[#fef1e7]/60">
                <li><Link href="#inicio" className="hover:text-[#fac85a] transition">Inicio</Link></li>
                <li><Link href="#sucursales" className="hover:text-[#fac85a] transition">Sucursales</Link></li>
                <li><Link href="https://tienda.distribuidoressr.com" className="hover:text-[#fac85a] transition">Tienda Virtual</Link></li>
                <li><Link href="https://sanmartinsr.netlify.app/hub" className="hover:text-[#fac85a] transition">Portal Interno</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#fef1e7] font-fatfrank">Contacto</h4>
              <ul className="space-y-2 text-[#fef1e7]/60">
                <li>📞 8980-5608</li>
                <li>✉️ info@distribuidoressr.com</li>
                <li>📍 Granada, Nicaragua</li>
                <li>📍 Masaya, Nicaragua</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#fef1e7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#fef1e7]/40">
            <div>© 2024 Distribuidores SR. Todos los derechos reservados.</div>
            <div className="flex items-center gap-2">
              <span>Una marca</span>
              <div className="w-20 h-8 bg-[#fef1e7] rounded flex items-center justify-center p-1">
                <Image src="/logocsm.svg" alt="Carnes San Martín" width={60} height={20} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}