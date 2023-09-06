import {Request, Response} from 'express'
import { DesintegrarProdutosServices } from '../../services/Produtos/DesintegrarProdutosServices'

class DesintegrarProdutosController{
    async handle(req: Request, res: Response){
    const { desintegrar } = req.body
    const desintegrarProdutosServices = new DesintegrarProdutosServices()
    const quebrar = await desintegrarProdutosServices.execute({
        desintegrar
    })
    return res.json(quebrar)
    }
}

export {DesintegrarProdutosController}