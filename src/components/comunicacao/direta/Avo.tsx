import Pai from "./Pai";

interface AvoProps {
    nome: String;
    sobrenome: String; 
}

export default function Avo(props: AvoProps) {

    return (
        <div className="flex flex-col gap-5 p-5 bg-purple-500 text-white border border-white rounded-md">
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Avo</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Pai nome="Joao" sobrenome={props.sobrenome}></Pai>
                <Pai nome="Felip Jr" sobrenome={props.sobrenome}></Pai>
                <Pai nome="Pedro" sobrenome={props.sobrenome}></Pai>
            </div>
        </div>
    )

}