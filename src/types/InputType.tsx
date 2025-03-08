import React from "react"

export interface InputType {
    placeholder:string 
    view:"normal" | "clear" ,
    size:"s" | "m" | "l" | "xl"
    type?:"number" | "text" | "password" | "email"
    name?:string,
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}