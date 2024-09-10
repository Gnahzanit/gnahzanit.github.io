const cursor = document.querySelector("[data-cursor]");

window.addEventListener("mousemove", function(e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
})

document.addEventListener('mouseover', (e) => {
  if (e.target.id === "fluffy") {
    cursor.style.backgroundImage = `url('assets/images/mouse/fluffy-mouse.gif')`;
  } else if (e.target.id === 'open-in-tab' || e.target.classList.contains('ep-proj-links')) {
    cursor.style.backgroundImage = `url('assets/images/mouse/open-in-tab-mouse.png')`;
  } else if (e.target.id === 'cursor-alt' || e.target.id === 'button-one' || e.target.id === 'button-two' || e.target.id === 'button-three' || e.target.id === 'art-img' || e.target.id === 'works-img' || e.target.id === 'about-img' || e.target.id === 'contact-img' || e.target.id === 'home-img') {
    cursor.style.backgroundImage = `url('assets/images/mouse/pointer-mouse.gif')`;
  } else {
    // cursor.style.backgroundImage = `url('assets/images/mouse/default-mouse.png')`;
    cursor.style.backgroundImage = `url('assets/images/mouse/fluffy-mouse.gif')`;
  }
});

const loader = document.getElementById("loading-screen");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelector('#copyright-year').textContent = year;
  });

function changeImage(id, oldSrc, newSrc) {
const image = document.getElementById(id);
image.addEventListener('mouseover', function() {
  this.src = newSrc;
});
image.addEventListener('mouseout', function() {
    this.src = oldSrc;
  });
}

changeImage('home-img', 'assets/images/navbar/home.png', 'assets/images/navbar/home-onhov.png');
changeImage('about-img', 'assets/images/navbar/about.png', 'assets/images/navbar/about-onhov.png');
changeImage('works-img', 'assets/images/navbar/works.png', 'assets/images/navbar/works-onhov.png');
changeImage('art-img', 'assets/images/navbar/art.png', 'assets/images/navbar/art-onhov.png');
changeImage('contact-img', 'assets/images/navbar/contact.png', 'assets/images/navbar/contact-onhov.png');
