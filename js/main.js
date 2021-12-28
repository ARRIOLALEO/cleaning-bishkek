let range = document.getElementById("range");
let meters = document.getElementById("myRange");
let typeOfProperty = document.getElementsByName("typeofproperty");
let allCheckboxes = document.querySelectorAll("input[type=checkbox]");
let totalSimple = document.getElementById("totalsimple");
// this  to calculate price we need to hold the prices here
let priceproperty = 1;
let services = 1;
let fmeters = 50;
function render() {
  totalSimple.innerHTML = parseInt(
    parseInt(services) + parseInt(priceproperty) * parseInt(fmeters)
  );
}

range.addEventListener("input", function (e) {
  meters.innerHTML = e.target.value;
  fmeters = parseInt(e.target.value);
  render();
});

typeOfProperty.forEach((property) => {
  property.addEventListener("click", (e) => {
    priceproperty = parseInt(e.target.value);
    render();
  });
});

allCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function (element) {
    if (element.target.checked == true) {
      services += parseInt(element.target.value);
    } else {
      services -= parseInt(element.target.value);
    }
    render();
  });
});

// get all the questions and cover them

const questions = document.querySelectorAll(".contentquestion");
questions.forEach((descriptions) => descriptions.classList.add("hide-questions"));

const headerquestions = document.querySelectorAll(".headerquestion");
console.log(headerquestions);
headerquestions.forEach((header) => {
  header.addEventListener("click", function () {
    const nextElement = document.getElementsByClassName(`${header.id}`);
    nextElement[0].classList.toggle("hide-questions");
  });
});

// controls popups

const popups = document.querySelectorAll(".popups");
popups.forEach((popup) => {
  popup.classList.add("hide-questions");
});

//get all the show popup buttons

const showpopups = document.querySelectorAll(".showpopup");
console.log(showpopups);
showpopups.forEach((show) => {
  show.addEventListener("click", (e) => {
    const popuptoshow = document.querySelector(`.${e.target.id}`);
    popuptoshow.style.overflow = "auto";
    popuptoshow.classList.toggle("hide-questions");
  });
});

//get all the close popus

const allclosepopups = document.querySelectorAll(".btn-close");
allclosepopups.forEach((closebtn) => {
  const popupremoved = document.querySelector(`.${closebtn.id}-cleanning`);
  closebtn.addEventListener("click", function () {
    popupremoved.classList.toggle("hide-questions");
    popupremoved.style.overflow = "initial";
    document.body.style.overflow = "initial";
  });
});

// menu manipulation

const menuMobile = document.querySelector(".menu-mobile");
const closeMenu = document.querySelector(".close-menu");

closeMenu.addEventListener("click", function () {
  menuMobile.style.opacity = "0";
  menuMobile.style.zIndex = "-1";
});

const hamburgerMenu = document.querySelector(".menu-mobil");
hamburgerMenu.addEventListener("click", function () {
  menuMobile.style.opacity = "1";
  menuMobile.style.zIndex = "2";
});
