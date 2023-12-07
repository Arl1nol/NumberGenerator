let count = 0;

let number1 = document.querySelector(".number"); // Use querySelector to get a single element
let plus1 = document.getElementById(".plus");
let minus1 = document.getElementById(".minus");
let plusdhet1 = document.getElementById(".plusdhet");
let minusdhet1 = document.getElementById(".minusdhet");
let resetButton1 = document.getElementById(".reset"); // Renamed to avoid conflict

number.textContent = count;

function countup() {
    count = count + 1;
    number.textContent = count;
}

function countdown() {
    count = count - 1;
    number.textContent = count;
}

function countupten() {
    count = count + 10;
    number.textContent = count;
}

function countdownten() {
    count = count - 10;
    number.textContent = count;
}

function reset() {
    count = 0;
    number.textContent = count;
}

plus1.addEventListener("click", countup);
minus1.addEventListener("click", countdown);
plusdhet1.addEventListener("click", countupten);
minusdhet1.addEventListener("click", countdownten);
resetButton1.addEventListener("click", reset);