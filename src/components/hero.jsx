import React from "react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Animação de entrada */}
        <div className="animate-fadeIn">
          <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-wide">
            👋 Bem-vindo ao meu portfólio
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black my-6 text-gray-900 dark:text-white leading-tight">
            Enzo
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">
              Alvarenga
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Desenvolvedor Web Full Stack
          </p>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
            Desenvolvedor Web Full Stack apaixonado por criar soluções
            tecnológicas inovadoras. Com experiência em React, Next.js, Node.js
            e NestJS, transformo ideias em aplicações modernas, responsivas e de
            alta performance.
          </p>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            🎓 Estudante de Engenharia de Software | 📍 Franca - SP | 📞 (35)
            99991-0503
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#projetos"
              className="px-8 py-4 text-white font-bold rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              Ver Meus Projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-4 text-blue-600 font-bold rounded-lg border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 dark:text-blue-400 dark:border-blue-400"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
