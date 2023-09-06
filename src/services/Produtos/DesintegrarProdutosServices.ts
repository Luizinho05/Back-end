import prismaClient from "../../prisma";

interface DesintegrarProduto{
    desintegrar: string
}

class DesintegrarProdutosServices{
     async execute({
        desintegrar
     }: DesintegrarProduto){

        await prismaClient.product.delete({
            where:{
                id: desintegrar
            }
        })
        return {dados: 'O produto foi Desintegrado com êxito.'}
     }
}

export {DesintegrarProdutosServices}