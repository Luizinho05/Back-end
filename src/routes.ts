import { Router } from 'express'

//Criar
import { CriarUsuariosController } from './controller/Usuarios/CriarUsuariosController'
import { CriarProdutosController } from './controller/Produtos/CriarProdutosController'
import { CriarClientesController } from './controller/Clientes/CriarClientesController'
//Listar
import { ListarClientesController } from './controller/Clientes/ListarClientesController'
//Deletar
import { DeletarClientesController } from './controller/Clientes/DeletarClientesController'

const router = Router()

//Usuario
router.post('/CriarUsuario', new CriarUsuariosController().handle)
//Produto
router.post('/CriarProduto', new CriarProdutosController().handle)
//Cliente
router.post('/CriarCliente', new CriarClientesController().handle)
router.get('/ListarCliente', new ListarClientesController().handle)
router.delete('/DeletarCliente', new DeletarClientesController().handle)

export{router}