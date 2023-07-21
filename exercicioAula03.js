// let prompt = require('prompt-sync')()


// let nome_ = prompt("Digite seu Nome: ")
// let idade_ = parseInt (prompt("Digite sua idade: ")) 
// let peso_ = parseInt (prompt("Digite seu peso: ")) 

// olaPessoa(nome_, idade_, peso_)
import { exercicio1 } from "./moduloExercicio1.js"

let resposta;

import PromptSync from "prompt-sync"
let prompt = PromptSync("Digite o numero do exercicio que vc quer exibir: ");

do {

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
    
} while (Resposta != "Sair");



prompt("Digite alguma coisa: ")


exercicio1()

function olaPessoa(nome_, idade_, peso_){

    let pessoa = {
        nome: nome_,
        idade: idade_,
        peso: peso_
    }

    
    console.log(`Ola ${pessoa.nome}! Voce esta com ${pessoa.idade} anos, Seu peso é: ${pessoa.peso}KG.`)
}

// let pessoa = {
//     nome: nome_recebido,
//     idade: idade_recebida,
//     peso: peso_recebido
// }


// console.log(`Ola ${pessoa.nome}! Voce esta com ${pessoa.idade} anos. Seu peso é: ${pessoa.peso}KG.`)


// olaPessoa("Leo", 20, 59)
// olaPessoa("Simone", 55, 70)
// olaPessoa("janaina", 20, 55)

