//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
}

console.log(player);

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const key in names) {
  console.log('Ola ' + names[key])
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in car) {
  console.log(key + car[key])
}

//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')


//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let invert = ''
function verificaPalindromo(palavra) {
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    invert += palavra[index];
  }
  if (invert === palavra) {
    return true;
  } else {
    return false;
  }
}


console.log(verificaPalindromo('orange'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.

function contador(arrayT) {
  let contagemN = 0;
  let arrayN = 0;

  for (let i = 0; i < arrayT.length; i += 1) {
    let contagem = 0;
    let number = arrayT[i];
    for (let i2 = 0; i2 < arrayT.length; i2 += 1) {
      if (number == arrayT[i2]) {
        contagem += 1;
      }
    }
    if (contagem > contagemN) {
      contagemN = contagem;
      arrayN = number;
    }
  }

  return arrayN + ' contagem: ' + contagemN;

}

console.log(contador([2, 3, 2, 5, 8, 2, 3]));

// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:
// let objeto = {
//   area: 0,
//   perimetro: 0,
// };
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

function calculaAreaEPerimetro(base, altura) {
  const area = base * altura;
  const perimetro = (2 * base) + (2 * altura);
  let objeto = {
    area: area,
    perimetro: perimetro,
  }
  return objeto
}

console.log(calculaAreaEPerimetro(2, 4))

// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato abaixo:
// //let numeros = {
//   pares: 0,
//   ímpares: 0,
// };

function calculeParesEImpar(array) {
  const numeros = {
    pares: 0,
    impares: 0
  }

  for (let numero of array) {
    if (numero % 2 === 0) {
      numeros.pares += 1;
    } else {
      numeros.impares += 1;
    }
  }
  return numeros;
}

console.log(calculeParesEImpar([0, 5, 14, 20, 39, 123, 83]));


// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false;

let stringWord = 'trybe';
let stringEnding = 'be';


function funcaoConfere(stringWord, stringEnding) {
  let resultado;
  let stringEndingReverse = stringEnding.split('').reverse(); /// e b
  let stringWordReverse = stringWord.split('').reverse(); // e b y r t
  for (let i = 0; i < stringEndingReverse.length; i++) {
    if (stringWordReverse[i] == stringEndingReverse[i]) {
      resultado = true
    } else {
      resultado = false
    }
  }
  return resultado;
}
console.log(funcaoConfere('mundo', 'ra')) 



