import useProcessando from "@/data/hooks/useProcessando";
import useStarWars from "@/data/hooks/useStarWars";
import { useState } from "react";

interface PersonagensProps {
    personagens: any
}

export default function PaginaStarWars(props: PersonagensProps) {


  function renderizarPersonagens() {
    return (
        <ul>
            {props.personagens.map((p: any) => ( 
                <li key={p.name}>{p.name}</li>
            ))}
        </ul>
    )
  }

  return (
    <div>
        {renderizarPersonagens()}
    </div>
  );
}
