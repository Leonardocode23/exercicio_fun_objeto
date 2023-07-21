import PromptSync from "prompt-sync";

let prompt = PromptSync()

import { exercicio1 } from "./moduloExercicio1.js";
import { exercicio2 } from "./moduloExercicio2.js";
import { exercicio3 } from "./moduloExercicio3.js";
import { exercicio4 } from "./moduloExercicio4.js";
import { exercicio5 } from "./moduloExercicio5.js";
import { exercicio6 } from "./moduloExercicio6.js";

let resposta;

do {
    console.log("Bem vindo ao menu de exercicios! ")

   resposta =  prompt("Digite um numero de 1 a 6 para escolher um exercicio, ou 'sair' para interromper o programa: ")

   switch (resposta) {
    case "1":
        console.log("Voce escolheu o exercicio 1")
        exercicio1()
        
        break;
    case "2":
        console.log("Voce escolheu o exercicio 2")
        exercicio2()
        
        break;
    case "3":
        console.log("Voce escolheu o exercicio 3")
        exercicio3()
        
        break;
    case "4":
        console.log("Voce escolheu o exercicio 4")
        exercicio4()
        
        break;
    case "5":
        console.log("Voce escolheu o exercicio 5")
        exercicio5()
        
        break;
    case "6":
        console.log("Voce escolheu o exercicio 6")
        exercicio6()
        break;
   
    default:
        console.log("Voce nao escolheu nenhum dos exercicios")
        break;
   }
    
} while (resposta != "sair");