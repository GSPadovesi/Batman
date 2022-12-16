import { ReactNode } from "react"
import { TitlePage } from "./styles"

interface TitleProps{
    children: ReactNode;
}

export function Title({children}: TitleProps){
    return(
        <TitlePage>{children}</TitlePage>
    )
}