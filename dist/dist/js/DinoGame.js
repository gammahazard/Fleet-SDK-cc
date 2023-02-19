var config = {
    type: Phaser.AUTO,
    parent: "dino-game",
    width: 800,
    height: 600,
    backgroundColor: '#53cbea',
    physics: 
    {
      default: 'arcade',
      arcade: 
      {
        gravity: { y: 3500 },
        debug: false
      }
    },
    scene: 
    {
        preload: preload,
        create: create,
        update: update
    },
    audio:
    {
        disableWebAudio: true
    }
};

var game = new Phaser.Game(config);
import { Skin, SkinPath } from './DinoSelector.js';
import { ConectedAddress } from './DinoConnector.js';
var LoadBtn = document.getElementById("Select-Skin");
var reset = false;


function preload ()
{
    reset = false;

    this.load.bitmapFont('atari', '../assets/cyberDino/Fonts/atari-classic.png', '../assets/cyberDino/Fonts/atari-classic.xml');
    this.load.image('ground', '../assets/cyberDino/png/Tiles/BGTile (1).png');
    this.load.image('Floor', '../assets/cyberDino/sprites/Floor.png');
    this.load.image('tree1' , "../assets/cyberDino/sprites/Tree1.png"); 
    this.load.image('tree2' , "../assets/cyberDino/sprites/Tree2.png"); 
    this.load.image('tree3' , "../assets/cyberDino/sprites/Tree3.png"); 
    this.load.image('Block1' , "../assets/cyberDino/sprites/Block1.png"); 
    this.load.image('Block2' , "../assets/cyberDino/sprites/Block2.png"); 
    this.load.image('Block3' , "../assets/cyberDino/sprites/Block3.png");
    this.load.image('Drone1' , "../assets/cyberDino/sprites/Drone1.png");
    this.load.image('Drone2' , "../assets/cyberDino/sprites/Drone2.png"); 
    this.load.image('Drone3' , "../assets/cyberDino/sprites/Drone3.png"); 
    this.load.image('PauseBtn', "../assets/cyberDino/sprites/PauseBTN.png");
    this.load.image('PlayBtn', "../assets/cyberDino/sprites/PlayBTN.png");
    this.load.image('MuteBtn', "../assets/cyberDino/sprites/Mute.png");
    this.load.image('UnmuteBtn', "../assets/cyberDino/sprites/Unmuted.png"); 

    this.load.spritesheet(Skin, SkinPath,
        { frameWidth: 160, frameHeight: 135}
    );

    this.load.audio('jumpsfx',['../assets/cyberDino/sfx/Jump1.wav']);
    this.load.audio('Checkpointsfx', ['../assets/cyberDino/sfx/CheckPoint1.wav']);
    this.load.audio('Deathsfx', ['../assets/cyberDino/sfx/Death1.wav']);
    this.load.audio('BGM', ['../assets/cyberDino/sfx/dno1.mp3']);

    this.load.image('BG1' , '../assets/cyberDino/sprites/back 1.png');
    this.load.image('BG2' , '../assets/cyberDino/sprites/back 2.png');
    this.load.image('BG3' , '../assets/cyberDino/sprites/back 3.png');
    this.load.image('BG4' , '../assets/cyberDino/sprites/back 4.png');
    this.load.image('BG5' , '../assets/cyberDino/sprites/back 5.png');

    this.load.spritesheet('TS', 
        `../assets/cyberDino/sprites/TileSet cyber.png`,
        { frameWidth: 25, frameHeight: 25}
    );

}

var platforms;
var player;
var cursors;
var score, scoreText;
var MiddleText;
var HighScore = 0;
var HighScoreText;
var tree1, tree2, tree3, tree4, Bird ,Bird2, Bird3;
var Box1, Box2;
var SpawnX , SpawnY, DespawnX, SpawnYBird;
var Framerate;
var pause;
var GameState; //0 = new Game, 1 = in game, 2 = play again
var spawned;
var SFX;
var floor;
var BG1, BG2, BG3, BG4, BG5;
var PauseBTN, PlayBTN, MuteBTN, MBTN;
var mute, MuteTXT, BGM;

function create ()
{
    LoadBtn.addEventListener('click', function()
    {
        reset = true;
    });

    //set default variables
    SetDefaultVariables();

    BG1 = this.add.tileSprite(config.width/2, config.height/2, 0 ,0, 'BG1');
    BG2 = this.add.tileSprite(config.width/2, config.height/2, 0 ,0, 'BG2');
    BG3 = this.add.tileSprite(config.width/2, config.height/2, 0 ,0, 'BG3');
    BG4 = this.add.tileSprite(config.width/2, config.height/2, 0 ,0, 'BG4');
    BG5 = this.add.tileSprite(config.width/2, config.height/2, 0 ,0, 'BG5');

    platforms = this.physics.add.staticGroup();

    //create platforms
    platforms.create(config.width * 0.15, config.height * 0.985, 'ground').setVisible(false);
    platforms.create(config.width * 0.45, config.height* 0.985, 'ground').setVisible(false);
    platforms.create(config.width * 0.75, config.height* 0.985, 'ground').setVisible(false);
    platforms.create(config.width * 1.05, config.height* 0.985, 'ground').setVisible(false);

    floor = this.add.tileSprite(config.width * 0.45, config.height* 0.946, 1200 , 230, "Floor");

    //Creating trees    
    tree1 = this.physics.add.sprite(SpawnX, SpawnY, 'tree1').setScale(1.2); tree1.setBounce(0); tree1.setFrictionX(1);
    tree2 = this.physics.add.sprite(SpawnX, SpawnY, 'tree2').setScale(1.2); tree2.setBounce(0); tree2.setFrictionX(1);
    tree3 = this.physics.add.sprite(SpawnX, SpawnY, 'tree3').setScale(1.2); tree3.setBounce(0); tree3.setFrictionX(1);
    tree4 = this.physics.add.sprite(SpawnX, SpawnY, 'Block1').setScale(1.6); tree4.setBounce(0); tree4.setFrictionX(1);
    Box1 = this.physics.add.sprite(SpawnX, SpawnY, 'Block2').setScale(1.6); Box1.setBounce(0); Box1.setFrictionX(1);
    Box2 = this.physics.add.sprite(SpawnX, SpawnY, 'Block2').setScale(1.6); Box2.setBounce(0); Box2.setFrictionX(1);
    Bird = this.physics.add.sprite(SpawnX, SpawnYBird, 'Drone1').setScale(1.5); Bird.setBounce(0);Bird.body.setSize(55, 80); Bird.body.setOffset(2, -30);
    Bird2 = this.physics.add.sprite(SpawnX, SpawnYBird, 'Drone2').setScale(1.5); Bird2.setBounce(0);Bird2.body.setSize(55, 80); Bird2.body.setOffset(2, -30);
    Bird3 = this.physics.add.sprite(SpawnX, SpawnYBird, 'Drone3').setScale(1.5); Bird3.setBounce(0);Bird3.body.setSize(55, 80); Bird3.body.setOffset(2, -30);

    //pasuse button
    PauseBTN = this.physics.add.sprite(config.width / 2.8 , config.height / 2.1, 'PauseBtn').setScale(0.6);
    PauseBTN.setVisible(false);
    PauseBTN.body.allowGravity = false;

    PlayBTN = this.physics.add.sprite(config.width / 2.8 , config.height / 2.1, 'PlayBtn').setScale(0.6);
    PlayBTN.setVisible(true);
    PlayBTN.body.allowGravity = false;

    MuteBTN = this.add.sprite(config.width/1.05, config.height/10, 'UnmuteBtn').setScale(0.5);
    MuteTXT = this.add.bitmapText(config.width/1.15, config.height/12,'atari', 'M:').setScale(0.3);
    MuteTXT.setTint(0xba1298, 0xba1298, 0xba1298, 0xba1298);

    //create sfx
    SFX = this.sound;
    BGM = SFX.add('BGM', {loop: true});
    BGM.play();
    

    //create player
    player = this.physics.add.sprite(config.width * 0.2, config.height * 0.58, Skin);
    player.setBounce(0.1);
    player.setCollideWorldBounds(true); //sets border of the screen to be bounds
    player.body.setSize(65, 135);
    player.body.setOffset(10, 0);

    //Create Score Text
    scoreText = this.add.bitmapText(config.width - config.width, config.height - config.height, 'atari', 'score: 0').setScale(0.35);
    scoreText.setTint(0xba1298, 0xba1298, 0xba1298, 0xba1298);

    HighScoreText = this.add.bitmapText(config.width /1.82, 0,'atari', '').setScale(0.35);
    HighScoreText.setTint(0x250dbf, 0x250dbf, 0x250dbf, 0x250dbf);

    MiddleText = this.add.bitmapText(config.width / 2.5 , config.height / 2.2, 'atari' ,'Click to play').setScale(0.35);
    MiddleText.setTint(0xfe2af7, 0xfe2af7, 0x250dbf, 0xfe2af7);

    //add physics
    this.physics.add.collider(player , platforms);
    this.physics.add.collider(tree1, platforms); this.physics.add.overlap(player, tree1, GameOver, null, this);
    this.physics.add.collider(tree2, platforms); this.physics.add.overlap(player, tree2, GameOver, null, this);
    this.physics.add.collider(tree3, platforms); this.physics.add.overlap(player, tree3, GameOver, null, this);
    this.physics.add.collider(tree4, platforms); this.physics.add.overlap(player, tree4, GameOver, null, this);
    this.physics.add.collider(Box1, platforms); this.physics.add.overlap(player, Box1, GameOver, null, this);
    this.physics.add.collider(Box2, platforms); this.physics.add.overlap(player, Box2, GameOver, null, this);
    this.physics.add.collider(Bird, platforms); this.physics.add.overlap(player, Bird, GameOverBird, null, this);
    this.physics.add.collider(Bird2, platforms); this.physics.add.overlap(player, Bird2, GameOverBird, null, this);
    this.physics.add.collider(Bird3, platforms); this.physics.add.overlap(player, Bird3, GameOverBird, null, this);
    Bird.body.allowGravity = false;
    Bird2.body.allowGravity = false;
    Bird3.body.allowGravity = false;

    cursors = this.input.keyboard.createCursorKeys();

    //pause Function
    this.input.on('pointerdown', function () {
        onClickScreen();
    });    

    MBTN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    loadPlayer();

    LoginAndGetHighScore();//Fetches the current high score

    //SFX.play('BGM');


}

function loadPlayer()
{
    player.setTexture(Skin);
    game.anims.remove('Run');
    game.anims.remove('Jump');
    game.anims.remove('Crouch');

    game.anims.create({
        key: 'Run',
        frames: game.anims.generateFrameNumbers( Skin , { start: 1, end: 2 }),
        frameRate: Framerate,
        repeat: true
    });
    game.anims.create({
        key: 'Jump',
        frames: game.anims.generateFrameNumbers( Skin , { start: 3, end: 3 }),
        frameRate: Framerate,
        repeat: true
    });
    game.anims.create({
        key: 'Crouch',
        frames: game .anims.generateFrameNumbers( Skin, { start: 4, end: 6 }),
        frameRate: Framerate,
        repeat: true
    });
}

function onClickScreen()
{
    switch(GameState)
    {
        case 0:
            MiddleText.setText("");
            PlayBTN.setVisible(false);
            GameState = 1;
            pause = !pause;
            break;
        case 1:
            Pause();
            break;
        case 2:
            // save high score and start new game
            if(score > HighScore) HighScore = score;
            MiddleText.setText("");
            PlayBTN.setVisible(false);
            ResetGame();
            pause = false;
            break;
    }
}

function Pause()
{
    if (pause)
    {
        PauseBTN.setVisible(false);
        MiddleText.setText("");
    }
    else
    {
        PauseBTN.setVisible(true);
        MiddleText.setText("Paused");
    }
    pause = !pause;
}

var speed;
var interval;
var DTime;
var PlayerState; //player state 0 = running, 1 = jumping, 2 = crouching
var LastTime;
var DeadTime;
var frameTime;

//runs 60 times a second
function update (time , delta)
{   
    frameTime += delta
    //Fixes the framerate to 60 frames per second
    if (frameTime > 16.5) {  
        frameTime = 0;

        if(reset)
        {
            this.registry.destroy(); // destroy registry
            this.events.off();
            this.scene.restart();
        }

        //mute
        if (Phaser.Input.Keyboard.JustDown(MBTN))
        {
            if(mute){
                MuteBTN.setTexture('UnmuteBtn');
                BGM.play();
            }
            else{
                MuteBTN.setTexture('MuteBtn');
                BGM.stop();                
            }
            mute = !mute;
        }

        if(!pause){

        this.physics.resume();
        
        //updates highscore
        HighScoreUpdate();

        //updates Score
        score += 1;
        scoreText.setText('Score: ' + score);

        //Move The Floor
        MoveFloor();

        //Spawns a new tree based on time
        DTime += delta;
        if(DTime >= interval)
        {
            if(score <= 1000)
                GetNextTree(Phaser.Math.Between(1, 4));
            else if(score <= 3500)
                GetNextTree(Phaser.Math.Between(1, 6));
            else
                GetNextTree(Phaser.Math.Between(1, 9));
            DTime = 0;
        }

        // Despawns Trees
        deSpawn();

        //Move the player
        if (cursors.up.isDown && player.body.touching.down || cursors.space.isDown && player.body.touching.down)
        {       
            PlayerState = 1;
            player.setVelocityY(-(speed * 2));
            if(!mute)SFX.play('jumpsfx');
        }
        else if(player.body.touching.down && !cursors.down.isDown) 
        {
            PlayerState = 0;
        }
        else if( cursors.down.isDown && player.body.touching.down)
        {
            PlayerState = 2;       
        }

        //SpeedUp
        if(LastTime + 1000 < score && score < 25000)
        {
            if(!mute)SFX.play('Checkpointsfx');
            LastTime = score;
            SpeedUp();
        }

        //Keep Player Velocity at 0
        player.setVelocityX(0);
        
        CheckState();
    }
    else{ 
        this.physics.pause(); 
        DeadTime += delta;
        if(cursors.up.isDown && DeadTime > 800 || cursors.space.isDown && DeadTime > 800){
                DeadTime = 0;
                onClickScreen();
            }
        }
    }
}

function HighScoreUpdate()
{
    if(HighScore == 0)
    {
        HighScoreText.setText("");
    }
    else
    {
        HighScoreText.setText("HighScore: " + HighScore);
    }
}

function MoveFloor()
{  
    floor.tilePositionX += treeVelocity / 60;

    BG5.tilePositionX += treeVelocity / 5000;
    BG4.tilePositionX += treeVelocity / 10000;
    BG3.tilePositionX += treeVelocity / 15000;
    BG2.tilePositionX += treeVelocity / 20000;
    BG1.tilePositionX += treeVelocity / 25000;
}

function CheckState()
{
    switch(PlayerState){
        case 0://run
            player.anims.play('Run' , true);        
            break;
        case 1://jump
            player.anims.play('Jump' , true);
            break;
        case 2://crouch
            player.anims.play('Crouch' , true);
            break;
    }
}

var treeIndex;
var treeVelocity;

function SetDefaultVariables()
{
    score = 0;
    SpawnX = config.width * 1.1;
    SpawnY = config.height* 0.65;
    SpawnYBird = config.height * 0.58;
    DespawnX = -(config.width * 0.1);
    Framerate = 6;
    spawned = 0;
    pause = true;
    GameState = 0;
    speed = 630;//jump speed
    interval = 2000;
    DTime = 0;
    PlayerState = 0; 
    treeIndex = 0;
    treeVelocity = 700;
    LastTime = 0;
    DeadTime = 0;
    frameTime = 0;
}

//Moves the Appropriate tree forward when called
function GetNextTree(randomNumber)
{
    if(spawned < 3){
    switch(randomNumber){    
        case 1:
                if(tree1.x == SpawnX){
                    tree1.setVelocityX(-treeVelocity);
                    spawned++;
                 }
            break;
        case 2:
            if(tree2.x == SpawnX){
                    tree2.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break;
        case 3:
            if(tree3.x == SpawnX){
                    tree3.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break;
        case 4:
            if(tree4.x == SpawnX){
                    tree4.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break;
        case 5:
                if(Bird.x == SpawnX){
                    Bird.setVelocityX(-treeVelocity);  
                    spawned++;                  
                }
                //SpeedUp();                
            break;
        case 6:
                if(Box1.x == SpawnX){
                    Box1.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break; 
        case 7:
                if(Box2.x == SpawnX){
                    Box2.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break;
        case 8:
                if(Bird2.x == SpawnX){
                    Bird2.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break;
        case 9:
                if(Bird3.x == SpawnX){
                    Bird3.setVelocityX(-treeVelocity);
                    spawned++;
                }
            break;        
    }
}
}

function SpeedUp()
{
    player.anims.setTimeScale(player.anims.getTimeScale() + 0.1);
    player.anims.setDuration
    treeVelocity += 40;
    interval -= interval / 12;
    speed -= 10;
}

function deSpawn()
{
    if(tree1.x < DespawnX){ tree1.setVelocityX(0); tree1.x = SpawnX; tree1.y = SpawnY; spawned--; }
    if(tree2.x < DespawnX){ tree2.setVelocityX(0); tree2.x = SpawnX; tree2.y = SpawnY; spawned--; }
    if(tree3.x < DespawnX){ tree3.setVelocityX(0); tree3.x = SpawnX; tree3.y = SpawnY; spawned--; }
    if(tree4.x < DespawnX){ tree4.setVelocityX(0); tree4.x = SpawnX; tree4.y = SpawnY; spawned--; }
    if(Box1.x < DespawnX){ Box1.setVelocityX(0); Box1.x = SpawnX; Box1.y = SpawnY; spawned--; }
    if(Box2.x < DespawnX){ Box2.setVelocityX(0); Box2.x = SpawnX; Box2.y = SpawnY; spawned--; }
    if(Bird.x < DespawnX){ Bird.setVelocityX(0); Bird.x = SpawnX; Bird.y = SpawnYBird; spawned--;}
    if(Bird2.x < DespawnX){ Bird2.setVelocityX(0); Bird2.x = SpawnX; Bird2.y = SpawnYBird; spawned--;}
    if(Bird3.x < DespawnX){ Bird3.setVelocityX(0); Bird3.x = SpawnX; Bird3.y = SpawnYBird; spawned--;}

}

function GameOver(player)
{
    if(!mute)SFX.play('Deathsfx');
    MiddleText.setText("Play again?");
    PlayBTN.setVisible(true);  
    LoginAndSetHighScore();
    HighScoreUpdate();  
    GameState = 2;
    pause = true;   
}

function GameOverBird(player)
{
    if(PlayerState != 2)
    {
        GameOver(player);
    }
}

function ResetGame()
{
    //set Variables
    SetDefaultVariables();
    //reset trees
    tree1.setVelocityX(0);
    tree2.setVelocityX(0);
    tree3.setVelocityX(0);
    tree4.setVelocityX(0);
    Box2.setVelocityX(0);
    Box1.setVelocityX(0);
    Bird.setVelocityX(0);
    Bird2.setVelocityX(0);
    Bird3.setVelocityX(0);
    tree1.x = SpawnX; tree1.y = SpawnY;
    tree2.x = SpawnX; tree2.y = SpawnY;
    tree3.x = SpawnX; tree3.y = SpawnY;
    tree4.x = SpawnX; tree4.y = SpawnY;
    Box1.x = SpawnX; Box1.y = SpawnY;
    Box2.x = SpawnX; Box2.y = SpawnY;
    Bird.x = SpawnX; Bird.y = SpawnYBird;
    Bird2.x = SpawnX; Bird2.y = SpawnYBird;
    Bird3.x = SpawnX; Bird3.y = SpawnYBird;

}

// ----------------------------------------------------------------------------------------------------------------
// LeaderBoard Section
// ----------------------------------------------------------------------------------------------------------------

//send HS 
function LoginAndSetHighScore(){
    if(ConectedAddress != "N/A")
    {
        PlayFab.settings.titleId = "9EBCA";
        
        var loginRequest = {
            TitleId: PlayFab.settings.titleId,
            CustomId: ConectedAddress,
            CreateAccount: true,
        };

        PlayFabClientSDK.LoginWithCustomID(loginRequest, UpdateStats);
    }
}

function UpdateStats()
{
    var updateStatsRequest = {
        Statistics: [{ StatisticName: "HighScore", Value: HighScore }]
    };
    PlayFabClientSDK.UpdatePlayerStatistics(updateStatsRequest, updateStatsCallback);
}


var updateStatsCallback = function (result, error) {
    if (result !== null) {
    } 
    else if (error !== null) {
        console.log("Something went wrong Fetching the Leaderboard.");
        console.log("Here's some debug information:");
        console.log(CompileErrorReport(error));
    }
};

function LoginAndGetHighScore(){
    PlayFab.settings.titleId = "9EBCA";
    
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        CustomId: ConectedAddress,
        CreateAccount: true,
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, GetHighscore);
}

function GetHighscore()
{
    var HighscoreRequest = {
        PlayFabId: ConectedAddress,
        StatisticNames: ["HighScore"]
    }
    PlayFabClientSDK.GetPlayerStatistics(HighscoreRequest, GetHighscoreStats)
}

var GetHighscoreStats = function (result, error) {
    if (result !== null) {
        if(ConectedAddress != "N/A"){
            if(result.data.Statistics[0] != null){
            HighScore = result.data.Statistics[0].Value;
            }
        }
    } 
    else if (error !== null) {
        console.log("Something went wrong Fetching the Leaderboard.");
        console.log("Here's some debug information:");
        console.log(CompileErrorReport(error));
    }
};

//error msg
function CompileErrorReport(error) {
    if (error === null)
       return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
       for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}