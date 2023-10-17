let number = document.querySelector('#number');
let numbertoguess = Math.round(Math.random() * 100);

function Guess() {
    console.log(numbertoguess);
    if (number.value == numbertoguess) {
        console.log("You won!");
        alert("You won!");
    }
    else if (number.value <= numbertoguess) {
        console.log("More!");
    }
    else {
        console.log("Less!");
    }
}

let button = document.querySelector('#button');
button.addEventListener('click', Guess);