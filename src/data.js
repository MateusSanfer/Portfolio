import cesta from "./assets/cesta.png";
import sgb from "./assets/sgb.png"
import apocalipticos from "./assets/apocalipticos.png"
import code3 from "./assets/code3.jpg"
const projects = [
  {
    title: "Sistema de Gerenciamento Bibliotecário",
    subtitle: "Html, Javascript, Bootstrap e Firebase",
    description: "O Sistema de Gerenciamento Bibliográfico foi desenvolvido para atender às necessidades da biblioteca SENAI/CETEC de Araguaína, que atualmente enfrenta limitações em suas rotinas devido ao uso de um sistema gratuito sem suporte adequado. O objetivo principal é otimizar processos como empréstimos, devoluções, catalogação e elaboração de relatórios, proporcionando uma experiência mais eficiente e moderna para bibliotecários e usuários finais.",
    link: "https://sgbd.netlify.app/",
    image: sgb,
  },
  {
    title: "Apocallípticos",
    subtitle: "React e Firebase",
    description:
      "Apocalípticos é um jogo interativo e insano para grupos de amigos (presencial ou remoto), inspirado em jogos como Amigos de Merda, Verdade ou Desafio e Eu Nunca.",
    link: "https://github.com/Emanuelsantos0318/Apocalipticos",
    image: apocalipticos,
  },
  {
    title: "Cestas Da Nanda - Loja Online",
    subtitle: "React+vite, Mysql, Node.js",
    description:
      "Cestas Da Nanda é uma loja online desenvolvida com React.js que permite aos clientes personalizar e adquirir cestas de presente de forma prática e intuitiva. A plataforma oferece uma experiência fluida, desde a escolha da cesta até o pagamento, proporcionando um serviço personalizado.",
    image: cesta,
    link: "https://github.com/MateusSanfer/cestas-da-nanda",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: code3,
    link: "https://pythonbootcamp.com",
  },
  // Adicione mais projetos conforme necessário
];

export default projects;

