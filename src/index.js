import './styles/style.css';

import $ from 'jquery';

let textIn = document.jquerySlector('.message-field');

let textOut = document.jquerySlector('.message-formatted');

// textIn.addEventListener('input', function () {

// 	textOut.innerHTML = textIn.value.toLowerCase().trim().replace(/^\s+/, '').replace(/\n/g, ' ');

// });

function formattedMessage () {
	let spaceSearch = /^\s+\n/g;

	return textIn.value.toLowerCase().trim().replace(spaceSearch, '');
}

textIn.addEventListener('input', function () {
	textOut.innerHTML(formattedMessage);
});