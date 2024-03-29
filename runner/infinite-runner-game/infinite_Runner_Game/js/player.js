class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name
      });
    }

    static getPlayerInfo(){
      var playerInfo = database.ref("players");
      playerInfo.on("value",function(data){
        allPlayers = data.val();
        console.log(data.val());
      }) 
      
    console.log(allPlayers)
    }
    
   
  }
  