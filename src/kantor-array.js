function getMaxSubSum(arr) {
  let sum = 0;
  
  // находим индекс центрального элемента
  // если в массиве четное количество элементов,
  // тогда увеличим его длинну на одно значение
  if (arr.length % 2) {
    arr[arr.length] = 0;
  }

  const centerIndex = Math.floor(arr.length / 2);
  
  for (let i = centerIndex; i < arr.length; i++) {

  }  


  return sum;
}

module.exports = getMaxSubSum;