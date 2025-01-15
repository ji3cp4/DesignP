// let total = document.querySelector("#total");
// let totalvalue = total.textContent;

// function touch(digit){
//     // totalvalue = totalvalue ==='0' ? digit:totalvalue + digit;
//     if(totalvalue==='0'){
//         totalvalue = parseInt(totalvalue) + parseInt(digit);
//     }
//     updateScreenDisplay();
// }

// function updateScreenDisplay(){
//     total.textContent = totalvalue;
// }


//try
let total = document.querySelector("#total");

function touch(input){
    total.value += input;
    console.log(total.value);
}

function cleardisplay(){
    total.value = "";
}

function subtotal(){
    try{
        total.value = eval(total.value);
    }
    catch(error){
        total.value = "請重新輸入";
    }
}

function division(){
    var d = Math.sqrt(total.value);
    total.value = d;
}

function square(){
    // var s = parseInt(total.value) * parseInt(total.value);
    var s = total.value * total.value;
    total.value = s;
}


let plusm = document.getElementById("plusm");
let plus =function(){
    total.value += "+";
    
    console.log("Llll")
} 
plusm.addEventListener("click", plus);




