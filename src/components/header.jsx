import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white text-gray-800 px-4 py-2 shadow-md sticky top-0 z-50 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex items-center justify-between">  
        <div className="flex flex-col">
          <h1 className="text-xl font-bold md:text-2xl">Enzo Alvarenga</h1>
          <p className="text-sm text-blue-500 font-semibold md:text-base">
            Desenvolvedor Web
          </p>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-sm font-medium hover:text-blue-500 transition-colors duration-300">
            Início
          </a>
          <a href="#sobre" className="text-sm font-medium hover:text-blue-500 transition-colors duration-300">
            Sobre Mim
          </a>
          <a href="#projetos" className="text-sm font-medium hover:text-blue-500 transition-colors duration-300">
            Projetos
          </a>
          <a href="#experiencias" className="text-sm font-medium hover:text-blue-500 transition-colors duration-300">
            Experiência
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-blue-500 transition-colors duration-300">
            Contato
          </a>
        </nav>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;