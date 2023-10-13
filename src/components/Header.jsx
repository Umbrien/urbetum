function PageLink({ name, href}) {
  return (
      <a className="text-xl text-white hover:text-gray-400 transition" href={href}>{name}</a>
  )
}

export function Header() {
  return (
      <header className="flex justify-center items-center py-4 gap-8 bg-indigo-950 font-anton sticky top-0">
        <img src="/logo.png" className="h-16" alt="logo" />
        <PageLink name="Main" href="/" />
        <PageLink name="Features" href="/features" />
        <PageLink name="News" href="/news" />
        <PageLink name="About us" href="/about" />
      </header>
  )
}