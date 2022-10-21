const colunasTabela = 8;
const linhasTabela = 4;
const elementosTabela = [];
let opcaoSelecionada = "";
let vetor = [];
let ultimoIndiceComparado;
let rodada;
let esquerda;
let direita;

function start() {
    // debugger;
    renderizaVetor();
    criarTabela();
    desenhaPrimeiraLinha();
    ultimoIndiceComparado = 0;
    rodada = 1;
    desenhaTabela();
    esquerda = [];
    direita = [];
}

function criarTabela() {
    const numeroElementos = colunasTabela * linhasTabela;

    for (let i = 0; i < numeroElementos; i++) {
        elementosTabela[i] = "";
    }
}

function renderizaVetor() {
    for (let i = 0; i < colunasTabela; i++) {
        do {
            const random = Math.floor(Math.random() * 10);
            if (random > 0 && (vetor.find(item => item.valor === random) === undefined) && random < 9) {
                var elemento = { valor: random, imagem: null, widImg: 0, heiImg: 0 };
                switch (random) {
                    case 1:
                        elemento.imagem = "img/1grapes.png";
                        elemento.widImg = 60;
                        elemento.heiImg = 100;
                        break;
                    case 2:
                        elemento.imagem = "img/2strawberry.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    case 3:
                        elemento.imagem = "img/3lemon.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    case 4:
                        elemento.imagem = "img/4apple.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    case 5:
                        elemento.imagem = "img/5banana.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    case 6:
                        elemento.imagem = "img/6avocado.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    case 7:
                        elemento.imagem = "img/7pineapple.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    case 8:
                        elemento.imagem = "img/8watermelon.png";
                        elemento.widImg = 100;
                        elemento.heiImg = 100;
                        break;
                    default:
                        break;

                        return elemento;
                }
                vetor.push(elemento);
            }
        } while (vetor.length < colunasTabela);
        debugger;
    }
}

function adicionaImagem(random) {


}

function desenhaPrimeiraLinha() {
    for (let coluna = 0; coluna < colunasTabela; coluna++) {
        elementosTabela[coluna] = vetor[coluna];
    }
}

function desenhaTabela() {
    let html = "<table cellspacing='0'>";
    for (let linha = 0; linha < linhasTabela; linha++) {
        html += "<tr>";
        for (let coluna = 0; coluna < colunasTabela; coluna++) {
            const indicePixel = coluna + linha * colunasTabela
            const elementoAtual = elementosTabela[indicePixel];
            debugger;
            html += `<td id="${indicePixel}">`
            html += `<div class="pixel-index">${elementoAtual.valor}</div>`
            html += `<img src="${elementoAtual.imagem}" width="${elementoAtual.widImg}" height="${elementoAtual.heiImg}">`
            html += `</td>`
        }
        html += "</tr>";
    }
    html += "</table>";

    document.querySelector("#elemento").innerHTML = html;
    if (ultimoIndiceComparado < 8) {
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 1)).classList.add("direita");
    } else if (ultimoIndiceComparado < 12) {
        document.querySelector("#" + CSS.escape(8)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(9)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(10)).classList.add("direita");
        document.querySelector("#" + CSS.escape(11)).classList.add("direita");
    } else if (ultimoIndiceComparado < 16) {
        document.querySelector("#" + CSS.escape(12)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(13)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(14)).classList.add("direita");
        document.querySelector("#" + CSS.escape(15)).classList.add("direita");
    } else if (ultimoIndiceComparado < 24) {
        document.querySelector("#" + CSS.escape(16)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(17)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(18)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(19)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(20)).classList.add("direita");
        document.querySelector("#" + CSS.escape(21)).classList.add("direita");
        document.querySelector("#" + CSS.escape(22)).classList.add("direita");
        document.querySelector("#" + CSS.escape(23)).classList.add("direita");

    }
}

function comparaValores(esquerda, direita) {
    return Math.min(...esquerda) < Math.min(...direita) ? "E" : "D";
}

function efetuaPrimeiraRodadaComparativa() {
    esquerda = elementosTabela[ultimoIndiceComparado];
    direita = elementosTabela[ultimoIndiceComparado + 1];

    if (opcaoSelecionada == comparaValores([esquerda], [direita])) {
        if (opcaoSelecionada == "E") {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = esquerda;
            elementosTabela[ultimoIndiceComparado + colunasTabela + 1] = direita;
        } else {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = direita;
            elementosTabela[ultimoIndiceComparado + colunasTabela + 1] = esquerda;
        }
        ultimoIndiceComparado = ultimoIndiceComparado + 2;
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 1)).classList.remove("direita");
    } else {
        chacoalhaTela();
    }
    desenhaTabela();
}

function efetuaSegundaRodadaComparativa() {
    if ((ultimoIndiceComparado % 4) == 0) {
        esquerda = [elementosTabela[ultimoIndiceComparado], elementosTabela[ultimoIndiceComparado + 1]];
        direita = [elementosTabela[ultimoIndiceComparado + 2], elementosTabela[ultimoIndiceComparado + 3]];
    }

    if (opcaoSelecionada == comparaValores(esquerda, direita)) {
        if (opcaoSelecionada == "E") {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = Math.min(...esquerda);
            removeMenorDoArray(esquerda);
        } else {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = Math.min(...direita);
            removeMenorDoArray(direita);
        }
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 1)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 2)).classList.remove("direita");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 3)).classList.remove("direita");
        ultimoIndiceComparado = ultimoIndiceComparado + 1;
    } else {
        chacoalhaTela();
    }
    desenhaTabela();
}

function efetuaTerceiraRodadaComparativa() {
    if ((ultimoIndiceComparado % 8) == 0) {
        esquerda = [elementosTabela[ultimoIndiceComparado], elementosTabela[ultimoIndiceComparado + 1], elementosTabela[ultimoIndiceComparado + 2], elementosTabela[ultimoIndiceComparado + 3]];
        direita = [elementosTabela[ultimoIndiceComparado + 4], elementosTabela[ultimoIndiceComparado + 5], elementosTabela[ultimoIndiceComparado + 6], elementosTabela[ultimoIndiceComparado + 7]];
    }

    if (opcaoSelecionada == comparaValores(esquerda, direita)) {
        if (opcaoSelecionada == "E") {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = Math.min(...esquerda);
            removeMenorDoArray(esquerda);
        } else {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = Math.min(...direita);
            removeMenorDoArray(direita);
        }
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 1)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 2)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 3)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 4)).classList.remove("direita");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 5)).classList.remove("direita");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 6)).classList.remove("direita");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 7)).classList.remove("direita");
        ultimoIndiceComparado = ultimoIndiceComparado + 1;
    } else { chacoalhaTela(); }
    desenhaTabela();
}

function chacoalhaTela() {
    document.querySelector("#jogo").classList.add("tremendo");
    setTimeout(() => {
        document.querySelector("#jogo").classList.remove("tremendo");
    }, 1000);

}

function pontuacao() {

}

function escolheOpcao(opcao) {
    opcaoSelecionada = opcao;
    if (ultimoIndiceComparado < 8) {
        desenhaTabela();
        efetuaPrimeiraRodadaComparativa();
    } else if (ultimoIndiceComparado < 16) {
        desenhaTabela();
        efetuaSegundaRodadaComparativa();
    } else if (ultimoIndiceComparado < 24) {
        desenhaTabela();
        efetuaTerceiraRodadaComparativa();
    }
}

function removeMenorDoArray(vetor) {
    const indiceRemover = vetor.indexOf(Math.min(...vetor));
    if (indiceRemover > -1) {
        vetor.splice(indiceRemover, 1)
    }
    return vetor;
}


start();