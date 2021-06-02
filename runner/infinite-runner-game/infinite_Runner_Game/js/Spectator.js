class Spectator {
    constructor(){
      this.index = null;
      this.name = null;
    }

  getspecCount(){
      var specCountRef = database.ref('spectatorCount');
      specCountRef.on("value",function(data){
        spectatorCount = data.val();
      })
    }
  
  
    updateSpecCount(count){
        database.ref('/').update({
          spectatorCount: count
        });
      }
  
    updatespec(){
        var specIndex = "spectators/spectator" + this.index;
        database.ref(specIndex).set({
          name:this.name
        });
      }
  
    static getspecInfo(){
        var specInfo = database.ref("spectators");
        specInfo.on("value",(data)=>{
          allSpectators = data.val();
        })
        
      }
  }
  