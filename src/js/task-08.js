const loginFormEl = document.querySelector('.login-form');

console.log(loginFormEl);

loginFormEl.addEventListener('submit', onLoginSubmit);

function onLoginSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget.elements;

  const email = form.email.value;
  const password = form.password.value;
  if (email === '' || password === '') {
    alert(` Всі поля повинні бути заповнені`);
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);

  form.reset();
}
