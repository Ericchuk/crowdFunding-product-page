let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let hamburgerContent = document.querySelector(".hamburger-content");
let backProject = document.querySelector(".back-project");
let bookMarked = document.querySelector(".booked");
let backers = document.querySelector(".backers");
let backer = 5008;
let progress = document.querySelector("#file").value;
console.log(progress)
let sumAtHand = document.querySelector(".sum-at-hand");
let sumAthan = 89914;
let progressBar = document.querySelector(".bar");
let selectReward1 = document.querySelector(".select-reward1");
let selectReward2 = document.querySelector(".select-reward2");
let booked = document.querySelector(".bookmark");
let modal = document.querySelector(".modal");
let remaining1 = document.querySelector(".left101");
let left101 = 100;
let remaining3 = document.querySelector(".left101a");
let left101a = 100;
let remaining2 = document.querySelector(".left64");
let left64 = 63;
let remaining4 = document.querySelector(".left64a");
let left64a = 63;
let bal1 = document.querySelector(".bal1");
let bal2 = document.querySelector(".bal2");
let pledgeSection1 = document.querySelector(".pledge-section1");
let pledgeSection2 = document.querySelector(".pledge-section2");
let continue1 = document.querySelector(".continue1");
let continue2 = document.querySelector(".continue2");
let firstButton1 = document.querySelector(".first-button1");
let firstButton2 = document.querySelector(".first-button2");
let closeModal = document.querySelector(".close-modal");
let successAlert = document.querySelector(".successAlert");
let alertDismiss = document.querySelector(".alert-dismiss");
let holdfront = "$"


function openHamburger(){
    if(hamburgerContent.style.display === "block"){
        hamburgerContent.style.display ="none";
        hamburger.style.display = "block";
        close.style.display = "none"
    }else(
        hamburgerContent.style.display = "block",
        hamburger.style.display ="none",
        close.style.display = "block" 
    )
}


hamburger.addEventListener("click", openHamburger);
close.addEventListener("click", openHamburger);


function openBackedProject(){
    if(modal.style.display === "block"){
        modal.style.display = "none";
    }else(
        modal.style.display = "block"
    )
}

backProject.addEventListener("click", openBackedProject);
selectReward1.addEventListener("click", openBackedProject);
selectReward2.addEventListener("click", openBackedProject);
closeModal.addEventListener("click", openBackedProject);


function openPledgeSection1(){
    if(pledgeSection1.style.display === "block"){
        pledgeSection1.style.display = "none";
    }else(
        pledgeSection1.style.display = "block"
    )
}

bal1.addEventListener("click", openPledgeSection1)

function openPledgeSection2(){
    if(pledgeSection2.style.display === "block"){
        pledgeSection2.style.display = "none";
    }else(
        pledgeSection2.style.display = "block"
    )
}
bal2.addEventListener("click", openPledgeSection2)

function crossCheckAmount1(){
    let inputAmount1 = document.querySelector(".input-amount1").value;
    parseInt(inputAmount1);
    
    if(inputAmount1 >= 25 && inputAmount1 < 75){
        successAlert.style.display = "block";
        remaining3.innerHTML = left101a--;
        remaining1.innerHTML = left101--;
    }else(
        alert("Please input the least amount specified")
    )
}

continue1.addEventListener("click", crossCheckAmount1);

function crossCheckAmount2(){
    let inputAmount2 = document.querySelector(".input-amount2").value;
    parseInt(inputAmount2);
    
    if(inputAmount2 >= 75 && inputAmount2 < 200){
        successAlert.style.display = "block";
        remaining4.innerHTML = left64a--;
        remaining2.innerHTML = left64--;
    }else(
        alert("Please input the least amount specified")
    )

}

console.log(remaining1)

continue2.addEventListener("click", crossCheckAmount2);


function dsmissSuccessAlert(){
    if(successAlert.style.display === "block"){
        successAlert.style.display = "none";
        modal.style.display = "none"
    }else(
        successAlert.style.display = "block",
        modal.style.display = "block"
    )
}

alertDismiss.addEventListener("click", dsmissSuccessAlert);

function increaseTotal(){
    let inputAmount1 = document.querySelector(".input-amount1").value;
    let inputAmount2 = document.querySelector(".input-amount2").value;
    if(inputAmount2 > 75 && inputAmount2 < 200){
        sumAtHand.innerHTML =  parseInt(sumAthan) + parseInt(inputAmount2);
        backers.innerHTML = backer++;
    }
    else if(inputAmount1 >= 25 && inputAmount1 < 75){
        sumAtHand.innerHTML =  parseInt(sumAthan) + parseInt(inputAmount1);
        backers.innerHTML = backer++;
    }
}

continue1.addEventListener("click", increaseTotal);
continue2.addEventListener("click", increaseTotal);

booked.addEventListener("click", function(){
        if(booked.innerHTML !== "Bookmarked"){
            booked.innerHTML = "Bookmarked";
            booked.style.padding = "15px 30px 15px 60px";
            booked.style.color = "hsl(176, 50%, 47%)";
        }else{
            booked.innerHTML = "Bookmark",
            booked.style.color = 'rgba(0, 0, 0, 0.445)'
        }
    }
)

continue1.addEventListener("click", function(){
    let inputAmount1 = document.querySelector(".input-amount1").value;

    // for(let i = 80; i <= 100; i++){
    //     progress++
    //     console.log(progress);
    // }
    // if(inputAmount1 > 25 && inputAmount1 < 75){
    //     let x = progress;
    //     console.log(x)
    // }
})