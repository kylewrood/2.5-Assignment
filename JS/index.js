function calAdd() {
let x,y,z;
x = Number(document.getElementById("numb1").value);
y = Number(document.getElementById("numb2").value);

z=x+y;
document.getElementById("plus").innerHTML = z;
return
}


function calSub() {
let x = document.getElementById("numb1").value;
let y = document.getElementById("numb2").value;

z= (x-y);
document.getElementById("sub").innerHTML = z;
return
}

function calMulti() {
let x = document.getElementById("numb1").value;
let y = document.getElementById("numb2").value;

z=(x*y);
document.getElementById("multi").innerHTML = z;
return
}



function calDive() {
let x = document.getElementById("numb1").value;
let y = document.getElementById("numb2").value;

z= (x/y);
document.getElementById("dive").innerHTML = (z.toFixed(2));
return
}