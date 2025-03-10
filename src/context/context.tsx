import { createContext, FC, ReactNode, SetStateAction, useState } from "react";

interface ContextType {
    addModal:boolean,
    setAddModal:React.Dispatch<SetStateAction<boolean>>
    isEdit:"create" | "update",
    setIsEdit:React.Dispatch<SetStateAction<"create" | "update">>
    name:string,
    setName:React.Dispatch<SetStateAction<string>>
    price:string,
    setPrice:React.Dispatch<SetStateAction<string>>
    duration:string,
    setDuration:React.Dispatch<SetStateAction<string>>
    studyTime:string,
    setStudyTime:React.Dispatch<SetStateAction<string>>
    location:string,
    setLocation:React.Dispatch<SetStateAction<string>>
    teacher:string,
    setTeacher:React.Dispatch<SetStateAction<string>>
}

export const Context = createContext<ContextType>({
    addModal:false,
    setAddModal:() => null,
    isEdit:"create",
    setIsEdit:()=> null,
    name:"",
    setName:()=> null,
    price:"",
    setPrice:()=> null,
    duration:"",
    setDuration:()=> null,
    studyTime:"",
    setStudyTime:()=> null,
    location:"",
    setLocation:()=> null,
    teacher:"",
    setTeacher:()=> null,
})

export const GlobalContext:FC<{children:ReactNode}> = ({children}) => {
     const [addModal, setAddModal] = useState<boolean>(false)
     const [isEdit, setIsEdit] = useState<"create" | "update">("create")
     const [name, setName] = useState<string>("")
     const [price, setPrice] = useState<string>("")
     const [duration, setDuration] = useState<string>("")
     const [studyTime, setStudyTime] = useState<string>("")
     const [location, setLocation] = useState<string>("")
     const [teacher, setTeacher] = useState<string>("")
     return(
        <Context.Provider value={{addModal, setAddModal, isEdit, setIsEdit, name, setName, price, setPrice, duration, setDuration, studyTime, setStudyTime, location, setLocation, teacher, setTeacher}}>{children}</Context.Provider>
     )
}