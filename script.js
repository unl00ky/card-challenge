const btn = document.querySelectorAll(".arrow");
const details = document.querySelectorAll(".details");
const dropdown = document.querySelectorAll(".dropdown")

for(let i = 0; i < dropdown.length; i++) {

    dropdown[i].addEventListener("click", () => {
        btn[i].classList.toggle("rotate");

        const mainTitles = document.querySelectorAll(".main-title")
        mainTitles[i].classList.toggle("titles-effect");
        
        if(details[i].style.display === "block"){
            details[i].style.display = "none"
        } else {
            details[i].style.display = "block"
        }
    })
}

