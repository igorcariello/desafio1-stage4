alert('A seguir digite dois números para podermos fazer operações matemáticas.')


const number1 = Number(prompt('Digite o primeiro número:'))
const number2 = Number(prompt('Digite o segundo número:'))

alert(`A soma de ${number1} e ${number2} é ${(number1 + number2).toFixed(2)}`)
alert(`A subtração de ${number1} menos ${number2} é ${(number1 - number2).toFixed(2)}`)
alert(`A multiplicação de ${number1} e ${number2} é ${(number1 * number2).toFixed(2)}`)
alert(`A divisão de ${number1} por ${number2} é ${(number1 / number2).toFixed(2)}`)
alert(`O resto da divisão de ${number1} por ${number2} é ${(number1 % number2).toFixed(2)}`)


let sum = number1 + number2

const sumIsPair = sum % 2 == 0

if (sumIsPair==true){
  alert('A soma dos dois número é PAR')
}else{
  alert('A soma dos dois números é ÍMPAR')
}

const isEquals= number1==number2


if (isEquals==true){
  alert('O primeiro número é IGUAL ao segundo')
}else{
  alert('O primeiro número é DIFERENTE ao segundo')
}