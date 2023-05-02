import { useState } from "react";
import Pergunta from "./Pergunta";

interface PerguntaProps{
    texto: string;
    resposta: string;
    aberto: boolean;
}

export default function Faq(props: PerguntaProps) {

    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta aberta={ativo === 0} indice={0} alternarVisibilidade={alternarVisibilidade} texto="Quem descobriu o Brasil?" resposta="" ></Pergunta>
            <Pergunta aberta={ativo === 1} indice={1} alternarVisibilidade={alternarVisibilidade} texto="O que é TypeScript?" resposta="" ></Pergunta>
            <Pergunta aberta={ativo === 2} indice={2} alternarVisibilidade={alternarVisibilidade} texto="React é um framework?" resposta="" ></Pergunta>
            <Pergunta aberta={ativo === 3} indice={3} alternarVisibilidade={alternarVisibilidade} texto="Quais as funcionalidades do Next.js" resposta="" ></Pergunta>
        </div>
    )
}