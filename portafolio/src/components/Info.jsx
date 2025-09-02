import ContactButton from "./ContactButton";

export default function Info() {
    return (
        <div className="flex flex-col justify-center items-center text-white max-w-3xl mx-auto mt-32 px-6 py-10  gap-4 
                        bg-gradient-to-r from-cyan-700 to-blue-900 rounded-lg shadow-lg">
            
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Hola, soy Leonte Joel Canales Berrios</h2>
                <p className=" leading-relaxed mt-6">
                   Estudiante de 3er año de Ingeniería en Sistemas, apasionado por el desarrollo de software y la creación de soluciones tecnológicas innovadoras. Me interesa aprender nuevas tecnologías, mejorar mis habilidades en programación y contribuir en proyectos que tengan un impacto real.
                </p>
            </div>

            <ContactButton />
        </div>
    );
}