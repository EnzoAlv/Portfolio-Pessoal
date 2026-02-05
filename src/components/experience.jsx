import React from "react";

const experiences = [
  {
    role: "Estagiário em Desenvolvimento Web",
    company: "OrgSystem",
    period: "Agosto 2025 - Atual",
    duration: "Em andamento",
    type: "Estágio",
    description:
      "Responsável pelo desenvolvimento de interfaces modernas e integração fluida entre fluxo de dados e interface. Desenvolvo componentes responsivos, realizo testes rigorosos de APIs e garanto versionamento colaborativo organizado com Git/GitHub. Otimizo a experiência do usuário (UX) e reduzo tempo de resposta das aplicações.",
    highlights: ["React", "JavaScript", "APIs", "Git/GitHub", "UX/UI"],
  },
  {
    role: "Jovem Aprendiz",
    company: "COCAPEC",
    period: "Maio 2024 - Agosto 2025",
    duration: "1 ano e 3 meses",
    type: "Aprendizado",
    description:
      "Apoio em rotinas administrativas e operacionais, contato com SAP Business One gerando relatórios de vendas. Suporte ao e-commerce 'Senhor Café', gerenciando pedidos e relatórios. Apoio a demandas básicas de TI e atendimento a usuários.",
    highlights: ["SAP Business One", "E-commerce", "Relatórios", "TI"],
  },
  {
    role: "Projetos de TI",
    company: "Empresa Júnior Uni-FACEF",
    period: "Janeiro 2024 - Maio 2024",
    duration: "5 meses",
    type: "Estágio",
    description:
      "Desenvolvimento de soluções e interfaces web com foco em usabilidade. Utilização de ferramentas como Figma e Photoshop. Participação em projetos voltados à inovação tecnológica.",
    highlights: ["Figma", "Photoshop", "Web Design", "UX/UI"],
  },
];

const Experience = () => {
  return (
    <section
      id="experiencias"
      className="py-20 px-4 bg-white transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block">
            Experiência Profissional
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>

          <div className="space-y-12 md:pl-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-6 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Card */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex flex-col sm:flex-row sm:gap-6 mb-4 pb-4 border-b border-gray-300 dark:border-gray-600">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Período
                      </p>
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        {exp.period}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Duração
                      </p>
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Interessado em trabalhar comigo?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Estou sempre aberto a novas oportunidades e desafios!
          </p>
          <a
            href="#contato"
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
