// document.body.children[1].children[0].href = 'https://google.com'

let anchorElement = document.getElementById("external-link");
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('a');
anchorElement.href = 'https://bing.com';

// ADD AN ELEMENT
// 1 Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to Google'

// 2 Get acces to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3 Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1element = document.querySelector('h1');
// 2. Remove it
firstH1element.remove();
// firstH1element.parentElement.removeChild(firstH1element);

// MOVE elements
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
console.log(firstParagraph.innerHTML)

firstParagraph.innerHTML = 'Hi this is <strong>important!</strong>';
