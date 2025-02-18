let ListaNumerosSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.0});
}
function ExibirMensagemInicial(){
    exibirMensagemNaTela('h1', 'Jogo numero secreto');
    exibirMensagemNaTela('p', 'Escolha um numero de 1 a 10');
}

ExibirMensagemInicial();
function verificarChute (){
    let chute = document.querySelector('input').value;
    console.log(chute == NumeroSecreto);
    if (chute == NumeroSecreto){
        exibirMensagemNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirMensagemNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > NumeroSecreto){
            exibirMensagemNaTela ('p', 'o numero é menor');
        }
        else{
            exibirMensagemNaTela('p', 'o numero é maior');
        }
        tentativas++;
        limparCampo();

    }
    }

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantElementosNaLista = ListaNumerosSorteados.length;

    if(quantElementosNaLista == numeroLimite){
        ListaNumerosSorteados = [];
    }
    if (ListaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        ListaNumerosSorteados.push(numeroEscolhido);
        console.log(ListaNumerosSorteados);
        return numeroEscolhido;
    
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo (){
    NumeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}