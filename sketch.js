var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var database;

function preload(){
    dog=loadImage("Pictures/Dog.png");
    happyDog=loadImage("Pictures/happydog.png");
}

function setup(){
    createCanvas(500,500);
    dog=createSprite(250,250,20,20);
    database = firebase.database();
    foodStock=database.ref('Food');
    foodStock.on("value", readStock );
}

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
}

 function readStock(data){
    foodS-data.val();
 }

 function writeStock(x){
     if(x<-0){
         x=0;
     }else{
         x=x-1;
     }
     database.ref('/').update({
         Food:x
     })
 }




function draw(){
    background(46, 139, 87);
    drawSprites();
}