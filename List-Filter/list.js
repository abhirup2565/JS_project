const input = document.getElementById('filter');
const list = document.getElementById('location-list');

const locations = [
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
  "Melbourne",
  "Los Angeles",
  "Barcelona",
  "Vancouver",
  "Rome",
  "Zurich",
  "Stockholm",
  "Vienna",
  "Auckland",
  "Madrid",
  "Hong Kong",
  "Montreal",
  "Lisbon",
  "Prague",
  "Athens",
  "Copenhagen",
  "Oslo",
  "Helsinki",
  "Chicago",
  "Brussels",
  "Dublin",
  "Edinburgh",
  "Amsterdam",
  "Florence",
  "Venice",
  "San Francisco",
  "Seoul",
  "Munich",
  "Perth",
  "Reykjavik",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Goa"
];

const createList = (array)=>{
    list.innerHTML="";
    itemsHolder = document.createElement('ul');
    for(let i = 0;i<array.length;i++)
    {
        items = document.createElement('li');
        items.classList.add('items');
        items.textContent = array[i];
        itemsHolder.appendChild(items);
    }
    list.appendChild(itemsHolder);
}

window.addEventListener('load', () => {
  createList(locations)
})

input.addEventListener('keyup', (e) => {
  let searchTerm = e.target.value.toLowerCase();
  let filteredLocations = locations.filter((item) => item.toLowerCase().includes(searchTerm));
  createList(filteredLocations);
})