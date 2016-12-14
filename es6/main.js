import todo from './todo.js';

let form = document.getElementsByClassName("form")[0];

form.addEventListener('submit',() => {
	let enteredValue = document.getElementsByTagName("input")[0].value;
	todo.addValueToList(enteredValue);
	form.reset();
})