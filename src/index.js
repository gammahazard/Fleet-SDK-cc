
import './styles/style.css';

import './styles/enter-button.css';

import './app.js'


import './fleet.js';
const mintbtn = document.getElementById("mintbtn");
const connectbtn = document.getElementById("connectbtn")


async function connect() {
  const ConnectUserWallet = await ergoConnector.nautilus.connect();
  ConnectUserWallet;
  const UserAddress = await ergo.get_change_address();
  const cypxAmount = await displayCypxAmount(UserAddress);
  const mintbtn = document.getElementById("mintbtn");
  const UserBalance = await ergo.get_balance();
  const UserBalanceErg = UserBalance / 10**9;

  connectbtn.style.display = "none";
  console.log(UserAddress);
  console.log(UserBalanceErg);

  document.getElementById("userbalance").style.display = "flex";
  document.getElementById("userbalance").innerHTML = `<img src="./dist/assets/ergicon.png" id="balanceicon">   ` + UserBalanceErg;
  document.getElementById("cypxbalance").innerHTML = `<img src="./dist/assets/cypxicon.png" id="cypxicon">` + cypxAmount/10**4;

  const assets = await displayCybercitizenAssets(UserAddress);

  let assetsHTML = '';




  const audioNFTs = await displayAudioNFTs(UserAddress);
  const audioNFTsContainer = document.getElementById("audio-nfts");
  audioNFTsContainer.style.display = "block";
  let audioNFTsHTML = '';

  
}
    async function displayCypxAmount(userAddress) {
    const response = await fetch(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/${userAddress}`);
    const data = await response.json();
    let cypxAmount = 0;
    data.items.forEach((item) => {
    item.assets.forEach((asset) => {
    if (asset.name === "CYPX") {
      cypxAmount += asset.amount;
    }
    });
    });
    console.log(`CYPX Amount: ${cypxAmount}`);
    return cypxAmount;
    
    
    }
    async function displayCybercitizenAssets(userAddress) {
      const response = await fetch(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/${userAddress}`);
      const data = await response.json();
    
      const cybercitizenAssets = [];
    
      data.items.forEach((item) => {
        item.assets.forEach((asset) => {
          if (asset.name.includes("Cybercitizen")) {
            const assetNum = asset.name.match(/#(\d+)/)[1];
            cybercitizenAssets.push({
              name: asset.name,
              tokenId: asset.tokenId,
              amount: asset.amount,
              imgSrc: `./dist/pages/gen2/assets/cc-images/${assetNum}.png`,
              imgSrcingame: `./dist/pages/gen2/assets/in-game/${assetNum}.png`
            });
          }
        });
      });
    
      let assetsHTML = '';
      cybercitizenAssets.forEach((asset) => {
        assetsHTML += `
          <div class="assetcont">
            <p class = "assettitle"></p> <p class="assetdescription">${asset.name}</p>
            <p class="assettitle">Token ID:</p> <p class="assetdescription"> ${asset.tokenId}</p>
            <img class="ccimage" src="${asset.imgSrc}" />
            <img class="ccimage" src="${asset.imgSrcingame}" />
          </div>
        `;
        console.log(JSON.stringify(cybercitizenAssets))
      });
    
      const dashboard = document.getElementById("dashboard");
   
      dashboard.innerHTML += assetsHTML;
    
      return cybercitizenAssets;
    }
    
    async function displayAudioNFTs(userAddress) {
      const response = await fetch(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/${userAddress}`);
      const data = await response.json();
    
      const audioNFTs = [];
    
      data.items.forEach((item) => {
        item.assets.forEach((asset) => {
          if (['Laser Guns', 'Outrun', 'Danger Zone', 'Cyberlykos', 'Blue Lights', 'Into Cyberia', 'Cyborgstein'].includes(asset.name)) {
            audioNFTs.push({
              name: asset.name,
            });
          }
        });
      });
    
      let audioNFTsHTML = '';
      audioNFTs.forEach((audioNFT) => {
        audioNFTsHTML += `
        <div class="assetcont">
        <p class="assettitle">CyberVerse Audio Track:</p>
        <p class="assetdescription">${audioNFT.name}</p>
        <button class="play-button" data-asset="${audioNFT.name}">Play</button>
        <button class="pause-button" data-asset="${audioNFT.name}">Pause</button>
      </div>
        `;
      });
    
      const audioNFTsElement = document.getElementById("audio-nfts");
audioNFTsElement.innerHTML = audioNFTsHTML;

// add event listener to play buttons
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
playButtons.forEach(button => {
  const assetName = button.dataset.asset;
  button.addEventListener('click', () => playAudio(assetName));
});
pauseButtons.forEach(button => {
  const assetName = button.dataset.asset;
  button.addEventListener('click', () => audio.pause(assetName));
});

function playAudio(assetName) {

  const formattedAssetName = assetName.replace(/ /g, '_');
  const audio = new Audio(`./dist/assets/audio-dashboard/${formattedAssetName}.wav`);
  audio.play();


    
  
      }}
connectbtn.addEventListener("click", connect)

