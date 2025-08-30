import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contato"
      className="py-16 p-4 bg-gray-100 transition-colors duration-300 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
          Vamos Conversar!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Estou aberto a novas oportunidades, ideias, colaborações, etc. Entre em contato através de um dos canais abaixo.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          
          <a 
            href="mailto:alvarengaenzo2005@gmail.com"
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
          >
            <span role="img" aria-label="E-mail">📧</span> E-mail
          </a>
          <a 
            href="https://www.linkedin.com/in/enzoalv/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
          >
            <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
          </a>
          <a 
            href="https://github.com/EnzoAlv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
          >
            <span role="img" aria-label="GitHub">👨‍💻</span> GitHub
          </a>

        </div>
      </div>
    </section>
  );
};
export default Contact;