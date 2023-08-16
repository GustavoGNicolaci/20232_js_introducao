//var, const e let
//const é para variaveis que não precisa mudar seu valor
//let é maleavel
//não use o operador ==
//use o operador ===

function eAgora () {
    let cont = 1
    function f1(){
        console.log(cont)
        cont++
    }
    function f2(){
        console.log(cont)
    }
    return {f1, f2}
}

let resultado = eAgora()
resultado.f1()
resultado.f2()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}!`)
//     }
// }

// let olaJoao = saudacoesFactory('Ola', 'João');

// let tchauJoao = saudacoesFactory('Tchau', 'João');

// olaJoao()

// tchauJoao()


// function f(){
//     //escopo externo da função g
//     let nome = 'João'
//     function g() {
//         // escopo interno da função g
//         console.log(nome)
//     }
//     g()
// }
// f()

// function f (funcao) {
//    return funcao()
// }

// function g (){
//     function outraFuncao(){
//         console.log("fui criada pela g")
//     }
//     return outraFuncao
// }

// //esses 2 códigos fazem a mesma coisa
// f(g())
// f(g)()

// let umaFuncao = function () {
//     console.log("Fui armazenada em uma variável")
// }
// umaFuncao()

// function g(){
//     console.log ("1")
//     function outraFuncao(){
//         console.log("2")
//         return function() {
//             console.log('4')
//         }
//     }
//     console.log("3")
//     outraFuncao()()
//     return outraFuncao
// }

// const gResult = g()
// gResult()
// g()()()

// function f(funcao){ //funcao é callable
// funcao()
// }
// //chamando a função f, colocando a função como parametro, ativando ela sem um nome como parametro
// f(function () {
//     console.log("Estou sendo passada para f")
// })

//arrow functions

// const hello = () => {console.log("Hello, Arrow functions")}
// hello()

//arrow functions, corpo sem chaves
// const hello = () => console.log("Hello, arrow function sem chaves")
// hello()

// const dobro = (n) => {return n * 2}
// const dobro = (n) => n * 2
// const dobro = n => n * 2
// console.log(dobro(3));

// const ehPar = (n) => n % 2 ===0
// console.log(ehPar(3));



//funções
//jeito antigo de definir uma função em js

//valor padrão para o parâmetro n
// const triplo = function( n = 5){
//     return n * 3
// }
// const res1 = triplo()
// const res2 = triplo(20)
// console.log(res1, res2)

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