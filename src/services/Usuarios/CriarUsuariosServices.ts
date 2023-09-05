import prismaClient from '../../prisma'

interface CriarUsuario{
    nome: string
    email: string
    senha: string
}

class CriarUsuariosServices{
    async execute({
        nome,
        email,
        senha
    }: CriarUsuario){
        if (!nome || !email || !senha){
          throw new Error('Campos em branco não são permitidos')
        }
          const emailCadastrado = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
          })
          if (emailCadastrado){
            throw new Error('Esse Email já ta cadastrado')
        }

        const usuario = await prismaClient.usuario.create({
            data:{
              nome: nome,
              email: email,
              senha: senha
            },
            select:{
              id: true,
              nome: true,
              email: true
            }
        })
        return{dados: usuario}
    }
}

export {CriarUsuariosServices}