const colunasTabela = 10;
const linhasTabela = 4;
const elementosTabela = [];
let opcaoSelecionada = "";
let vetor = [];
let ultimoIndiceComparado;
let rodada;
let esquerda;
let direita;
let pontuacao;

function start() {
    renderizaVetor();
    criarTabela();
    desenhaPrimeiraLinha();
    ultimoIndiceComparado = 0;
    rodada = 1;
    desenhaTabela();
    esquerda = [];
    direita = [];
    document.onkeydown = checkKey;
    pontuacao = 0;
    atualizaPontuacao();
    document.querySelector("#balao-alerta h3").innerHTML = "";
}

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        escolheOpcao('E');
    } else if (e.keyCode == '39') {
        escolheOpcao('D');
    } else if (e.keyCode == '32') {
        start();
    }

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
            const random = Math.floor(Math.random() * 11);
            if (random > 0 && (vetor.find(item => item.valor === random) === undefined) && random < 11) {
                var elemento = { valor: random, imagem: null, widImg: 0, heiImg: 0 };
                switch (random) {
                    case 1:
                        elemento.imagem = "img/1blackberry.png";
                        elemento.widImg = 17;
                        elemento.heiImg = 22;
                        break;
                    case 2:
                        elemento.imagem = "img/2strawberry.png";
                        elemento.widImg = 17;
                        elemento.heiImg = 22;
                        break;
                    case 3:
                        elemento.imagem = "img/3lemon.png";
                        elemento.widImg = 27;
                        elemento.heiImg = 27;
                        break;
                    case 4:
                        elemento.imagem = "img/4apple.png";
                        elemento.widImg = 25;
                        elemento.heiImg = 25;
                        break;
                    case 5:
                        elemento.imagem = "img/5banana.png";
                        elemento.widImg = 25;
                        elemento.heiImg = 50;
                        break;
                    case 6:
                        elemento.imagem = "img/6mango.png";
                        elemento.widImg = 40;
                        elemento.heiImg = 45;
                        break;
                    case 7:
                        elemento.imagem = "img/7avocado.png";
                        elemento.widImg = 36;
                        elemento.heiImg = 42;
                        break;
                    case 8:
                        elemento.imagem = "img/8pineapple.png";
                        elemento.widImg = 44;
                        elemento.heiImg = 54;
                        break;
                    case 9:
                        elemento.imagem = "img/9watermelon.png";
                        elemento.widImg = 44;
                        elemento.heiImg = 45;
                        break;
                    case 10:
                        elemento.imagem = "img/10jackfruit.png";
                        elemento.widImg = 48;
                        elemento.heiImg = 53;
                        break;
                    default:
                        break;

                        return elemento;
                }
                vetor.push(elemento);
            }
        } while (vetor.length < colunasTabela);
    }
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
            html += `<td id="${indicePixel}">`
                // html += `<div class="pixel-index">${indicePixel}</div>`
            html += `<img src="${elementoAtual.imagem !== undefined ? elementoAtual.imagem : ''}" width="${elementoAtual.widImg !== undefined ? elementoAtual.widImg : ''}" height="${elementoAtual.heiImg !== undefined ? elementoAtual.heiImg : ''}">`
            html += `<div class="pixel-size">${elementoAtual.valor !== undefined ? elementoAtual.valor : ''}</div>`
            html += `</td>`
        }
        html += "</tr>";
    }
    html += "</table>";

    document.querySelector("#elemento").innerHTML = html;
    if (ultimoIndiceComparado < 10) {
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 1)).classList.add("direita");
    } else if (ultimoIndiceComparado < 15) {
        document.querySelector("#" + CSS.escape(10)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(11)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(12)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(13)).classList.add("direita");
        document.querySelector("#" + CSS.escape(14)).classList.add("direita");
    } else if (ultimoIndiceComparado < 20) {
        document.querySelector("#" + CSS.escape(15)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(16)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(17)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(18)).classList.add("direita");
        document.querySelector("#" + CSS.escape(19)).classList.add("direita");
    } else if (ultimoIndiceComparado < 30) {
        document.querySelector("#" + CSS.escape(20)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(21)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(22)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(23)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(24)).classList.add("esquerda");
        document.querySelector("#" + CSS.escape(25)).classList.add("direita");
        document.querySelector("#" + CSS.escape(26)).classList.add("direita");
        document.querySelector("#" + CSS.escape(27)).classList.add("direita");
        document.querySelector("#" + CSS.escape(28)).classList.add("direita");
        document.querySelector("#" + CSS.escape(29)).classList.add("direita");
    } else {
        document.querySelectorAll("td").classList.remove("esquerda");
        document.querySelectorAll("td").classList.remove("direita");
    }
}

function comparaValores(esquerda, direita) {
    let esquerdaMin = esquerda.length > 0 ? esquerda[0].valor : colunasTabela + 1;
    let direitaMin = direita.length > 0 ? direita[0].valor : colunasTabela + 1;

    for (let i = 0; i < esquerda.length; i++) {
        esquerdaMin = (esquerda[i].valor < esquerdaMin) ? esquerda[i].valor : esquerdaMin;
    }
    for (let i = 0; i < direita.length; i++) {
        direitaMin = (direita[i].valor < direitaMin) ? direita[i].valor : direitaMin;
    }
    return esquerdaMin < direitaMin ? "E" : "D";
}

function recuperaMenorValor(vetor) {
    let vetorMin = vetor.length > 0 ? vetor[0].valor : vetor.length;

    for (let i = 0; i < vetor.length; i++) {
        vetorMin = (vetor[i].valor < vetorMin) ? vetor[i].valor : vetorMin;
    }

    return vetorMin;
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
        document.querySelector("#balao-alerta h3").innerHTML = "Parab??ns voc?? acertou!";
        document.querySelector("#balao-alerta").style.backgroundColor = '#c4fddf';
        pontuacao += 5;
    } else {
        pontuacao = pontuacao - 4 >= 0 ? pontuacao - 4 : 0;
        document.querySelector("#balao-alerta h3").innerHTML = "Tente Novamente!";
        document.querySelector("#balao-alerta").style.backgroundColor = '#f8c2bc';
        chacoalhaTela();
    }
    desenhaTabela();
}

function efetuaSegundaRodadaComparativa() {
    if (ultimoIndiceComparado == 10) {
        esquerda = [elementosTabela[ultimoIndiceComparado], elementosTabela[ultimoIndiceComparado + 1], elementosTabela[ultimoIndiceComparado + 2]];
        direita = [elementosTabela[ultimoIndiceComparado + 3], elementosTabela[ultimoIndiceComparado + 4]];
    } else if (ultimoIndiceComparado == 15) {
        esquerda = [elementosTabela[ultimoIndiceComparado], elementosTabela[ultimoIndiceComparado + 1], elementosTabela[ultimoIndiceComparado + 2]];
        direita = [elementosTabela[ultimoIndiceComparado + 3], elementosTabela[ultimoIndiceComparado + 4]];
    }
    if (opcaoSelecionada == comparaValores(esquerda, direita)) {
        if (opcaoSelecionada == "E") {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = buscaMenorNoVetor(esquerda);
            removeMenorDoArray(esquerda);
        } else {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = buscaMenorNoVetor(direita);
            removeMenorDoArray(direita);
        }
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 1)).classList.remove("esquerda");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 2)).classList.remove("direita");
        document.querySelector("#" + CSS.escape(ultimoIndiceComparado + 3)).classList.remove("direita");
        document.querySelector("#balao-alerta h3").innerHTML = "Parab??ns voc?? acertou!";
        document.querySelector("#balao-alerta").style.backgroundColor = '#c4fddf';
        ultimoIndiceComparado = ultimoIndiceComparado + 1;
        pontuacao += 5;
    } else {
        pontuacao = pontuacao - 4 >= 0 ? pontuacao - 4 : 0;
        document.querySelector("#balao-alerta h3").innerHTML = "Tente Novamente!";
        document.querySelector("#balao-alerta").style.backgroundColor = '#f8c2bc';
        chacoalhaTela();
    }
    desenhaTabela();
}

function efetuaTerceiraRodadaComparativa() {
    if (ultimoIndiceComparado == 20) {
        esquerda = [elementosTabela[ultimoIndiceComparado], elementosTabela[ultimoIndiceComparado + 1], elementosTabela[ultimoIndiceComparado + 2], elementosTabela[ultimoIndiceComparado + 3], elementosTabela[ultimoIndiceComparado + 4]];
        direita = [elementosTabela[ultimoIndiceComparado + 5], elementosTabela[ultimoIndiceComparado + 6], elementosTabela[ultimoIndiceComparado + 7], elementosTabela[ultimoIndiceComparado + 8], elementosTabela[ultimoIndiceComparado + 9]];
    }
    if (opcaoSelecionada == comparaValores(esquerda, direita)) {
        if (opcaoSelecionada == "E") {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = buscaMenorNoVetor(esquerda);
            removeMenorDoArray(esquerda);
        } else {
            elementosTabela[ultimoIndiceComparado + colunasTabela] = buscaMenorNoVetor(direita);
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
        document.querySelector("#balao-alerta h3").innerHTML = "Parab??ns voc?? acertou!";
        document.querySelector("#balao-alerta").style.backgroundColor = '#c4fddf';
        ultimoIndiceComparado = ultimoIndiceComparado + 1;
        pontuacao += 5;
        if (ultimoIndiceComparado == 30) {
            if (pontuacao >= 50) {
                document.querySelector("#balao-alerta h3").innerHTML = "Parab??ns voc?? completou a ordena????o com sucesso.";
            } else {
                document.querySelector("#balao-alerta h3").innerHTML = "Voc?? n??o atingiu a pontua????o necess??ria, reinicie o jogo.";
            }
        }
    } else {
        pontuacao = pontuacao - 4 >= 0 ? pontuacao - 4 : 0;
        document.querySelector("#balao-alerta h3").innerHTML = "Tente Novamente!";
        document.querySelector("#balao-alerta").style.backgroundColor = '#f8c2bc';
        chacoalhaTela();
    }
    desenhaTabela();
}

function chacoalhaTela() {
    document.querySelector("#jogo").classList.add("tremendo");
    setTimeout(() => {
        document.querySelector("#jogo").classList.remove("tremendo");
    }, 1000);

}

function escolheOpcao(opcao) {
    opcaoSelecionada = opcao;
    if (ultimoIndiceComparado < 10) {
        desenhaTabela();
        efetuaPrimeiraRodadaComparativa();
    } else if (ultimoIndiceComparado < 20) {
        desenhaTabela();
        efetuaSegundaRodadaComparativa();
    } else if (ultimoIndiceComparado < 30) {
        desenhaTabela();
        efetuaTerceiraRodadaComparativa();
    }
    atualizaPontuacao();
}

function atualizaPontuacao() {
    document.querySelector("#pontuacaoContainer").innerHTML = pontuacao;
}

function removeMenorDoArray(vetor) {
    let menorDoVetor = vetor[0].valor;
    let indiceRemover = -1;


    for (let i = 0; i < vetor.length; i++) {
        indiceRemover = (vetor[i].valor <= menorDoVetor) ? i : indiceRemover;
    }
    if (indiceRemover > -1) {
        vetor.splice(indiceRemover, 1)
    }
    return vetor;
}

function buscaMenorNoVetor(vetor) {
    let menorDoVetor = vetor[0];

    for (let i = 0; i < vetor.length; i++) {
        menorDoVetor = (vetor[i].valor <= menorDoVetor.valor) ? vetor[i] : menorDoVetor;
    }

    return menorDoVetor;
}

start();