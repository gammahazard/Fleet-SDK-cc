function aptnumsearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('aptnums');
    filter = input.value.toUpperCase();
    ul = document.getElementById("aptUL");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (filter !== "" && txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
    }
  }

 function showgunslinger() {
  document.getElementById("showgunslinger").style.display = "block"
  document.getElementById("cyberia-map").style.display = "none"
  document.getElementById("showergoproxy").style.display = "none"
  document.getElementById("showedenplaza").style.display = "none"
  document.getElementById("showsigmaprime").style.display = "none"
  document.getElementById("shownipopow").style.display = "none"
 }
 function shownipopow() {
  document.getElementById("shownipopow").style.display = "block"
  document.getElementById("cyberia-map").style.display = "none"
  document.getElementById("showergoproxy").style.display = "none"
  document.getElementById("showedenplaza").style.display = "none"
  document.getElementById("showsigmaprime").style.display = "none"
  document.getElementById("showgunslinger").style.display = "none"
}
 
function showergoproxy() {
  document.getElementById("showergoproxy").style.display = "block"
  document.getElementById("cyberia-map").style.display = "none"
  document.getElementById("shownipopow").style.display = "none"
  document.getElementById("showedenplaza").style.display = "none"
  document.getElementById("showsigmaprime").style.display = "none"
  document.getElementById("showgunslinger").style.display = "none"
}

function showedenplaza() {
  document.getElementById("showedenplaza").style.display = "block"
  document.getElementById("cyberia-map").style.display = "none"
  document.getElementById("showergoproxy").style.display = "none"
  document.getElementById("shownipopow").style.display = "none"
  document.getElementById("showsigmaprime").style.display = "none"
  document.getElementById("showgunslinger").style.display = "none"
}

function showsigmaprime() {
  document.getElementById("showsigmaprime").style.display = "block"
  document.getElementById("cyberia-map").style.display = "none"
  document.getElementById("showergoproxy").style.display = "none"
  document.getElementById("showedenplaza").style.display = "none"
  document.getElementById("shownipopow").style.display = "none"
  document.getElementById("showgunslinger").style.display = "none"
}
