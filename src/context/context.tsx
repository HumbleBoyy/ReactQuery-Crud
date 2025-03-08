import { createContext, FC, ReactNode, SetStateAction, useState } from "react";

interface ContextType {
    addModal:boolean,
    setAddModal:React.Dispatch<SetStateAction<boolean>>
}

export const Context = createContext<ContextType>({
    addModal:false,
    setAddModal:() => null
})

export const GlobalContext:FC<{children:ReactNode}> = ({children}) => {
     const [addModal, setAddModal] = useState<boolean>(false)
     return(
        <Context.Provider value={{addModal, setAddModal}}>{children}</Context.Provider>
     )
}