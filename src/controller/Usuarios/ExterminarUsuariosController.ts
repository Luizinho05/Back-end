import { Request, Response } from 'express'
import { ExterminarUsuariosServices } from '../../services/Usuarios/ExterminarUsuariosServices'

class ExterminarUsuariosController{
     async handle(req: Request, res: Response){
    const { exterminar } = req.body
    const exterminarUsuariosServices = new ExterminarUsuariosServices()
    const apagar = await exterminarUsuariosServices.execute({
        exterminar
    })
    return res.json(apagar)
     }
}

export {ExterminarUsuariosController}