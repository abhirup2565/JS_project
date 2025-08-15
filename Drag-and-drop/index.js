const itemHolder = document.getElementById('item-holder');
const Number_options = 8;

const items = new Array(Number_options).fill().map((_,index)=>index);
let startDivId;
items.forEach(item=>
{
    const itemdiv = document.createElement('div');
    itemdiv.draggable = true;
    itemdiv.classList.add('item');
    itemdiv.textContent = `items ${item}`;
    itemdiv.id = `items ${item}`;

    itemdiv.addEventListener('dragstart',(e)=>{
        startDivId = e.target.id;
    })

   itemdiv.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    itemdiv.addEventListener('drop',(e)=>{
        e.preventDefault();
        const draggedElement  = document.getElementById(startDivId);
        if( startDivId != e.target.id)
        itemHolder.insertBefore(draggedElement,e.target)
    })

    itemHolder.appendChild(itemdiv);
})