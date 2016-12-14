var addValueToList = (value) => {
	let ul = document.getElementById('items');
	let li = document.createElement("li");
	li.append(value);
	ul.append(li);
}

var todo = {
	addValueToList
}

export default todo;
