let menuElem = document.querySelector('.firstfatherarrow');
let titleElem = menuElem.querySelector('.arrow');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};