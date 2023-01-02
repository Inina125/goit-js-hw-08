const throttle = require('lodash.throttle');

const form = document.querySelector('form');
form.elements.email.value = localStorage.getItem('email') || '';
form.elements.message.value = localStorage.getItem('message') || '';

form.addEventListener('input', throttle(function (e) {
  localStorage.setItem(e.target.name, e.target.value);
  console.log(e);
}, 500));

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  console.log({ email: form.elements.email.value, message: form.elements.message.value });
  form.reset();
  localStorage.clear();
});