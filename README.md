# Carnes San Martin | Sitio comercial

Sitio de Distribuidores SR en Next.js App Router. Presenta la marca, sus cortes y las sucursales de Granada, Masaya y Nindiri. La compra ocurre exclusivamente en [tienda.sanmartinsr.com](https://tienda.sanmartinsr.com).

## Ejecutar

Requiere Node.js 22 LTS y npm. Desde la raiz del repositorio:

```sh
npm ci
npm run dev
```

Abrir http://localhost:3000. Para revisar la compilacion de produccion:

```sh
npm run build
npm run start -- --port 3006
```

## Validar

```sh
npm run lint
npm test
npm run build
npm audit --omit=dev
```

Con el servidor de produccion abierto en otra terminal:

```sh
npm run test:browser
```

La prueba usa Chrome/Edge/Chromium instalado. Configurar `CHROME_PATH` si no se encuentra automaticamente, y `QA_BASE_URL` para una URL distinta de http://localhost:3006. Las evidencias se guardan en `.codex-artifacts/redesign-qa/`, excluida de Git.

## Contenido e integraciones

- `app/page.js`: composicion editorial y secciones de la portada.
- `app/globals.css`: sistema visual, adaptacion movil y animaciones CSS.
- `components/`: navegacion, lineas, productos, iconos y movimiento progresivo.
- `lib/site-data.mjs`: enlaces comerciales, contactos y datos estructurados.
- `lib/catalog.mjs`: consulta GET del catalogo publico, cache de 15 minutos, timeout y respaldo local. No requiere secretos ni escribe pedidos.
- `public/brand/`: fotografias reales optimizadas y captura de la tienda.

No se mantiene una copia de precios, stock o checkout. Si se necesita revisar sin red, `CSM_CATALOG_OFFLINE=1` usa la seleccion editorial local; no establecerla en produccion salvo necesidad deliberada.

El portal interno fue eliminado. `/hub` devuelve 404. No hay nuevos servicios de seguimiento: `csm:commerce` es un evento DOM local listo para una futura integracion autorizada.

## Publicar

El repositorio es `sanmartincomanda/portal-san-martin`, rama `main`, y el dominio actual esta alojado en Netlify. El usuario autorizo publicar este rediseño el 5 de noviembre de 2026.

1. Ejecutar las validaciones y revisar el diff, sin incluir secretos ni evidencias locales.
2. Integrar cualquier cambio remoto sin reescribir el historial.
3. Crear commit y ejecutar `git push origin main`.
4. Comprobar el despliegue conectado en Netlify y verificar https://sanmartinsr.com, sus imagenes, enlaces, `/robots.txt`, `/sitemap.xml` y `/hub`.
5. Si se necesita volver a una version anterior, usar el despliegue previo de Netlify o un `git revert` revisado; no hacer force-push.

No cambiar DNS, autenticacion ni configuracion de la tienda para publicar esta web.

Ver [entrega tecnica](docs/redesign-handoff.md), [recursos de marca](docs/brand-assets.md) y [lista de QA](docs/qa-checklist.md).
