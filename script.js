// const num1 = prompt('Введите число...')
// const num2 = prompt('Введите число...')

// console.log(+num1 <= 1, +num2 >= 3);



// ----------------------
// let test = false

// test ? console.log('+++') : console.log("---");


// ------------------------
// const tenDaysOfMonth = () => {
//     let day = prompt('введите число...')
//     if(isNaN(day*1)) {
//         alert("вы ввели не число...")
//         return tenDaysOfMonth()
//     } else {
//         if(day > 0 && day <= 10) {
//             return `первая декада`
//         }else if(day > 10 && day <= 20) {
//             return `вторая декада`
//         }else {
//             return `тетья декада`
//         }
//     }
// }

// console.log(tenDaysOfMonth());

// -----------------------

// const numericRanks = () => {
//     let number = prompt('введите число...')
//     if(isNaN(number*1)) {
//         alert('вы ввели не число')
//         return numericRanks()
        
//     } else {
//         const ranks =  number.split('').slice(-3)
//         return `сотен: ${ranks[0]}, десятков: ${ranks[1]}, единиц: ${ranks[2]}`
//     }
// }

// console.log(numericRanks());

// -----------------------
// let userNumber = Number(prompt('Введите число...'))

// const numericRanks = (number) => {
//     let i = 0
//     let ranks = []

//     while(true) {
//         ranks.push(number%10)
//         number = Math.floor(number/10)
//         if(ranks.length === 3) break
//     }
//     return `сотни: ${ranks[2]}, десятки: ${ranks[1]}, единицы:  ${ranks[0]} `
// }



// console.log(numericRanks(userNumber));
