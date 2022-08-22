import { createContext, useEffect, useState } from 'react'

interface AppContentProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContentProps>({})

export function AppProvider(props) {
    const [tema, setTema] = useState('dark')

    function alternarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={
            { alternarTema, tema}
        }>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext

