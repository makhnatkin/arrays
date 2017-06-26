const getMaxSubSum = require('../src/kantor-array');

test('getMaxSubSum task', () => {
  expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
  expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
  expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
  expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
  expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
  expect(getMaxSubSum([1, 2, 3])).toBe(6);
});



// describe('http://learn.javascript.ru/task/get-last-in-array', () => {
//   it('last', () => {
//     const goods = ["Яблоко", "Груша", "Слива"];
    
//     expect(goods[goods.length-1]).toEqual("Слива");
//   });
// });




// describe('http://learn.javascript.ru/task/add-item-to-array', () => {
//   it('add item', () => {
//     const goods = ["Яблоко", "Груша", "Слива"];
//     goods.push("Компьютер");
//     goods[goods.length] = "Компьютер";

//     expect(goods).toEqual(["Яблоко", "Груша", "Слива", "Компьютер", "Компьютер"]);
//   });
// });



// describe('http://learn.javascript.ru/task/create-array', () => {
//   it('many actions', () => {

//     const slyles = ["Джаз", "Блюз"];
//     slyles.push("Рок-н-Ролл");
//     expect(slyles).toEqual(["Джаз", "Блюз", "Рок-н-Ролл"]);
//     slyles[slyles.length - 2] = "Классика";
//     expect(slyles).toEqual(["Джаз", "Классика", "Рок-н-Ролл"]);
//     slyles.shift();
//     expect(slyles).toEqual(["Классика", "Рок-н-Ролл"]);
//     slyles.unshift("Реп", "Регги");
//     expect(slyles).toEqual(["Реп", "Регги", "Классика", "Рок-н-Ролл"]);
//   });
// });


// describe('http://learn.javascript.ru/task/random-from-array', () => {
//   it('random', () => {
//     const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//     const rand = Math.floor(Math.random() * (arr.length));
//     const result = arr[rand];    

//     switch (rand) {
//       case 0:
//         expect(result).toEqual("Яблоко");
//         break;
//       case 1:
//         expect(result).toEqual("Апельсин");
//         break;
//       case 2:
//         expect(result).toEqual("Груша");
//         break;
//       case 3:
//         expect(result).toEqual("Лимон");
//         break;
//     }
//   });
// });



// describe('https://learn.javascript.ru/task/calculator-for-input', function() {

//   const find = (arr, position) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === position) {
//         return i;
//       }
//     }

//     return -1;
//   };

//   describe("возвращает позицию, на которой найден элемент", function() {
//     it("в массиве [1,2,3] находит 1 на позиции 0", function() {
//       expect(find([1, 2, 3], 1)).toEqual(0);      
//     });
//     it("в массиве [1,2,3] находит 2 на позиции 1", function() {
//       expect(find([1, 2, 3], 2)).toEqual(1);      
//     });
//     it("в массиве [1,2,3] находит 3 на позиции 2", function() {
//       expect(find([1, 2, 3], 3)).toEqual(2); 
//     });
//   });

//   it("если элемент не найден, возвращает -1", function() {
//     expect(find([1, 2, 3], 0)).toEqual(-1); 
//   });

//   it("отличает false или null от 0", function() {
//     expect(find([false, true, null], 0)).toEqual(-1); 
//   });

//   it("отличает 1 от true", function() {
//     expect(find([1, 2, 3], true)).toEqual(-1); 
//   });
// });

// describe('filter', () => {
//   const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//   const action = item => item.length > 5;

//   Array.prototype.filterFromReduce = function(callback) {
//     const result = this.reduce((result, item) => {
//       if (callback(item)) {
//         result.push(item);
//       } 
//       return result;
//     }, []);
//     return result;
//   };


//   it('native', () => {
//     result = arr.filter(action);
//     expect(result).toEqual(["Яблоко", "Апельсин"]);
//   });

//   it('from reduce', () => {
//     result = arr.filterFromReduce(action);
//     expect(result).toEqual(["Яблоко", "Апельсин"]);
//   });


// });





// describe('map', () => {
//   const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//   const action = item => {
//     //https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb  
//     return item.split("").reverse().join("");
//   };
  
//   Array.prototype.mapFromReduce = function(callback) {
//     const result = this.reduce((result, item) => {
//       result.push(callback(item));
//       return result;
//     }, []);
//     return result;
//   };


//   it('native', () => {
//     result = arr.map(action);
//     expect(result).toEqual(['околбЯ', 'нисьлепА', 'ашурГ', 'номиЛ']);
//   });

//   it('from reduce', () => {
//     result = arr.mapFromReduce(action);
//     expect(result).toEqual(['околбЯ', 'нисьлепА', 'ашурГ', 'номиЛ']);
//   });


// });



// describe('some', () => {
//   const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//   const action = item => item[0] === 'А';
  
//   Array.prototype.someFromReduce = function(callback) {
//     const result = this.reduce((result, item) => {
//       return result || callback(item);
//     }, false);
//     return result;
//   };


//   it('native', () => {
//     result = arr.some(action);
//     expect(result).toEqual(true);
//   });

//   it('from reduce', () => {
//     result = arr.someFromReduce(action);
//     expect(result).toEqual(true);
//   });


// });



// describe('every', () => {
//   const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//   const action = item => item[0] === 'А';
  
//   Array.prototype.someFromReduce = function(callback) {
//     const result = this.reduce((result, item) => {
//       return result || callback(item);
//     }, false);
//     return result;
//   };


//   it('native', () => {
//     result = arr.every(action);
//     expect(result).toEqual(true);
//   });

//   it('from reduce', () => {
//     result = arr.someFromReduce(action);
//     expect(result).toEqual(true);
//   });


// });
