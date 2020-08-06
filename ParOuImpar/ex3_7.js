// const fizzBuzz = function(n) {

//     let arr = [];

//     for (let i = 1; i <= n; i++) {
//     const sumAlgarism = ((i  - 1) % 9) + 1;
//     const dividedByThree = sumAlgarism % 3 === 0 && i !== 5;
//     const dividedByFive = sumAlgarism && (i % 5 === 0 || i % 5 === 5);
//     const dividedByThreeAndFive = dividedByThree && dividedByFive;

//       if (dividedByThreeAndFive) 
//        arr.push("fizz buzz");
//       else if (dividedByFive) 
//        arr.push("buzz");
//        else if (dividedByThree) 
//          arr.push("fizz");
//       else 
//         arr.push(`${i}`);

//     }
//     return arr;
//   };

function parOuImpar() {

    var number = document.getElementById("number").value;
    var answer = document.getElementById("answer");

    if((number % 2) == 0){
        answer.textContent =  "Resposta: " + number + " é par";
     }else{
        answer.textContent =  "Resposta: " + number + " é ímpar";
     }

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", parOuImpar);