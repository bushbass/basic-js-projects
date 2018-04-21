








let displayArea = document.querySelector('#displayArea')
let button = document.querySelector('#submitButton');

let result = ''
button.addEventListener('click', () => {
  
if(Math.round(Math.random())===0){
  result = 'Heads'
} else {
  result = 'Tails'
}
  displayArea.textContent = `${result}`;

})