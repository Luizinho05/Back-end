import {Request, Response } from 'express'
import { DeletarClientesServices } from '../../services/Clientes/DeletarClientesServices'

class DeletarClientesController{
      async handle(req: Request, res: Response){
        const { deletar } = req.body
        const deletarClientesServices = new DeletarClientesServices()
        const apagar = await deletarClientesServices.execute({
            deletar
        })
        return res.json(apagar)
      }
}   

export {DeletarClientesController}