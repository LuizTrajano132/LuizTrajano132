/*
var
const
let

Estruturas de Controle

Condicional (Conditional)
Repetição / Laços de Repetição (Loops) 
*/


//### Condicionais
/*

SE (Condição) ENTAO 
    <AÇÃO 1>
FIM-SE


SE (Condição) ENTAO 
    <AÇÃO 1>
SENAO
    <AÇÃO PADRÃO>    
FIM-SE

SE (Condição) ENTAO 
    <AÇÃO 1>
SENAO SE (Outra Condição)
    <AÇÃO 2>
SENAO
    <AÇÃO PADRÃO>
FIM-SE

*/
var valor = 1;
if (valor < 0) {
    console.log("Valor não pode ser negativo");
} else if (valor == 0) {
    console.log("Valor não pode ser zero");
} else {
    console.log("Valor OK", valor);
}

/*
ESCOLHA (TIPO)
    CASO [ERRO] FAÇA <AÇÃO 1>
    CASO [OK] FAÇA <AÇÃO 2>
    PADRÃO FAÇA <AÇÃO 2>
FIM-ESCOLHA
*/
var corTexto = "";
var nivelAlerta = "Erro";
switch (tipoLog) {
    case "Erro": corTexto = "red";
        break;
    case "Info": corTexto = "blue";
        break;
    case "Ok": corTexto = "green";
        break;
    default: corTexto = "black";
        break;
}


/*
VARIAVEL INDICE = 0
PARA (INDICE < 10) FAÇA
    <AÇÃO>
    INDICE = INDICE + 1
FIM-PARA
*/
for (let index = 0; index < 10; index++) {
    console.log("Executando for", index);
}

/*
VARIAVEL INDICE = 0
ENQUANTO (INDICE < 10) FAÇA
    <AÇÃO>
    INDICE = INDICE + 1
FIM-ENQUANTO
*/
let indexW = 0;
while (index < 10) {
    console.log("Executando while", indexW);
    indexW++;
}

/*
VARIAVEL INDICE = 0
FAÇA
    <AÇÃO>
    INDICE = INDICE + 1
ENQUANTO (INDICE < 10)
*/
let ultimaPagina = false;
do {
    console.log("Executando do-while", indexW);
    //Busca dados no banco paginado    
    ultimaPagina = true;//Se retorna a ultima pagina para a execução
} while (ultimaPagina == false);

let array = ["Teste", 2, {nome: "Gian"}]
array.forEach(element => {
    console.log("Executando foreach", element);
});


/*
Manipulando HTML

document.querySelector(".classe-elemento");
document.querySelector("#id-elemento");
document.querySelector("tag-elemento");
*/
const camposInput = document.querySelector("input");
camposInput.forEach(element => {
    console.log("INPUTS", element);
});
const camposClasseErro = document.querySelector(".form-error");
camposInput.forEach(element => {
    console.log("CLASS-ERROR", element);
});
const campoNome = document.querySelector("#nome");
console.log("NOME", campoNome);
