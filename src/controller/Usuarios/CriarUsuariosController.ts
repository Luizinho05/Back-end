import { Request, Response } from 'express'
import { CriarUsuariosServices } from '../../services/Usuarios/CriarUsuariosServices'

class CriarUsuariosController{
      async handle(req: Request, res: Response){
        const { nome, email, senha } = req.body

        const criarUsuariosServices = new CriarUsuariosServices()
        const usuario = await criarUsuariosServices.execute({
           nome,
           email,
           senha
        })
        return res.json(usuario)
   }
}

export {CriarUsuariosController}