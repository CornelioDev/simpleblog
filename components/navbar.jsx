import Link from "next/link";

const Navbar = () => {

  const routes = [
    { "title": "Articles", "slug": "blog" },
    { "title": "404", "slug": "random-route" },
  ]

  return (
    <nav className="p-4 flex place-content-between bg-sky-950 text-slate-200">
      <div id="logo" className="hover:text-slate-500">
        <Link href={'/blog'}>
          <h1 className="font-extrabold">Simple Blog</h1>
        </Link>
      </div>

      <ul className="flex gap-3" role="list">
        {routes.map((route) => (
          <li key={route.index} className="hover:text-slate-500">
            <Link href={`/${route.slug}`}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
