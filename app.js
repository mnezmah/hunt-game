let images = [{
  name: 'img1',
  src: '../img/img1.jpg'
},
{
  name: 'img2',
  src: '../img/img2.jpg'
},
{
  name: 'img3',
  src: '../img/img3.jpg'
}

]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



images.forEach(image => {
  image.name = '';
  image.src = 'url';
  document.getElementById('searchField');
  const painting = document.createElement('img');
  image.alt.innerHTML = painting.name;
  image.src.innerHTML = image.src;
  image.style('height: 100px;');
  image.style('position: absolute;');
  image.style(`bottom: ${getRandomInt(0, 30)}`);
  image.style(`left: ${getRandomInt(0, 60)}`);
});