import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "alvarengaenzo2005@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: "📧",
      label: "E-mail",
      href: `mailto:${email}`,
      description: email,
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: "📱",
      label: "Telefone",
      href: "tel:+5535999910503",
      description: "(35) 99991-0503",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/enzoalv/",
      description: "Conecte-se comigo",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "👨‍💻",
      label: "GitHub",
      href: "https://github.com/EnzoAlv",
      description: "Veja meus projetos",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section
      id="contato"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block">
            Vamos Conversar!
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4"></div>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            oportunidades
          </span>
          , ideias, colaborações e{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            projetos desafiadores
          </span>
          . Sinta-se livre para entrar em contato!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative"
            >
              <div
                className={`bg-gradient-to-br ${contact.color} rounded-2xl p-8 text-white transform hover:scale-110 transition-all duration-300 hover:shadow-2xl cursor-pointer h-full`}
              >
                <div className="text-5xl mb-4">{contact.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{contact.label}</h3>
                <p className="text-sm opacity-90">{contact.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-semibold">→ Clique para abrir</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick copy email */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border-2 border-blue-100 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ou copie meu email diretamente:
          </p>
          <button
            onClick={handleCopyEmail}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            {copied ? "✓ Copiado!" : "📋 Copiar Email"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
