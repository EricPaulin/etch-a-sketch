const container = document.querySelector('#container');

const content = document.createElement('div');
const content2 = document.createElement('div');
const content3 = document.createElement('div');
const content4 = document.createElement('div');
content.classList.add('content');
content.classList.add('content2');
content.classList.add('content3');
content.classList.add('content4');

container.appendChild(content);
container.appendChild(content4);
container.appendChild(content3);
container.appendChild(content2);