let currentView = window.innerWidth;
const navbar = document.getElementById('navbar');
const hamholder = document.getElementById('ham-holder'); 
const hamburgerHandle = document.getElementById('hamburger-handle');
const hamburgerItems = document.getElementById('hamburger-items');


window.addEventListener('resize',()=>{
    currentView = window.innerWidth;
    display();
})

window.addEventListener('load',()=>{display()})

const display = ()=>{
    if(currentView<460)
    {
        navbar.style.display = "none";
        hamholder.style.display="block";
    }
    else
    {
        navbar.style.display = "block";
        hamholder.style.display="none";
    }
}

hamburgerHandle.addEventListener('click',()=>{
    hamburgerItems.classList.toggle('clicked');
    hamburgerItems.classList.toggle('unclicked');
})