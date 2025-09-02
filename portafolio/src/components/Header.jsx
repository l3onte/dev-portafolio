export default function Header() {
  return (
    <header className="text-white fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-cyan-800 via-blue-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
            <h1>Leonte Canales</h1>

            <nav className="flex gap-10">
                <a href="" className="hover:text-gray-300 transition-colors">Inicio</a>
                <a href="#habilidades" className="hover:text-gray-300 transition-colors">Habilidades</a>
                <a href="#experiencia" className="hover:text-gray-300 transition-colors">Experiencia</a>
                <a href="#contacto" className="hover:text-gray-300 transition-colors">Contacto</a>
            </nav>
        </div>
    </header>
  );
}