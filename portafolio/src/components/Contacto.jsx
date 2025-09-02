import { Phone, Mail, Github, MessageCircle } from "lucide-react";

export default function Contacto() {
  return (
    <div
      id="contacto"
      className="flex flex-col items-center justify-center mt-32 mb-20 px-6"
    >

      <h3 className="font-bold text-3xl text-white mb-8">Contacto</h3>

      <div className="bg-gradient-to-r from-cyan-700 to-blue-900 rounded-xl shadow-lg p-8 max-w-3xl w-full text-white">
        <div className="flex flex-col gap-6">
          <a
            href="https://wa.me/50588800237"
            target="_blank"
            className="flex items-center gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition"
          >
            <MessageCircle className="w-6 h-6 text-green-400" />
            <span className="text-lg">+505 8880 0237</span>
          </a>

          <a
            href="https://github.com/l3onte"
            target="_blank"
            className="flex items-center gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition"
          >
            <Github className="w-6 h-6 text-gray-300" />
            <span className="text-lg">github.com/l3onte</span>
          </a>

          <a
            href="mailto:l3ontejoelc@gmail.com"
            className="flex items-center gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition"
          >
            <Mail className="w-6 h-6 text-red-400" />
            <span className="text-lg">l3ontejoelc@gmail.com</span>
          </a>

          <a
            href="tel:+50588800237"
            className="flex items-center gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition"
          >
            <Phone className="w-6 h-6 text-blue-400" />
            <span className="text-lg">+505 8880 0237</span>
          </a>
        </div>
      </div>
    </div>
  );
}
