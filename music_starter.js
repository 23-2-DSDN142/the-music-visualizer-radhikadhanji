
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  let lightOrange = color(255, 243, 176);
  let lightBlue = color(157, 171, 235); //colours for base

  let lightLerpMap = map(bass, 0, 100, 0, 1);
  let moonBaseCol = lerpColor(lightOrange, lightBlue, lightLerpMap); //lerpmap of base colours

  let darkOrange = color(227, 198, 145);
  let darkBlue = color(110, 127, 204); //colours for shading

  let darkLerpMap = map(bass, 0, 100, 0, 1);
  let shadingCol = lerpColor(darkOrange, darkBlue, darkLerpMap); //lerpmap of shaded colours

  var moonSize = map(vocal, 0, 25, 40, 50);
  var moonHeight = map(drum, 0, 100, 0+moonSize/2, height - moonSize*2);

  for(let i = 1; i <= 5; i++){
    //Creates 5 moons on the screen
    if((i ==2) || (i == 4)){
      //If i is even, place it lower down
      moonHeight = moonHeight + 50;
    }
    else{
      //If i is odd, place it higher up
      moonHeight = moonHeight - 50;
    }

    //Draws moon 5 times with x spaced out depending on which moon is drawn
    moon(250 + ( i * 100) , moonHeight, moonSize, moonBaseCol, shadingCol); 

  }

  for(let iii = 1; iii < 7; iii++){
    let yStep = iii * 50;
    for(let ii = 1; ii <= 7; ii++){
      moonBaseCol.setAlpha(1 + (ii * 20)/1000);
      shadingCol.setAlpha(1 + (ii * 20)/1000);
      moon(100 * ii, yStep, 500, moonBaseCol, shadingCol);
    }
  }

  




}

function moon(x, y, moonWidth, moonCol, moonShading){
  noStroke();
  fill(moonCol);
  
  ellipse(x, y, moonWidth, moonWidth); //base

  fill(moonShading);
  ellipse(x - moonWidth/6, y + moonWidth/5.5, moonWidth/2, moonWidth/3); //big shading
  ellipse(x - moonWidth/x, y + moonWidth/2.5, moonWidth/6, moonWidth/9); //little shading

}



//  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;

// vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);