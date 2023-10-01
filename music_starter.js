
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(12, 13, 28)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  noFill();
  strokeWeight(2);
  stroke(255, 212, 84);

  for(let i = 6; i > 0; i--){
    if(i < 6){
      circle(canvasWidth/2, canvasHeight/2, bass + (100 * i * 2));
    }
    else{
      circle(canvasWidth/2, canvasHeight/2, bass + 900);

    }
  }

  let starSize = map(bass, 0, 25, 40, 50);
  let yellow = color(255, 212, 84);

    star(canvasWidth/2 - starSize/3, canvasHeight/2 - starSize/3, yellow);

  function star(x, y, starCol){
    noStroke();
    fill(starCol);

    triangle(x, y, x + 28, y - 55, x + 56, y); //top
    square(x + 28, y + 22, y /6.3); //middle
    triangle(x, y, x - 28, y + 55, x - 56, y); //bottom
    triangle();
    triangle();

  }
  
 }

 //   let lightOrange = color(255, 243, 176);
//   let lightBlue = color(157, 171, 235); //colours for base

//   let lightLerpMap = map(bass, 0, 100, 0, 1);
//   let moonBaseCol = lerpColor(lightOrange, lightBlue, lightLerpMap); //lerpmap of base colours

//   let darkOrange = color(227, 198, 145);
//   let darkBlue = color(110, 127, 204); //colours for shading

//   let darkLerpMap = map(bass, 0, 100, 0, 1);
//   let shadingCol = lerpColor(darkOrange, darkBlue, darkLerpMap); //lerpmap of shaded colours

//   var moonSize = map(vocal, 0, 25, 40, 50);
//   var moonHeight = map(drum, 0, 100, 0+moonSize/2, height - moonSize*2);

//   for(let i = 1; i <= 5; i++){
//     //Creates 5 moons on the screen
//     if((i ==2) || (i == 4)){
//       //If i is even, place it lower down
//       moonHeight = moonHeight + 50;
//     }
//     else{
//       //If i is odd, place it higher up
//       moonHeight = moonHeight - 50;
//     }

//     //Draws moon 5 times with x spaced out depending on which moon is drawn
//     moon(250 + ( i * 100) , moonHeight, moonSize, moonBaseCol, shadingCol); 

//   }
// //Makes the fog-like effect
//   for(let iii = 1; iii < 7; iii++){
//     let yStep = iii * 50;
//     for(let ii = 1; ii <= 7; ii++){
//       //Set the alpha colours of the moons which are creating the fog effect
//       moonBaseCol.setAlpha(1 + (ii * 20)/1000);
//       shadingCol.setAlpha(1 + (ii * 20)/1000);
//       //Draws them in the background, with ii and yStep controlling the spacing
//       moon(100 * ii, yStep, 500, moonBaseCol, shadingCol);
//     }
//   }

  




// }

// function moon(x, y, moonWidth, moonCol, moonShading){
//   noStroke();
//   fill(moonCol);
  
//   ellipse(x, y, moonWidth, moonWidth); //base

//   fill(moonShading);
//   ellipse(x - moonWidth/6, y + moonWidth/5.5, moonWidth/2, moonWidth/3); //big shading
//   ellipse(x - moonWidth/x, y + moonWidth/2.5, moonWidth/6, moonWidth/9); //little shading



