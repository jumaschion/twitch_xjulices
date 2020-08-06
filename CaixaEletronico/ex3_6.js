function calcularNotas() {
    //cria uma referência aos elementos da página
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez  = document.getElementById("outNotasDez");


    //Limpar as mensagens (caso for executar novamente)
    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    var saque = Number(inSaque.value);  //converte o contéudo do campo inSaque

    //se não preencheu valor ou se der NaN
    if(saque === 0 || isNaN(saque)){
        alert("Informa o valor do saque corretamente"); //exibe alerta
        inSaque.focus(); // foca no campo de saque
        return;
    }

    //verifica se saque não é multiplo de 10
    if(saque % 10 != 0){
        alert("Valor inválido para notas disponíveis (R$10, 50, 100)");
        inSaque.focus()
        return;
    }

    //calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque / 100)
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto/ 50);
    resto = resto % 50;
    var notasDez = Math.floor(resto / 10)

    //exibe notas apenas se houver
    if(notasCem > 0){
        outNotasCem.textContent = "Notas de R$100: " + notasCem;
    }
    if(notasCinquenta > 0){
        outNotasCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
    }
    if(notasDez > 0){
        outNotasDez.textContent = "Notas de R$10: " + notasDez;
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);