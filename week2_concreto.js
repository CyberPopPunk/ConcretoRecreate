// Author: CyberPopPunk
// Date: 3/29/2020
// Creative Coding Week 2
// Description: This program recreates the piece "Concreto" by Alfredo Volpi (1950) using p5.js

function preload(){ canvas_texture = loadImage("UsedCanvas1.jpg");}

// Triangle Size
var size = 110;
var xWidth = size * 0.78;

function draw_tri(x, y, direction) {
  /* A function I wrote to make drawing triangles fasster to identical proportions
  inputs:
  x = (integer) X value for the bottom left corner of the triangle
  y = (integer) Y value for the bottom left corner of the triangle
  direction =  (String) Determins if the triangle faces left or right and other answer sends an error to the console.
  */
  
  //Conditional statement to determine which way the triangle should face
  if (direction === "right"){
  triangle(x, y, x, y - size, x + xWidth, y - size);
  }
  else if (direction === "left"){
  triangle(x, y, x, y - size, x - xWidth, y - size);
  }
}


function setup() {
 
  //size translated from canvas measurements to pixels scaled up by 10
  createCanvas(734, 1162);
  background(255);

  //Triangle Colors
  var cream = color(230, 214, 126, 230);
  var green = color(0, 80, 90);
  noStroke();
 
  // Boottom left triangle X and Y positon value
  var originX = width / 2.8;
  var originY = (height / 10) * 8.5;
  
  //Draw Top row
  fill(green);
  draw_tri(originX, originY-size*6, "right");
  
  //Draw second row
  draw_tri(originX, originY-size*5, "left");
  fill(cream);
  draw_tri(originX + xWidth, originY-size*5, "right");
  draw_tri(originX + xWidth*2, originY-size*5, "right");
  
  //draw third row
  fill(green);
  draw_tri(originX, originY-size*4, "right");
  fill(cream);
  draw_tri(originX + xWidth, originY-size*4, "right");
  draw_tri(originX + xWidth*2, originY-size*4, "right");
  
  //draw fourth row
  fill(green);
  draw_tri(originX, originY-size*3, "left");
  fill(cream);
  draw_tri(originX + xWidth, originY-size*3, "right");
  draw_tri(originX + xWidth*2, originY-size*3, "right");
  
  //draw fifth row
  fill(green);
  draw_tri(originX, originY-size*2, "right");
  fill(cream);
  draw_tri(originX + xWidth, originY-size*2, "right");
  draw_tri(originX + xWidth*2, originY-size*2, "right");
  
  //draw sixth row
  fill(green);
  draw_tri(originX, originY-size, "left");
  fill(cream);
  draw_tri(originX + xWidth, originY-size, "right");
  draw_tri(originX + xWidth*2, originY-size, "right");
  
  //Draw Bottom Row
  fill(cream);
  draw_tri(originX, originY, "right");
  draw_tri(originX + xWidth, originY, "right");
  draw_tri(originX + xWidth * 2, originY, "right");
	
	//add canvas texture using tint as an alpha overlay
	tint(190,185,190, 70);
  image(canvas_texture,0, 0);
	noTint();
}

function draw() {
  noLoop();
}
