let texto = document.getElementById("texto");
let chutes = document.getElementById("chutes");
let numeroTentativas = document.getElementById("tentativas");
let btnChutar = document.getElementById("btn-chutar");
let btnReiniciar = document.getElementById("btn-reiniciar");

let numeroSecreto = Math.floor(Math.random() * 100 + 1);
let numerosChutados = [];
let tentativas = 0;

function chutar() {
    const chute = parseInt(document.getElementById("palpite").value);

    if (numerosChutados.includes(chute)) { return texto.textContent = "Número já chutado, tente outro", limparInput() }
    else if (chute < 1 || chute > 100 || isNaN(chute)) { return texto.textContent = "O número chutado de estar entre 1 e 100", limparInput() }
    else { numerosChutados.push(chute), tentativas++ }

    let palavaTentiva = tentativas > 1 ? "tentativas" : "tentativa";

    chutes.textContent = numerosChutados
    numeroTentativas.textContent = tentativas

    if (chute > numeroSecreto) { texto.textContent = `O número secreto é menor que ${chute}` }
    else if (chute < numeroSecreto) { texto.textContent = `O número secreto é maior que ${chute}` }
    else {
        texto.textContent = `Parabéns você descobriu o número secreto ${numeroSecreto}, em ${tentativas} ${palavaTentiva}`;
        alterarBotoes();
    }
    limparInput()
}

function reiniciar() {
    numeroSecreto = Math.floor(Math.random() * 100 + 1);
    texto.textContent = "Tente descobrir o número entre 1 e 100"
    tentativas = 0;
    numerosChutados = [];
    chutes.textContent = numerosChutados
    numeroTentativas.textContent = tentativas
    alterarBotoes();
}

function alterarBotoes() {
    if (btnReiniciar.disabled === true) { btnReiniciar.disabled = false, btnChutar.disabled = true }
    else { btnReiniciar.disabled = true, btnChutar.disabled = false }
    limparInput()
}

function limparInput() {
    document.getElementById("palpite").value = "";
}