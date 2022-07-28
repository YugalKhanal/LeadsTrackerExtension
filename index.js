let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // for (let i = 0; i < myLeads.length; i++) {
    //     console.log(myLeads[i])
        
    // }
    console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})

function renderLeads () {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 
        
        //same thing as above
        
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}



const btnEl = document.querySelector(".button-el")
btnEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    btnEl.innerHTML += "<br>Thank you for buying!"
}

