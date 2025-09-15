import perfil from "../assets/perfil.png";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Olá, Eu sou Mateus Sanfer.
            <br className="hidden lg:inline-block" /> Eu amo fazer o amo, seja o
            quê isso queira dizer!
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tenetur quae soluta autem ex nulla illo, a, voluptas accusamus
            magnam enim tempora deserunt labore? Dolorem dolorum nobis nisi
            aliquam tempore!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Trabalhe comigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Veja meus projetos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded"
            src={perfil}
            alt="Mateus Sanfer"
          />
        </div>
      </div>
    </section>
  );
}
