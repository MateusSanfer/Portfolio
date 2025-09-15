import { CodeIcon } from "@heroicons/react/solid";
import projects from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps que eu construir
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/2 w-full p-4"
            >
              {/* Contêiner padronizado: define altura responsiva */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {/* alt: imagem ocupa todo o espaço do contêiner */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img
                    alt={project.title}
                    src={project.image}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Overlay: aparece ao passar o mouse */}
                  <div
                    className="absolute inset-0 z-10 flex flex-col justify-start px-6 py-6 border-4 border-gray-800 bg-gray-900 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div>
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-2">
                        {project.title}
                      </h1>
                    </div>

                    {/* Descrição: limitamos a linhas (fallback CSS inline) */}
                    <p className="leading-relaxed text-sm line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
