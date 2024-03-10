let position = 0;

function slide() {
  const slides = document.querySelector(".slide-holder");
  if (window.matchMedia("(max-width: 425px)").matches) {
    // Phone Size
    position -= 340;
    slides.style.transform = `translateX(${position}px)`;
  
    if (position === -1020) {
      setTimeout(() => {
        slides.style.transition = "none";
        position = 0;
        slides.style.transform = `translateX(${position}px)`;
  
        setTimeout(() => {
          slides.style.transition = "transform .5s ease-in-out";
        }, 50);
      }, 500);
    }
    } else if (window.matchMedia("(max-width: 768px)").matches) {
    // Tablet Size
    position -= 600;
    slides.style.transform = `translateX(${position}px)`;
  
    if (position === -1800) {
      setTimeout(() => {
        slides.style.transition = "none";
        position = 0;
        slides.style.transform = `translateX(${position}px)`;
  
        setTimeout(() => {
          slides.style.transition = "transform .5s ease-in-out";
        }, 50);
      }, 500);
    }   
  } else {
    // Laptop Size
    position -= 800;
    slides.style.transform = `translateX(${position}px)`;
  
    if (position === -2400) {
      setTimeout(() => {
        slides.style.transition = "none";
        position = 0;
        slides.style.transform = `translateX(${position}px)`;
  
        setTimeout(() => {
          slides.style.transition = "transform .5s ease-in-out";
        }, 50);
      }, 500);
    }   
}
}
setInterval(slide, 3500);

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imageSrc;
}
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

function closeMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "none";
}

function menuDropdown() {
  var dropMenu = document.getElementById("menu");
    if (dropMenu.style.display === "none"){
      dropMenu.style.display = "block";
    }else{
      dropMenu.style.display = "none";
    }
};

window.onclick = function (event) {
  var menu = document.getElementById("menu");
  if (event.target === menu) {
    closeMenu();
  }
};
