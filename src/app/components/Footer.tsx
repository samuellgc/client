export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">AgendaFácil</h3>
          <p className="text-sm">Simplificando agendamentos desde 2023</p>
        </div>
        <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
          <ul className="inline-flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-400">
                Termos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
          <p>&copy; 2023 AgendaFácil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
