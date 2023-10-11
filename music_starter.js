// ----- Browser Window class ----- //

//Browser window class
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

  display(words, vocal, drum, bass, other, counter){
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
      text('OK', this.x + 20, this.y + (this.height/4.5), this.width/4, this.height/5);

    }
    else{
      //Main base of window
      fill(this.mainCol);
      stroke(this.upBarCol);
      strokeWeight(3);
      rect(this.x, this.y, this.width + bass/12, this.height + bass/12);
      strokeWeight(1);

      //Top bar
      fill(this.upBarCol);
      rect(this.x, this.y-(this.height/2), this.width + bass/12, this.height/10 + bass/12);

      let outlineCol = color(145, 255, 147);
      stroke(outlineCol);
      strokeWeight(2.5);
      line(this.x - this.width/2, this.y - this.height/1.83 - bass/12, this.x + this.width/2, this.y - this.height/1.83 - bass/12); //outline at the top

      fill(this.mainCol);
      for(let i = 0; i > 2; i++){
        //Draw the three squares in the top right corner (WIP)
        fill(255);
        rect(this.x, this.y, this.width, this.height);
      }

      //Specifying which windows are on the screen

      if(this.name == 'SkyDisplay'){
        //Adds the sky display to the window
      }

      else if(this.name == 'BarDisplay'){
        //Adds the bar display to the window, mapped to one of the channels
        stroke(outlineCol);
        strokeWeight(2.5);
        line(this.x + this.width/2 + bass/12, this.y - this.height/2 - bass/12, this.x + this.width/2 + bass/12, this.y - this.height/2 - bass/12 + 50); //accentuates right side of window that overlaps

        let backBarCol = color(192, 73, 209);
        fill(backBarCol);
        noStroke();
        //Draws the bars at the back
        rect(this.x, this.y - this.height/4, this.width - 10, 20);
        rect(this.x, this.y - 10, this.width-10, 20);
        rect(this.x, this.y + this.height/7, this.width-10, 20);
        rect(this.x, this.y + this.height/3, this.width-10, 20);


        let volBarCol = color(220, 74, 201);
        fill(volBarCol);
        noStroke();

        let vocalVol = map(vocal, 0, 100, 0, 0.7 * this.width, true);
        let drumVol = map(drum, 0, 100, 0, 0.7 * this.width, true);
        let bassVol = map(bass, 0, 100, 0, 0.7 * this.width, true);
        let otherVol = map(other, 0, 100, 0, 0.7 * this.width, true);

        //Draws the bars mapped to the channels
        rect(this.x, this.y - this.height/4, vocalVol, 20);
        rect(this.x, this.y - 10, drumVol, 20);
        rect(this.x, this.y + this.height/7, bassVol, 20);
        rect(this.x, this.y + this.height/3, otherVol, 20);

        for(let i = 0; i > 6; i++){
          //More accent details (wip)
          fill(255);
          rect(this.x + i, this.y - this.height/1.5, 20, 20);
        }

      }

      else if (this.name == 'HeartDisplay'){
        //Adds the heart display to the window, mapped to the channels

        // for loop calls drawheart Function. Bigger the base more times round the for loop
        // pass the fuction how big you want the heart to be drawn, later in the for loop bigger the heart
        // heart size based on scale. 
        push()
        scale(1)
        stroke(255);
        fill(0);
        
        strokeWeight(7);
        beginShape();
        
        vertex(this.x, this.y + this.height/2 - 50);
        bezierVertex(this.x + this.width/1.75, 400, this.x + 100, this.y - this.width/2 + 50, this.x, this.y -50 ); //right side of heart
        vertex(this.x, this.y + this.height/2 - 51);
        bezierVertex(this.x - this.width/1.75, 400, this.x - 100, this.y - this.width/2 + 50, this.x, this.y - 50); //left side of heart

        endShape();
        pop()
        stroke(0);
        strokeWeight(8);
        noFill();
        line(this.x, this.y + this.height/2 - 60, this.x, this.y - 40); //fills in the middle gap

      }

      else if (this.name == 'ChatDisplay'){
        //Adds the chat display to the window, mapped to one of the channels
        //Could make the chat progression happen every time the funky little scramble thing happens (i.e. the chat keeps moving)
        
          noStroke();
          fill(247, 126, 213);
          rect(this.x - this.width/2.52, this.y + 10, this.width/5 + bass/14, this.height - 20); //sidebar
        
        

        let firstIcon = color(186, 61, 108);
        let secondIcon = color(111, 111, 223);
        let thirdIcon = color(195, 65, 150);
        let fourthIcon = color(189, 119, 52);

        if(song.currentTime() < 63){
          fill(firstIcon);
        circle(this.x - this.width/4.5, this.y - this.height/3, this.width/12 + vocal/10); //first icon
        fill(255);
        for(let i = 0; i < 6; i++){
          square(this.x - this.width/8 + (i * 40), this.y - this.height/3, 10 + bass/20); //square detailing
        }

        fill(secondIcon);
        circle(this.x - this.width/4.5, this.y - this.height/5, this.width/12 + vocal/10); //second icon
        fill(255);
        for(let i = 0; i < 6; i++){
          square(this.x - this.width/8 + (i * 40), this.y - this.height/5, 10 + bass/20); //square detailing
        }

        for(let i = 0; i < 4; i++){
          square(this.x - this.width/8 + (i * 40), this.y - this.height/8.5, 10 + bass/20); //an additional line underneath
        }

        fill(thirdIcon);
        circle(this.x - this.width/4.5, this.y, this.width/12 + vocal/10); //third icon
        fill(255);
        for(let i = 0; i < 5; i++){
          square(this.x - this.width/8 + (i * 40), this.y, 10 + bass/20); //square detailing
        }

        fill(fourthIcon);
        circle(this.x - this.width/4.5, this.y + this.height/5, this.width/12 + vocal/10); //fourth icon
        fill(255);
        for(let i = 0; i < 3; i++){
          square(this.x - this.width/8 + (i * 40), this.y + this.height/5, 10 + bass/20); //square detailing
        }
        }
        
        else if(song.currentTime() > 63 && song.currentTime() < 100){
          fill(fourthIcon);
          circle(this.x -this.width/4.5, this.y - this.height/3, this.width/12 + vocal/10);
          fill(255);
          for(let i = 0; i < 6; i++){
            square(this.x - this.width/8 + (i * 40), this.y - this.height/3, 10 + bass/20);
            square(this.x - this.width/8 + (i * 40), this.y - this.height/4, 10 + bass/20);
          }

          fill(thirdIcon);
          circle(this.x -this.width/4.5, this.y, this.width/12 + vocal/10);
          fill(255);
          for(let i = 0; i < 4; i++){
            square(this.x - this.width/8 + (i * 40), this.y, 10 + bass/20);
          }

          fill(secondIcon);
          circle(this.x - this.width/4.5, this.y + this.height/5, this.width/12 + vocal/10);
          fill(255);
          for(let i = 0; i < 2; i++){
            square(this.x - this.width/8 + (i * 40), this.y + this.height/5, 10 + bass/20);

          }

        }
        
      }

    }
  }
}

// ----- End of Browser Window class ----- //

// Declare Variables
let firstRun = true;

let leftWing;
let rightWing;

let heart;
let bar;
let chat;
let sky;
let firstPop;
let popUp;
//Create an array of pop up windows, then display a lot of them later on by iterating through pop up windows !!
//Have to individually create every window with random placements sadly 

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(152, 49, 168)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if(firstRun){
    leftWing = loadImage('leftWing.png');
    rightWing = loadImage('rightWing.png');

    heart = new BrowserWindow('HeartDisplay', 600, 800, canvasWidth/2, canvasHeight/2);
    bar = new BrowserWindow('BarDisplay', 200, 300, canvasWidth/7, canvasHeight/4.5);
    chat = new BrowserWindow('ChatDisplay', 350, 350, canvasWidth - 190, canvasHeight - 350);
    sky = new BrowserWindow('SkyDisplay', 250, 350, canvasWidth/5, canvasHeight - 175);
    firstPop = new BrowserWindow('Popup', 200, 300, canvasWidth/2, canvasHeight/2);

    popUp = new BrowserWindow('Popup', 200, 300, canvasWidth + random(-500, 500), canvasHeight + random(-500, 500));

    firstRun = false;

  }

  let lighterPurple = color(130, 13, 141);
  let darkerPurple = color(123, 12, 154); //two colours for the background lerp map
  let backLerpMap = map(drum, 0, 100, 0, 1);
  let backRectCol = lerpColor(lighterPurple, darkerPurple, backLerpMap); //lerp colour between these two cols
  fill(backRectCol);
  noStroke();
  rect(canvasWidth/2, canvasHeight/2, canvasWidth - 80, canvasHeight - 20); //draws the darker background rectangle 


  heart.display(words, vocal, drum, bass, other, counter);
  let wingMap = map(other, 0, 100, 0, 100);

  if(song.currentTime() < 13){
    image(leftWing, canvasWidth/2 - 400, canvasHeight/2  - wingMap);
    image(rightWing, canvasWidth/2 + 200, canvasHeight/2 - wingMap);
  }
  //When the funky stuff comes on, display the glass and stop the heart movement until the music comes back.

  

  if(song.currentTime() > 13 && song.currentTime() < 46){
    //First section of the song, before the funky thing part
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);

  }

  if(song.currentTime() > 46 && song.currentTime() < 47){
    //First funky thing part
    image(leftWing, canvasWidth/2 - 400, canvasHeight/2);
    image(rightWing, canvasWidth/2 + 200, canvasHeight/2);
  }

  if(song.currentTime() > 47 && song.currentTime() < 87){
    //first chorus and onward up to second funky sound thing
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
  }

  if(song.currentTime() > 88 && song.currentTime() < 109){
    //Second chorus, all the way to the shutdown part
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
  }

  if(song.currentTime() > 100 && song.currentTime() < 104){
    firstPop.display(words, vocal, drum, bass, other, counter);
  }
  
  if(song.currentTime() > 104 && song.currentTime() < 109){
    for(let i = 0; i > 30; i++){
      popUp.display(words, vocal, drum, bass, other, counter);
    }
  }

  if(song.currentTime() > 121){
    //Final chorus to the end
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
  }

  //Some timestamps <3
  //46 seconds - the first funky little sound thing happens
  //63 seconds - first chorus ends
  //87 seconds - the second funky little sound thing happens
  //100 (about) seconds - second chorus ends, the fun part from the teaser starts
  //109 seconds - Ena starts singing again
  //119 (about) seconds - the last funky little sound thing happens
  //121 seconds - the final chorus happens
  //133 (about) seconds - the singing ends

  




 }

   

 