// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//Count the number of rows knit
let btnAddRow = document.querySelector('#btnAddRow');
let btnRemRow = document.querySelector('#btnRemRow');
let input = document.querySelector('#rowValue');
let rowReset = document.querySelector('#rowReset');

//increase row count
btnAddRow.addEventListener('click', () => {
  input.value = parseInt(input.value) + 1;
});

//decrease row count
btnRemRow.addEventListener('click', () => {
  input.value = parseInt(input.value) - 1;
});

//reset row count to zero
rowReset.addEventListener('click', () => {
  input.value = 0;
});

//end the row counter and add to repeat
let resetAndRepeat = document.querySelector('#resetAddRepeat');

resetAndRepeat.addEventListener('click', () => {
  input.value = 0;
  inputRepeat.value = parseInt(inputRepeat.value) + 1;
});


//adding repeat functionality
let btnAddRepeat = document.querySelector('#btnAddRepeat');
let btnRemRepeat = document.querySelector('#btnRemRepeat');
let inputRepeat = document.querySelector('#inputRepeat');
let repeatReset = document.querySelector('#repeatReset');

//increase repeat count
btnAddRepeat.addEventListener('click', () => {
  inputRepeat.value = parseInt(inputRepeat.value) + 1;
});

//decrease row count
btnRemRepeat.addEventListener('click', () => {
  inputRepeat.value = parseInt(inputRepeat.value) - 1;
});

//reset row count to zero
repeatReset.addEventListener('click', () => {
  inputRepeat.value = 0;
});

//reset all
let resetAll = document.querySelector('#resetAll');

//resets both inputs to zero
resetAll.addEventListener('click', () => {
  inputRepeat.value = 0;
  input.value = 0;
});
