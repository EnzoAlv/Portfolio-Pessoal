import React from 'react';

const About = () => {
  return (
    <section 
      id="sobre"
      className="py-16 p-4 bg-gray-100 transition-colors duration-300 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white">
          Sobre Mim
        </h2>
        
        <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-12">
          <p className="mb-4">
            Sou Estudante de Engenharia de Software no Uni-FACEF. Apaixonado por tecnologia desde a infância, escolher minha profissão foi bem fácil, desde então tenho buscado me aprimorar e aprender ao máximo, com a intenção de poder agregar para qualquer time.  
            </p>       
            <p>
            Acredito que a melhor forma de aprender é construindo, e este portfólio é um reflexo desse compromisso, buscando ao máximo me superar e me desafiar cada vez mais a cada projeto.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
            Habilidades e Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-500 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md">
              React
            </span>
            <span className="bg-yellow-400 text-gray-800 font-medium text-sm px-4 py-2 rounded-full shadow-md">
              JavaScript
            </span>
            <span className="bg-gray-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md">
              Tailwind CSS
            </span>
            <span className="bg-green-600 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md">
              Node.js
            </span>
            <span className="bg-purple-600 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md">
              Express.js
            </span>
            <span className="bg-green-600 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md">
              MongoDB
            </span>
            <span className="bg-gray-600 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md">
              Git/GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;