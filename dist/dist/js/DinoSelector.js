var Skin = "Pup";
var SkinPath = "../assets/cyberDino/Skins/Pup.png"
var Myjson;

var explorerApi = 'https://api.ergoplatform.com/api/v0'
var explorerApiV1 = 'https://api.ergoplatform.com/api/v1'
var auctionsRaw;

import { ConectedAddress } from './DinoConnector.js';
export {SkinPath, Skin};
let SkinContainer = document.getElementById("Skins");

CreateSkinList();

function CreateSkinList (){
    $.getJSON("../data/dinos.json", function (json) {
        var Myjson = [];
        for (var key in json) {
            if (json.hasOwnProperty(key)) {
                var item = json[key];
                Myjson.push({
                    Name: item.Name,
                    ID: item.ID,
                    Path: item.Path,
                    Icon: item.Icon
                });            
            }
        }
        CreateSkinSelectIcon(Myjson[0]);//First skin entry
        CreateSkinSelectIcon(Myjson[47]);//Colab skin entry
        //for(var i = 0; i < Myjson.length; i++){ CreateSkinSelectIcon(Myjson[i]);} //skin tester code
        SkinChecker(Myjson);
    });
}

function CreateSkinSelectIcon(FoundSkin){
    //create a skin select image to add to website
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `<img src="${FoundSkin.Icon}" width="70" height="60" />`
    btn.addEventListener('click', function()
    {
        //Sets the Skin And path variables to the selected skin
        $(".Highlight").removeClass("Highlight");
        $(btn).addClass("Highlight");
        Skin = FoundSkin.Name;
        SkinPath = FoundSkin.Path;
    });
    SkinContainer.appendChild(btn);
}

function SkinChecker(arraya) {
    if(ConectedAddress != "N/A")
        getAuctionsRaw(ConectedAddress , arraya);
}

// Get every NFT able to be auctioned from the wallet 
function getAuctionsRaw(walletAddress , arraya) {
    getActiveAuctions(walletAddress)
    .then(res => {
      auctionsRaw = res;
      buildAuctions(arraya);
    });
}

// Build the list of NFTs currently able to be auctioned from the wallet, from the raw wallet data
function buildAuctions(arraya) {
for(let i = 0; i < auctionsRaw.length; i++){
        auctionsRaw[i].assets.forEach((i) => {
            //console.log("Token is: " + i.tokenId);
            CheckSkinAvailable(i.tokenId, arraya);
        });
    }
}

function CheckSkinAvailable(tokenId, arraya){
   var FoundSkin = arraya.find(element => element.ID == tokenId);
   if (FoundSkin != null)
    CreateSkinSelectIcon(FoundSkin);
}

// Get active auctions from supplied address
function getActiveAuctions(addr) {
    return getRequest(`/boxes/unspent/byAddress/${addr}?limit=500`, explorerApiV1)
        .then(res => res.items)
        .then((boxes) => boxes.filter((box) => box.assets.length > 0));
}

// Function for appending requests to the exploreAPI URL
function getRequest(url, api = explorerApi) {
    return fetch(api + url).then(res => res.json())
}
