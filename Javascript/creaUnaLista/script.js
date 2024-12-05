const ul = document.createElement('ul');

const item = ['capitolo 1','capitolo 2','capitolo 3','capitolo 4'];

item.forEach(text=> {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
})

document.body.appendChild(ul);