interface LinksProps {
  label: string;
  path: string;
}

export const LinksList: LinksProps[] = [
  { label: "🏠 Inicio", path: "/" },
  { label: "📰 Recursos", path: "/resources" },
  { label: "📌 Publicaciones", path: "/posts" },
  { label: "👨‍💻 Proyectos", path: "/projects" },
];
