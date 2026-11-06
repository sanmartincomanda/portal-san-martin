export const SITE_URL = "https://sanmartinsr.com";
export const SHOP_URL = "https://tienda.sanmartinsr.com";
export const CORPORATE_URL = "https://sanmartin.com.ni/";
export const CONTACT_EMAIL = "carnessanmartingranada@gmail.com";
export const FACEBOOK_URL =
  "https://www.facebook.com/share/1SwN7Njj7s/?mibextid=wwXIfr";

// Category/product views currently live in history.state, not shareable URLs.
export function shopLink() {
  return SHOP_URL;
}

export const lines = [
  {
    id: "gold",
    number: "01",
    label: "Gold",
    eyebrow: "Para los momentos que merecen más",
    title: ["Un gran corte.", "Un gran momento."],
    description:
      "El marmoleo, la textura, ese primer bocado. Descubrí nuestra selección de cortes Gold y hacé especial cualquier ocasión.",
    image: "/brand/line-gold.webp",
    alt: "Steak cocinado y cortado sobre tabla, fotografía de la Línea Gold de Carnes San Martín",
    cta: "Explorar Línea Gold",
    note: "Filet Mignon · New York · Puyazo",
  },
  {
    id: "parrillera",
    number: "02",
    label: "Parrillera",
    eyebrow: "La buena compañía se sirve a la brasa",
    title: ["Encendé el fuego.", "Lo demás se comparte."],
    description:
      "Una parrilla encendida. Tu gente cerca. Elegí los cortes para esa comida que empieza sin prisa y termina en sobremesa.",
    image: "/brand/line-parrillera-wide.webp",
    alt: "Cortes de carne cocinándose en una parrilla, composición oficial de Línea Parrillera",
    cta: "Prepará tu parrillada",
    note: "Churrasco parrillero · Flap · Corbata",
  },
  {
    id: "diaria",
    number: "03",
    label: "Diaria",
    eyebrow: "El sabor de estar en casa",
    title: ["Lo de todos los días.", "Como ningún otro."],
    description:
      "El almuerzo de hoy. La receta de siempre. Cortes para cocinar rico, reunir a la familia y disfrutar lo sencillo.",
    image: "/brand/line-diaria.webp",
    alt: "Una familia compartiendo la comida, fotografía oficial de la Línea Diaria",
    cta: "Comprar para hoy",
    note: "Bistec posta de pierna · Bistec corazón de paleta",
  },
];

// Contact details checked against the public sanmartinsr.com site.
export const stores = [
  {
    id: "granada",
    name: "Granada",
    kind: "Distribuidora",
    image: "/brand/granada.webp",
    address: "Oficinas Claro 50 metros este, Granada",
    locality: "Granada",
    phone: "+505 8465 7949",
    phoneRaw: "+50584657949",
    whatsapp: "https://wa.me/50584657949",
    map: "https://www.google.com/maps/search/?api=1&query=Carnes+San+Martin+Granada+Nicaragua",
  },
  {
    id: "masaya",
    name: "Masaya",
    kind: "Sucursal Gold",
    image: "/fachadamasaya.webp",
    address: "Del Parque Central, 2 cuadras al sur, Masaya",
    locality: "Masaya",
    phone: "+505 8980 5608",
    phoneRaw: "+50589805608",
    whatsapp: "https://wa.me/50589805608",
    map: "https://www.google.com/maps/search/?api=1&query=Distribuidora+Carnes+San+Martin+Masaya",
  },
  {
    id: "nindiri",
    name: "Nindirí Express",
    kind: "Tienda Express",
    image: "/brand/nindiri.webp",
    address: "Km 29 Carretera a Masaya, Plaza Portas Nindirí",
    locality: "Nindirí",
    phone: "+505 5745 7960",
    phoneRaw: "+50557457960",
    whatsapp: "https://wa.me/50557457960",
    map: "https://www.google.com/maps/search/?api=1&query=Carnes+San+Martin+Nindiri+Express+Plaza+Portas",
  },
];

export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#distribuidores`,
        name: "Distribuidores SR - Carnes San Martín",
        url: SITE_URL,
        logo: `${SITE_URL}/logocsm.svg`,
        email: CONTACT_EMAIL,
        sameAs: [FACEBOOK_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Carnes San Martín | Distribuidores SR",
        url: SITE_URL,
        inLanguage: "es-NI",
        publisher: { "@id": `${SITE_URL}/#distribuidores` },
      },
      ...stores.map((store) => ({
        "@type": "Store",
        "@id": `${SITE_URL}/#${store.id}`,
        name: `Carnes San Martín ${store.name}`,
        url: `${SITE_URL}/#sucursales`,
        image: `${SITE_URL}${store.image}`,
        telephone: store.phoneRaw,
        hasMap: store.map,
        parentOrganization: { "@id": `${SITE_URL}/#distribuidores` },
        address: {
          "@type": "PostalAddress",
          streetAddress: store.address,
          addressLocality: store.locality,
          addressCountry: "NI",
        },
      })),
    ],
  };
}
