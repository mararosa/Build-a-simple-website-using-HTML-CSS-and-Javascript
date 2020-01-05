'use strict'
console.log('Here\'s a hidden message');

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

// console.log('This code is no longer active')
