const slidesContainer = document.querySelector('.slides-container');
var slideGroups;
var size;
let currentIndex = 0;

function createSlider()
{
  var width = window.innerWidth;
  imageNumber = 2;
  var slideGroupDIV;

  var creationLimit;
  var additionLimit;

  if (width >= 992)
  {
    size = 3;
    creationLimit = 2;
    additionLimit = 1;
  }
  else if (width >= 576)
  {
    size = 2;
    creationLimit = 0;
    additionLimit = 1;
  }
  else
  {
    size = 1;
    creationLimit = 0;
    additionLimit = 0;
  }

  for (imageNumber = 2; imageNumber <= 13; imageNumber++)
  {
    if (imageNumber % size === creationLimit)
    {
      slideGroupDIV = document.createElement("div");
      slideGroupDIV.classList.add("slide-group");
    }

    var slideImageDIV = document.createElement("div");
    slideImageDIV.classList.add("slide");
    slideImageDIV.style.backgroundImage = `url('./assets/${imageNumber}.png')`;
    slideGroupDIV.appendChild(slideImageDIV);

    if (imageNumber % size === additionLimit)
    {
      slidesContainer.appendChild(slideGroupDIV);
    }
  }

  slideGroups = document.querySelectorAll('.slide-group');
  showSlideGroup(currentIndex);
  setInterval(nextSlideGroup, 3000);
}

function showSlideGroup(index)
{
  const offset = -index * (100 / size);
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlideGroup()
{
  currentIndex += 1;
  if (currentIndex >= slideGroups.length)
  {
    currentIndex = 0;
  }
  
  showSlideGroup(currentIndex);
}

createSlider();