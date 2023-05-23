// var hInput1 = document.getElementById('#numIn1');
// var wInput2 = document.getElementById('#numIn2');
// var calculate = document.getElementById('#cal');
// var reset = document.getElementById('#reset');
// var result = document.getElementById('#result');
// var height, weight;
let result1 = document.getElementById('result1')


function cal() {
    let height = document.getElementById("numIn2").value;
    let weight = document.getElementById("numIn1").value;

    let result = (weight / Math.pow(height / 100, 2)).toFixed(1);

    if (result <= 18.4) {
        document.getElementById("text").innerHTML = "You are Underweight";
    } else if (result >= 18.5 && result <= 24.9) {
        document.getElementById("text").innerHTML = "You are normal"
    } else if (result >= 25.0 && result <= 39.9) {
        document.getElementById('text').innerHTML = "You are Overweight"
    } else if (result >= 40.0) {
        document.getElementById('text').innerHTML = "You are Obese"
    }

    document.getElementById('output').innerHTML = result;
};

let reset = () => {
    document.getElementById("text").innerHTML;
    if (reset.value != "") {
        reset.value = "";
    }
};