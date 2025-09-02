export default function Experiencia() {
  return (
    <div id="experiencia" className="flex flex-col items-center mt-32 px-6">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Experiencia</h2>
      <div className="bg-gradient-to-r from-cyan-700 to-blue-900 rounded-xl shadow-lg p-8 max-w-3xl w-full text-white">
        
        <h3 className="text-2xl font-semibold mb-1">Desarrollador Freelance (Remoto) - Proyecto administrativo</h3>
        <p className="text-gray-300 mb-6">Duración: 2 meses</p>

        <p className="mb-4 leading-relaxed">
          Durante este proyecto, trabajé como parte de un <strong>equipo remoto</strong> para desarrollar una <strong>página administrativa con Laravel</strong>, donde:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Contribuí a la creación de <strong>APIs</strong> que se conectaban con un <strong>chatbot en Chatfuel</strong>.</li>
          <li>Colaboré en la implementación de la gestión de pedidos enviados por los clientes a través del chatbot y almacenados en la base de datos.</li>
          <li>Participé en la generación automática de recibos y su envío a los clientes.</li>
          <li>Ayudé a administrar la información de pedidos y clientes a través de la interfaz web.</li>
        </ul>

        <p className="leading-relaxed">
          Este proyecto me permitió mejorar mis habilidades en <strong>desarrollo backend</strong>, integración de APIs y manejo de bases de datos, además de aprender a trabajar de manera efectiva en un equipo remoto.
        </p>

      </div>
      <img 
        src="/media/Rosas-y-Mas.png" 
        alt="Proyecto Administrativo" 
        className="mt-6 w-full max-w-3xl rounded-xl shadow-xl object-cover hover:scale-105 transition-transform"
      />

        <div className="mt-6 w-full max-w-3xl rounded-xl shadow-xl overflow-hidden bg-black">
            <video 
                src="/media/Demostracion-muted.mp4" 
                muted 
                loop 
                controls
                className="w-full max-h-80 md:max-h-96 rounded-xl"
            />
        </div>


    </div>
  );
}
