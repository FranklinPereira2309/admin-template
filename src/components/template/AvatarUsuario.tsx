import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'
import Image from 'next/image'
import Avatar from '../../../public/imagens/avatar.svg'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {

    const { usuario } = useAuth()

    console.log(usuario?.imagemUrl)

    return (
        

            <Link href='/perfil'>
                <Image
                    src={usuario?.imagemUrl ?? Avatar}
                    alt="avatar do usuario"
                    height={40}
                    width={40}
                    className={`
                rounded-full cursor-pointer dark:text-white`}
                />
            </Link>
       
    )
}

