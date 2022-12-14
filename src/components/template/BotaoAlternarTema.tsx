import { IconeSol, IconeLua } from '../icons/index'

interface BotaoAlternarTemaProps {
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
        hidden sm:flex cursor-pointer text-black items-center  bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full mr-3
        `}>
            <div className={`flex items-center justify-center bg-white text-yellow-600 w-5 h-5 rounded-full `}>
                {IconeSol}
            </div>
            <div className={`
                hidden lg:flex items-center ml-4 text-white
            `}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
        hidden sm:flex cursor-pointer text-black items-center justify-end bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full mr-3
        `}>
            <div className={`
                hidden lg:flex items-center mr-2 text-gray-300 
            `}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`flex items-center justify-center bg-black text-yellow-300 w-5 h-5 rounded-full `}>
                {IconeLua}
            </div>
        </div>
            

    )
}