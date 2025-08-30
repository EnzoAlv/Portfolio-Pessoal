import React from 'react';
import project1Image from '../assets/images/projeto1.png';
import project2Image from '../assets/images/projeto2.png'; 
import project3Image from '../assets/images/projeto3.png'; 


const Projects = () => {
  return (
    <section 
      id="projetos"
      className="py-16 p-4 bg-white transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 dark:text-white">
          Meus Projetos
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800">
            <img src={project1Image} alt="Preview do Projeto 1" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">CineDataBase</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">Um aplicativo web responsivo construído com React para explorar filmes e séries de TV. 
                  Pesquise títulos, veja detalhes como sinopse, elenco, notas, assista a trailers e salve seus favoritos localmente!</p>
                <div className="mb-4">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Tecnologias:</span>
                  <div className="flex flex-wrap mt-2 gap-2">
                    <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">React</span>
                    <span className="bg-gray-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">API</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-4">
                <a href="https://trabalho-web-cine-data-base.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm 
                transition-colors duration-300">Ver Projeto</a>
                <a href="https://github.com/EnzoAlv/trabalhoWeb-CineDataBase" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-semibold rounded-lg bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm 
                transition-colors duration-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">Código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800">
            <img src={project2Image} alt="Preview do Projeto 2" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Pokédex</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">Uma aplicação web que simula uma Pokédex, permitindo visualizar informações detalhadas sobre diferentes 
                  Pokémon de forma interativa e moderna.</p>
                <div className="mb-4">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Tecnologias:</span>
                  <div className="flex flex-wrap mt-2 gap-2">
                    <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">React</span>
                    <span className="bg-gray-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">API</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-4">
                <a href="https://pokedex-web-five.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm transition-colors duration-300">Ver Projeto</a>
                <a href="https://github.com/EnzoAlv/pokedex-Web" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-semibold rounded-lg bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm transition-colors duration-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">Código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800">
            <img src={project3Image} alt="Preview do Projeto 3" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">PET - Saúde Digital</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">Projeto fruto de uma parceria entre o Governo e a prefeitura de Franca que visa um desenvolvimento tecnológico no sistema de Saúde pública da região</p>
                <div className="mb-4">
                  <span className="font-bold text-gray-800 dark:text-gray-200">EM DESENVOLVIMENTO</span>
                  <div className="flex flex-wrap mt-2 gap-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;