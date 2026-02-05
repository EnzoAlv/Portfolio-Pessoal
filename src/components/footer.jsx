import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "💻", label: "GitHub", url: "https://github.com/EnzoAlv" },
    {
      icon: "💼",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/enzoalv/",
    },
    { icon: "📧", label: "Email", url: "mailto:alvarengaenzo2005@gmail.com" },
    { icon: "📱", label: "WhatsApp", url: "https://wa.me/5535999910503" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-400 py-12 px-4 transition-colors duration-300 dark:from-gray-950 dark:to-gray-900 border-t border-gray-700">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Enzo
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Web Full Stack
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a
                href="#inicio"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
              >
                Sobre
              </a>
              <a
                href="#projetos"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear}{" "}
              <span className="text-white font-bold">
                Enzo Alvarenga Mariano
              </span>
              . Todos os direitos reservados.
            </p>
            <p>
              Feito com <span className="text-red-500">❤️</span> usando{" "}
              <span className="text-blue-400 font-semibold">React</span> e{" "}
              <span className="text-blue-500 font-semibold">Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
