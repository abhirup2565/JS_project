const itemContainer = document.getElementById('container');
const sentinel = document.getElementById('sentinel');

let bachSize = 25;
let counter = 0 ;

const generateItems = ()=>{
    for(let i =0; i<bachSize;i++)
    {
        item = document.createElement('div');
        item.classList.add('item');
        item.textContent =`Item ${counter+1}`;
        counter++;
        itemContainer.appendChild(item);
    }
}

window.addEventListener('load',()=>{generateItems();})

const intersectionObserver  = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            generateItems();
        }
    });
})

intersectionObserver.observe(sentinel);