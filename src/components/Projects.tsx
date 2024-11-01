import { projects } from "../constants";

export default function Projects() {
    return (
        <section className="pb-[5rem] text-white">
            <h2 className="mb-10 text-center text-4xl lg:text-6xl">Projekter</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-3xl">
                        <img
                            src={project.image ? project.image : 'https://placehold.co/350x350'}
                            alt={project.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 touch-action-manipulation">
                            <div className="w-full max-w-[90%] p-4 sm:p-6">
                                <h3 className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white text-center">{project.name}</h3>
                                <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg text-white text-center">{project.description}</p>
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block w-fit mx-auto rounded-full px-4 py-2 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300"
                                    >
                                        <div className="flex items-center justify-center">
                                            <span className="text-xs sm:text-sm">See more</span>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}