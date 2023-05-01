interface FilhoProps {
    nome: String;
    sobrenome: String; 
}

export default function Filho(props: FilhoProps) {

    return (
        <div className="flex justify-center items-center bg-green-500 border border-white rounded-md p-5">
            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Filho</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
        </div>
    )

}