let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // for (let i = 0; i < myLeads.length; i++) {
    //     console.log(myLeads[i])
        
    // }
    console.log(myLeads)
})


for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

const btnEl = document.querySelector(".button-el")
btnEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    btnEl.innerHTML += "<br>Thank you for buying!"
}