var prompt = prompt("Input your name");

let images = [{
  name: 'img1',
  src: './img/img1.jpg'
},
{
  name: 'img2',
  src: './img/img2.jpg'
},
{
  name: 'img3',
  src: './img/img3.jpg'
}
]


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let foundItems = [];

images.forEach(image => {
  const main = document.getElementById('searchField');
  const painting = document.createElement('img');
  painting.alt = image.name;
  painting.src = image.src;
  painting.style.height =  '100px';
  painting.style.position = 'absolute';
  painting.style.bottom = `${getRandomInt(0, 30) + 'rem'}`;
  painting.style.left = `${getRandomInt(0, 60) + 'rem'}`;
  painting.onclick = function addToFoundItems() {console.log('clicked');
  if(!foundItems.includes(image)){
    foundItems.push(image)};
    displayInFooter();
  }
  main.appendChild(painting);
});

function displayInFooter() {
  const foundItemsSection = document.getElementById('foundItemsSection');
  foundItemsSection.innerHTML = '';
  foundItems.forEach(foundItem => {
    const img = document.createElement('img')
    img.alt = foundItem.name;
    img.src = foundItem.src;
    img.style.height =  '100px';
    img.style.position = 'absolute';
    img.classList.add('found');
    foundItemsSection.appendChild(img);
  })
  if(foundItems.length === images.length){
    alert('Congratuations, you have won!')
}
}

const name = document.querySelector('.name').value;
const player = document.getElementById('player')
player.innerHTML = prompt.value;
