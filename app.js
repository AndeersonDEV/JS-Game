let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumerioAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}

function exibirMensgameInicial(){
exibirTextoNaTela('h1','Ola Denis Volei')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirMensgameInicial()
function verificarChute(){
    let chute = document.querySelector('input').value;

   if ( chute == numeroSecreto){
    exibirTextoNaTela('h1','Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
    let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagem);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    
    if (chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor');
    }else{
        exibirTextoNaTela('p','O número secreto é maior');
    }
    tentativas++
    limparCampo()
   }
}

function gerarNumerioAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosLista = listaDeNumerosSorteados.length;

   if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
   }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumerioAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

}
function limparCampo(){
    chute =  document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumerioAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensgameInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}