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
  console.log(services, priceproperty, fmeters);
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
