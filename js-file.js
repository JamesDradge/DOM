const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
para.setAttribute('style', 'color: red;');
container.appendChild(para);

const header = document.createElement('h3');
header.textContent = 'I\'m a blue h3!';
header.setAttribute('style', 'color: blue;');
container.appendChild(header);

const newContainer = document.createElement('div');
newContainer.setAttribute('style', 'border: black 5px solid; background-color: pink;');
container.appendChild(newContainer);

const header2 = document.createElement('h1');
header2.textContent = 'I\'m in a div';
newContainer.appendChild(header2);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';
newContainer.appendChild(para2);

