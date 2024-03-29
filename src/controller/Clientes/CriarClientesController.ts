import { Request, Response } from 'express'
import { CriarClientesServices } from '../../services/Clientes/CriarClientesServices'

class CriarClientesController{
    async handle (req: Request, res: Response){
    const { nome, cpf, cnpj, rg, ie, telefone, telefoneFixo, rua,
         complemento, bairro, cidade, estado } = req.body

         const criarClientesServices = new CriarClientesServices()
         const cliente = await criarClientesServices.execute({
            nome,
            cpf,
            cnpj,
            rg,
            ie,
            telefone,
            telefoneFixo,
            rua,
            complemento,
            bairro, 
            cidade, 
            estado
         })
         return res.json(cliente)
    }
}

export{CriarClientesController}