import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    const { processando, inciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])
  

    async function simularChamadaApi() {
      const resp = await fetch('https://swapi.dev/api/people/')
      const dados = await resp.json()
      console.log(dados)
      setPersonagens(dados.results)
    }
  
    async function obterPersonagens() {
      try {
          inciarProcessamento()
          await simularChamadaApi()
      } finally {
          finalizarProcessamento()
      }
    }

    return {
        personagens,
        obterPersonagens,
        processando
    }
}