const inputName=prompt("enter your name")
const inputAge=prompt("enter your age")
const inputHobbies=prompt("enter your hobbies separated with commas")
nameEl=document.getElementById("uname")
ageEl=document.getElementById("uage")
hobbiesEl=document.getElementById("uhobby")
const hobbyList=inputHobbies.split(",")
const hobbyDisplay=[]
for (i in hobbyList){
    hobbyDisplay.push(`<span class="badge text-bg-primary">${hobbyList[i]}</span>`)
}

nameEl.innerText = inputName
ageEl.innerText=inputAge
hobbiesEl.innerHTML=hobbyDisplay