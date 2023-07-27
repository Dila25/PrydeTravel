//Nav Bar*-----------------------------------------------------------------------------------------------------------------------------
const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}

//Header Scroll------------------------------------------------------------------------------------------------------------------------------

const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll(".card")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "block" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "block" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//popular-destinations--------------------------------------------------------------------------------------------------------------------
const dcarousel = document.querySelector(".destinations-carousel"),
  firstCard = dcarousel.querySelectorAll(".destinations-img")[0],
  DarrowIcons = document.querySelectorAll(".Destinations-wrapper i");

let isDDragDStart = false,
  isDDragging = false,
  DprevPageX,
  DprevScrollLeft,
  DpositionDiff;

const showDHideIcons = () => {
  // showing and hiding prev/next icon according to dcarousel scroll left value
  let scrollWidth = dcarousel.scrollWidth - dcarousel.clientWidth; // getting max scrollable width
  DarrowIcons[0].style.display = dcarousel.scrollLeft == 0 ? "block" : "block";
  DarrowIcons[1].style.display =
    dcarousel.scrollLeft == scrollWidth ? "block" : "block";
};

DarrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstCardWidth = firstCard.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the dcarousel scroll left else add to it
    dcarousel.scrollLeft +=
      icon.id == "Destinations-left" ? -firstCardWidth : firstCardWidth;
    setTimeout(() => showDHideIcons(), 60); // calling showDHideIcons after 60ms
  });
});

const autoSlideD = () => {
  // if there is no image left to scroll then return from here
  if (
    dcarousel.scrollLeft - (dcarousel.scrollWidth - dcarousel.clientWidth) >
      -1 ||
    dcarousel.scrollLeft <= 0
  )
    return;

  DpositionDiff = Math.abs(DpositionDiff); // making DpositionDiff value to positive
  let firstCardWidth = firstCard.clientWidth + 14;
  // getting difference value that needs to add or reduce from dcarousel left to take middle img center
  let valDifference = firstCardWidth - DpositionDiff;

  if (dcarousel.scrollLeft > DprevScrollLeft) {
    // if user is scrolling to the right
    return (dcarousel.scrollLeft +=
      DpositionDiff > firstCardWidth / 3 ? valDifference : -DpositionDiff);
  }
  // if user is scrolling to the left
  dcarousel.scrollLeft -=
    DpositionDiff > firstCardWidth / 3 ? valDifference : -DpositionDiff;
};

const dragDStart = (e) => {
  // updatating global variables value on mouse down event
  isDDragDStart = true;
  DprevPageX = e.pageX || e.touches[0].pageX;
  DprevScrollLeft = dcarousel.scrollLeft;
};

const draggingD = (e) => {
  // scrolling images/dcarousel to left according to mouse pointer
  if (!isDDragDStart) return;
  e.preventDefault();
  isDDragging = true;
  dcarousel.classList.add("dragging");
  DpositionDiff = (e.pageX || e.touches[0].pageX) - DprevPageX;
  dcarousel.scrollLeft = DprevScrollLeft - DpositionDiff;
  showDHideIcons();
};

const dragStopD = () => {
  isDDragDStart = false;
  dcarousel.classList.remove("dragging");

  if (!isDDragging) return;
  isDDragging = false;
  autoSlideD();
};

dcarousel.addEventListener("mousedown", dragDStart);
dcarousel.addEventListener("touchstart", dragDStart);

document.addEventListener("mousemove", draggingD);
dcarousel.addEventListener("touchmove", draggingD);

document.addEventListener("mouseup", dragStopD);
dcarousel.addEventListener("touchend", dragStopD);

//Testimonials--------------------------------------------------------------------------------------------------------------------
let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener("mouseover", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].className = "imgBx";
      imgBx[i].querySelector(".icon-name").style.filter = "blur(2px)";
    }
    this.className = "imgBx active";
    this.querySelector(".icon-name").style.filter = "blur(0)";
  });
}
