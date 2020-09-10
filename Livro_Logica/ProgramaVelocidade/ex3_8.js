function multar() {

    var velocidadePermitida = document.getElementById("permitida").value;
    var velocidade = document.getElementById("velocidade").value;
    var answer = document.getElementById("answer");


    var multaGrave = velocidadePermitida * 1.2;

    // se for menor ou igual a permitida
    if (velocidade <= velocidadePermitida) {
        answer.textContent = "Situação: Sem multa";
        // se maior que a permitida
    }
    if (velocidade > multaGrave) {

        answer.textContent = "Situação: multa grave";
    }
    // se for ate 20% maior que a permitida
    if (velocidade > velocidadePermitida && velocidade <= multaGrave) {
        answer.textContent = "Situação: multa leve";
    }

    // // se for menor ou igual a permitida
    // if (velocidade <= velocidadePermitida) {
    //     answer.textContent = "Situação: Sem multa";
    //     // se maior que a permitida
    // }
    // else if (velocidade > multaGrave) {
    //     answer.textContent = "Situação: multa grave";
    // }
    // // se for ate 20% maior que a permitida
    // else {
    //     answer.textContent = "Situação: multa leve";
    // }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", multar);