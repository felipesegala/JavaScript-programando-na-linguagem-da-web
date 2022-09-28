var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if(peso < 0) {
    console.log("Peso invalido");
}

if(peso > 1000) {
    console.log("Peso invalido")
}

var imc = peso / (altura * altura); // 100 /2.0 x 2.0 = 100 / 4 =>>>> 25

tdImc.textContent = imc;

console.log(imc); //referente a variavel imc

