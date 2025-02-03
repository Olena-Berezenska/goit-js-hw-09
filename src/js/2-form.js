const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const warning = form.querySelector('.warning-message');
  if (evt.target.email.value !== '' && evt.target.message.value !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
  if (warning) {
    warning.remove();
  } else {
    if (!warning) {
      const newWarning = document.createElement('p');
      newWarning.textContent = 'Fill please all fields';
      newWarning.classList.add('warning-message');
      form.appendChild(newWarning);
    }
  }
});
