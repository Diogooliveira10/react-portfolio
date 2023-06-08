import { HiDownload } from 'react-icons/hi'

export function Hero() {
    return (
        <>
            <section className="bg-gradient-to-tr from-black to-gray-900 text-white">

                <div className="container mx-auto max-w-4xl p-2 py-12">
                    <div className="flex">
                        <div className='basis-1/2'>
                            <h1 className="mb-6"> 
                                <span className="font-handwriting block text-3xl">Olá, me chamo</span>
                                <span className="font-headline text-6xl font-semibold text-blue-400">Diogo </span>
                                <span className="font-headline text-5xl font-light text-blue-400">Oliveira Vieira</span>
                            </h1>

                            <h2 className="font-semibold flex items-center gap-2">
                                <div className="h-1 w-12 rounded-full bg-blue-800"/>
                                Desenvolvedor FullStack JavaScript
                            </h2>

                            <p className="text-gray-400 my-6">
                                Desenvolvedor Fullstack: Transformando ideias em realidade com React.js e Node.js - Construindo aplicações web de alto desempenho e usabilidade!
                            </p>

                            <div className="flex items-center gap-2">
                                <a href="#" className="underline font-bold text-white">Contato</a>
                                <span className="italic text-gray-200">ou</span>
                                <a href="#" className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"><HiDownload/> Baixar   Curriculum</a>
                            </div>
                        </div>
                    </div>
                            <div className='basis-1/2'></div>
                </div>
            </section>
        </>
    )
}