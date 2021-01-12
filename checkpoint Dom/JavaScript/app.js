let plusBtn = Array.from(document.getElementsByClassName("plus-btn")); 
let qute = Array.from(document.getElementsByClassName("qute")); 
let minusbtn = Array.from(document.getElementsByClassName("minus-btn")); 
let like = Array.from(document.getElementsByClassName("fas")); 
let del = Array.from(document.getElementsByClassName("fa-calendar-times")); 

let total = document.querySelector(".total"); 


function somme() {
    let s = 0; 
    let prix = document.getElementsByClassName("prix-unitaire"); 
    let qute = document.getElementsByClassName("qute"); 
    for (let i = 0; i < prix.length; i++){

        s = s + prix[i].innerHTML * qute[i].innerHTML; 
    //    console.log(prix[i].innerHTML); 
    //    console.log(qute[i].innerHTML);   
    }

    console.log(total.innerHTML = s);  
    return (total.innerHTML = s); 
}

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function () {
        qute[i].innerHTML++;
        somme(); 
    })
}

for (let i = 0; i < minusbtn.length; i++) {
    minusbtn[i].addEventListener("click", function () {
        if (qute[i].innerHTML > 0) {
               qute[i].innerHTML--;
        }
         
            somme(); 
    })
}
for (let i = 0; i < del.length; i++){
    del[i].addEventListener("click", function () {
        del[i].parentElement.parentElement.remove(); 
        somme(); 
    })
}

// like button
for (let i = 0; i < like.length; i++){
    like[i].addEventListener("click", function () {
        if (like[i].style.color === "black") {
            like[i].style.color = "red"; 
        }
        else {
            like[i].style.color = "black"; 
        }
    })
}
