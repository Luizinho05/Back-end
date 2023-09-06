import prismaClient from "../../prisma";

interface ExterminarUsuario{
    exterminar: string
}

class ExterminarUsuariosServices{
  async execute({
   exterminar
  }: ExterminarUsuario){
    
    await prismaClient.usuario.delete({
        where:{
            id: exterminar
        }
     })
      return {dados: 'Dado exterminado com sucesso'}
  } 
}

export {ExterminarUsuariosServices}