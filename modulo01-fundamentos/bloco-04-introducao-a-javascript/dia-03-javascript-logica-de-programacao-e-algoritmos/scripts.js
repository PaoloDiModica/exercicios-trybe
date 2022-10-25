//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let fatorial = 1;

for (let index = 1; index <= 10; index +=1) {
    fatorial *= [index]
}
console.log(fatorial)


//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let invert = ''

for (let index = word.length -1; index >= 0; index -= 1) {
    invert += word[index];
}
console.log(invert)

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ''
let menorPalavra = array[0]

for (let index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index]
}   

    if (menorPalavra.length > array[index].length) {
        menorPalavra = array[index]
}
}
console.log(maiorPalavra);
console.log(menorPalavra);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.