import { Router } from 'express'

//Criar
import { CriarUsuariosController } from './controller/Usuarios/CriarUsuariosController'
import { CriarProdutosController } from './controller/Produtos/CriarProdutosController'
import { CriarClientesController } from './controller/Clientes/CriarClientesController'
//Listar
import { ListarClientesController } from './controller/Clientes/ListarClientesController'
import { ListarUsuariosController } from './controller/Usuarios/ListarUsuariosController'
import { ListarProdutosController } from './controller/Produtos/ListarProdutosServices'
//Deletar
import { DeletarClientesController } from './controller/Clientes/DeletarClientesController'
import { ExterminarUsuariosController } from './controller/Usuarios/ExterminarUsuariosController'
import { DesintegrarProdutosController } from './controller/Produtos/DesintegrarProdutosController'

const router = Router()

//Usuario
router.post('/CriarUsuario', new CriarUsuariosController().handle)
router.get('/ListarUsuario', new ListarUsuariosController().handle)
router.delete('/ExterminarUsuario', new ExterminarUsuariosController().handle)
//Produto
router.post('/CriarProduto', new CriarProdutosController().handle)
router.get('/ListarProduto', new ListarProdutosController().handle)
router.delete('/DesintegrarProduto', new DesintegrarProdutosController().handle)
//Cliente
router.post('/CriarCliente', new CriarClientesController().handle)
router.get('/ListarCliente', new ListarClientesController().handle)
router.delete('/DeletarCliente', new DeletarClientesController().handle)

export{router}