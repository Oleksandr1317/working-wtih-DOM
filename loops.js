for (let i=0;i  < 10;i++) {
    console.log(i);
}

const users = ["Anna","John","Bill"];

for (const user of users) {
    console.log(user);
}

const logInUser = {
    name : 'John',
    age:32,
    isAdmin : true
};

for (const names in logInUser) {
    console.log(names);
    console.log(logInUser[names]);
}

let finished = false;

while (!finished) {
    finished = confirm('Do you want to quit?');
}

console.log('Done!');