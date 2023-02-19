import { ConectedAddress } from './DinoConnector.js';

let leaderboard = document.createElement('div'); leaderboard.id = "leaderboard";
let leaderboardData = document.createElement('div'); leaderboardData.id = "leaderboardData";
let leaderboardContainer = document.getElementById("leaderboard-container");
let headerElement = document.getElementsByTagName("header")[0];
let scores = [];
let NoDisplayed = 10; //number of entries to display
var refreshBTN = document.createElement("input"); refreshBTN.type = "button"; refreshBTN.value = "Refresh"; refreshBTN.classList.add("leaderboard-button"); 
var DNBTN = document.createElement("input"); DNBTN.type = "button"; DNBTN.value = "Set Name";  DNBTN.classList.add("leaderboard-button"); 
var DNInput = document.createElement("input"); DNInput.type = "text"; DNInput.value = ""; DNInput.id = "display-name"; 
var header = document.createElement("h1"); header.innerText = "Leaderboard"; header.id = "leaderboard-header";
var toggle = document.getElementById("leaderboard-toggle");
var toggleActive = false;

document.getElementById("explorerToHome").addEventListener('click', () => {
    window.location = "../index.html";
});

toggle.onclick = function(element){
    toggleLeaderboard();
}

window.addEventListener('click', function(e){   
    if (!leaderboardContainer.contains(e.target) && !headerElement.contains(e.target)){
        if(toggleActive)
        {
            toggleLeaderboard();
            toggleActive = !toggleActive;
        }
        else{
            toggleActive = !toggleActive;
        }
    }
});

function toggleLeaderboard() {
    if(!toggleActive){
        LoginAndSetLeaderBoard();
        createInterface();
        leaderboard.style.display = "flex";
        leaderboardContainer.style.display = "block";
        leaderboardContainer.append(leaderboard);
    }
    else{
        leaderboardContainer.style.display = "none";
    }
}

function createInterface(){
    leaderboard.appendChild(header);
    if(ConectedAddress != "N/A"){
        leaderboard.appendChild(DNInput);
        leaderboard.appendChild(DNBTN);
    }
    leaderboard.appendChild(leaderboardData);
    leaderboard.appendChild(refreshBTN);
    DNBTN.onclick = function(){SetDisplayName()};
    refreshBTN.onclick = function(){RefreshLB();};
}

function updateLeaderboardView() {

    scores.sort(function(a, b){ return b.score - a.score  });
    let elements = []; //Used for colors

    for(let i=0; i<scores.length; i++) {
        let name = document.createElement("div");
        name.classList.add("name");
        if(scores[i].name == null) scores[i].name = "Anonymous";
        name.innerText = i+1 + ". " + scores[i].name + " : " + scores[i].score; //Text Displayed on leaderboard

        let scoreRow = document.createElement("div");
        scoreRow.classList.add("row");
        scoreRow.appendChild(name);
        leaderboardData.appendChild(scoreRow);

        elements.push(scoreRow);
    }
}

function LoginAndSetLeaderBoard(){
    PlayFab.settings.titleId = "9EBCA";
    
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        CustomId: ConectedAddress,
        CreateAccount: true,
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, GetLeaderboard);
}


function GetLeaderboard()
{
    var GetLeaderboardRequest = {
        StartPosition: 0,
        StatisticName: "HighScore",
        MaxResultCount: NoDisplayed
    }

    PlayFabClientSDK.GetLeaderboard(GetLeaderboardRequest, UpdateLeaderBoard);

}

// updates scores variable and calls updateleaderboardview
var UpdateLeaderBoard = function (result, error) {
    if (result !== null){
        scores = [];
        result.data.Leaderboard.forEach(element => {
            scores.push({name: element.DisplayName , score: element.StatValue})
        });
        leaderboardData.innerHTML = "";
        createInterface();
        updateLeaderboardView();
    } 
    else if (error !== null) {
        console.error(CompileErrorReport(error));
    }
};

function SetDisplayName()
{
    if(ConectedAddress != "N/A")
    {
        PlayFab.settings.titleId = "9EBCA";
        
        var loginRequest = {
            TitleId: PlayFab.settings.titleId,
            CustomId: ConectedAddress,
            CreateAccount: true,
        };

        PlayFabClientSDK.LoginWithCustomID(loginRequest, UpdateDisplayName);
    }
}

function UpdateDisplayName()
    {
        var GetDNameRequest = {
            DisplayName: document.getElementById("display-name").value
        }

        PlayFabClientSDK.UpdateUserTitleDisplayName(GetDNameRequest, UpdateName);
    }

    var UpdateName = function (result, error)
    { 
        if (result !== null) {
        RefreshLB();
            } else if (error !== null) {
        
        }
    };

function RefreshLB()
{
    LoginAndSetLeaderBoard();
}

function CompileErrorReport(error) {
    if (error === null)
       return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
       for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}



