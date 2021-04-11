function addValue(){
    // get the operands value
    var operand1 = document.getElementById("inpt1").value;
    var operand2 = document.getElementById("inpt2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 + val2;
    document.getElementById("sumplace").value = val1 + " " + "+" + " " + val2 + " " + "=" + " " + result
}

function multiplyValue(){
    var operand1 = document.getElementById("inpt1").value;
    var operand2 = document.getElementById("inpt2").value;

    
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);


    var result = val1 * val2;
    document.getElementById("sumplace").value = val1 + " " + "*" + " " + val2 + " " + "=" + " " + result
}

function divideValue(){
    var operand1 = document.getElementById("inpt1").value;
    var operand2 = document.getElementById("inpt2").value;

    
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);


    var result = val1 / val2;
    document.getElementById("sumplace").value = val1 + " " + ":" + " " + val2 + " " + "=" + " " + result
}

