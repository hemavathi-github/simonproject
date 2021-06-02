var gameState = 0;
var iguana, iguanaRunning, fallenIguana, iguanaA;
var iguanaImg, iguanaRunningImg, fallenIguanaImg;
var ground, invisibleGround, groundImg;
var cloudsGroup, cloudImg;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score;
var form, player, game, playerCount, allSpectators, spectatorCount, spectator;
var database, allPlayers;



function preload(){ 
  iguanaImg = loadImage("images/128-1289433_iguana-clip-art-animated-clipart-library-blue-iguana.png");
  iguanaRunningImg = loadAnimation("images/AggressiveSophisticatedHalcyon-max-1mb.gif", "images/AggressiveSophisticatedHalcyon-max-1mb - Copy.gif", "images/AggressiveSophisticatedHalcyon-max-1mb - Copy - Copy.gif");
}

function setup(){
  createCanvas(displayWidth, displayHeight - 120);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount === 1 && spectatorCount===1){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }

  drawSprites();
}

//spectator mode, spectators can change the speed of the obstacles,,