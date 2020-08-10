// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log('Logging clients: ', clients[i]);
// }

// console.log(clients.length)

// clients.length = 2

// console.log(clients.length)

// for (let i = 0; i < clients.length; i += 1) {
//     console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//     numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']



// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//     console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//     console.log(character);
// }


// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Ajax';
// let message;

// for (const client of clients) {
//     /*
//      * На каждой итерации мы будем проверять совпадает ли элемент массива с
//      * именем клиента. Если совпадает то мы записываем в message сообщение
//      * об успехе и делаем break чтобы не искать дальше
//      */

//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!';
//         break;
//     }

//     // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//     message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!


// /*
//  * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.
//  */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//     for (let j = 0; j < matrix[i].length; j += 1) {
//         console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//         total += matrix[i][j];
//     }
// }

// console.log(total); // 45

// тренировка разных задачек

// Даны два массива: [1, 2, 3] и[4, 5, 6].Объедините их вместе.

// const fistMath = [1, 2, 3];
// const twoMath = [4, 5, 6];
// const sumMath = fistMath.concat(twoMath);
// console.log(sumMath);
// const resMath = twoMath.reverse();
// console.log(resMath);
// twoMath.unshift(8, 9, 4);
// console.log(twoMath);
// // console.log(twoMath.shift())
// // console.log(twoMath.slice(2))
// console.log(twoMath.splice(1, 2));
// console.log(twoMath);
// twoMath.splice(3, 0, 4, 76, 34);
// console.log(twoMath);
// const g = [3, 4, 1, 2, 7];
// g.sort();
// console.log(g)

//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

const a = 'какая то строка, где нужно сделать первое слово заглавным'

a.toUpperCase();
console.log(a.toUpperCase())