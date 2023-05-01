interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {

    return (
        <div className="flex justify-center items-center flex-1 text-5xl font-black bg-zinc-800 font-black rounded-md p-5">
            {props.valor}
        </div>
    )

}