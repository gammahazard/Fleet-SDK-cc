
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
  const dashboardbtn = document.getElementById("dashboardbtn")
  dashboardbtn.style.display = "flex"
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

  audioNFTs.forEach((audioNFT) => {
    audioNFTsHTML += `
      <div>
        <p class = "assettitle">CyberVerse  Audio NFT:</p><p class="assetdescription"> ${audioNFT.name}</p>
      </div>
    `;
  });
  audioNFTsContainer.innerHTML = audioNFTsHTML;
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
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
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
          if (['Laser Guns', 'Outrun', 'Danger Zone', 'Cyberlykos', 'Blue Lights', 'Into Cyberia'].includes(asset.name)) {
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
            <p class="assettitle">CyberVerse Track Name:</p>
            <p class="assetdescription">${audioNFT.name}</p>
            <button class="play-button" data-asset="${audioNFT.name}">Play</button>
            <button class="pause-button" data-asset="${audioNFT.name}" style="display:none;">Pause</button>
            <div class="seek-container">
              <input class="seek-bar" type="range" min="0" step="1" value="0">
              <span class="current-time">0:00 </span><span>/</span>
              <span class="duration">0:00</span>
            </div>
          </div>
        `;
      });
    
      const audioNFTsElement = document.getElementById("audio-nfts");
      audioNFTsElement.innerHTML = audioNFTsHTML;
    
      // add event listeners to play buttons
      const playButtons = document.querySelectorAll('.play-button');
      playButtons.forEach(button => {
        const assetName = button.dataset.asset;
        const audio = new Audio(`./dist/assets/audio-dashboard/${assetName.replace(/ /g, '_')}.wav`);
        let audioPlayer;
    
        const seekBar = button.parentElement.querySelector('.seek-bar');
        const currentTime = button.parentElement.querySelector('.current-time');
        const duration = button.parentElement.querySelector('.duration');
    
        audio.addEventListener('loadedmetadata', () => {
          duration.textContent = formatTime(audio.duration);
          seekBar.max = audio.duration;
        });
    
        seekBar.addEventListener('input', () => {
          currentTime.textContent = formatTime(seekBar.value);
          audio.currentTime = seekBar.value;
        });
    
        button.addEventListener('click', () => {
          audio.play();
          audioPlayer = audio;
          button.style.display = 'none';
          button.nextElementSibling.style.display = 'inline-block'; // show the pause button
        });
    
        // add event listeners to pause buttons
        const pauseButtons = document.querySelectorAll('.pause-button');
        pauseButtons.forEach(pauseButton => {
          pauseButton.addEventListener('click', () => {
            audioPlayer.pause();
            pauseButton.style.display = 'none';
            pauseButton.previousElementSibling.style.display = 'inline-block'; // show the play button
          });
        });
    
        // update seek bar as audio plays
        audio.addEventListener('timeupdate', () => {
          seekBar.value = audio.currentTime;
          currentTime.textContent = formatTime(audio.currentTime);
        });
    
        // add event listener to window to check if
    
    
    

    window.addEventListener('blur', () => {
    audioNFTs.forEach(audioNFT => {
    const audio = new Audio(`./dist/assets/audio-dashboard/${audioNFT.name.replace(/ /g, '_')}.wav`);
    let isPlaying = false;
    let duration = 0;
    let seekBar = null;
    
   
      audio.addEventListener('play', () => {
        isPlaying = true;
        duration = audio.duration;
        seekBar.max = duration;
      });
    
      audio.addEventListener('pause', () => {
        isPlaying = false;
      });
    
      audio.addEventListener('timeupdate', () => {
        if (isPlaying) {
          seekBar.value = audio.currentTime;
        }
      });
    
      const playButton = document.querySelector(`.play-button[data-asset="${audioNFT.name}"]`);
      const pauseButton = document.querySelector(`.pause-button[data-asset="${audioNFT.name}"]`);
      seekBar = document.querySelector(`.seek-bar[data-asset="${audioNFT.name}"]`);
    
      playButton.addEventListener('click', () => {
        audio.play();
        isPlaying = true;
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
      });
    
      pauseButton.addEventListener('click', () => {
        audio.pause();
        isPlaying = false;
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline-block';
      });
    
      seekBar.addEventListener('input', () => {
        audio.currentTime = seekBar.value;
      });
    });
    });
    }
    

    )}
    const displaybtn = document.getElementById("dashboardbtn")
    displaybtn.addEventListener ("click", async() => {
    
        dashboardmodal.style.display = "block"
     
    })
    const closebtn = document.getElementById("closedashboard")
    closebtn.addEventListener ("click", async() => {
      dashboardmodal.style.display = "none"
    })
    
    connectbtn.addEventListener("click", connect);