import './styles/style.css';

// import $ from 'jquery';

let textIn = document.querySlector('.message-field');

let textOut = document.querySlector('.message-formatted');

// textIn.addEventListener('input', function () {

// 	textOut.innerHTML = textIn.value.toLowerCase().trim().replace(/^\s+/, '').replace(/\n/g, ' ');

// });

function textTransform () {
	let extraSpaceAndLine = /^\s+\n/g;

	return textIn.value.toLowerCase().trim().replace(extraSpaceAndLine, '');
}

textIn.addEventListener('input', function () {
	textOut.innerHTML(textTransform());
});