import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[type="email"]');
const messageInput = form.querySelector('[name="message"]');

const localValues = localStorage.getItem('feedback-form-state');
if (localValues) {
  const { email, message } = JSON.parse(localValues);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener(
  'input',
  throttle(() => {
    const formValues = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
  }, 500)
);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const localValues = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(localValues));

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
