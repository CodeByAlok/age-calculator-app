let userInput = document.getElementById("dob");
let calculateBtn = document.querySelector(".calc");
let resetBtn = document.querySelector(".res");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", ()=>{
    let dobValue = userInput.value;

    if(dobValue === ""){
        result.textContent = "Kindly Enter any age";
        result.style.color = "red";
    }
    
    if(dobValue){
        let dob = new Date(dobValue);
    let today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDay = today.getDay() - dob.getDay();




    if (ageDay < 0) {
        ageMonths--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDay += prevMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }



    result.textContent = `You are ${ageYears} years ${ageMonths} months and ${ageDay} days old`;
    result.style.color="green";
    }
})

resetBtn.addEventListener("click", ()=>{
    userInput.value = "";
    result.textContent = "";
})