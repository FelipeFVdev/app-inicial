import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./IfElse"

interface PerguntaProps {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {

    return (
        <div className="border border-white rounded-md overflow-hidden">

            <div className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between"
                onClick={() => props.alternarVisibilidade(props.indice)}>
                <span>{props.texto}</span>

                {/* <IfElse teste={aberta}>
                    <IconChevronDown />
                    <IconChevronUp />
                </IfElse> */}

                {props.aberta ? <IconChevronDown /> : <IconChevronUp />}
                
            </div>

            <If teste={props.aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>                 
            </If>
        </div>
    )
}