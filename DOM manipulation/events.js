window.addEventListener("scroll" ,()=>{
    console.log("Page scrollingat " + window.scrollY + "px");
    
})
const openMenuButton=document.querySelector("#open-menu");
openMenuButton.style.backgroundColor = "orange"
openMenuButton.addEventListener("click", ()=>{
    console.log("Opening Menu!!!");
   // document.querySelector("#mobile-menu").style.display="flex"
    document.querySelector("#mobile-menu").classList.add("opened-nav")

})

const closeMenuButton=document.querySelector("#close-menu");
closeMenuButton.addEventListener("click", ()=>{
    console.log("Closing Menu!!!");
   // document.querySelector("#mobile-menu").style.display="none"
   document.querySelector("#mobile-menu").classList.remove("opened-nav")

})

