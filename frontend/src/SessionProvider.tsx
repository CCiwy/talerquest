import React, { ReactNode } from 'react'


type LoginDataType = {
    userName: string
    password: string
} 

type SessionContextType = {
    login: (data: LoginDataType) => void
}


export const sessionContext = React.createContext<SessionContextType>({} as SessionContextType)


export const SessionProvider: React.FC<{children: ReactNode | ReactNode[] }> = ({children}) => {

    const login = (data: LoginDataType) => {
        console.log("login with dat:", {data})

    }

    return (
        <sessionContext.Provider
            value={{
                login,
            }}
            >
            { children }
            </sessionContext.Provider>
        )
}
