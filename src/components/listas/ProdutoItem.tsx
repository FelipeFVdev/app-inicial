import Produto from "@/model/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps){
    const {produto} = props
    return (
        <div className="flex flex-col border border-zinc-600 rounded-md p-1">
            <Image 
                src={produto.imagem} 
                    width={300} 
                    height={200} 
                    alt="Imagem Produto" 
                    className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-green-500 font-bold">{Moeda.formatar(produto.preco)}</div>
                </div>

                <div className="">
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>

                <div>
                    <button className="botao flex justify-center gap-2 w-full bg-blue-500 hover:to-blue-600 text-white font-bold py-2 px-4 rouneded"
                        onClick={() => props.comprar(produto)}>
                        <IconShoppingCart /> Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}
