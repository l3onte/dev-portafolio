export default function ContactButton() {
    return (
        <a href="#contacto" className="flex items-center gap-5 p-10 bg-blue-600 hover:bg-blue-700 
                        text-white font-bold py-2 px-15 rounded cursor-pointer
                        ">
            Contáctame
            <img src="/media/enviar.png" alt="" className="size-5"/>
        </a>   
    )
}