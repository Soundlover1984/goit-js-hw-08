import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const FFS_KEY = "feedback-form-state";
let data = {};
formEl.addEventListener('input', throttle(onInput, 500));

function onInput (event) {
    data[event.target.name] = event.target.value;
    sessionStorage.setItem(FFS_KEY, JSON.stringify(data))
}

if (sessionStorage.getItem(FFS_KEY)) {
    const {email, message} = JSON.parse(sessionStorage.getItem(FFS_KEY));
    formEl.email.value = email;
    formEl.message.value = message;
    data.email = email;
    data.message = message;
}


formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log(data);
    if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Будь ласка, заповніть всі поля!');}
    sessionStorage.removeItem(FFS_KEY);
    formEl.reset()
}
