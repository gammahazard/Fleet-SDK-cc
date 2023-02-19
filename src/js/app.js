const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const menu = document.getElementsByClassName("navLinks");
const scrollUp = document.getElementById("scrollTop");
const mintButton = document.getElementById("mint-button");
const auctionLink = document.getElementById("auction-link");
const auctionUrl = "https://www.skyharbor.io/collection/cybercitizens";
let openMint = false;
const images = ["assets/cybercitizens/0.png",
    "assets/cybercitizens/3.png",
    "assets/cybercitizens/590.png",
    "assets/cybercitizens/1873.png",
    "assets/cybercitizens/1852.png",
    "assets/cybercitizens/3.png",
    "assets/cybercitizens/7.png",
    "assets/cybercitizens/590.png",
];

let x = 0;

if (scrollUp) {
    scrollUp.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
        entries,
        displayOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

document.querySelector(".address").onclick = function () {
    copyToClipboard("9hfNCyqJsCSku8HXrV17Y6AaQciCAwkwx4M49imdWjRaTX22Mvz");
    alert("Address copied to clipboard!");
};

const getUnsold = async () => {
    await fetch(`https://ergnomes-server.net/api/checkUnsold`)
        .then(res => res.json())
        .then(res => {
            setupMint(res["count"]);
        })
        .catch(error => {
            console.log(error);
        });
}

const setupMint = (number) => {
    let numLeftWave;
    if (openMint) {
        numLeftWave = (number - 500);
        document.getElementById("unsold").innerHTML = "<span>" + numLeftWave + "</span> left in the current wave!";
    } else {
        numLeftWave = number % 500;
        if (numLeftWave != 0 || openMint) {
            document.getElementById("unsold").innerHTML = "<span>" + numLeftWave + "</span> left in the current wave!";
        } else {
            document.getElementById("unsold").innerHTML = "Wave sold out!";
            mintButton.innerText = "Mint Closed";
            mintButton.href = "javascript:void(0);";
        }
    }
}

const exitMenuOnLinkClick = () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
};

const displayNextImage = () => {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("ergopixel-img").src = images[x];
}

const copyToClipboard = (text) => {
    navigator.clipboard.writeText("9eXCfrmgJSuYKS6hf32snZHZYCFvVeAsBU6LigaKkd5hzjUB3Rf");
}

const setAuctionLink = (link) => {
    auctionLink.href = link;
}

getUnsold();
setAuctionLink(auctionUrl);
setInterval(displayNextImage, 500);


var modal = document.getElementById("mintModal");

// Get the button that opens the modal
var btn = document.getElementById("mint-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
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