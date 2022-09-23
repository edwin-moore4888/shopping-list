let items = ['apples', 'bananas', 'carrots', 'dates', 'earplugs'];


let body = document.querySelector('body');


items.forEach((item, index) => {
    const divOne = document.createElement('div');
    divOne.className = 'list';
    divOne.textContent = item;
    body.appendChild(divOne);  
})