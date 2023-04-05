// function replace(array, from, to, elements) {
//
//     array.splice(from,to-from,...elements)
//
//
// }
//
//
// let testArray = [1, 2, 100, 100, 6]
//
//
// replace(testArray, 2, 4, [3, 4, 5])
//
//
// console.log(testArray)
//

// function copyReplace(array, from, to, elements) {
//     let arr = array;
//     arr.splice(from, to-from, ...elements)
//     return arr
//     // return array.slice(0, from).concat(elements).concat(array.slice(to))
// }
//
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

// let customerOrder = []
//
//
// function recordOrders(time, ...order) {
//     // customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
//     customerOrder.push({time:time, birds:order});
// }
//
// recordOrders(new Date, "coffee", "yaourt", "pizza")
// recordOrders('3/4/2023', "tra", "cafe", "coca")
//
//
// console.log(customerOrder)


let person = {
    name : 'C0223G1',
    age: 10
}
person.size = 20
console.log(person)


//
//
//  class StopWatch{
//      startTime ;
//      endTime ;
//     constructor() {
//         this.startTime = Date.now();
//         this.endTime = Date.now();
//     }
//     getStartTime(){
//         return this.startTime;
//     }
//     getEndTime(){
//         return this.endTime;
//     }
//     start(){
//         this.startTime = Date.now();
//     }
//     stop(){
//         this.endTime = Date.now();
//     }
//     getElapsedTime(){
//         return this.getEndTime() - this.getStartTime();
//     }
// }
//
// function selectionSort(arr) {
//     let currentValueNewIndex;
//     for (let i = 0; i < arr.length; i++) {
//         currentValueNewIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[currentValueNewIndex] > arr[j]) {
//                 currentValueNewIndex = j;
//             }
//         }
//         if (i !== currentValueNewIndex) {
//             let temp = arr[i];
//             arr[i] = arr[currentValueNewIndex];
//             arr[currentValueNewIndex] = temp;
//         }
//     }
//
//     return arr;
// }
// const arr = [];
// for (let i=0; i<100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000 + 1));
// }
//
//
// let time = new StopWatch();
// time.start()
// selectionSort(arr)
// time.stop()
// console.log(time.getElapsedTime())