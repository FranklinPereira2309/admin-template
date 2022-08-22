import MenuItem from "./MenuItem";
import {IconeCasa, IconeAjustes, IconeSino, IconeSair} from '../icons'
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral() {
    const {logout} = useAuth()
    return (
        <aside className="flex flex-col bg-gray-200 dark:bg-gray-900">
            <div className={`
                flex flex-col items-center justify-center
                h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url='/' texto='Início' icone={IconeCasa}/>
                <MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes}/>
                <MenuItem url='/novidades' texto='Novidades' icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem onClick={logout} texto='Sair' icone={IconeSair} className={`
                    text-red-600 hover:bg-red-400 hover:text-white
                    dark:hover:text-white dark:text-red-400
                `}/>
            </ul>
        </aside>
    )
}