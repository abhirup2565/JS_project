const modal = document.querySelector('.main-modal');
const main = document.querySelector('.main');
console.log(modal);

const handleOpenModal = ()=>{
    modal.style.display = "block";
    main.style="opacity: 40%;"
}


const handleCloseModal = ()=>{
    modal.style.display = "none";
    main.style="opacity: 100%;"
}