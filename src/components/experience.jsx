import React from 'react';
const experiences = [
  {
    role: 'Estagiário Web Design',
    company: 'Uni-FACEF Jr',
    period: 'Janeiro 2024 - Maio 2024',
    description: 'Desenvolvimento de interfaces Web para empresas e instituições com a utilização do Software Figma, buscando sempre a otimização da UX/UI e desempenho do site juntamente com a implementação em WordPress.'
  },
  {
    role: 'Aprendiz em arco Administrativo',
    company: 'COCAPEC',
    period: 'Maio 2024 - Agosto 2025',
    description: 'Auxiliar ajudando em todas as questões administrativas do setor em que trabalhei, desde lançamento de notas fiscais até gerenciamento de um plataforma de E-commerce'
  },


];

const Experience = () => {
  return (
    <section 
      id="experiencias"
      className="py-16 p-4 bg-white transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 dark:text-white">
          Experiência Profissional
        </h2>

        <div className="relative border-l-2 border-blue-500 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 pl-8">

              <div className="absolute w-4 h-4 bg-blue-500 rounded-full mt-1.5 -left-2 border-2 border-white dark:border-gray-900"></div>
              
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{exp.period}</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h3>
              <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;