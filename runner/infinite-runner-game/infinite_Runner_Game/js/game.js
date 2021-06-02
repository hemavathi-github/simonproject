class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
  
   async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        } 
        spectator = new Spectator();    
        var specCountRef = await database.ref("spectatorCount").once("value");
        if(specCountRef.exists()){
            specCountRef = specCountRef.val();
            spectator.getspecCount();
          }     
        form = new Form()
        form.display();    
      }
    iguanaRunning = createSprite(200, 200, 50, 50);
    iguanaRunning.addAnimation("running", iguanaRunningImg);
    iguanaRunning.scale = 0.2;

    iguanaA = [iguanaRunning];
    }
  
    play(){
      background("black");
     form.hide();
     text("Gamestart", 120, 100);
     Player.getPlayerInfo();
     Spectator.getspecInfo();
     if(allPlayers !== undefined){
    var Index = 0;
    var x = 190;
    var y;
    /*for(var i in allPlayers){

    var hero=allPlayers[0][0];
    console.log(hero);
    var spec=allPlayers[1][0];
    console.log(spec);
    }*/
  }
   if(Index === player.index){
     camera.position.x = displayWidth/2;
     camera.position.y = iguanaA[Index-1].y;
   }
   
   drawSprites();
    }
  }
  
  