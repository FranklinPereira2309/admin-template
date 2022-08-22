import Loading from '../../../public/imagens/loading.gif'
import Image from 'next/image'
import useAuth from '../../data/hook/useAuth'
import Router from 'next/router'
import Head from 'next/head'

export default function ForcarAutenticacao(props) {

    const {usuario, carregando} = useAuth()

    function renderizarConteudo() {
        return (
            <>
            <Head>
                <script
                    
                    dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie.includes('admin-template-dev-full=true')) {
                                window.location.href = '/autenticacao'
                            }
                        `
                    }}
                />
            </Head>
            {props.children}
            </>
        )
    }

    function rendereizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}
            >
                <Image src={Loading} />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    }else if(carregando) {
        return rendereizarCarregando()
    }else {
        Router.push('/autenticacao')
        return null
    }
}