import useAppData from "../../data/hook/useAppData"
import AvatarUsuario from "./AvatarUsuario"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const {alternarTema, tema} = useAppData()
    return (
        <div className={`flex items-center`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex items-center flex-grow justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                <AvatarUsuario />
            </div>
            
            
        </div>
    )
}