let windows = [];


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //Make a background gradient pretty please
  background(104, 11, 154)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //Objects section
  class BrowserWindow {
    constructor(name, height, width, x, y){
      this.name = name;
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      this.mainCol;
      this.pinkMode = true;
      this.upBarCol;

      if(this.pinkMode){
        //Pink browser window
        this.mainCol = color(255, 157, 233);
        this.upBarCol = color(244, 66, 211);
      }
      else{
        //Purple browser window
        this.mainCol = color(196, 75, 212);
        this.upBarCol = color(164, 29, 179);
      }

    } 

    setState(){
      //Sets the pinkMode state of browser windows
      if(this.pinkMode == true){
        this.pinkMode = false;
      }
      else{
        this.pinkMode = true;
      }
    }

    display(){
      //Displays the browser window.
      if(this.name == 'Popup'){
        //Makes a popup
        fill(this.mainCol);
        stroke(this.upBarCol);
        strokeWeight(3);
        rect(this.x, this.y, this.width, this.height, 10, 10, 10, 10);

        //Top bar
        fill(this.upBarCol);
        rect(this.x, this.y - (this.height/2), this.width, this.height/4, 10, 10, 0, 0);

        //Makes the button
        noFill();
        strokeWeight(1);
        rect(this.x, this.y + (this.height/5), this.width/2.5, this.height/5, 10, 10, 10, 10);
        fill(this.upBarCol);
        text('OK', this.x + this.x/10, this.y + (this.height/4.5), this.width/4, this.height/5);

      }
      else{
        //Main base of window
        fill(this.mainCol);
        stroke(this.upBarCol);
        strokeWeight(3);
        rect(this.x, this.y, this.width, this.height);
        strokeWeight(1);

        //Top bar
        fill(this.upBarCol);
        rect(this.x, this.y-(this.height/2), this.width, this.height/10);

        fill(this.mainCol);
        for(let i = 0; i > 2; i++){
          //Draw the three squares in the top right corner (WIP)
          fill(255);
          rect(this.x, this.y, this.width, this.height);
        }

        //Specifying which windows are on the screen

        // if(this.name == 'SkyDisplay'){
        //   //Adds the sky display to the window
        // }

        // else if(this.name == 'BarDisplay'){
          //Adds the bar display to the window, mapped to one of the channels
        //}

        //else if (this.name == 'HeartDisplay'){
          //Adds the heart display to the window, mapped to the channels
        //}

        //else if (this.name == 'ChatDisplay'){
          //Adds the chat display to the window, mapped to one of the channels
        //}

        //some other stuff MAYBE I love the hit song inandesu by the hit secret music circle nightcord at 25:00

      }
    }
  }

  //let b = new BrowserWindow('Popup', 200, 300, 200, 200);
  //b.display();
  //let f = new BrowserWindow('Other', 100, 200, 400, 400);
  //f.display();

  let heart = new BrowserWindow('HeartDisplay', 600, 800, canvasWidth/2, canvasHeight/2);
  heart.pinkMode = false;
  heart.display();

  
 

 }

 