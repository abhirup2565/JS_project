const container = document.getElementById('Images');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const data=[
    {
        img:'https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d',
        alt:'Sunset',
        title:'Sunset'
    },
    {
        img:'https://images.unsplash.com/photo-1426543881949-cbd9a76740a4',
        alt:'love',
        title:'love'
    },
    {
        img:'https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d',
        alt:'diwali',
        title:'diwali'
    }
]
let index=0;
const imageHolder = document.createElement('img');
container.appendChild(imageHolder);

updateImage();

next.addEventListener('click',()=>
{
    index++;
    indexMaintainer();
    updateImage();
})

prev.addEventListener('click',()=>
{
    index--;
    indexMaintainer();
    updateImage();
})

function updateImage()
{
    imageHolder.src=data[index].img;
    imageHolder.alt=data[index].alt;
    imageHolder.style='width:500px; height:650px; object-fit:cover;';
}

function indexMaintainer()
//manages index if index exceeds the bound or is negative 
{
    index=index%(data.length);
    if(index<0)
    {
        index=data.length+index;
    }
    console.log(index);
}



