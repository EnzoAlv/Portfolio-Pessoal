import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 px-4 transition-colors duration-300 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Enzo Alvarenga Mariano. Todos os direitos reservados.
        </p>
        <p className="text-sm mt-2">
          Feito com ❤️ usando React e Tailwind CSS.
        </p>
        {/* Opcional: Adicionar links sociais novamente aqui */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <span className="text-gray-600">|</span>
          <a href="https://www.linkedin.com/in/seu-usuario/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;