import throttle from 'lodash.throttle';

const STORAGE_FORM_STATE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const getFormData = function () {
  return { email: emailInput.value, message: messageInput.value };
};

const saveFormData = function () {
  localStorage.setItem(STORAGE_FORM_STATE_KEY, JSON.stringify(getFormData()));
};

const loadFormData = function () {
  const savedData = localStorage.getItem(STORAGE_FORM_STATE_KEY);
  if (!!savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
};

const submitHandler = function (event) {
  event.preventDefault();
  console.log(getFormData());
  localStorage.removeItem(STORAGE_FORM_STATE_KEY);
  feedbackForm.reset();
};

feedbackForm.addEventListener('submit', submitHandler);
feedbackForm.addEventListener('input', throttle(saveFormData, 500));
document.addEventListener('DOMContentLoaded', loadFormData);
