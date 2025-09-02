export default function Habilidades() {
  return (
    <div id="habilidades" className="flex flex-col items-center mt-70 px-6">

      <div className="flex flex-col items-center mb-10">
        <h3 className="text-3xl text-white font-bold">Habilidades</h3>
        <p className="text-gray-400">Mis habilidades técnicas</p>
      </div>

      <div className="flex flex-col md:flex-row gap-35 text-white mt-25">

        <div className="flex flex-col items-start">
          <p className="mb-6 text-2xl font-bold">Frontend</p>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/css.png" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/javascript.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/tailwind.png" alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="mb-6 text-2xl font-bold">Backend</p>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/icons8-c-50.png" alt="C#" />
            <p>C#</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/laravel.png" alt="Laravel" />
            <p>Laravel</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12" src="src/media/mysql.png" alt="MySQL" />
            <p>MySQL</p>
          </div>
        </div>

        <div className="flex flex-col">
            <p className="mb-6 text-2xl font-bold">Otras Herramientas</p>
            <div className="flex items-center gap-2 mb-3">
                <img className="w-12 h-12" src="src\media\GitHub.png" alt="GitHub" />
                <p>GitHub</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
                <img className="w-12 h-12" src="src\media\chatbot.png" alt="Chatfuel" />
                <p>Chatfuel</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
                <img className="w-12 h-12" src="src\media\postman.png" alt="Postman" />
                <p>Postman</p>
            </div>
        </div>
      </div>
    </div>
  );
}
