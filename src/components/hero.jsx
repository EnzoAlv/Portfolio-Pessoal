import React from 'react';

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="min-h-[80vh] flex items-center justify-center text-center p-6 bg-gray-50 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-400">
          Olá, eu sou o
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold my-2 text-gray-900 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
            Enzo
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Desenvolvedor Web
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
          Estudante de Engenharia de Software, apaixonado por música, tecnologia e Design
        </p>
        <a 
          href="#projetos"
          className="mt-8 inline-block px-8 py-3 text-white font-semibold rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
        >
          Ver Meus Projetos
        </a>
      </div>
    </section>
  );
};

export default Hero;