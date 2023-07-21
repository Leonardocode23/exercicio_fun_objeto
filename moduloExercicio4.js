import PromptSync from "prompt-sync";

let prompt = PromptSync()

export function exercicio4() {
    let numero = parseInt(prompt("Escolha um numero:"))

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

