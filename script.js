// Задание 1

// const Pow = (number) => Math.pow(number, 3)
// console.log(Pow(2) + Pow(3))

// Задание 2

// const taxDeduction = () => {
//     let userData = prompt('Введите число...')
//     if(isNaN(userData*1)) alert('значение задано неверно...')
//     else document.body.innerHTML = `<h1>${userData*0.87}</h1>`
// }

// taxDeduction()

// Задание 3

// const Minimum = () => {
//     const num1 = prompt('введите первое число')
//     const num2 = prompt('введите второе число')
//     const num3 = prompt('введите третье число')
//     document.body.innerHTML = `<h1>${Math.min(num1,num2,num3)}</h1>` 
// }

// Minimum()

// Задание 4

const sum = (num1,num2) =>  num1 + num2

const difference = (num1,num2) => num1 > num2 ? num1 - num2 : num2 - num1

const multiplication = (num1,num2) => num1 * num2

const division = (num1,num2) => num1 / num2

console.log(sum(3,5))
console.log(difference(-5,5))
console.log(multiplication(3,5))
console.log(division(-3,5))