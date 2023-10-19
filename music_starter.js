// ----- Browser Window class ----- //

let values = [];



//Browser window class
class BrowserWindow {
  constructor(name, height, width, x, y){
    this.name = name;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.mainCol;

    if(this.name == 'Shutdown'){
      this.pinkMode = false;
    }
    else{
      this.pinkMode = true;
    }

    this.upBarCol;

    if(this.pinkMode){
      //Pink browser window
      this.mainCol = color(255, 157, 233);
      this.upBarCol = color(244, 66, 211);
    }
    else{
      //Purple browser window
      this.mainCol = color(228, 107, 244);
      this.upBarCol = color(191, 27, 209);
    }

  } 


  display(words, vocal, drum, bass, other, counter){
    //Displays the browser window.
    if(this.name == 'Popup' || this.name == 'Shutdown'){
      //Makes a popup
      fill(this.mainCol);
      stroke(this.upBarCol);
      strokeWeight(3);
      rect(this.x, this.y, this.width + drum/10, this.height + drum/10, 10, 10, 10, 10);

      //Top bar
      fill(this.upBarCol);
      rect(this.x, this.y - (this.height/2), this.width + drum/10, this.height/4 + drum/10, 10, 10, 0, 0);

      if(this.name == 'Popup'){
        //Makes a single button
      noFill();
      strokeWeight(1);
      rect(this.x + 3, this.y + this.height/3 , this.width/2.5 + drum/10, this.height/5 + drum/10, 10, 10, 10, 10);
      fill(this.upBarCol);

      }

      else if(this.name == 'Shutdown'){
        //Makes two buttons
        rect(this.x - 150, this.y + this.height/3, this.width/3.5 + drum/10, this.height/5 + drum/10, 10, 10, 10, 10);
        rect(this.x + 150, this.y + this.height/3, this.width/3.5 + drum/10, this.height/5 + drum/10, 10, 10, 10, 10 );
      }
      

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

       if(this.name == 'BarDisplay'){
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
      
        stroke(255);
        fill(0);
        
        strokeWeight(7);

        
        beginShape();

        vertex(this.x, this.y + this.height/2 - 50 - 10);
        bezierVertex(this.x + this.width/1.75 + vocal/4, 400 - 10, this.x + 100, this.y - this.width/2 + 50 - 10, this.x, this.y -50 - 10 ); //right side of heart
        vertex(this.x, this.y + this.height/2 - 51 - 10);
        bezierVertex(this.x - this.width/1.75 - vocal/4, 400 - 10, this.x - 100, this.y - this.width/2 + 50 - 10, this.x, this.y - 50 - 10); //left side of heart

        endShape();

        stroke(0);
        strokeWeight(8);
        noFill();
        line(this.x, this.y + this.height/2 - 70, this.x, this.y - 50); //fills in the middle gap


       


        if(song.currentTime() < 47 || song.currentTime() > 48 && song.currentTime() < 87 || song.currentTime() > 88){
          //All the times when the wavy line shouldn't be drawn (i.e. the first and second sound effect parts)
          let yOff = this.y + vocal/50;
          stroke(255, 200);
          strokeWeight(4);
          noFill();
          
          beginShape();
          vertex(this.x - this.width/3.7, canvasHeight/2 + 50);
          let xOff = this.x + this.width/1.75;
  
          for(let i = this.x - this.width/4; i <= this.x + this.width/4; i+= 10){
            let j = map(noise(xOff, yOff), 0, 1, 275 - other/2, 525)
  
            vertex(i, j);
            xOff += 0.5;
          }
          yOff += 0.1;
          vertex(this.x + this.width/3.7, canvasHeight/2 + 50);
          endShape();

      
        }

      }

      else if (this.name == 'ChatDisplay'){
        //Adds the chat display to the window, mapped to one of the channels
        //The chat progresses each time a new chorus arrives
        
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
          square(this.x - this.width/8 + (i * 40), this.y - this.height/8.5, 10 + bass/20); //an additional line of 'text' underneath
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
        
        else if(song.currentTime() > 63 && song.currentTime() < 121){
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

        else{
          fill(fourthIcon);
          circle(this.x - this.width/4.5, this.y - this.height/3, this.width/12 + vocal/10);
          let imgCol = color(164, 29, 179);
          fill(imgCol);
          square(this.x, this.y - this.height/5, this.width/2 + vocal/10);
    
        }
        
      }

    }
  }
}



// ----- End of Browser Window class ----- //

// Declare Variables

let firstRun = true;

//(Images loaded in)
let browserWindowX;
let leftWing;
let rightWing; 
let glass;
let skyBackground;
let moon;

//(Individual browser windows)
let heart;
let bar;
let chat;
let sky;
let shuttingDown;
let endScreen;
let popUp; //first pop up window in windows array, manually placed

//Pop up windows for the part near the end, next to each other and manually placed
let firstPlaced;
let secondPlaced;
let thirdPlaced;

//(Arrays)
let windows = [];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(152, 49, 168)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if(firstRun){
    //Loads in all images
    browserWindowX = loadImage('browserWindowX.png');
    leftWing = loadImage('leftWing.png');
    rightWing = loadImage('rightWing.png');
    glass = loadImage('brokenGlass.png');
    skyBackground = loadImage('skyBG.png');
    moon = loadImage('moon.png');

    //Initialises main windows for most of the song
    heart = new BrowserWindow('HeartDisplay', 600, 800, canvasWidth/2, canvasHeight/2);
    bar = new BrowserWindow('BarDisplay', 200, 300, canvasWidth/7, canvasHeight/4.5);
    chat = new BrowserWindow('ChatDisplay', 350, 350, canvasWidth - 190, canvasHeight - 350);
    sky = new BrowserWindow('SkyDisplay', 250, 350, canvasWidth/5, canvasHeight - 175);
    shuttingDown = new BrowserWindow('Shutdown', 300, 500, canvasWidth/2, canvasHeight/2);
    endScreen = new BrowserWindow('Shutdown', 400, 600, canvasWidth/2, canvasHeight/2);
    

    //Initialises first window in the array, manually placed
    popUp = new BrowserWindow('Popup', 200, 300, canvasWidth/2, canvasHeight/2);
    windows.unshift(popUp);

    //Creates 100 windows which are randomly placed on the screen
    for(let i = 0; i < 100; i++){
      let widthRandom = random(0, 1280);
      let heightRandom = random(0, 720);
      popUpWindow = new BrowserWindow('Popup', 200, 300, widthRandom, heightRandom);
      windows.push(popUpWindow);
    }

    //Initialises first, second and third windows for the section just before the last chorus
    firstPlaced = new BrowserWindow('Popup', 200, 300, canvasWidth/2, canvasHeight/2);
    secondPlaced = new BrowserWindow('Popup', 200, 300, canvasWidth/2 + 10, canvasHeight/2 + 10);
    thirdPlaced = new BrowserWindow('Popup', 200, 300, canvasWidth/2 + 20, canvasHeight/2 + 20);


    firstRun = false;

  }


  //-------Background details-----------

  let lighterPurple = color(130, 13, 141);
  let darkerPurple = color(123, 12, 154); //two colours for the background lerp map
  let backLerpMap = map(drum, 0, 100, 0, 1);
  let backRectCol = lerpColor(lighterPurple, darkerPurple, backLerpMap); //lerp colour between these two cols
  fill(backRectCol);
  noStroke();
  rect(canvasWidth/2, canvasHeight/2, canvasWidth - 80, canvasHeight - 20); //draws the darker background rectangle 

  stroke(255);
  strokeWeight(0.4);
  for(let i = 0; i < canvasWidth-20; i++){
    //Draws the vertical lines for the grid down the canvas
    line(i, 20, i, canvasHeight-20);
    i = i + 35;
  }

  for(let i = 0; i < canvasHeight - 20; i++){
    //Draws the horizontal lines for the grid across the canvas
    line(40, i, canvasWidth-45, i);
    i = i + 35;

  }



  //-------Functions for song runtime---------



  //Heart window always drawn except for the bridge and the very end
  if(song.currentTime() < 109.5){
    //Up until the bridge
    heart.display(words, vocal, drum, bass, other, counter);
  }

  if(song.currentTime() > 121 && song.currentTime() < 142.9){
    //From the last chorus to the very end
    heart.display(words, vocal, drum, bass, other, counter);
  }

  //Constart wing map on the other vocal
  let wingMap = map(other, 0, 100, 0, 100);

  if(song.currentTime() < 13){
    image(leftWing, canvasWidth/2 - 400, canvasHeight/2  - wingMap);
    image(rightWing, canvasWidth/2 + 200, canvasHeight/2 - wingMap);
  }
  //When the funky stuff comes on, display the glass and stop the heart movement until the music comes back.


  if(song.currentTime() > 13 && song.currentTime() < 47){
    //First section of the song, before the funky thing part
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
  
    image(skyBackground, sky.x - 190, sky.y - 155, 375 + bass/12, 325 + bass/12);
    image(moon, sky.x - 165, sky.y-140, 200 + other/2, 200 + other/2);


  }

  if(song.currentTime() > 47 && song.currentTime() < 48){
    //First funky thing part
    image(leftWing, canvasWidth/2 - 400, canvasHeight/2);
    image(rightWing, canvasWidth/2 + 200, canvasHeight/2);
    image(glass, 390, 150);
  }

  if(song.currentTime() > 48 && song.currentTime() < 87){
    //first chorus and onward up to second funky sound thing
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
  
    image(skyBackground, sky.x - 190, sky.y - 155, 375 + bass/12, 325 + bass/12);
    image(moon, sky.x - 165, sky.y-140, 200 + other/2, 200 + other/2);


  }

  if(song.currentTime() > 87 && song.currentTime() < 88){
    //Second funky sound thing
    image(leftWing, canvasWidth/2 - 400, canvasHeight/2);
    image(rightWing, canvasWidth/2 + 200, canvasHeight/2);
    image(glass, 390, 150);
  }

  if(song.currentTime() > 88 && song.currentTime() < 109){
    //Second chorus, all the way to the pop up part
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
    image(skyBackground, sky.x - 190, sky.y - 155, 375 + bass/12, 325 + bass/12);
    image(moon, sky.x - 165, sky.y-140, 200 + other/2, 200 + other/2);

  }



//------Pop up window section of the song-------

  if(song.currentTime() > 99 && song.currentTime() < 109.5){
    //First window, displayed in the first section of the instrumental
    windows[0].display(words, vocal, drum, bass, other, counter);
    image(browserWindowX, windows[0].x - 45, windows[0].y - 65, 90 + drum/7, 90 + drum/7);
  }
  
  if(song.currentTime() > 104 && song.currentTime() < 105){
    //Displays first 5 windows
      for(let i = 1; i < 5; i++){
        windows[i].display(words, vocal, drum, bass, other, counter);
        image(browserWindowX, windows[i].x - 45, windows[i].y - 65, 90 + drum/7, 90 + drum/7);
      }
  }
  if(song.currentTime() > 105 && song.currentTime() < 106){
    //Displays windows from position 5-10 in array
    for(let i = 1; i < 10; i++){
      windows[i].display(words, vocal, drum, bass, other, counter);
      image(browserWindowX, windows[i].x - 45, windows[i].y - 65, 90 + drum/7, 90 + drum/7);
    }
}
if(song.currentTime() > 106 && song.currentTime() < 106.8){
  //Displays windows from position 10-25 in array
  for(let i = 1; i < 25; i++){
    windows[i].display(words, vocal, drum, bass, other, counter);
    image(browserWindowX, windows[i].x - 45, windows[i].y - 65, 90 + drum/7, 90 + drum/7);
  }
}

if(song.currentTime() > 106.8 && song.currentTime() < 107.5){
  //Displays windows from position 25-45 in array
  for(let i = 1; i < 45; i++){
    windows[i].display(words, vocal, drum, bass, other, counter);
    image(browserWindowX, windows[i].x - 45, windows[i].y - 65, 90 + drum/7, 90 + drum/7);
  }
}

if(song.currentTime() > 107.5 && song.currentTime() < 108){
  //Displays windows from position 45-75 in array
  for(let i = 1; i < 75; i++){
    windows[i].display(words, vocal, drum, bass, other, counter);
    image(browserWindowX, windows[i].x - 45, windows[i].y - 65, 90 + drum/7, 90 + drum/7);
  }
}

if(song.currentTime() > 108 && song.currentTime() < 109.5){
  //Displays windows from position 75-100 in array
  for(let i = 1; i < 100; i++){
    windows[i].display(words, vocal, drum, bass, other, counter);
    image(browserWindowX, windows[i].x - 45, windows[i].y - 65, 90 + drum/7, 90 + drum/7);
  }
}

//------End of random pop up window section------




if(song.currentTime() > 109.5 && song.currentTime() < 121){
  shuttingDown.display(words, vocal, drum, bass, other, counter);
}


//Three browser windows displayed after the final glitchy part before the last chorus

if(song.currentTime() > 120.5 && song.currentTime() < 121){
  firstPlaced.display(words, vocal, drum, bass, other, counter);
  image(browserWindowX, firstPlaced.x - 45, firstPlaced.y - 65, 90 + drum/12, 90 + drum/12);


}

if(song.currentTime() > 120.7 && song.currentTime() < 121){
  secondPlaced.display(words, vocal, drum, bass, other, counter);
  image(browserWindowX, secondPlaced.x - 45, secondPlaced.y - 65, 90 + drum/12, 90 + drum/12);

  
}

if(song.currentTime() > 120.9 && song.currentTime() < 121){
  thirdPlaced.display(words, vocal, drum, bass, other, counter);
  image(browserWindowX, thirdPlaced.x - 45, thirdPlaced.y - 65, 90 + drum/12, 90 + drum/12);
  
}




  if(song.currentTime() > 121 && song.currentTime() < 142){
    //Final chorus to the end
    bar.display(words, vocal, drum, bass, other, counter);
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
    image(skyBackground, sky.x - 190, sky.y - 155, 375 + bass/12, 325 + bass/12);
    image(moon, sky.x - 165, sky.y-140, 200 + other/2, 200 + other/2);

  }

  if(song.currentTime() > 121 && song.currentTime() < 142.3){
    //Final chorus to the end
    chat.display(words, vocal, drum, bass, other, counter);
    sky.display(words, vocal, drum, bass, other, counter);
    image(skyBackground, sky.x - 190, sky.y - 155, 375 + bass/12, 325 + bass/12);
    image(moon, sky.x - 165, sky.y-140, 200 + other/2, 200 + other/2);

  }

  if(song.currentTime() > 121 && song.currentTime() < 142.7){
    //Final chorus to the end
    sky.display(words, vocal, drum, bass, other, counter);
    image(skyBackground, sky.x - 190, sky.y - 155, 375 + bass/12, 325 + bass/12);
    image(moon, sky.x - 165, sky.y-140, 200 + other/2, 200 + other/2);

  }

  if(song.currentTime() > 143){
    //Ending browser window
    endScreen.display(words, vocal, drum, bass, other, counter);

  }


 }

   

 