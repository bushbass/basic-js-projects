let displayArea = document.querySelector('#displayArea')
let formInput = document.querySelector('input');
let button = document.querySelector('#submitButton');
button.addEventListener('click', () => {
  displayArea.textContent = `Hello ${formInput.value}!`;
})