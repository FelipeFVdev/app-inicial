interface BotoesProps {
   inc: (valor: number) => void
   dec: (valor: number) => void
}

export default function Display(props: BotoesProps) {

    return (
        <div className="flex justify-between pt-2 gap-2">
            <button className="botao flex-1 bg-blue-500 text-white font-bold py-2 px-4 rouneded" onClick={() => props.dec(13)}>
                Dec
            </button>
            <button className="botao flex-1 bg-blue-500 text-white font-bold py-2 px-4 rouneded" onClick={() => props.inc(10)}>
                Inc
            </button>
        </div>
    )

}