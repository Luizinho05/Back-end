import prismaClient from "../../prisma"

interface DeletarCliente{
    deletar: string
}

class DeletarClientesServices{
    async execute({
        deletar
    }: DeletarCliente){

        await prismaClient.clients.delete({
            where:{
                id: deletar
            }
        })
        return {dados: 'Dados apagados com sucesso'}
    }
}

export {DeletarClientesServices}