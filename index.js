

let myLeads = []
let oldLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})
tabBtn.addEventListener("click", function(){
 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
    {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)

    })

    
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
    <li>
       <a target='_blank' href='${leads[i]}'>
           ${leads[i]}
       <a>
   </li>


    
    `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)

        // const li = document.createElement("li")
        // li.append(myLeads[i])
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems

}





inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    


     
    render(myLeads)
    
    
    
})
 



 



