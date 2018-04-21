



let result = ''
if(Math.round(Math.random())===0){
  result = 'Heads'
} else {
  result = 'Tails'
}




let displayArea = document.querySelector('#displayArea')
let button = document.querySelector('#submitButton');


button.addEventListener('click', () => {
  displayArea.textContent = `${result}`;

})