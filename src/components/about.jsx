import React from "react";

const About = () => {
  const skills = [
    {
      category: "Linguagens",
      items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "NestJS", "REST API"],
    },
    {
      category: "Bancos de Dados",
      items: ["PostgreSQL", "MongoDB", "Oracle SQL"],
    },
    {
      category: "Ferramentas & DevOps",
      items: ["Git/GitHub", "Docker", "AWS", "Azure", "Postman", "Figma"],
    },
    {
      category: "Metodologias",
      items: ["Scrum", "Agile", "Kanban"],
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 px-4 bg-white transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block">
            Sobre Mim
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sou{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Enzo Alvarenga Mariano
              </span>
              , estudante de Engenharia de Software no Uni-FACEF (período
              noturno) e Desenvolvedor Web Full Stack. Apaixonado por tecnologia
              desde a infância e com experiência prática em projetos reais.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Atualmente trabalho como{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Estagiário em Desenvolvimento Web na OrgSystem
              </span>
              , onde desenvolvo componentes responsivos, integro APIs e otimizo
              experiências de usuário utilizando JavaScript e frameworks
              modernos.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Minha abordagem é baseada em{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                aprendizado prático
              </span>
              . Acredito que a melhor forma de evoluir é construindo projetos
              reais, testando soluções e buscando sempre a qualidade e a
              inovação em cada entrega.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-100 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Estatísticas
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Projetos Desenvolvidos
                </span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  5+
                </span>
              </div>
              <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Anos de Experiência
                </span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  2+
                </span>
              </div>
              <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Tecnologias
                </span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  15+
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            💻 Habilidades e Tecnologias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-blue-200 dark:border-gray-600 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            📄 Baixar Meu Currículo
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Acesse meu currículo completo em PDF com todas as minhas
            experiências, habilidades e certificações.
          </p>
          <a
            href="/assets/Curriculo-Enzo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📥 Baixar Currículo em PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
