let tabsNumber = 5;
const tabContainer = document.getElementById('tab-container');
const contentContainer = document.getElementById('content-container');

tabArray = new Array(tabsNumber).fill().map((_,index)=>index);
descriptionArray = new Array(tabsNumber).fill().map((_,index)=>`This is content of tab ${index}`);

let active = 0;
contentContainer.textContent = descriptionArray[active];

tabArray.forEach((element,index) => {
    const tabs = document.createElement('div');
    tabs.textContent=`Tab ${index}`;
    tabs.classList.add('tabs');
    if(index==0)
    {
        tabs.classList.add('active');
    }
    tabContainer.appendChild(tabs);

    tabs.addEventListener('click',()=>{
        const div = document.querySelectorAll('.tabs');
        active = index;
        div.forEach((items)=>items.classList.remove('active'));
        tabs.classList.add('active');
        contentContainer.textContent = descriptionArray[active];
    })
});