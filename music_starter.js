let windows = [];


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(46, 21, 45)
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

      this.pinkMode = false;
      this.mainCol = mainCol;
      this.upBarCol = upBarCol;

      if(pinkMode){
        //Pink browser window
        mainCol = color(255, 157, 233);
        upBarCol = color(244, 66, 211);
      }
      else{
        //Purple browser window
        mainCol = color(196, 75, 212);
        upBarCol = color(164, 29, 179);
      }

    } 

    display(){
      //Displays the browser window.
      if(this.name == 'Popup'){
        //Makes a popup
        fill(mainCol);
        stroke(upBarCol);
        rect(this.x, this.y, this.width, this.height, 10, 10, 10, 10);

        //Top bar
        fill(upBarCol);
        rect(this.x, this.y, this.width, this.height/5, 10, 10, 0, 0);

        //Makes the button
        noFill();
        rect(this.x + (this.x/2), this.y + (this.y/2), this.width/10, this.height/10);

      }
      else{
        //Main base of window
        fill(mainCol);
        stroke(upBarCol);
        rect(this.x, this.y, this.width, this.height);

        //Top bar
        fill(upBarCol);
        rect(this.x, this.y, this.width, this.height/5);

        fill(mainCol);
        for(let i = 0; i > 2; i++){
          //Draw the three squares in the top right corner
          square(this.x + (i * 0.5), this.y + 10, this.width/6);
        }

        //Specifying which windows are on the screen

        // if(this.name == 'SkyDisplay'){
        //   //Adds the sky display to the window
        // }

      }
    }
  }

  let b = new BrowserWindow('First', 200, 100, 20, 20);
  b.display();

 }

 