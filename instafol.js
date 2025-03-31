const username = document.querySelector('.user');
const password = document.querySelector('.pass');
let result = document.querySelector('.result');
function check() {
  if (username.value.length === 0 && password.value.length === 0) {
    result.innerHTML = 'please type username and password.';
  } else if (username.value.length === 0 && password.value.length !== 0) {
    result.innerHTML = 'Please type username.';
  } else if (username.value.length !== 0 && password.value.length === 0) {
    result.innerHTML = 'Please type password.';
  } else {
    setTimeout(() => {
      result.innerHTML = 'Incorrect username or password!';
      result.style.color = 'red';
    }, 1000);
    result.innerHTML = 'Processing...';
    result.style.color = "blue";
  }
}