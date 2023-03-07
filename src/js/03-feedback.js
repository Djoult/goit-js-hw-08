import _throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const FORM_KEY = 'feedback-form-state';

handlePageLoad();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', _throttle(handleFormInput, 500));

function handleFormInput(e) {
  const formData = new FormData(form);
  const submittedData = {};
  formData.forEach((value, key) => {
    submittedData[key] = value;
  });
  localStorage.setItem(FORM_KEY, JSON.stringify(submittedData));
}

function handlePageLoad() {
  const savedData = JSON.parse(localStorage.getItem(FORM_KEY));
  if (savedData) {
    // for (let key in savedData) {
    //    console.log(key[value]);
    //    [`${key}`].value = savedData[key];
    // }
    email.value = savedData.email;
    message.value = savedData.message;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem(FORM_KEY));
  console.log(data);
  localStorage.removeItem(FORM_KEY);
  e.currentTarget.reset();
}
