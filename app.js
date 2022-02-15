let number=document.getElementById("number");
let check=document.getElementById("check");
let try1=document.getElementById("try1");
let button1=document.getElementById("button1");
let number1= 70;
let attemps=document.getElementById("attemps");
let h2=document.getElementById("h2")
let h3=document.getElementById("h3")
let list1=[0,100]
let x;

check.addEventListener("click", ()=>{
    if (number.value==number1){
        h2.style.fontSize="1.5rem";
        h2.style.color="white"
        h2.innerText=`Congrats, you found the chosen number ${number1} on your ${11-Number(try1.innerText)}. attempt`;
        attemps.style.display = "none";
        button1.style.display = "block";
        number.value=""
    }
    
    else if(number.value>number1){
        h2.style.fontSize="1.5rem";
        list1.push(number.value);
        list1.sort(function(a, b){return a - b});
        x = list1.indexOf(number.value);
        h2.innerText=`Please enter a smaller number, between ${list1[x-1]} and ${list1[x]} `
        try1.innerText=try1.innerText-1
        if(try1.innerText==0){
            h2.innerText= `Sorry, you failed. The number is ${number1}`;
            attemps.style.display = "none";
            button1.style.display = "block";
            number.value=""
        }
    }
    else if (number.value<number1){
        h2.style.fontSize="1.5rem";
        list1.push(number.value);
        list1.sort(function(a, b){return a - b});
        x = list1.indexOf(number.value);
        h2.innerText=`Please enter a greater number, between ${list1[x]} and ${list1[x+1]} `
        try1.innerText=try1.innerText-1
        if(try1.innerText==0){
            h2.innerText= `Sorry, you failed. The number is ${number1}`;
            attemps.style.display = "none";
            button1.style.display = "block";
            number.value=""
        }
    }
})
button1.addEventListener("click", ()=>{
    try1.innerText="10";
    attemps.style.display = "flex";
    button1.style.display = "none";
    h2.innerText="Write the number";
    list1=[0,100]
    let tuncay=document.createElement("h5");
    tuncay.setAttribute("class", "tuncay");
    tuncay.innerText="Alo"
    h2.append(tuncay);
})