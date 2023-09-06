import prismaClient from "../../prisma";

class ListarUsuariosServices{
    async execute(){
        const usuario = await prismaClient.usuario.findMany({})
        return(usuario)
    }
}

export {ListarUsuariosServices}