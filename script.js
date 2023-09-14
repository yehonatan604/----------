const contentContainer = document.querySelector('.content-container');
const widthInput = document.querySelector('#width-input');
const form = document.getElementById("form");
const selectWidth = document.getElementById("select-width");
const selectHeight = document.getElementById("select-height");
const selectFontSize = document.getElementById("select-fontSize");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
const clearBtn = document.getElementById("clear");


widthInput.max = widthInput.getBoundingClientRect().x;
selectHeight.max = widthInput.getBoundingClientRect().y;

form.addEventListener('submit', (event) => {
    let element = document.createElement("div");
    element.style.width = event.target[0].value + selectWidth.value;
    element.style.height = event.target[2].value + selectHeight.value;
    element.style.backgroundColor = event.target[4].value;
    element.innerText = event.target[5].value;
    element.style.fontSize = event.target[6].value + selectFontSize.value;
    event.preventDefault();

    contentContainer.appendChild(element);
})

saveBtn.addEventListener('click', () => {
    localStorage.setItem('elements', contentContainer.outerHTML);
})
loadBtn.addEventListener('click', () => {
    if (localStorage.getItem('elements') !== '') {
        const items = localStorage.getItem('elements');
        contentContainer.outerHTML = items;
    }
    else {
        alert('storage is empty');
    }
})

clearBtn.addEventListener('click', () => {
    console.log(contentContainer);
    localStorage.setItem('elements', '');
    window.location.reload();
})
