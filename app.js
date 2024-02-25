let paragraphElement = document.querySelector('p');
function changeParagraphText() {
    paragraphElement.textContent = 'clicked';
}
paragraphElement.addEventListener('click', changeParagraphText ) // что-бы выполнялось после нажатия функция без скобочек

let myInputElement = document.querySelector('input');
function retriveUserInput(event) {
    // let enteredText = myInputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data;
    console.log(enteredText);
    // console.log(event)
}
myInputElement.addEventListener('input', retriveUserInput);