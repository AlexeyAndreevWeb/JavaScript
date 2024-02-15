// #1
// for(let i = 0; i <= 10; i++) {
//     if(i === 0) console.log(`${i} - это ноль`)
//     else if(i % 2 !== 0) console.log(`${i} - нечетное число`)
//     else console.log(`${i} - четное число`)
// }

// #2
// const arr = [1,2,3,4,5,6,7]
// arr.splice(3,2)
// console.log(arr)

// #3
// const arr2 = []
// for (let i = 0; i <= 4; i++) {
//     arr2.push(Math.floor(Math.random() * 10))
// }
// console.log(arr2)

const display = document.querySelector(".display");
const size = Number(prompt("введите размер башенки, не больше 20"));
if (isNaN(size) || size > 20) {
  alert("Введено неправильное значение...");
  location.reload();
}

const createCells = (size) => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            display.insertAdjacentElement('beforeend',document.createElement('div'))
            if(j <= i) {
                display.lastElementChild.style.background = '#eee123'
            }
        }
    }
    const cubes = display.querySelectorAll('div')
    cubes.forEach(i => i.classList.add('cube'))
    console.log(cubes)
    positionCells(display,size)
};  

const positionCells = (el,size) => {
    el.style.gridTemplateColumns = `repeat(${size},20px`
    el.style.gridTemplateRows = `repeat(${size},20px`
}

createCells(size)
