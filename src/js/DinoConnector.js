var accessGranted = false;
var ConectedAddress = "N/A";
var script = document.createElement("script"); script.type = "module"; script.src = "../js/DinoGame.js";
var LBScript = document.createElement("script"); LBScript.type = "module"; LBScript.src = "../js/LeaderBoard.js";
var DinoSkins = document.createElement("script");  DinoSkins.type = "module"; DinoSkins.src = "../js/DinoSelector.js";
let DinoContainer = document.getElementById("dino-game");


window.onload = function(){ 
    loadGameInfo();
    //addPhaser();
}   

const loadGameInfo = async () => {
  await ergo_request_read_access();
  ergo_check_read_access();

  if(ergo_check_read_access()){
    ConectedAddress = await ergo.get_change_address();
    console.log(ConectedAddress);
    //ConectedAddress = "9hJJksEkDcAznbezGWZ8qjNnqq46HNWHMyuj18BQpavatKJqRFY";
    addPhaser();
    addSkins();
  }
  else {
    ConectedAddress = "N/A";
    addPhaser();
    addSkins();
  }

}

export {ConectedAddress};

function addPhaser() {   
    DinoContainer.appendChild(script);
    document.getElementById("loading-message").style.display = "none";
}

function addSkins()
{
  DinoContainer.appendChild(DinoSkins);
  document.head.appendChild(LBScript);
}