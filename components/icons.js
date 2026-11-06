export function Icon({ name = "arrow", className = "", ...props }) {
  const paths = {
    arrow: <path d="M4 12h15M12 5l7 7-7 7" />,
    diagonal: <path d="M5 19 19 5M5 5h14v14" />,
    down: <path d="M12 4v16M5 13l7 7 7-7" />,
    bag: (
      <>
        <path d="M5 7h14l1 14H4L5 7Z" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5Z" />
        <path d="M8 8c0 4 4 8 8 8l1-3-3-1-1 1-2-2 1-1-1-3-3 1Z" />
      </>
    ),
    play: <path d="m9 5 11 7-11 7V5Z" />,
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function ShopButton({
  children = "Comprar ahora",
  className = "",
  location,
  href = "https://tienda.sanmartinsr.com",
  ...props
}) {
  return (
    <a
      href={href}
      className={`button ${className}`}
      data-commerce="shop"
      data-location={location}
      {...props}
    >
      <span>{children}</span>
      <Icon name="diagonal" />
    </a>
  );
}
