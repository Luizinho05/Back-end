import prismaClient from "../../prisma"

interface CriarProduto{
    nome: string
    fabricante: string
    quantidade: string
    preco: string
}

class CriarProdutosServices{
     async execute({
        nome,
        fabricante,
        quantidade,
        preco
     }: CriarProduto){
        if ( !nome || !fabricante || !quantidade || !preco ){
            throw new Error ('Campos em branco não são permitidos!')
        }
        const produto = await prismaClient.product.create({
            data:{
               nome: nome,
               fabricante: fabricante,
               quantidade: quantidade,
               preco: preco
            },
            select:{
                nome: true,
                quantidade: true,
                preco: true
            }
        })
        return {dados: produto}
     }
}

export {CriarProdutosServices}