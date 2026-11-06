# Entrega del rediseño

Fecha: 5 de noviembre de 2026. Implementacion real en el repositorio existente, sin migrar de framework ni modificar la tienda.

## Experiencia implementada

- Portada con fotografia oficial de parrilla, encuadre especifico movil AVIF/WebP, entrada tipografica y compra inmediata.
- Lineas Gold, Parrillera y Diaria con identidades propias y selector accesible por teclado.
- Seis cortes reales, filtros y carrusel de desplazamiento nativo. El catalogo publico actualiza nombre e imagen, no precios.
- Galeria editorial de steak y lasaña; compra en linea con captura real de la tienda; historia de marca separada de la operacion local.
- Tres sucursales con fotografias, direccion, telefono, Maps y WhatsApp; video existente de Granada bajo demanda.
- Cierre comercial, menu movil, CTA persistente en cabecera y portal interno eliminado.

## Codigo y movimiento

`app/page.js`, `app/layout.js` y `app/globals.css` componen la nueva experiencia. `components/header.js`, `line-showcase.js`, `product-shelf.js`, `motion.js` e `icons.js` encapsulan la interaccion. `lib/catalog.mjs` y `site-data.mjs` separan datos e integraciones. `app/robots.js`, `sitemap.js`, `icon.svg` y el favicon completan SEO e identidad.

Se usan CSS, Web Animations API e IntersectionObserver, sin GSAP adicional ni scroll artificial. Hay revelados de imagen con clip-path, entradas tipograficas, transiciones de panel, zoom de fotografia y profundidad de scroll progresiva en escritorio compatible. Listeners y animaciones se limpian al desmontar; `prefers-reduced-motion` se respeta tambien si cambia durante la visita. Sin JavaScript siguen disponibles contenido y enlaces comerciales.

## Integracion de tienda

Fuente de solo lectura: el endpoint publico `storeCatalog.json` utilizado por la propia tienda en Firebase. Consulta GET limitada a productos activos, revalidacion cada 900 segundos y timeout de 3,5 segundos. Solo pasan al cliente codigo, nombre, linea editorial, imagen permitida y enlace. No se publican campos internos, precios, inventario ni credenciales de acceso.

La tienda no proporciona rutas publicas persistentes por producto o linea: el selector cambia estado de navegacion, no una URL compartible. Todos los CTA usan el respaldo funcional https://tienda.sanmartinsr.com y explican que el corte se busca por nombre. No hay endpoints inventados, scraping permanente ni cambios a login/checkout/pedidos.

Si falla la consulta se utiliza una seleccion editorial local claramente identificada, sin afirmar disponibilidad. Una respuesta valida elimina de la seleccion los productos inactivos o ausentes. Las fotos externas tienen respaldo local.

Los eventos `csm:commerce` identifican tienda, linea, producto, WhatsApp y Maps dentro del documento. No envian datos, no guardan cookies y no instalan analitica adicional.

## Recursos y pendientes

Procedencia detallada en [brand-assets.md](brand-assets.md). Se extrajeron imagenes originales incrustadas en el manual, no capturas reducidas de sus paginas. Se conservaron el logo, el video y las fotos verificadas de sucursales; las fotos de productos proceden del catalogo publico. No hay carne generada con IA.

Pendientes de material: video gastronomico profesional para portada, FatFrank Heavy WOFF2 con licencia y originales de hamburguesas/fajitas/platos nicaragüenses. La experiencia funciona con fotografia real y Space Grotesk mientras tanto. Algunas fotos de producto tienen una calidad limitada por el original disponible.

## Validacion local

- `npm run lint`, `npm test` (8 pruebas) y `npm run build`: correctos.
- Suite Playwright: 12 grupos correctos, incluyendo selector de lineas, filtros, carrusel, menu, anclas, SEO, 3 negocios locales, sin JavaScript, movimiento reducido y /hub 404.
- Axe escritorio y movil, reglas WCAG A/AA: cero infracciones detectadas. No equivale a una certificacion WCAG ni reemplaza auditoria manual completa.
- Sin desbordamiento horizontal a 320, 360, 390, 768 y 1024 px. Compra visible en primera pantalla de 390 x 844. Capturas revisadas por seccion en escritorio y movil.
- Pruebas exploratorias: video de 30,72 segundos reproduce/pausa; cero solicitudes MP4 antes de abrirlo. Fallo de imagen externa conserva foto local. Evento comercial de filtro comprobado sin red de seguimiento.
- Lighthouse 13.6.0, Edge/Chromium, build local de produccion, movil 412 x 823, CPU x4 y Slow 4G simulados: rendimiento 93, accesibilidad 100, buenas practicas 100, SEO 100. LCP 3,3 s, CLS 0, TBT 30 ms en la ultima pasada. Las primeras pasadas dieron rendimiento 92-93 y LCP 3,1-3,3 s.
- La prueba local no alcanzo el objetivo LCP < 2,5 s. La medicion posterior sobre el dominio publicado se detalla abajo. INP de usuarios reales no medido; TBT no lo sustituye. Falta validacion de campo, Safari/iOS y dispositivos fisicos.
- Dependencias de produccion: cero vulnerabilidades en `npm audit --omit=dev`. Next.js y eslint-config-next actualizados a 16.4.5. Quedan 8 avisos moderados de herramientas de desarrollo; no se uso `npm audit fix --force` porque proponia cambios incompatibles.

Evidencias locales en `.codex-artifacts/redesign-qa/`, excluidas del repositorio. Las cifras son de laboratorio local, no una promesa de rendimiento de produccion.

## Revision y publicacion

Comandos en [README.md](../README.md). El usuario autorizo subir a GitHub y desplegar despues de las pruebas. La publicacion debe conservar el historial de `main` y utilizar el despliegue existente de Netlify, sin alterar DNS, secretos ni la infraestructura de la tienda. Confirmar el contenido real en el dominio despues del push, no solo la existencia del commit.

Fuentes verificadas: [sitio publicado](https://sanmartinsr.com/), [tienda](https://tienda.sanmartinsr.com/), [empresa titular](https://sanmartin.com.ni/en/home/). Direcciones/contactos se conservaron de la version publicada y de los cambios remotos de julio de 2026.

## Publicacion verificada

Se subio el rediseño a `main`, sin force-push, conservando los commits remotos y las fotos originales. Commit de aplicacion publicado: `cc5bb19789b09b2503f80beab41ded2667a61ce4` (incluye `9666f79`). Netlify desplego automaticamente; se verifico visualmente https://sanmartinsr.com con la nueva portada y productos reales. No fue necesario iniciar sesion ni cambiar la configuracion de hosting.

La suite de 12 grupos se repitio contra la URL publica: correcta, con cero infracciones Axe detectadas en escritorio/movil. Inicio, robots, sitemap, hero AVIF y Open Graph responden 200; `/hub` responde 404.

Lighthouse movil sobre el dominio publicado: rendimiento **100**, accesibilidad **100**, buenas practicas **100**, SEO **100**; **LCP 1,4 s**, **CLS 0**, **TBT 20 ms**. Misma emulacion movil Slow 4G/CPU x4 de la prueba local. Es una pasada de laboratorio posterior al despliegue, no una medicion de campo ni garantia para todos los usuarios. En esta pasada publicada se cumplen los objetivos de rendimiento, LCP y CLS; INP sigue pendiente de datos reales.

Reporte completo local: `.codex-artifacts/redesign-qa/lighthouse-live.json`. Pruebas de navegador de produccion: `.codex-artifacts/redesign-qa/browser-results.json`.
