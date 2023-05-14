//Примитивные типы данных

// boolean - true or false
// null
// undefined 
// number 1-999999
// BigInt  999999+
// string  'hello world'

// variables переменные
// //  let - local reasignable рекомендуется
// //  const - local non reasignable рекомендуется
// //  var - reassignable global не использовать
// // console.log(thirdNumber)
// const test = () => {
//     var firstNumber = 1;
//    // let secondNumber = 2;
//    // var thirdNumber = 3;
//    if (true) {
//     firstNumber = 2
//     console.log(firstNumber)
//    }
// }
// test()
// // Объект


// // Приведение типа (Type conversion)
// let value1 = '5'
// let value2 = 4

// if (value1 == value2) {
//     console.log('true')
// } else {
//     console.log("false")
// }


// ----------------------------------------------------------------------------------------------//


// FUNCTION 
// Функции - ключевая концепция в JavaScript. Важнейшей особенностью языка является поддержка функции первого класса (functions as first-class citizen). Любая функция это объект, и следовательно ею можно манипулировать как объектом, в частности:
// передавать как аргумент и возвращать в качестве результата при вызове других функций функций высшего порядка;
// создавать анонимно и присваивать в качестве значений переменных или свойств объектов. MDN

// function sayHello() {
//     console.log('say hello')
// }
// First class FUNCTION функция 1 класса АНОНОИМНЫЕ ФУНКЦИИ 
// const sayHello = () => {
//     console.log('say hello')
// }

// const sayHello4 = () => {
//     console.log('say hello4')
// }
// const sayHello3 = () => {
//     console.log('say hello3')
// }


// const sayHello1 = () => {
//     console.log('say hello1')
// }


// Order class F-N Функция высшего порядка, принмает в кач-ве аргумента параметра другую фунцкцию и может вызывать её, содержит CALLBACK () 

// const highOrderFn = (anyFn,anyFn1,anyFn2) => {
//     anyFn()
//     anyFn1()
//     anyFn2()
//      // call back f-n  
// }

// highOrderFn(sayHello,sayHello3,sayHello4)


// ------------------------------------------------------------------------------------------------//


// SCOPE
// Область видимости переменных или просто “Область видимости” (англ. variable scope или просто scope) — э
// то такая область программы, в пределах которой установлена связь между некоторой переменной и её идентификатором 
//(именем), по которому можно получить значение этой переменной

// const name1 = 'Tony'

// const someTestFn = () => {
//     const name2 = 'Elena'
//     if (true) {
//         const name3 = 'Thomas'
//         console.log(name4) // потому что с блока  name3 нет доступа к блоку name4 
//         if (true) {
//             const name4 = 'Vasya'
//         }
//     }
// }
// someTestFn()


// --------------------------------------------------------------------------------------------------------------//


// For Loops

let string1 = 'Tatarstan'

const strTatar = () => {

    for(let i = string1.length-1; i <= 0; i--) {
        console.log(string1[i])
    }
    

}

strTatar()

let array = [1,2,3,4,5,6,7,8,9,10]

const sumArray = () => {

    for(let i = 0; i < array.length; i++) {
        let num = array[i]
        console.log(num)
    }
    
}

sumArray()

// for .. of

const sumArray2 = () => {
    for (let num of array) {
        console.log(num)
    }
}
sumArray2()

let string2 = 'russia'
const strRussia = () => {
    for (let char of string2) {
        console.log(char)
    }
}
strRussia()

// Итерация объектов  в Массиве

const phonebook = [
{
    name: 'Ilfir',
    phone: 555555555
    
},
{
    name: 'Ashat',
    phone: 5788888888
    
},
{
    name: 'Katty',
    phone: 45646464645
    
}
]
// деструктуризация (извлечение)
for(const {phone} of phonebook) {
    console.log(phone)
}
for(const contact of phonebook) {
    console.log(contact.phone)
}