// get benefit img and descriptions
const ownershipdescription = document.getElementById(
  "benefits-desc-long-ownership"
);
const additionaldescription = document.getElementById(
  "benefits-desc-long-additional"
);
const customizationdescription = document.getElementById(
  "benefits-desc-long-customization"
);
const utilitydescription = document.getElementById(
  "benefits-desc-long-utility"
);
const ownership = document.getElementById("benefits-imgs-ownership");
const additional = document.getElementById("benefits-imgs-additional");
const customization = document.getElementById("benefits-imgs-customization");
const utility = document.getElementById("benefits-imgs-utility");

// ownership show description on hover
//ownership.addEventListener("mouseover", function handleMouseOver() {
  //ownershipdescription.style.display = "table-row-group";
//z});
//hide on mouse out
//ownership.addEventListener("mouseout", function handleMouseOut() {
  //ownershipdescription.style.display = "none";
//});

// additional benefits description show on hover of pic
//additional.addEventListener("mouseover", function handleMouseOver() {
  //additionaldescription.style.display = "table-row-group";
//});
// hide on mouse out
//additional.addEventListener("mouseout", function handleMouseOut() {
  //additionaldescription.style.display = "none";
//});

// customization benefits description show on hover of pic
//customization.addEventListener("mouseover", function handleMouseOver() {
  //customizationdescription.style.display = "table-row-group";
//});
// hide on mouse out
//customization.addEventListener("mouseout", function handleMouseOut() {
  //customizationdescription.style.display = "none";
//});

//utility benefits description show on hover of pic
//utility.addEventListener("mouseover", function handleMouseOver() {
  //utilitydescription.style.display = "table-row-group";
//});
// hide on mouse out
//utility.addEventListener("mouseout", function handleMouseOut() {
  //utilitydescription.style.display = "none";
//});

// show apts on btn click
const showsmallestate = () => {
  document.getElementById("first").style.display = "block";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
};

const showmediumestate = () => {
  document.getElementById("second").style.display = "block";
  document.getElementById("first").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
};

const showlargeestate = () => {
  document.getElementById("third").style.display = "block";
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("fourth").style.display = "none";
};
const showpenthouse = () => {
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "block";
};

// Get the modal
var modal = document.getElementById("modal-mint");

// Get the button that opens the modal
var btn = document.getElementById("mint-estate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function copy() {
  /* Get the text field */
  var copyText = document.getElementById("mint-address");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}