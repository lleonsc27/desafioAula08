const produtos = [];

function primeiraMaiuscula(entrada) {
    return entrada.charAt(0).toUpperCase() + entrada.substring(1).toLowerCase();
}

function numero(entrada) {
    return entrada.replace(/[^\d.,]/g, "");
}

function CriarProduto(nome, cor, peso, preco) {
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
    this.preco = preco;
}

function mostrarNomesDosProdutosAlert() {
    var nomesDosProdutos = "Produtos cadastrados:\n\n";
    produtos.forEach((produto) => {
        nomesDosProdutos += produto.nome + "\n";
    });
    alert(nomesDosProdutos);
}

function selecionarProduto(produto) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === produto) {
            return i;
        }
    }
    alert("Produto não encontrado!")
    return -1;
}

while (true) {

    let entrada = prompt(`Sistema de gerenciamento de produtos.\n\nPor favor, selecione uma das opções abaixo digitando o número correspondente:\n\n1 - Adicionar produto\n2 - Editar produto\n3 - Excluir produto\n4 - Ver produto\n\nPara encerrar o programa, digite "Sair".`);


    if (entrada.toUpperCase() === "SAIR") {
        break;
    } else if (entrada <1 || entrada >4 || isNaN(entrada)){
        alert("Entrada inválida!");
    }

    switch(entrada) {
        case "1":
            adicionarProduto();
            break;
        case "2":
            editarProduto();
            break;
        case "3":
            excluirProduto();
            break;
        case "4":
            verProduto();
            break;
    }
}

function adicionarProduto() {
    let entradaNome = primeiraMaiuscula(prompt("Digite o nome do produto:\n\nDigite \"Menu\" para voltar ao menu inicial"));

    if (entradaNome.toUpperCase() === "MENU") {
        return;
    } 

    let nome = entradaNome;
    let cor = primeiraMaiuscula(prompt("Digite a cor do produto:"));
    let peso = parseInt(numero(prompt("Digite o peso do produto:"))) + "g";
    let preco = "R$" + parseFloat(numero(prompt("Digite o preço do produto:").replace(",", "."))).toFixed(2).replace(".", ",");

    const produto = new CriarProduto (nome, cor, peso, preco);
    produtos.push(produto);

    mostrarNomesDosProdutosAlert();
}

function editarProduto() {
    mostrarNomesDosProdutosAlert();

    let produtoParaEditar = primeiraMaiuscula(prompt("Qual produto você deseja alterar?\n\nDigite \"Menu\" para voltar ao menu inicial"));

    if (produtoParaEditar.toUpperCase() === "MENU") {
        return;
    } 

    let paraEditar = selecionarProduto(produtoParaEditar);

    if (paraEditar === -1) {
        return;
    }

    alert(`Informações que podem ser alteradas:\n\nNome: ${produtos[paraEditar].nome}\nCor: ${produtos[paraEditar].cor}\nPeso: ${produtos[paraEditar].peso}\nPreço: ${produtos[paraEditar].preco}`);

    let propriedadeParaEditar = prompt("Digite o numero da propriedade você deseja alterar?\n\n1 - Nome\n2 - Cor\n3 - Peso\n4 - Preço\n\nDigite \"Menu\" para voltar ao menu inicial");

    if (propriedadeParaEditar.toUpperCase() === "MENU") {
        return;
    } else if (propriedadeParaEditar <1 || propriedadeParaEditar >4 || isNaN(propriedadeParaEditar)){
        alert("Entrada inválida!");
        return;
    }

    switch(propriedadeParaEditar) {
        case "1":
            let novoNome = primeiraMaiuscula(prompt("Digite o novo nome:"));
            produtos[paraEditar].nome = novoNome;
            break;
        case "2":
            let novaCor = primeiraMaiuscula(prompt("Digite a nova cor:"));
            produtos[paraEditar].cor = novaCor;
            break;
        case "3":
            let novoPeso = parseInt(numero(prompt("Digite o novo peso:"))) + "g";
            produtos[paraEditar].peso = novoPeso;
            break;
        case "4":
            let novoPreco = "R$" + parseFloat(numero(prompt("Digite o novo preço:").replace(",", "."))).toFixed(2).replace(".", ",");
            produtos[paraEditar].preco = novoPreco;
            break;
    }

    alert(`Informações atualizadas do produto:\n\nNome: ${produtos[paraEditar].nome}\nCor: ${produtos[paraEditar].cor}\nPeso: ${produtos[paraEditar].peso}\nPreço: ${produtos[paraEditar].preco}`);
}

function excluirProduto() {
    mostrarNomesDosProdutosAlert();

    let produtoParaExcluir = primeiraMaiuscula(prompt("Qual produto você deseja excluir?\n\nDigite \"Menu\" para voltar ao menu inicial"));

    if (produtoParaExcluir.toUpperCase() === "MENU") {
        return;
    } 

    let paraExcluir = selecionarProduto(produtoParaExcluir);

    if (paraExcluir === -1) {
        return;
    }
    
    produtos.splice(paraExcluir, 1);

    alert("Produto excluído com sucesso.");

    mostrarNomesDosProdutosAlert();
}

function verProduto() {
    mostrarNomesDosProdutosAlert();

    let produtoParaVer = primeiraMaiuscula(prompt("Qual produto você deseja ver?\n\nDigite \"Menu\" para voltar ao menu inicial"));

    if (produtoParaVer.toUpperCase() === "MENU") {
        return;
    } 

    let paraVer = selecionarProduto(produtoParaVer);

    if (paraVer === -1) {
        return;
    }

    alert(`Informações do produto:\n\nNome: ${produtos[paraVer].nome}\nCor: ${produtos[paraVer].cor}\nPeso: ${produtos[paraVer].peso}\nPreço: ${produtos[paraVer].preco}`);
}