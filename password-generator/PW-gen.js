

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let button = document.querySelector("#button")
let firstPassword = document.querySelector("#first-pass-p")
let secondPassword = document.querySelector("#second-pass-p")


button.addEventListener('click', function(e){
    e.preventDefault()
     firstPassword.textContent = ""
     secondPassword.textContent = ""

        for(let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length) 
            let randomNumber2 = Math.floor(Math.random() * characters.length)
         
            firstPassword.textContent += characters[randomNumber]
            secondPassword.textContent += characters[randomNumber2]
     
             console.log(characters[randomNumber])

            
         }  
  })

async function copyContent() {
    try {
        await navigator.clipboard.writeText(firstPassword.innerHTML)
        console.log("copied to clipboard")
    } catch (err) {
        console.error("Failed to copy", err)
    }

    alert("Content copied to clipboard")
}

async function copySecPass() {
    try {
        await navigator.clipboard.writeText(secondPassword.innerHTML)
        console.log("copied to clipboard")
    } catch (err) {
        console.error("Failed to copy", err)
    }

    alert("Content copied to clipboard")
}
  




