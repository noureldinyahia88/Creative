


// Get all the link-portfolio elements
let links = document.querySelectorAll('.link-portfolio');
let portfolioImage = document.querySelectorAll('.portfolio-image')
let portfolioImageGraphic = document.querySelectorAll('.portfolio-image.graphic')
let portfolioImagemobile = document.querySelectorAll('.portfolio-image.mobile')
let portfolioImageWebDevelopment = document.querySelectorAll('.portfolio-image.web-development')
let portfolioImageWebDesign = document.querySelectorAll('.portfolio-image.web-design')
let portfolioImageAll = document.querySelectorAll('.portfolio-image.all')




// Loop through each link
for (var i = 0; i < links.length; i++) {
  // Add a click event listener to each link
  links[i].addEventListener('click', function(e) {
    // Prevent the default behavior of the link
    e.preventDefault();

    // Remove the 'active' class from all links
    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }

    // Add the 'active' class to the clicked link
    this.classList.add('active');

    // Hide all portfolio images
    portfolioImage.forEach(x => x.style.display = 'none');
    
    // Show graphic images if the clicked link has the 'graphic' class
    if (this.classList.contains('graphic')) {
        portfolioImageGraphic.forEach(x => x.style.display = 'block');
    } else if(this.classList.contains('mobile')){
        portfolioImagemobile.forEach(x => x.style.display = 'block');
    } else if(this.classList.contains('web-development')){
        portfolioImageWebDevelopment.forEach(x => x.style.display = 'block');
    }  else if(this.classList.contains('web-design')){
        portfolioImageWebDesign.forEach(x => x.style.display = 'block');
    } else if(this.classList.contains('all')){
        portfolioImage.forEach(x => x.style.display = 'block');
    }
});
}


const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let currentSlide = 0;

// Create dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    goToSlide(i);
  });
  dotsContainer.appendChild(dot);
}

// Set active slide and dot
slides[currentSlide].classList.add('active');
dotsContainer.children[currentSlide].classList.add('active');

// Go to specified slide
function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}



