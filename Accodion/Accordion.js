const accordion = document.getElementById('accordion');
const datas=[
    {
        title:"Accordion item 1",
        desc:"Description of item 1"
    },
    {
        title:"Accordion item 2",
        desc:"Description of item 2"
    },
    {
        title:"Accordion item 3",
        desc:"Description of item 3"
    }
]

datas.forEach((data)=>{
    const item = document.createElement('div');
    item.classList.add('accordion-item');

    const title = document.createElement('div');
    title.classList.add('accordion-title');
    title.textContent=data.title;

    const desc = document.createElement('div');
    desc.classList.add('accordion-desc');
    desc.textContent=data.desc;

    title.addEventListener('click',()=>{
        let content = item.querySelector('.accordion-desc');
        content.classList.toggle('active')
    })
    
    accordion.appendChild(item);
    item.appendChild(title);
    item.appendChild(desc);
})