import prismaClient from "../../prisma";

class ListarProdutosServices{
   async execute(){
     const produto = await prismaClient.product.findMany({})
     return (produto)
   }
}

export {ListarProdutosServices}