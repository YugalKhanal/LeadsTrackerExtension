let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

//getting the inputted value and turning to a string
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//adding the inputted value to the array 
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//on double click deletes all the inputted values
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//adds value to the array and localStorage after stringifying
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

//lists on the page the values in the array
function render (leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        /* const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)*/
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
} 
