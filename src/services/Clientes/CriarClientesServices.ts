import prismaClient from "../../prisma"

interface CriarCliente{
   nome:         string
   cpf:          string
   cnpj:         string
   rg:           string
   ie:           string
   telefone:     string
   telefoneFixo: string
   rua:          string
   complemento:  string
   bairro:       string
   cidade:       string
   estado:       string
}

class CriarClientesServices{
    async execute({
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
    }: CriarCliente){
       if (!nome || !cpf || !cnpj || !rg || !ie || !telefone ||
        !telefoneFixo || !rua ||!complemento || !bairro || !cidade || !estado){
            throw new Error('Campos em branco não são permitidos')
        }
        const DocumentoCadastrado = await prismaClient.clients.findFirst({
            where:{
                OR: [
                    {
                        cpf: cpf
                    },
                    {
                        rg: rg
                    }
                ]
            }
        })
        if (DocumentoCadastrado){
            throw new Error ('CPF ou RG já cadastrado')
        }

        const DadoCadastrado = await prismaClient.clients.findFirst({
            where:{
                OR: [
                    {
                        cnpj: cnpj
                    },
                    {
                        ie: ie
                    }
                ]
            }
        })
        if (DadoCadastrado){
            throw new Error('CNPJ ou IE já cadastrado')
        }

        await prismaClient.clients.create({
            data:{
                nome: nome,
                cpf: cpf,
                cnpj: cnpj,
                rg: rg,
                ie: ie,
                telefone: telefone,
                telefoneFixo: telefoneFixo,
                rua: rua,
                complemento: complemento,
                bairro,
                cidade: cidade,
                estado: estado
            }
        })
        return {dados: 'Seus dados foram salvos com Sucesso'}
    }
}

export {CriarClientesServices}