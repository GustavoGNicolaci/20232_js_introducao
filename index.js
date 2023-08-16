//var, const e let
//const é para variaveis que não precisa mudar seu valor
//let é maleavel
//não use o operador ==
//use o operador ===

//funções
//jeito antigo de definir uma função em js

//valor padrão para o parâmetro n
const triplo = function( n = 5){
    return n * 3
}
const res1 = triplo()
const res2 = triplo(20)
console.log(res1, res2)

// const dobro = function (n){
//     return 2 * n
// }
// const res = dobro(5)
// console.log(res)


// function soma (a, b){
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)


// function hello(){
//     console.log("Oi")
// }
// hello()
// function hello(nome){
//     console.log(`Hello, ${nome}`)
// }
// hello('Ana')

//vetores, coleções, listas
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// //filter
// //arrow function
// function helloFunction(){
//     console.log('hello, function')
// }
// const helloArrowFunction = () => {
//     console.log('hello, arrow function')
// }
// const somenteComA = nomes.filter((nome) => {return nome.startsWith("A")});

// console.log(somenteComA)

//produza uma lista contendo as iniciais de cada nome
// const iniciais = nomes.map((nome) => {return nome.charAt(0)})
// console.log(iniciais)

//1. produzir uma lista contendo apena os pares
//2. produzir uma lista contendo o quadrado de cada número
// const numeros = [1, 2, 3, 4, 5, 6]

// const numPares = numeros.filter((numero) => {return numero % 2 === 0});
// console.log(numPares);

// const numQuadrados = numeros.map((numero) => {return numero * numero});
// console.log(numQuadrados);

// const todosComecamComA = nomes.every((nome) => {return nome.startsWith("A")});
// console.log(todosComecamComA);

// const res = nomes.some((nome) => {return nome.startsWith("A")});
// console.log(res);

// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => {return ac + v});
// console.log(soma);

// v2 = [2, "abc", true];
// for (let i = 0; i < v2.length ; i++)
//     console.log(v2[i])
// console.log(v2);
// console.log(v2.length);

//declaração/construção de um vetor ou lista 
// v1 = [];
// console.log(v1.length);
// v1[0] = 3.4;
// v1[1] = 2;
// v1[2] = "abc"
// console.log(v1.length);

//console.log([] == []);
// console.log([0] == false);
// console.log(null === undefined);
// console.log(null == undefined);
// console.log(null == null);
// console.log (1 == 1);
// console.log (1 === 1); 
// console.log (1 == "1");
// console.log (1 === "1");

// const n1 = 2;
// const n2 = "3";
// const n3 = n1 + n2;
// console.log(n3);
// const n4 = n1 + Number(n2);
// console.log(n4);


//não use var
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// var idade = 18;
// console.log (`Oi, ${nome}`);
// //içamento hoist
// if(idade >= 18){
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Você pode dirigir`)
// }
// console.log(`Até mais, ${nome}`);

// let nome = "Maria";
// console.log(nome);
// console.log(typeof(nome))
// nome = "Maria dos Santos"
// console.log(typeof(nome))
// console.log(nome);
// nome = 123;
// console.log(typeof(nome));
// console.log(nome);

//declarar constant3es
//js é dinamicamente tipada
//java: int a;
//a = 2;
//a.index0f("abc");
//a = "abc";


//comentario de uma linha
/*
    comentario de múltiplas
    linhas
*/