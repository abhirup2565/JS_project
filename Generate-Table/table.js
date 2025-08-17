const dynamicTable = document.getElementById('dynamic-table');
const submit = document.getElementById('submit');
const inputRow = document.getElementById('rowInput');
const inputCol = document.getElementById('colInput');
let row = 0;
let col = 0;


const createTable = ()=>{
    dynamicTable.innerHTML="";
    generateTable = document.createElement('table');
    tableHead = document.createElement('tr');
    for(let i=0;i<col;i++)
    {
        headItems = document.createElement('th');
        headItems.classList.add('head');
        headItems.textContent =`Column${i+1}`;
        tableHead.appendChild(headItems);
    }
    generateTable.appendChild(tableHead);
    for(let i=0;i<row;i++)
    {
        tableRow = document.createElement('tr');
        for(let j=0;j<col;j++)
        {
            bodyItems = document.createElement('td');
            bodyItems.classList.add('items');
            bodyItems.textContent =`Rows:${i+1} ,Columns:${j+1}`;
            tableRow.appendChild(bodyItems);
        }
        generateTable.appendChild(tableRow);
    }
    dynamicTable.appendChild(generateTable);
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    row = Number(inputRow.value);
    col = Number(inputCol.value);
    console.log(`Rows ${row}`);
    console.log(`Cols ${col}`);
    createTable();
})
