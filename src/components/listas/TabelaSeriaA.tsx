
interface TabelaSeriaAProps {
    times: string[]
}

export default function TabelaSeriaA(props: TabelaSeriaAProps) {

    //transformar uma string -> <li>
    // const itens: any[] = []
    // for(let i = 0; i< props.times.length; i++) {
    //     itens.push(
    //         <li key={props.times[i]} className="text-xl list-decimal">
    //             {props.times[i]}
    //         </li>
    //     )
    // }

    //transformar uma string -> <li>
    const itens2 = props.times.map((time, i) => {
        return (
            <li key={time} className={`text-3xl list-decimal ${i % 2 === 0 ? 'text-blue-500' : 'text-red-400'} `}>
                {time}
            </li>            
        )
    })

    return (
        <ol>
            {itens2}
        </ol>
    )
}