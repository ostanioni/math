/* eslint-disable */
/*tslint:disabled*/
// Post data to parent thread


// Respond to message from parent thread
var counter = 1
self.onmessage = function(e){
  let str = `Hello from worker ${counter++} ${e.data}`
  self.postMessage( str )
}

function quickSort(items) {
  return quickSortHelper(items, 0, items.length-1);
}
function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}
function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right]= temp;
      left++;
      right--;
    }
  }
  return left;
}
 