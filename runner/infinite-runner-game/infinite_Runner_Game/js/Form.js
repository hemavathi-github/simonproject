class Form {
    constructor() {
      this.input = createInput("Name");
      this.button1 = createButton('Player');
      this.button2 = createButton('spectator');
      this.greeting = createElement('h3');
    }
  
    hide(){
      this.title.hide();
      this.input.hide();
      this.button1.hide();
      this.button2.hide();
      this.greeting.hide();
    }
  
    display(){
       this.title = createElement('h2')
      this.title.html("Iguana Run");
      this.title.position(displayWidth/2 - 110, displayHeight/4 - 50);
      this.input.position(displayWidth/2 - 100, displayHeight/4 + 50);
      this.button1.position(displayWidth/2 - 40, displayHeight/4 + 100);
      this.button2.position(displayWidth/2 - 100, displayHeight/4 + 100);

      this.button1.mousePressed(()=>{
        this.input.hide();
        this.button1.hide();
        this.button2.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update()
        player.updateCount(playerCount); 
        this.greeting.html("Welcome to Iguana Run: " + player.name)
        this.greeting.position(displayWidth/2 - 50, displayHeight/4) 
      });

      this.button2.mousePressed(()=>{
        this.input.hide();
        this.button2.hide();
        this.button1.hide();
        spectator.name = this.input.value();
        spectatorCount+=1;
        spectator.index = spectatorCount;
        spectator.updatespec();
        spectator.updateSpecCount(spectatorCount); 
        this.greeting.html("Welcome to Iguana Run: " + spectator.name)
        this.greeting.position(displayWidth/2 - 50, displayHeight/4)
        }  ); 
       
      
  
    }
  }