const SearchInput = document.getElementById('SearchInput');
const SelctedItem = document.getElementById('SelctedItem');
const listOptions = document.getElementById('listOptions');

Options=[
    "Sydney",
  "Tokyo",
  "New York",
  "London",
  "Paris",
  "Toronto",
  "Rio de Janeiro",
  "Cape Town",
  "Berlin",
  "Buenos Aires",
];

const createList = (array) =>{
    listOptions.innerHTML = null;
    for(let i=0; i<array.length;i++)
    {
        const element = array[i];
        const listItems = document.createElement('div');
        listItems.classList.add('list-item');
        listItems.textContent = element ;

        listItems.addEventListener('click',()=>{
            SelctedItem.textContent=`You have selected ${element}`;
            listOptions.style.display='none';
        })

        listOptions.appendChild(listItems)
    }
} 

SearchInput.addEventListener('keyup',(e)=>{
    listOptions.style.display='block';
    let search = e.target.value;
    let filtereditems = Options.filter((item)=>item.toLowerCase().includes(search));
    createList(filtereditems);
})