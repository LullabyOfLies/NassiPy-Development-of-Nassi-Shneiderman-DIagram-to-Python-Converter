const codetbconvertElement = document.querySelector('.codetbconvert');
const outputheheElement = document.getElementById('outputhehe');
const codeouput = document.getElementById('codeouput');

outputheheElement.value = codetbconvertElement.textContent;
codeouput.textContent = outputheheElement;

console.log(codeouput);