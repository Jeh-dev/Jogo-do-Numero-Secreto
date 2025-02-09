  let numeroSorteado = [];
  let numeroLimite = 4
  let numeroSecreto = numeroAleatorio();
  let tentativa = 1;

  function exibirTextoNatela (tag,texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
  }

  function mensagemInicial () {
exibirTextoNatela ('h1', 'Jogo do numero secreto')
exibirTextoNatela ('p', 'Escolha um numero entre 1 e 10');
  } 

  mensagemInicial()
  function verificarChute () {
  let chute = document.querySelector ('input').value;
if (chute == numeroSecreto) {
  exibirTextoNatela ('h1', 'Parabéns!!! ')
 let pTentativas = tentativa > 1 ? ' tentativas' : ' tentativa'
  let mensaTentativa = 'Vc descobriu o numero secreto com ' + tentativa + pTentativas
  exibirTextoNatela ('p', mensaTentativa);
  document.getElementById('reiniciar').removeAttribute ('disabled');
} else {
 if (chute > numeroSecreto) {
   exibirTextoNatela ('p', 'o numero secreto é menor')
 } else {
   if (chute < numeroSecreto) {
     exibirTextoNatela ('p', 'o numero secreto é maior')
    }
    }
    }
    tentativa++;
    limparCampo ();
  }

  function numeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
      let limitadorNumeros = numeroSorteado.length;

      if (limitadorNumeros == numeroLimite) {
        numeroSorteado = [];
      }

      if (numeroSorteado.includes(numeroEscolhido)){
          return numeroAleatorio();
      } else {
        numeroSorteado.push(numeroEscolhido);
        console.log(numeroSorteado);
        return numeroEscolhido;
      }
  }

  function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
  }

  function reiniciarJogo() {
    //console.log ('vc apertou');
      numeroSecreto = numeroAleatorio();
      limparCampo();
      tentativa = 1;
      mensagemInicial ();
      document.getElementById('reiniciar').setAttribute('disabled', true)
  }
