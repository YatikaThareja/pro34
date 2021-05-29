//Create variables here
var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("Images/dogImg.png");
  dogImg1=loadImage("Images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {  
background(46,139,87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}

  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaning : "+ foodS,170,200);
  textSize(13);
  text("NOTE-press UP_ARROW Key to feed the dog")

}

function readStock(data){
  foodS=data.val();
  console.log(foodS);
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  console.log(x)
  database.ref('/').set({
    Food:x
  })
}


