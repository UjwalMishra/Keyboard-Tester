window.addEventListener("keydown", (evt) => {
    let key;
    key = evt.key;
    let classChange = document.querySelector("." + key);
    classChange.classList.add("active");
    evt.stopPropagation();

});

window.addEventListener("keydown", (evt) => {
    let key;
    key = evt.code;
    let classChange = document.querySelector("." + key);
    classChange.classList.add("active");
    evt.stopPropagation();

});