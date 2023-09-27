let paragraph = null;
let addBtn = null;
let counter = 0

const bindElements = () => {
    paragraph = document.querySelector("p#hello-text");
    addBtn = document.querySelector("button#add-btn");
}

const bindListeners = () => {
    addBtn.addEventListener("click", (e) => {
        //console.log(e);
        counter = counter + 1;
        updateParagraph(counter);
        
    });
}

const updateParagraph = (text = 0) => {
    paragraph.textContent = text;
}

const main = () => {
    bindElements();
    bindListeners();

    /* console.log("Hello World"); */
    updateParagraph();
}

window.onload = main;