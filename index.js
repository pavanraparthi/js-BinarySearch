// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Binary search to find a number in sorted array</h1>`;

var arr = [1,2,3,4,5,6,7,8,9];

function findNumber_BinarySearch(arr,value){
  var firstIndex = 0;
  var lastIndex = arr.length - 1;
  var middleIndex = Math.floor((firstIndex + lastIndex)/2);
  while(arr[middleIndex] != value && firstIndex < lastIndex){
    if(value > middleIndex)
      firstIndex = middleIndex + 1;
    if(value < middleIndex)
      lastIndex = middleIndex -1
    middleIndex = Math.floor((firstIndex + lastIndex)/2);    
  }
  return arr[middleIndex] != value ? -1 : middleIndex;
} 
console.log(findNumber_BinarySearch(arr,2));