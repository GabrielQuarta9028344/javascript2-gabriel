let getName = document.getElementById('showName')

// function showName(name){
// return "Mijn naam is:" + name 
// }
// showName("gabriel")
const showName = (name) => {
 return `Mijn naam is:  ${name} `
} 

getName.textContent = showName("gabriel");

let fruits = ["Apple", "Banaan", "Perzik"]

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }
for(let fruit of fruits){

getName.innerHTML += fruit + "<br>"; 
}