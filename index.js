const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one") 
let passTwo = document.getElementById("pass-two")

let passOneArray = []
let passTwoArray = []
let active = false

function generatePasswords() {
    
    if (active) {
        passOne.textContent = ""
        passOneArray = []

        passTwo.textContent = ""
        passTwoArray = []
    }

    for(let i = 0; i < 15; i++) {
        let ranIndexOne = Math.floor(Math.random() * characters.length)
        let ranIndexTwo = Math.floor(Math.random() * characters.length)

        passOne.textContent += characters[ranIndexOne]
        passOneArray.push(characters[ranIndexOne])        

        passTwo.textContent += characters[ranIndexTwo]
        passTwoArray.push(characters[ranIndexTwo])
    }

    active = true
}

async function copyPassOne() {
    try {
       await navigator.clipboard.writeText(passOneArray.toString()) 
       alert("Copied to Clipboard")
    } catch (error) {
       console.error("Failed to copy: ", error) 
    }
}

async function copyPassTwo() {
    try {
       await navigator.clipboard.writeText(passTwoArray.toString())
       alert("Copied to Clipboard")
    } catch (error) {
       console.error("Failed to copy: ", error) 
    }
}
