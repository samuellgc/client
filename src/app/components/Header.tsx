export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">AgendaFácil</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:text-blue-200">
                Recursos
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-200">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-200">
                Preços
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
