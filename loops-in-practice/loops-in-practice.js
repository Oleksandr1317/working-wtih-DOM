const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumToNumber = 0;

    for (let i = 0;i <= enteredNumber;i++) {
        sumToNumber = sumToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click',calculateSum)

// T2
const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight')
    }
}

highlightLinksButtonElement.addEventListener('click',highlightLinks)

//T3
const dummyUserDate = {
    firstName: 'Test',
    lastName:"Testovich",
    age:20
};

const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData() {
    const outputElement = document.getElementById('output-user-data');

    outputElement.innerHTML = '';

    for (const key in dummyUserDate){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':  ' + dummyUserDate[key];
        newUserDataListItemElement.textContent = outputText;
        outputElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click',displayUserData)


// T4
const rollDiceBE = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumber() {
    const targetNumberInp = document.getElementById('user-target-number');
    const diceRollsList = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInp.value;
    diceRollsList.innerHTML = '';

    let hasRolles = false;
    let numberOfRolls = 0;

    while (!hasRolles) {
        const rolledNumber = rollDice();
        numberOfRolls++;
        const newRollsList = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollsList.textContent = outputText;
        diceRollsList.append(newRollsList);
        hasRolles = rolledNumber == enteredNumber;
    }

    const outputTotal = document.getElementById("output-total-rolls");
    const outputTarget = document.getElementById("output-target-number");

    outputTarget.textContent = enteredNumber;
    outputTotal.textContent = numberOfRolls;
}

rollDiceBE.addEventListener('click',deriveNumber)
