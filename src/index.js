import './styles/style.css';
import $ from 'jquery';

let textIn = $('.message-field');

let textOut = $('.message-formatted');

textIn.addEventListener('input', function () {

    textOut.innerHTML = textIn.value.toLowerCase().replace(/^\s+/, '').replace(/\n/g, ' ');

});