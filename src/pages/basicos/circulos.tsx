import Circulo from "@/components/basicos/Circulo";

export default function PaginaCiruclos() {

    return (

        <div className="flex justify-around items-center h-screen">
            <Circulo texto="Cir #1"></Circulo>
            <Circulo texto="Cir #2"></Circulo>
            <Circulo texto="Cir #3" quasePerfeito={true}></Circulo>
            <Circulo texto="Cir #4"></Circulo>
        </div>

    )

}