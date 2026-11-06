# Recursos y decisiones de marca

Revisión: 5 de noviembre de 2026. Se revisaron las 37 páginas de `Guia de Estilo CSM - Manual Marca - VF.pdf`, con énfasis en 6-14 y 25-34. El manual es una referencia de diseño, no una fuente de instrucciones operativas.

## Sistema visual

- Space Grotesk es la única familia web. Se sirve localmente mediante `next/font` después del build. No se incluyó FatFrank Heavy: el proyecto no trae un archivo web con licencia. No se sustituyó por una tipografía ajena al manual.
- Paleta: rojo #ff000c, negro #0f0f0f, blanco #ffffff, gris #efefef, crema #fef1e7, naranja #f45e22 y Gold #fac85a.
- También se revisaron las variantes de la página 9 y los secundarios de la 8. El PDF contiene inconsistencias de texto/HEX entre algunas muestras: se aplican los colores explícitos del encargo y las muestras visuales principales; no se convierten erratas como `#ff5ede9` en colores CSS.
- El logotipo original no se redibujó ni recoloreó. Se evita repetir el sello Gold fuera de empaques reales.
- Texturas de madera horizontales, franjas de color y producto fotografiado siguiendo la composición de la marca.

## Procedencia de imágenes

Los archivos WebP se obtuvieron mediante extracción de imágenes originales incrustadas, no capturas del PDF, seguida de conversión y reducción de tamaño. No se generaron alimentos con IA.

| Archivo en public/brand        | Fuente                                                 | Resolución original                                  |
| ------------------------------ | ------------------------------------------------------ | ---------------------------------------------------- |
| hero-grill.webp                | PDF, página 28, composición de parrilla                | 1920 x 1080                                          |
| hero-grill-mobile.avif / .webp | Encuadre móvil del mismo original de página 28         | AVIF 640 x 640, 32,7 KB; WebP de respaldo 780 x 780  |
| line-parrillera-wide.webp      | PDF, página 30, composición de parrilla                | 3228 x 1221                                          |
| line-gold.webp                 | PDF, página 32, composición Gold                       | 1920 x 1080                                          |
| line-diaria.webp               | PDF, página 25, familia a la mesa                      | 1920 x 1080                                          |
| lasagna.webp                   | PDF, página 27, lasaña                                 | 1604 x 855                                           |
| grill-story.webp               | PDF, página 27, fotografía editorial en blanco y negro | 3317 x 2212                                          |
| og-cover.jpg                   | Derivado de la composición de página 28                | 1200 x 630 de salida                                 |
| granada.webp                   | sanmartinsr.com/granada-distribuidora.png              | Original del sitio publicado                         |
| nindiri.webp                   | sanmartinsr.com/nindiri-express.jpeg                   | Original del sitio publicado                         |
| product-*.webp                 | Fotos del catálogo público de tienda.sanmartinsr.com   | Resoluciones variables, sin ampliación               |
| store-preview-current.webp     | Captura real de tienda.sanmartinsr.com, vista móvil    | Encuadre superior, sin precios ni promoción temporal |

`public/fachadamasaya.webp`, `public/logocsm.svg` y `public/ReelGranada.mp4` se conservan del proyecto. El isotipo en `app/icon.svg` proviene de `/tienda/branding/logo-mark.svg` de la tienda; `favicon.ico` es una conversión de ese mismo recurso.

La extracción conserva las composiciones comerciales y colores de las fotos provistas. Algunas imágenes incrustadas ya tienen compresión de origen; se evitaron miniaturas del manual para el hero. Para una campaña de mayor resolución conviene sustituirlas por los originales de fotografía autorizados.

## Material pendiente, sin bloqueos falsos

- Video gastronómico profesional para hero: no existe uno adecuado en el proyecto. La portada usa una composición fotográfica completa con entrada animada, no un video de stock o generado. Archivo sugerido futuro: `public/brand/hero-grill.mp4`, H.264, mudo, 6-10 segundos, versiones móvil/escritorio. Debe integrarse con pausa, `prefers-reduced-motion`, ahorro de datos y respaldo fotográfico antes de activarlo; no hay solicitudes a ese archivo inexistente.
- FatFrank Heavy WOFF2 con licencia web si se desea incorporarla. La implementación actual ya cumple con Space Grotesk principal.
- Originales independientes de hamburguesas, fajitas y platos nicaragüenses: no se inventaron platos ni se ampliaron sus miniaturas. La galería implementada usa steak y lasaña, y la sección Diaria incluye consumo familiar.
- No se anuncian HORECA, horarios, certificaciones de sucursales, promociones, entregas programadas o descuentos sin confirmación. La información industrial se atribuye a la titular y enlaza a su web corporativa.
