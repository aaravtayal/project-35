//Create variables here
var dog,happydog,dogHappy;
var food,foodStocks;
var database;




function preload()
{
  //load images here
  happydog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  console.log(food);
   
  database = firebase.database();
  console.log(database);

  foodStocks = database.ref('food');
  foodStocks.on("value",readStock);

  
  dog = createSprite(250,300,20,20);
  dog.addImage(happydog);
  dog.scale = 0.2;


}


function draw() {  
  background("lightGreen")

  if(keyWentDown(UP_ARROW))
    {
      writeStock(food);
      dog.addImage(dogHappy);
      food = food-1;
    } else
      {
        dog.addImage(happydog);
      }


  drawSprites();
  //add styles here
  
  fill("black");
  textSize(20);
  text("Food Remaining:"+food,100,200);
  
fill("darkGreen");
textSize(15);
stroke(5);
text("Note : Press UP_ARROW key to feed the Drago milk",60,40);
}

function readStock (data)
  {
    food = data.val();
  }

function writeStock(x)
  {
    database.ref('/').update
    ({
        food:x  
    })
  }

