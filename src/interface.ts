import { log } from "console";

interface usuario {
    id: number,
    name: string,
    email: string,
    idade?: number
}

function criarUsuario(usuario: usuario): any {
    console.log(`usuário ${usuario.name} criado`);
}

criarUsuario({
    id: 1,
    email: 'examplo@email.com',
    name: 'Aluno'
})

interface produto {
      id: number,
    name: string,
    price: number,
    InStock?:boolean 
}

function exibirProduto(produto: produto) {
    log(`
        Seus produtos são:
        id ${produto.id},
        nome ${produto.name},
        preço ${produto.price},
        em estoque ${produto.InStock}
        `)
}

exibirProduto({
    id: 1,
    name: 'Fogão',
    price: 700,
    InStock: false 
})