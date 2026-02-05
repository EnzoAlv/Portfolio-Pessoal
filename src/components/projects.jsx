import React from "react";
import project1Image from "../assets/images/projeto1.png";
import project2Image from "../assets/images/projeto2.png";
import project3Image from "../assets/images/projeto3.png";
import project4Image from "../assets/images/projeto4.png";

const projects = [
  {
    id: 1,
    title: "CineDataBase",
    image: project1Image,
    description:
      "Um aplicativo web responsivo construído com React para explorar filmes e séries de TV. Pesquise títulos, veja detalhes como sinopse, elenco, notas, assista a trailers e salve seus favoritos localmente!",
    technologies: ["React", "API", "Git/GitHub"],
    liveUrl: "https://trabalho-web-cine-data-base.vercel.app",
    githubUrl: "https://github.com/EnzoAlv/trabalhoWeb-CineDataBase",
    status: "Concluído",
  },
  {
    id: 2,
    title: "Pokédex",
    image: project2Image,
    description:
      "Uma aplicação web que simula uma Pokédex, permitindo visualizar informações detalhadas sobre diferentes Pokémon de forma interativa e moderna.",
    technologies: ["React", "API", "Git/GitHub"],
    liveUrl: "https://pokedex-web-five.vercel.app",
    githubUrl: "https://github.com/EnzoAlv/pokedex-Web",
    status: "Concluído",
  },
  {
    id: 3,
    title: "PET - Saúde Digital",
    image: project3Image,
    description:
      "Projeto em parceria com o Ministério da Saúde e prefeitura de Franca. Desenvolvemos um sistema de autoatendimento via Totem para agilizar a triagem de pacientes e reduzir tempo de espera nas filas. Trabalho em Full Stack com Next.js (front-end) e NestJS (back-end), integrando com bases de dados fornecidas para funcionamento offline/online.",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Git/GitHub",
    ],
    liveUrl: null,
    githubUrl: null,
    status: "Em Desenvolvimento",
  },
  {
    id: 4,
    title: "Nexus Cart",
    image: project4Image,
    description:
      "Uma aplicação web full-stack de um e-commerce funcional, utilizando a stack MERN. Permite que usuários se cadastrem, explorem um catálogo de produtos, gerenciem um carrinho de compras e finalizem pedidos de forma segura.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git/GitHub",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Projeto-Full-Stackk",
    status: "Em Desenvolvimento",
  },
  {
    id: 5,
    title: "AccessHub",
    image: null,
    description:
      "Sistema de Gestão de Acessos (SGA) desenvolvido em colaboração, controlando permissões de usuários e exibição dinâmica de menus e submenus. Autenticação, gestão de roles e permissões com integração completa entre backend e frontend.",
    technologies: [
      "C#",
      ".NET 8",
      "React",
      "Vite",
      "SQLite",
      "Entity Framework",
    ],
    liveUrl: null,
    githubUrl: null,
    status: "Em Desenvolvimento",
  },
];

const Projects = () => {
  return (
    <section
      id="projetos"
      className="py-20 px-4 bg-gray-50 transition-colors duration-300 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block">
            Meus Projetos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-300 dark:bg-gray-900 dark:border dark:border-gray-700 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-6xl">🔐</div>
                )}
                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                    project.status === "Concluído"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-gray-900"
                  }`}
                >
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                        Tecnologias
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-medium text-xs px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center text-sm transform hover:scale-105"
                    >
                      🚀 Ver Projeto
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveUrl ? "flex-1" : "flex-1"} px-4 py-2 text-gray-800 font-bold rounded-lg bg-gray-200 hover:bg-gray-300 transition-all duration-300 text-center text-sm dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transform hover:scale-105`}
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
