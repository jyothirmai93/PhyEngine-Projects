const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var thunder, thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame=0;
var rand;

var drops = [];
var maxDrops=100;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);

    //creating umbrella
    umbrella = new Umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            d = new createDrop(random(0,400), random(0,400));
            drops.push(d);
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //umbrella
    umbrella.display();

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    //destroying thunder
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }


    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

