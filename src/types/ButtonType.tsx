import { ReactNode } from "react";

export interface ButtonType {
    title:string,
    size:"xs" | "s" | "m" | "l" | "xl",
    children:ReactNode,
    extraClass?:string,
    view:"normal" | "action" | "raised" | "outlined" | "outlined-action" | "outlined-info" | "outlined-success" | "outlined-warning" | "outlined-danger" | "outlined-utility" | "flat" | "flat-action" | "flat-info" | "flat-success"
}