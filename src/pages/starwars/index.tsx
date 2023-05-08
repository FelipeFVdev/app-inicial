import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens} = useStarWars()

    
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Background></Background>
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                    <Personagens personagens={personagens}></Personagens>
            ) : (
                <div>Nenhum personagem encontrado!</div>
            )}
            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
                Obter
            </button>
        </div>
    )
}