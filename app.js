let arr = [1,3,3,3,3,3,4,5,5,2];
let cant = new Array(arr.length).fill(0);

console.log(cant.length);
        
for (let index = 0; index < arr.length; index++) {
  
  cant[ arr[index]]++; 
  
}

console.log(cant);
 

 