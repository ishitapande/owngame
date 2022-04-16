//the variables where the images will be uploaded
var wasdImage, spaceImage;
var livingRoomImage, hallwayImage, playRoomImage, mazeImage, chase, readImage, bedroomsImage, deadImage;
var catterpillarImage, spiderImage;
var photoImage, lampImage, sideTableImage, shine, sleepingBag;
var guestBedroomImage, drawerImage;
var officeImage, laptopImage, bookShelfImage, letterImage, prescriptionImage, paperImage, paintingImage;
var ballsyNormal, ballsyScary, blocksImage, booksImage, curtainImage, chestImage, babyCameraImage;
var masterBedroomImage, zenImage, keyImage, pictureImage, sideTablesImage;
var leftWalk, rightWalk, upWalk, sakinaImage;
var upstairsImage;

//variables storing the above
var Sakina;
var backGround, wasd, square, space;
var sprite, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, sprite10, sprite11, sprite12, sprite13, sprite14, sprite15, sprite16, sprite17, sprite18, sprite19, sprite20, sprite21, sprite22, sprite23;
var sprite24, sprite25, sprite26, sprite27;
var lamp, lamp1, lamp2, lamp3;
var sideTable, sideTable2;
var photo, family;
var sleep, ballsy;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26;
var curtain, chest, camera;
var blocks, blocks2, blocks3;
var books, books2;
var book, book2, book3, book4, book5, book6
var bookShelf, bookShelf2, bookShelf3, bookShelf4, bookShelf5, bookShelf6;
var painting, letter, prescription;
var picture, key, drawer, drawer2;
var table, table2;
var stick, laptop;
var paper, paper2, paper3, paper4;
var s, s2, s3;
var c, c2, c3;
//walls for the chase
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17;
var wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26;
//others
var square; 
var Rect;

var y = 200;
var x = 270;
gameState = 'start'; //gamestate


function preload(){
 //start
 wasdImage = loadImage("images/start/wasd.png");
 spaceImage = loadImage("images/start/space.png");

 //backgrounds
 livingRoomImage = loadImage("images/background/livingRoom.jpg");
 hallwayImage = loadImage("images/background/hallway.jpg");
 playRoomImage = loadImage("images/background/playRoom.png");
 mazeImage = loadImage("images/background/maze(playroom).jpg");
 chase = loadImage("images/background/maze(playroom).jpg");
 readImage = loadImage('images/background/read.jpg');
 bedroomsImage = loadImage('images/background/bedrooms.jpg');
 

 //the house
 catterpillarImage = loadImage("images/catterpillar.png");
 spiderImage = loadImage("images/spider.png");

 //living room
 photoImage = loadImage("images/family_photo.png");
 lampImage = loadImage("images/lamp.png"); //also to be put in master bedroom
 sideTableImage = loadImage("images/sideTableWithBooks.png");
 shine = loadImage("images/shine.png");
 sleepingBag = loadImage("images/sleepingBag.png");

 //guest bedroom
 guestBedroomImage = loadImage("images/background/guestBedroom.png");
 drawerImage = loadImage("images/drawer.png");

 //office
 officeImage = loadImage("images/background/office.jpg");
 laptopImage = loadImage("images/brokenLaptop.png");
 bookShelfImage =loadImage("images/bookshelf.png");
 letterImage = loadImage("images/letter.png");
 prescriptionImage = loadImage("images/prescription.png");
 paperImage = loadImage("images/tornPileOfPaperWork.png");
 paintingImage = loadImage("images/officePhoto.png");

 //playroom
 ballsyNormal = loadImage("images/ballsy(Normal).png");
 ballsyScary = loadImage("images/ballsy(Scary).png");
 blocksImage = loadImage("images/blocks.png");
 booksImage = loadImage("images/books.png");
 curtainImage = loadImage("images/curtain.png");
 chestImage = loadImage("images/chest.png");
 babyCameraImage = loadImage("images/babyCamera.png");

 //master bedroom
 masterBedroomImage = loadImage('images/background/masterBedroom.jpg')
 zenImage = loadImage("images/inscenceSticks.png");
 keyImage = loadImage("images/keyToMCBedroom.png");
 pictureImage = loadImage('images/picture.png');
 sideTablesImage = loadImage('images/sideTable.png');

 //Sakina's bedroom

 //Sakina
 leftWalk = loadAnimation("images/walking/left1.png", "images/walking/left2.png", "images/walking/left3.png");
 rightWalk = loadAnimation("images/walking/right1.png", "images/walking/right2.png", "images/walking/right3.png");
 upWalk = loadAnimation("images/walking/walkBack1.png", "images/walking/walkBack2.png", "images/walking/walkBack3.png");
 sakinaImage = loadImage('images/Sakina.png');

 //upstairs
 upstairsImage = loadImage("images/background/stairs.jpg");
 
}

function setup(){
 createCanvas(1250, 560)

 //creating the living room
 backGround = createSprite(630, 280);
 backGround.scale = 0.65;

 //wasd image
 wasd = createSprite(155, 240, 10, 10);
 wasd.addImage(wasdImage);
 wasd.scale = 1.5;

 //rect image for controls text
 square = createSprite(608, 265, 500, 100);
 square.shapeColor = rgb(60, 100, 119);

 //space image
 space = createSprite(627, 490, 10, 10);
 space.addImage(spaceImage);

 //invisible sprites
  //hallway
 sprite = createSprite(40, 200, 50, 70);
 sprite.visible = false;
  //playroom - top right
 sprite1 = createSprite(1010, 140, y, y);
 sprite1.visible = false;
  //office - top left
 sprite2 = createSprite(240, 140, y, y);
 sprite2.visible = false;
  //guest bedroom - bottom left
 sprite3 = createSprite(350, 505, y, y);
 sprite3.visible = false;
  //locked door - bottom right
 sprite4 = createSprite(910, 505, y, y);
 sprite4.visible = false;
  //kitchen
 sprite5 = createSprite(1200, 262,70, 50)
 sprite5.visible = false;
  //hallway
 sprite6 = createSprite(1250, 320, 10, 170);
 sprite6.visible = false;
 // the boundaries in hallway
  //above
  //middle
 sprite7 = createSprite(630, 235, 650, 10);
 sprite7.visible = false;
 //right
 sprite8 = createSprite(1183, 235, 200, 10);
 sprite8.visible = false;
 //left
 sprite9 = createSprite(90, 235, 170, 10);
 sprite9.visible = false;
  //below
  //middle
 sprite10 = createSprite(640, 410, 450, 10);
 sprite10.visible = false;
  //right
 sprite11 = createSprite(1183, 410, 450, 10);
 sprite11.visible = false;
  //left
 sprite12 = createSprite(90, 410, 380, 10);
 sprite12.visible = false;
 //playroom to hallway
 sprite13 = createSprite(1250, 490, 10, 140);
 sprite13.visible = false;
 //boundaries in playroom
  //top
 sprite14 = createSprite(710, 420, 1080, 10);
 sprite14.visible = false;
 //maze to hallway
 sprite15 = createSprite(1250, 490, 10, 140);
 sprite15.visible = false;
 //the front door
 sprite16 = createSprite(600, 520, 60, 20);
 sprite16.visible = false;
 //exit in the office
 sprite17 = createSprite(1150, 560, 200, 10);
 sprite17.visible = false;
 //exit in guest bedroom
 sprite18 = createSprite(110, 545, 250, 10);
 sprite18.visible = false;
 //going to the stairs
 sprite19 = createSprite(15, 320, 100, 200);
 sprite19.visible = false;
 //upper boundary for obstacle course
 sprite20 = createSprite(600, 10, 1250, 10);
 sprite20.visible = false;
 //master bedroom
 sprite21 = createSprite(430, 145, 400, 100);
 sprite21.visible = false;
 //Sakina's bedroom
 sprite22 = createSprite(380, 500, 400, 100);
 sprite22.visible = false;
 //lower boundary for obstacle course
 sprite23 = createSprite(600, 425, 1250, 10);
 sprite23.visible = false;
 
 //EXITS
  //playroom
  sprite24 = createSprite(1247, 488, 10, 150);
  sprite24.visible = false;
  //office
  sprite25 = createSprite(1122, 560, 200, 10);
  sprite25.visible = false;
  //guest bedroom and master bedroom
  sprite26 = createSprite(115, 558, 200, 10);
  sprite26.visible = false;

 //the lamps
  //top-left
 lamp = createSprite(100, 50, 10, 10);
 lamp.addImage(lampImage);
 lamp.scale = 0.4;
  //top-right
 lamp1 = createSprite(1155, 50, 10, 10);
 lamp1.addImage(lampImage);
 lamp1.scale = 0.4;
  //bottom-right
 lamp2 = createSprite(1155, 465, 10, 10);
 lamp2.addImage(lampImage);
 lamp2.scale = 0.4;
  //bottom-left
 lamp3 = createSprite(100, 465, 10, 10);
 lamp3.addImage(lampImage);
 lamp3.scale = 0.4;


 //sidetable for living room
 //left
 sideTable = createSprite(880, 455, 10, 10);
 sideTable.addImage(sideTableImage);
 sideTable.scale = 0.75;
  //right
 sideTable2 = createSprite(380, 455, 10, 10);
 sideTable2.addImage(sideTableImage);
 sideTable2.scale = 0.75;

 //family photo
 photo = createSprite(1000, 460, 10, 10);
 photo.addImage(shine)
 photo.scale = 0.2;
 family = createSprite(950, 200, 10, 10);
 family.shapeColor = rgb(81, 1, 10);
 family.setCollider('circle', 0, -250, 0);

 //sleeping bag
 sleep = createSprite(280, 175, 10, 10);
 sleep.addImage(sleepingBag);
 sleep.scale = 0.3;
 
 //ballsy normal
 ballsy = createSprite(120, 500, 10, 10);
 ballsy.addImage(ballsyNormal)
 ballsy.scale = 0.25;

 //walls for the chase
 wall1 = createSprite(180, 495, 5, 50); // start right
 wall2 = createSprite(110, 530, 5, 100); // start left
 wall3 = createSprite(202.5, 520, 50, 5); // below start right
 wall4 = createSprite(240, 495, 80, 5); // above (below start right)
 wall5 = createSprite(290, 520, 50, 5); // to the right of (below start right)
 wall6 = createSprite(316, 497.5, 5, 50); // perpendicular to the above
 wall7 = createSprite(390, 475, 100, 5); // to the right of above
 wall8 = createSprite(520, 475, 100, 5); //to the right of above
 wall9 = createSprite(430, 530, 100, 5); //below the above
 wall10 = createSprite(500, 530, 5, 50); // to the right of above
 wall11 = createSprite(600, 530, 5, 50); // to the right of above
 wall12  = createSprite(550, 530, 50, 5); // to the left of above
 wall13 = createSprite(570, 465, 5, 50); // above the above
 wall14 = createSprite(630, 450, 50, 5); //to the right of above
 wall15 = createSprite(740, 450, 150, 5); //to the right of above
 wall16 = createSprite(900, 450, 100, 5);//to the right of above
 wall17 = createSprite(665, 495, 100, 5); //below above
 wall18 = createSprite(865, 505, 5, 50); //to the right of above
 wall19 = createSprite(755, 520, 5, 50); // to the left of above
 wall20 = createSprite(815, 500, 50, 5); //horizontal of intersection
 wall21 = createSprite(815, 500, 5, 50); //vertical of intersection
 wall22 = createSprite(955, 495, 100, 5); // next to the intersection
 wall23 = createSprite(1030, 490, 5, 90); //next to the above
 wall24 = createSprite(1080, 460, 50, 5); // to the right of above
 wall25 = createSprite(1080, 490, 50, 5); // below the above
 wall26 = createSprite(1080, 530, 50, 5); // below the above
 //coloring for the walls
 wall1.shapeColor = rgb(243, 203, 203);
 wall2.shapeColor = rgb(243, 203, 203);
 wall3.shapeColor = rgb(243, 203, 203);
 wall4.shapeColor = rgb(243, 203, 203);
 wall5.shapeColor = rgb(243, 203, 203);
 wall6.shapeColor = rgb(243, 203, 203);
 wall7.shapeColor = rgb(243, 203, 203);
 wall8.shapeColor = rgb(243, 203, 203);
 wall9.shapeColor = rgb(243, 203, 203);
 wall10.shapeColor = rgb(243, 203, 203);
 wall11.shapeColor = rgb(243, 203, 203);
 wall12.shapeColor = rgb(243, 203, 203);
 wall13.shapeColor = rgb(243, 203, 203);
 wall14.shapeColor = rgb(243, 203, 203);
 wall15.shapeColor = rgb(243, 203, 203);
 wall16.shapeColor = rgb(243, 203, 203);
 wall17.shapeColor = rgb(243, 203, 203);
 wall18.shapeColor = rgb(243, 203, 203);
 wall19.shapeColor = rgb(243, 203, 203);
 wall20.shapeColor = rgb(243, 203, 203);
 wall21.shapeColor = rgb(243, 203, 203);
 wall22.shapeColor = rgb(243, 203, 203);
 wall23.shapeColor = rgb(243, 203, 203);
 wall24.shapeColor = rgb(243, 203, 203);
 wall25.shapeColor = rgb(243, 203, 203);
 wall26.shapeColor = rgb(243, 203, 203);

 //creating the curtain
 curtain = createSprite(280, 195, 10, 10);
 curtain.addImage(curtainImage)
 curtain.scale = 1.28;

 //creating the chest
 chest = createSprite(925, 420, 10, 10);
 chest.addImage(chestImage)
 chest.scale = 0.4;

 //camera
 camera = createSprite(345, 530, 10, 10);
 camera.addImage(babyCameraImage);
 camera.scale = 0.001;
 

 //broken blocks
 blocks = createSprite(460, 500, 10, 10);
 blocks.addImage(blocksImage)
 blocks.scale = 0.3;
 blocks2 = createSprite(865, 520, 10, 10);
 blocks2.addImage(blocksImage)
 blocks2.scale = 0.3;
 blocks3 = createSprite( 350, 470, 10, 10);
 blocks3.addImage(blocksImage)
 blocks3.scale = 0.3;
 

 //books lying on the floor of the playroom
 books = createSprite(650, 480, 10, 10);
 books.addImage(booksImage);
 books.scale = 0.5;
 //books lying on the office table
 books2 = createSprite(625, 400, 10, 10);
 books2.addImage(booksImage)
 books2.scale = 0.2;

 //bookshelf in office
 bookShelf = createSprite(895, 235, 10, 10); //left one on right side
 bookShelf.addImage(bookShelfImage)
 bookShelf.scale = 0.7;
 bookShelf2= createSprite(1080, 235, 10, 10); //right one on right side
 bookShelf2.addImage(bookShelfImage)
 bookShelf2.scale = 0.7;
 bookShelf3 = createSprite(395, 235, 10, 10);//right one on left side
 bookShelf3.addImage(bookShelfImage)
 bookShelf3.scale = 0.7;
 bookShelf4 = createSprite(210, 235, 10, 10);//left one on left side
 bookShelf4.addImage(bookShelfImage)
 bookShelf4.scale = 0.7;
  //bookshelves in guest bedroom
  bookShelf5 = createSprite(310, 170, 10, 10); //left
  bookShelf5.addImage(bookShelfImage)
  bookShelf5.scale = 1;
  bookShelf6 = createSprite(910, 170, 10, 10); //right
  bookShelf6.addImage(bookShelfImage)
  bookShelf6.scale = 1;

 //office painting
 painting = createSprite(640, 180, 10, 10);
 painting.addImage(paintingImage);
 painting.scale = 0.2;

 //letter
 letter = createSprite(690, 400, 10, 10);
 letter.addImage(letterImage);
 letter.scale = 0.1;

 //prescription
 prescription = createSprite(1045, 500, 10, 10);
 prescription.addImage(prescriptionImage);
 prescription.scale = 0.2;

 //drawer in the guest bedroom
 drawer = createSprite(1050, 360, 10, 10);
 drawer.addImage(drawerImage);
 drawer.scale = 0.5;
 //drawer in the bedroom
 drawer2 = createSprite(1020, 365, 10, 10);
 drawer2.addImage(drawerImage);
 drawer2.scale = 0.6;

 //books scattered on the floor
 book = createSprite(160, 330, 10, 10);
 book.addImage(booksImage)
 book2 = createSprite(270, 380, 10, 10);
 book2.addImage(booksImage)
 book3 = createSprite(460, 320, 10, 10);
 book3.addImage(booksImage)
 book4 = createSprite(815, 335, 10, 10);
 book4.addImage(booksImage)
 book5 = createSprite(1070, 270, 10, 10);
 book5.addImage(booksImage)
 book6 = createSprite(950, 300, 10, 10);
 book6.addImage(booksImage)
//scaling
 book.scale = 0.2;
 book2.scale = 0.2;
 book3.scale = 0.2;
 book4.scale = 0.2;
 book5.scale = 0.2;
 book6.scale = 0.2;

 //picture on the master bedroom
 picture = createSprite(260, 90, 10, 10);
 picture.addImage(pictureImage)
 picture.scale = 0.1;

 //key
 key = createSprite(1145, 250, 10, 10);
 key.addImage(keyImage);
 key.scale = 0.1;

 //side tables in master bedroom
 table = createSprite(900, 200, 10, 10);
 table.addImage(sideTablesImage);
 table.scale = 0.25;
 table2 = createSprite(330, 200, 10, 10);
 table2.addImage(sideTablesImage);
 table2.scale = 0.25;

 //incense sticks
 stick = createSprite(320, 200, 10, 10);
 stick.addImage(zenImage);
 stick.scale = 0.25;

 //creating the main character Sakina
 Sakina = createSprite(330, 175, 20, 20);
 Sakina.shapeColor = "white";
 Sakina.scale = 0.4;

 //laptop
 laptop = createSprite(470, 390, 10, 10);
 laptop.addImage(laptopImage);
 laptop.scale = 0.2;

 //piles of paper work
 paper = createSprite(160, 405, 10, 10);
 paper.addImage(paperImage);
 paper.scale = 0.4;
 paper2 = createSprite(380, 500, 10, 10);
 paper2.addImage(paperImage);
 paper2.scale = 0.4;
 paper3 = createSprite(550, 380, 10, 10);
 paper3.addImage(paperImage);
 paper3.scale = 0.3;
 paper4 = createSprite(920, 420, 10, 10);
 paper4.addImage(paperImage);
 paper4.scale = 0.4;

 //spiders
 s = createSprite(1055, 130, 10, 10); //right
 s.addImage(spiderImage);
 s.scale = 0.2;
 s2 = createSprite(675, 130, 10, 10); //middle
 s2.addImage(spiderImage);
 s2.scale = 0.2;
 s3 = createSprite(355, 130, 10, 10); //left
 s3.addImage(spiderImage);
 s3.scale = 0.2;

 //catterpillars
 c = createSprite(870, 140, 10, 10); //right
 c.addImage(catterpillarImage);
 c.scale = 0.3;
 c2 = createSprite(510, 140, 10, 10); //middle
 c2.addImage(catterpillarImage);
 c2.scale = 0.3;
 c3 = createSprite(215, 140, 10, 10); //left
 c3.addImage(catterpillarImage);
 c3.scale = 0.3;

}

function draw(){
  background(0)

  //start
  if(gameState === 'start'){

    //visibility
    lamp.visible = true;
    lamp1.visible = true;
    lamp2.visible = true;
    lamp3.visible = true;
    sideTable.visible = true;
    sideTable2.visible = true;
    sleep.visible = true;
    photo.visible = true;
    family.visible = true;
    ballsy.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    camera.visible = false;
    chest.visible = false;
    curtain.visible = false;
    sleep.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    photo.visible = false;
    backGround.visible = false;
    family.visible = false;
    Sakina.visible = false;
    painting.visible = false;
    bookShelf.visible = false;
    bookShelf2.visible = false;
    bookShelf3.visible = false;
    bookShelf4.visible = false;
    bookShelf5.visible = false;
    bookShelf6.visible = false;
    drawer.visible = false;
    books2.visible = false;
    laptop.visible = false;
    paper.visible = false;
    paper2.visible = false;
    paper3.visible = false;
    paper4.visible = false;
    letter.visible = false;
    books.visible = false;
    prescription.visible = false;
    book.visible = false;
    book2.visible = false;
    book3.visible = false;
    book4.visible = false;
    book5.visible = false;
    book6.visible = false;
    c.visible = false;
    c2.visible = false;
    c3.visible = false;
    s.visible = false;
    s2.visible = false;
    s3.visible = false;
    picture.visible = false;
    drawer2.visible = false;
    key.visible = false;
    table.visible = false;
    table2.visible = false;
    stick.visible = false;
    wasd.visible = false;
    space.visible = false;
    square.visible = false;

    fill(rgb(38, 130, 236))
    textSize(130)
    textFont("Brush Script MT")
    text("My Life is a Dream", 180, 285);
    textSize(30)

    //gamestate change
    textSize(20)
    text("Press space to continue", 1000, 515);
    if(keyWentUp('space')){
      gameState = 'start1';
    }
  }

  //instructions
  if(gameState === 'start1'){
    //visibility
    wasd.visible = true;
    space.visible = true;
    square.visible = true;

    var x = 380;
    var y = 400;
    var a = 750;
    var b = 100;

    fill(rgb(204, 255, 255));
    textSize(25)
    textFont("Brush Script MT")
    text("Press space to continue", 1000, 515);
    fill(rgb(59, 184, 241))
    textFont("Brush Script")
    textSize(60)
    textStyle('bold')
    text("How to move", 5, 115);
    textSize(22)
    text("To interact with objects, go near them and hold space. You can interact", x, y);
    text("with a lot of things in different rooms.", x + 110, y + 25); 
    textSize(25)
    text("In dialogues, where there is * in the end,", a, b);
    text("press 1 after reading the dialogue to continue.", a - 30, b + 30);


    if(keyWentDown('space')){
      gameState = 'pre-prologue';
    }
    
  }

  //a duplicate of prolouge gameStop but was made so we can continue in the game with only one key
  if(gameState === 'pre-prologue'){
    //visibility
    space.visible = false;
    wasd.visible = false;
    square.visible = false;
    
    var x = 50;

    textSize(23)
    textFont("Didot")
    fill(rgb(153, 102, 255))
    text("The walls are torn and water drips from the ceiling of my childhood home. I came here yesterday at 8:00 in the morning to find", 8, x);
    text("something related to my problems. Everywhere I went people would stare at me like I am an animal or they would throw disgusting", 8, x + 35 );
    text("looking magical insects at my face. When I would scream the insects would disappear and those despicable people would look at me", 8, x + 35*2);
    text("confused as if they didn’t do anything. They would ask if I’m alright… the audacity! I told this to my therapist yesterday but she said,", 8, x + 35*3);
    text("“You deserve it! You deserve all of it. You don’t deserve anything good and you should have died with the rest of them!” I ran back", 8, x + 35*4);
    text("home with tears in my eyes. These were the words she told me not to tell myself and now those same words are being uttered by her...", 8, x + 35*5);
    text("She continuously tried calling me but I was so mad. She had been so nice to me ever since we met but why now? A lot of people told", 5, x + 35*8);
    text("me I was the problem, that there was something wrong with me. That is why I was sent to therapy. Maybe it is time to test what the", 5, x + 35*9);
    text("actual reality is…", 5, x +35*10);

    textFont("Brush Script MT")
    textSize(20)
    fill(rgb(59, 184, 241))
    text("Press space to continue.", 1050, 515);

    if(keyWentUp('space')){
      gameState = 'prologue';
    }

  }

  //the prologue - where Sakina describes her daily life and how she is tired of it
  if(gameState === 'prologue'){
    //visibility
    space.visible = false;
    wasd.visible = false;
    square.visible = false;
    
    var x = 50;

    textSize(23)
    textFont("Didot")
    fill(rgb(153, 102, 255))
    text("The walls are torn and water drips from the ceiling of my childhood home. I came here yesterday at 8:00 in the morning to find", 8, x);
    text("something related to my problems. Everywhere I went people would stare at me like I am an animal or they would throw disgusting", 8, x + 35 );
    text("looking magical insects at my face. When I would scream the insects would disappear and those despicable people would look at me", 8, x + 35*2);
    text("confused as if they didn’t do anything. They would ask if I’m alright… the audacity! I told this to my therapist yesterday but she said,", 8, x + 35*3);
    text("“You deserve it! You deserve all of it. You don’t deserve anything good and you should have died with the rest of them!” I ran back", 8, x + 35*4);
    text("home with tears in my eyes. These were the words she told me not to tell myself and now those same words are being uttered by her...", 8, x + 35*5);
    text("She continuously tried calling me but I was so mad. She had been so nice to me ever since we met but why now? A lot of people told", 5, x + 35*8);
    text("me I was the problem, that there was something wrong with me. That is why I was sent to therapy. Maybe it is time to test what the", 5, x + 35*9);
    text("actual reality is…", 5, x +35*10);

    textFont("Brush Script MT")
    textSize(20)
    fill(rgb(59, 184, 241))
    text("Press space to continue.", 1050, 515);

    if(keyDown('space')){
      gameState = 'livingRoom';
    }

  }

  //controls of the Sakina
  if(keyDown("UP") || keyDown('w')){
    //animation
    //Sakina.addAnimation('up', upWalk)
    //controls
    Sakina.x = Sakina.x + 0;
    Sakina.y = Sakina.y - 3;
  } else if(keyDown("DOWN") || keyDown('s')){
    Sakina.x = Sakina.x + 0;
    Sakina.y = Sakina.y + 3;
  } else if(keyDown("RIGHT") || keyDown('d')){
    //animation
    //Sakina.addAnimation('right', rightWalk)
    //controls
    Sakina.x = Sakina.x + 3;
    Sakina.y = Sakina.y + 0;
  } else if(keyDown("LEFT") || keyDown('a')){
     //animation
     //Sakina.addAnimation('leftWalk', leftWalk)
     //controls
     Sakina.x = Sakina.x - 3;
     Sakina.y = Sakina.y + 0;
  }
  

//Sakina in the living room
  if(gameState === 'livingRoom'){

    //background
    backGround.addImage(livingRoomImage)

    //visibility of objects
    Sakina.visible = true;
    backGround.visible = true;
    lamp.visible = true;
    lamp1.visible = true;
    lamp2.visible = true;
    lamp3.visible = true;
    sideTable.visible = true;
    sideTable2.visible = true;
    sleep.visible = true;
    photo.visible = true;
    family.visible = true;
    ballsy.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    camera.visible = false;
    books.visible = false;
    painting.visible = false;
    bookShelf.visible = false;
    bookShelf2.visible = false;
    bookShelf3.visible = false;
    bookShelf4.visible = false;
    laptop.visible = false;
    paper.visible = false;
    paper2.visible = false;
    paper3.visible = false;
    paper4.visible = false;
    letter.visible = false;
    books2.visible = false;
    prescription.visible = false;
    rect.visible = false;
    wasd.visible = false;
    space.visible = false;
    sprite24.visible = false;
    sprite25.visible = false;
    sprite26.visible = false;

    //set colliders for sprites
     //lamp
     lamp.setCollider('rectangle', 0, 0, 100, 300);
     lamp1.setCollider('rectangle', 0, 0, 100, 300);
     lamp2.setCollider('rectangle', 0, 0, 100, 300);
     lamp3.setCollider('rectangle', 0, 0, 100, 300);

     //side tables
     sideTable.setCollider('rectangle', 0, 0, x, x-100);
     sideTable2.setCollider('rectangle', 0, 0, x, x-100);

    //Sakina going to the hallway
   if(Sakina.isTouching(sprite)){
     backGround.addImage(hallwayImage)
     Sakina.x = 1226;
     Sakina.y = 260;
     gameState = 'hallway';
  }


  }

  //Sakina in the living room after the maze chase
  if(gameState === 'livingRoom2'){

    //background
    backGround.addImage(livingRoomImage)

    //visibility of objects
    Sakina.visible = true;
    backGround.visible = true;
    lamp.visible = true;
    lamp1.visible = true;
    lamp2.visible = true;
    lamp3.visible = true;
    sideTable.visible = true;
    sideTable2.visible = true;
    sleep.visible = true;
    photo.visible = true;
    family.visible = true;
    ballsy.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    camera.visible = false;
    books.visible = false;
    sprite24.visible = false;
    sprite25.visible = false;
    sprite26.visible = false;

    //set colliders for sprites
     //lamp
     lamp.setCollider('rectangle', 0, 0, 100, 300);
     lamp1.setCollider('rectangle', 0, 0, 100, 300);
     lamp2.setCollider('rectangle', 0, 0, 100, 300);
     lamp3.setCollider('rectangle', 0, 0, 100, 300);

     //side tables
     sideTable.setCollider('rectangle', 0, 0, x, x-100);
     sideTable2.setCollider('rectangle', 0, 0, x, x-100);

    //Sakina going to the hallway
   if(Sakina.isTouching(sprite)){
     backGround.addImage(hallwayImage)
     Sakina.x = 1226;
     Sakina.y = 260;
     gameState = 'hallway2';
  }


  }

  //Sakina in the hallway
  if(gameState === 'hallway'){
    
    backGround.addImage(hallwayImage)

    //visibility of objects
    ballsy.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    painting.visible = false;
    bookShelf.visible = false;
    bookShelf2.visible = false;
    bookShelf3.visible = false;
    bookShelf4.visible = false;
    books2.visible = false;
    laptop.visible = false;
    paper.visible = false;
    paper2.visible = false;
    paper3.visible = false;
    paper4.visible = false;
    letter.visible = false;
    camera.visible = false;
    books.visible = false;
    prescription.visible = false;
    bookShelf5.visible = false;
    bookShelf6.visible = false;
    book.visible = false;
    book2.visible = false;
    book3.visible = false;
    book4.visible = false;
    book5.visible = false;
    book6.visible = false;
    drawer.visible = false;
    sprite24.visible = false;
    sprite25.visible = false;
    sprite26.visible = false;

    //boundaries
    Sakina.collide(sprite7);
    Sakina.collide(sprite8);
    Sakina.collide(sprite9);
    Sakina.collide(sprite10);
    Sakina.collide(sprite11);
    Sakina.collide(sprite12);

    sprite4.setCollider('rectangle', 0, 0, 200, 200);

    //Sakina is going to the living room
    if(Sakina.isTouching(sprite6)){
      backGround.addImage(livingRoomImage);
      Sakina.x = 105;
      Sakina.y = 200;
      gameState = 'livingRoom';
    }

    //Sakina going to the playroom
   if(Sakina.isTouching(sprite1)){
    backGround.addImage(playRoomImage)
    Sakina.x = 1206;
    Sakina.y = 479;
    gameState = 'playroom'
   }

   //Sakina going to the guest bedroom
   if(Sakina.isTouching(sprite3)){
    backGround.addImage(guestBedroomImage)
    Sakina.x = 90;
    Sakina.y = 490;
   gameState = 'guest'
   }

   //Sakina going to the office
   if(Sakina.isTouching(sprite2)){
    backGround.addImage(officeImage)
    Sakina.x = 1130;
    Sakina.y = 500;
    gameState = 'office'
   }

   //Sakina going upstairs
   if(Sakina.isTouching(sprite19) && keyDown('1')){
    backGround.addImage(upstairsImage)
    Sakina.x = 1240;
    Sakina.y = 270;
    gameState = 'upstairs';
   }

  }

 //the hallway gameState but the playroom is blocked
 if(gameState === 'hallway2'){
  backGround.addImage(hallwayImage)

  //visibility of objects
  ballsy.visible = false;
  lamp.visible = false;
  lamp1.visible = false;
  lamp2.visible = false;
  lamp3.visible = false;
  sideTable.visible = false;
  sideTable2.visible = false;
  sleep.visible = false;
  photo.visible = false;
  family.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  blocks.visible = false;
  blocks2.visible = false;
  blocks3.visible = false;
  chest.visible = false;
  curtain.visible = false;
  painting.visible = false;
  bookShelf.visible = false;
  bookShelf2.visible = false;
  bookShelf3.visible = false;
  bookShelf4.visible = false;
  laptop.visible = false;
  paper.visible = false;
  paper2.visible = false;
  paper3.visible = false;
  paper4.visible = false;
  letter.visible = false;
  books.visible = false;
  books2.visible = false;
  camera.visible = false;
  bookShelf5.visible = false;
  bookShelf6.visible = false;
  drawer.visible = false;
  book.visible = false;
  book2.visible = false;
  book3.visible = false;
  book4.visible = false;
  book5.visible = false;
  book6.visible = false;

  //boundaries
 Sakina.collide(sprite7);
 Sakina.collide(sprite8);
 Sakina.collide(sprite9);
 Sakina.collide(sprite10);
 Sakina.collide(sprite11);
 Sakina.collide(sprite12);

  //Sakina is going to the living room
  if(Sakina.isTouching(sprite6)){
    backGround.addImage(livingRoomImage);
    Sakina.x = 105;
     Sakina.y = 200;
    gameState = 'livingRoom2';
  }

//Sakina going to the guest bedroom
if(Sakina.isTouching(sprite3)){
  backGround.addImage(guestBedroomImage)
  Sakina.x = 90;
  Sakina.y = 490;
  gameState = 'guest2'
}

//Sakina going to the office
if(Sakina.isTouching(sprite2)){
  backGround.addImage(officeImage)
  Sakina.x = 1130;
  Sakina.y = 500;
  gameState = 'office2'
}

//Sakina going upstairs
if(Sakina.isTouching(sprite19) && keyDown('1')){
  backGround.addImage(upstairsImage)
  Sakina.x = 1240;
  Sakina.y = 270;
  gameState = 'upstairs';
}
 }

 //Sakina in the playroom
 if(gameState === 'playroom'){

  backGround.addImage(playRoomImage)

  //visibility of objects
  lamp.visible = false;
  lamp1.visible = false;
  lamp2.visible = false;
  lamp3.visible = false;
  sideTable.visible = false;
  sideTable2.visible = false;
  sleep.visible = false;
  photo.visible = false;
  family.visible = false;
  ballsy.visible = true;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  blocks.visible = true;
  blocks2.visible = true;
  blocks3.visible = true;
  chest.visible = true;
  curtain.visible = true;
  camera.visible = true;
  books.visible = true;
  painting.visible = false;
  bookShelf.visible = false;
  bookShelf2.visible = false;
  bookShelf3.visible = false;
  bookShelf4.visible = false;
  letter.visible = false;
  laptop.visible = false;
  paper.visible = false;
  paper2.visible = false;
  paper3.visible = false;
  paper4.visible = false;
  books2.visible = false;
  sprite24.visible = true;

  // playroom to hallway
  if(Sakina.isTouching(sprite13)){
     backGround.addImage(hallwayImage)
     Sakina.x = 1020;
     Sakina.y = 290;
     gameState = 'hallway'
   }

 //setting colliders
 curtain.setCollider('rectangle', -160, 0, 150, 430);
 blocks.setCollider('rectangle', 0, 0, 200, 200);
 blocks2.setCollider('rectangle', 0, 0, 200, 200);
 blocks3.setCollider('rectangle', 0, 0, 200, 200);
 books.setCollider('circle', 0, 0, 100);
 }

 //maze
 if(gameState === 'maze'){

  //visibility of objects
  lamp.visible = false;
  lamp1.visible = false;
  lamp2.visible = false;
  lamp3.visible = false;
  sideTable.visible = false;
  sideTable2.visible = false;
  sleep.visible = false;
  photo.visible = false;
  family.visible = false;
  chest.visible = false;
  blocks.visible = false;
  blocks2.visible = false;
  blocks3.visible = false;
  camera.visible = false;
  books.visible = false;
  curtain.visible = false;
  ballsy.visible = true;
  wall1.visible = true;
  wall2.visible = true;
  wall3.visible = true;
  wall4.visible = true;
  wall5.visible = true;
  wall6.visible = true;
  wall7.visible = true;
  wall8.visible = true;
  wall9.visible = true;
  wall10.visible = true;
  wall11.visible = true;
  wall12.visible = true;
  wall13.visible = true;
  wall14.visible = true;
  wall15.visible = true;
  wall16.visible = true;
  wall17.visible = true;
  wall18.visible = true;
  wall19.visible = true;
  wall20.visible = true;
  wall21.visible = true;
  wall22.visible = true;
  wall23.visible = true;
  wall24.visible = true;
  wall25.visible = true;
  wall26.visible = true;
  painting.visible = false;
  bookShelf.visible = false;
  bookShelf2.visible = false;
  bookShelf3.visible = false;
  bookShelf4.visible = false;
  laptop.visible = false;
  paper.visible = false;
  paper2.visible = false;
  paper3.visible = false;
  paper4.visible = false;
  letter.visible = false;
  books2.visible = false;

  //images changing
  backGround.addImage(chase)
  ballsy.addImage(ballsyScary)
  ballsy.scale = 0.25;
  ballsy.x  = Sakina.x - 100;
  ballsy.y = Sakina.y - 30;

  //Sakina transforming
  Sakina.addImage(ballsyNormal)
  Sakina.scale = 0.1;

  //collision with walls
  Sakina.collide(wall1);
  Sakina.collide(wall2);
  Sakina.collide(wall3);
  Sakina.collide(wall4);
  Sakina.collide(wall5);
  Sakina.collide(wall6);
  Sakina.collide(wall7);
  Sakina.collide(wall8);
  Sakina.collide(wall9);
  Sakina.collide(wall10);
  Sakina.collide(wall11);
  Sakina.collide(wall12);
  Sakina.collide(wall13);
  Sakina.collide(wall14);
  Sakina.collide(wall15);
  Sakina.collide(wall16);
  Sakina.collide(wall17);
  Sakina.collide(wall18);
  Sakina.collide(wall19);
  Sakina.collide(wall20);
  Sakina.collide(wall21);
  Sakina.collide(wall22);
  Sakina.collide(wall23);
  Sakina.collide(wall24);
  Sakina.collide(wall25);
  Sakina.collide(wall26);

  //chase to run
  if(Sakina.isTouching(sprite15)){
    backGround.addImage(hallwayImage)
    gameState = 'run'
  }

 }

 //run - when Sakina gets out of the 'maze chase'
 if(gameState === 'run'){
  //visibility of objects
  ballsy.visible = false;
  lamp.visible = false;
  lamp1.visible = false;
  lamp2.visible = false;
  lamp3.visible = false;
  sideTable.visible = false;
  sideTable2.visible = false;
  sleep.visible = false;
  photo.visible = false;
  family.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  blocks.visible = false;
  blocks2.visible = false;
  blocks3.visible = false;
  chest.visible = false;
  curtain.visible = false;
  sprite24.visible = false;

  

  //hallway boundaries
  Sakina.collide(sprite7);
  Sakina.collide(sprite8);
  Sakina.collide(sprite9);
  Sakina.collide(sprite10);
  Sakina.collide(sprite11);
  Sakina.collide(sprite12);

  //continue
  if(keyDown('space')){
    gameState = 'hallway2'
    Sakina.x = 1020;
    Sakina.y = 240;
  }
  
  //Sakina going back to normal
  Sakina.addImage(sakinaImage)
  Sakina.scale = 0.055;


  Sakina.x = 1020;
  Sakina.y = 240;
}

 //Sakina in the office
  if(gameState === 'office'){
    backGround.addImage(officeImage)

    //visibility of objects
    ballsy.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    books.visible = false;
    books2.visible = true;
    camera.visible = false;
    painting.visible = true;
    bookShelf.visible = true;
    bookShelf2.visible = true;
    bookShelf3.visible = true;
    bookShelf4.visible = true;
    paper.visible = true;
    paper2.visible = true;
    paper3.visible = true;
    paper4.visible = true;
    laptop.visible = true;
    letter.visible = true;
    prescription.visible = true;
    sprite25.visible = true;

    //setting colliders
    painting.setCollider('rectangle', 0, 0, 690, 1300);
    letter.setCollider('rectangle', 0, 150, 500, 600);
    prescription.setCollider('rectangle', 0, 0, 500, 250);

    //reading the letter between doctor and father
    if(Sakina.isTouching(letter) && keyDown('1')){
      gameState = 'read'
    }
    //not reading the letter :(
    if(Sakina.isTouching(letter) && keyDown('2')){
        gameState = 'office';

      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Best not to mess with the past...', 10, 440);

    }
    //exiting
    if(Sakina.isTouching(sprite17)){
      backGround.addImage(hallwayImage)
      Sakina.x = 243;
      Sakina.y = 251;
      gameState = 'hallway';
    }
  }

  //Sakina in the office after the maze chase
  if(gameState === 'office2'){
    backGround.addImage(officeImage)

    //visibility of objects
    ballsy.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    books.visible = false;
    books2.visible = true;
    camera.visible = false;
    painting.visible = true;
    bookShelf.visible = true;
    bookShelf2.visible = true;
    bookShelf3.visible = true;
    bookShelf4.visible = true;
    paper.visible = true;
    paper2.visible = true;
    paper3.visible = true;
    paper4.visible = true;
    laptop.visible = true;
    letter.visible = true;
    prescription.visible = true;

    //setting colliders
    painting.setCollider('rectangle', 0, 0, 690, 1300);
    letter.setCollider('rectangle', 0, 150, 500, 600);
    prescription.setCollider('rectangle', 0, 0, 500, 250);

    //reading the letter between doctor and father
    if(Sakina.isTouching(letter) && keyDown('1')){
      gameState = 'read'
    }
    //not reading the letter :(
    if(Sakina.isTouching(letter) && keyDown('2')){
        gameState = 'office';
    }
    //exiting
    if(Sakina.isTouching(sprite17)){
      backGround.addImage(hallwayImage)
      Sakina.x = 243;
      Sakina.y = 251;
      gameState = 'hallway2';
    }
  }

  //Sakina reading the letter
  if(gameState === 'read'){
    backGround.addImage(readImage)
    backGround.scale = 0.7;

    //visibility of objects
    ballsy.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    books.visible = false;
    camera.visible = false;
    painting.visible = false;
    bookShelf.visible = false;
    bookShelf2.visible = false;
    bookShelf3.visible = false;
    bookShelf4.visible = false;
    books2.visible = false;
    letter.visible = false;
    laptop.visible = false;
    paper.visible = false;
    paper2.visible = false;
    paper3.visible = false;
    paper4.visible = false;
    prescription.visible = false;
    sprite25.visible = false;

    if(keyWentUp('space')){
      backGround.addImage(readImage)
      textSize(15)
      textFont('Courier')
      gameState = 'READ';
    }
    
  }

  //Sakina continuing to read the letter
  if(gameState === 'READ'){

    //visibility of objects
    ballsy.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    painting.visible = false;
    bookShelf.visible = false;
    bookShelf2.visible = false;
    bookShelf3.visible = false;
    bookShelf4.visible = false;
    books2.visible = false;
    laptop.visible = false;
    paper.visible = false;
    paper2.visible = false;
    paper3.visible = false;
    paper4.visible = false;
    letter.visible = false;
    camera.visible = false;
    books.visible = false;
    prescription.visible = false;
    bookShelf5.visible = false;
    bookShelf6.visible = false;
    book.visible = false;
    book2.visible = false;
    book3.visible = false;
    book4.visible = false;
    book5.visible = false;
    book6.visible = false;
    drawer.visible = false;

    if(keyWentDown('space')){
      gameState = 'office';
    }
  }

  //Sakina in the guest bedroom
 if(gameState === 'guest'){
  backGround.addImage(guestBedroomImage);

  //visibility of objects
  ballsy.visible = false;
  lamp.visible = false;
  lamp1.visible = false;
  lamp2.visible = false;
  lamp3.visible = false;
  sideTable.visible = false;
  sideTable2.visible = false; 
  sleep.visible = true;
  photo.visible = true;
  family.visible = true;
  ballsy.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  blocks.visible = false;
  blocks2.visible = false;
  blocks3.visible = false;
  chest.visible = false;
  curtain.visible = false;
  camera.visible = false;
  books.visible = false;
  painting.visible = false;
  bookShelf.visible = false;
  bookShelf2.visible = false;
  bookShelf3.visible = false;
  bookShelf4.visible = false;
  bookShelf5.visible = true;
  bookShelf6.visible = true;
  laptop.visible = false;
  paper.visible = false;
  paper2.visible = false;
  paper3.visible = false;
  paper4.visible = false;
  letter.visible = false;
  books2.visible = false;
  prescription.visible = false;
  sleep.visible = false;
  family.visible = false;
  shine.visible = false;
  drawer.visible = true;
  book.visible = true;
  book2.visible = true;
  book3.visible = true;
  book4.visible = true;
  book5.visible = true;
  book6.visible = true;
  photo.visible = false;
  drawer2.visible = false;
  sprite26.visible = true;

//setting colliders
drawer.setCollider('rectangle', 320, 100, 300, 990);

  if(Sakina.isTouching(sprite18)){
    backGround.addImage(hallwayImage)
    Sakina.x = 360;
    Sakina.y = 360;
    gameState = 'hallway'
  }
  }

 //Sakina in the guest bedroom after the chase
 if(gameState === 'guest2'){
  backGround.addImage(guestBedroomImage)

  //visibility of objects
  ballsy.visible = false;
  lamp.visible = false;
  lamp1.visible = false;
  lamp2.visible = false;
  lamp3.visible = false;
  sideTable.visible = false;
  sideTable2.visible = false; 
  sleep.visible = true;
  photo.visible = true;
  family.visible = true;
  ballsy.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  blocks.visible = false;
  blocks2.visible = false;
  blocks3.visible = false;
  chest.visible = false;
  curtain.visible = false;
  camera.visible = false;
  books.visible = false;
  painting.visible = false;
  bookShelf.visible = false;
  bookShelf2.visible = false;
  bookShelf3.visible = false;
  bookShelf4.visible = false;
  bookShelf5.visible = true;
  bookShelf6.visible = true;
  laptop.visible = false;
  paper.visible = false;
  paper2.visible = false;
  paper3.visible = false;
  paper4.visible = false;
  letter.visible = false;
  books2.visible = false;
  prescription.visible = false;
  sleep.visible = false;
  family.visible = false;
  shine.visible = false;
  drawer.visible = true;
  book.visible = true;
  book2.visible = true;
  book3.visible = true;
  book4.visible = true;
  book5.visible = true;
  book6.visible = true;
  photo.visible = false;
  sprite26.visible = true;

  //setting colliders
  drawer.setCollider('rectangle', 320, 100, 300, 990);

  //Sakina going to the hallway
  if(Sakina.isTouching(sprite18)){
    backGround.addImage(hallwayImage)
    Sakina.x = 360;
    Sakina.y = 360;
    gameState = 'hallway2'
  }
  }

 //Sakina in the obstacle course
 if(gameState === 'upstairs'){
   backGround.addImage(upstairsImage)

   //visibility of objects
   s.visible = true;
   s2.visible = true;
   s3.visible = true;
   c.visible = true;
   c2.visible = true;
   c3.visible = true;
   Sakina.visible = true;
   sprite26.visible = false;

   //collisions with the boundaries
   s.velocityY = -3;
   s2.velocityY = -3;
   s3.velocityY = -3;
   c.velocityY = 3;
   c2.velocityY = 3;
   c3.velocityY = 3;

   //collisions with the boundaries
 if(s.isTouching(sprite20)){
   s.velocityY = 3;
 }
 if(s2.isTouching(sprite20)){
   s2.velocityY = 3;
 }
 if(s3.isTouching(sprite20)){
   s3.velocityY = 3;
 }
 if(s.isTouching(sprite23)){
   s.velocityY = -3;
 }
 if(s2.isTouching(sprite23)){
   s2.velocity = -3;
 }
 if(s3.isTouching(sprite23)){
   s3.velocityY = -3;
 }
 if(c.isTouching(sprite20)){
   c.velocityY = -3;
 }
   
 //Sakina dies
 if(Sakina.isTouching(s) || Sakina.isTouching(s2) || Sakina.isTouching(s3) || Sakina.isTouching(c) || Sakina.isTouching(c2) || Sakina.isTouching(c3)){
   gameState = 'death';
 }

 //Sakina escapes!
   if(Sakina.isTouching(sprite19)){
     backGround.addImage(bedroomsImage)
     Sakina.x = 1240;
     Sakina.y = 270;
     gameState = 'bedrooms';
   }
  }

  //death in obstacle course
 if(gameState === 'death'){
  //visibility
  s.visible = false;
  s2.visible = false;
  s3.visible = false;
  c.visible = false;
  c2.visible = false;
  c3.visible = false;

  backGround.addImage(deadImage)

  if(mouseIsPressed){
   gameState = 'upstairs';
   Sakina.x = 1230;
   Sakina.y = 285;
  }
  }

 // Hallway leading to the two bedrooms
 if(gameState === 'bedrooms'){
   backGround.addImage(bedroomsImage)

   //visibility of objects
   c.visible = false;
   c2.visible = false;
   c3.visible = false;
   s.visible = false;
   s2.visible = false;
   s3.visible = false;

   if(Sakina.isTouching(sprite21)){
     backGround.addImage(masterBedroomImage);
     Sakina.x = 90;
     Sakina.y = 490;
     gameState = 'master';
   }
  }

 //Sakina's parents' bedroom
 if(gameState === 'master'){
   backGround.addImage(masterBedroomImage)

   //visibility of objects
    ballsy.visible = false;
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    blocks.visible = false;
    blocks2.visible = false;
    blocks3.visible = false;
    chest.visible = false;
    curtain.visible = false;
    painting.visible = false;
    bookShelf.visible = false;
    bookShelf2.visible = false;
    bookShelf3.visible = false;
    bookShelf4.visible = false;
    books2.visible = false;
    laptop.visible = false;
    paper.visible = false;
    paper2.visible = false;
    paper3.visible = false;
    paper4.visible = false;
    letter.visible = false;
    camera.visible = false;
    books.visible = false;
    prescription.visible = false;
    bookShelf5.visible = false;
    bookShelf6.visible = false;
    book.visible = false;
    book2.visible = false;
    book3.visible = false;
    book4.visible = false;
    book5.visible = false;
    book6.visible = false;
    drawer.visible = false;
    drawer2.visible = true;
    key.visible = true;
    table.visible = true;
    table2.visible = true;
    stick.visible = true;
    picture.visible = true;
    sprite26.visible = true;

  }

  drawSprites();

  textSize(20);
  fill('white')
  text("Coordinates: " + mouseX + ', ' + mouseY, 500, 540);


  //all the text in the game will be below drawSprites so it is over all the sprites. Hence I am writing the text for all gamestates here.
  textStyle('bold')

  if(gameState === 'start1'){
    textSize(120)
    fill(rgb(59, 184, 241));
    textFont("Arial")
    text("Controls", 365, 305);

  }

  if(gameState === 'livingRoom'){

    //front door
    if(Sakina.isTouching(sprite16)){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250)

      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("I should probably not leave... I should finish what I started.", 10, 440);
    } 

    //interacting with the lamp
     if(Sakina.isTouching(lamp) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
       text("When we were poor, mother always dreamed of owning objects with intricate and", 10, 440);
       text("hand-made designs... I remember when we first moved into the house, mother put so", 10, 470);
       text('much love and effort... these were her favourite lamps', 10, 500);
    }
     if(Sakina.isTouching(lamp1) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("Oh how they are now completely in ruins...", 10, 440);
      text("After then incident, everyone suspected illegal play behind the scenes so no one", 10, 470);
      text("bothered to fix or remove anything", 10, 500);
    }
     if(Sakina.isTouching(lamp2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
       text("When we were poor, mother always dreamed of owning objects with intricate and", 10, 440);
       text("hand-made designs... I remember when we first moved into the house, mother put", 10, 470);
       text("so much love and effort... these were her favourite lamps", 10, 500);
    }
     if(Sakina.isTouching(lamp3) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("Oh how they are now completely in ruins...", 10, 440);
      text("After then incident, everyone suspected illegal play behind the scenes so no one", 10, 470);
      text("bothered to fix or remove anything", 10, 500);
    }

    //side tables
    if(Sakina.isTouching(sideTable) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("A lot of books were kept here for the guests to see. They had gotten so ", 10, 440);
      text("caught up in our image to others... Me and my sister had to read all the books and", 10, 470);
      text("tell the guests what we read. I don't really think anyone cared about that.", 10, 500);
    }
    if(Sakina.isTouching(sideTable2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("A lot of books were kept here for the guests to see. They had gotten so", 10, 440);
      text("caught up in our image to others... Me and my sister had to read all the books and", 10, 470);
      text("tell the guests what we read. I don't really think anyone cared about that.", 10, 500);
    }

    //family photo
    if(Sakina.isTouching(photo) && keyDown('space')){
      
      family.addImage(photoImage)
      family.scale = 0.5;
      family.setCollider('rectangle', 0, 0, 1000, 950);
      family.visible = true;

      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("...us. I miss you sister to this day... I will take this with me...", 10, 440);
    } 
    if(Sakina.isTouching(family)){
      
      family.destroy();
      photo.destroy();
      
    }

    //kitchen
    if(Sakina.isTouching(sprite5)){

      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("The kitchen... where it all happened... do I hear them screaming inside??... no", 10, 440);
      text("its been years. Get yourself together Sakina!", 10, 470);
    }

    //sleeping bag
    if(Sakina.isTouching(sleep) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("I came here last night. This is my sleeping bag. I rested here for the night. It ", 10, 440);
      text("wasn't as comfortable as my apartment but it made do", 10, 470);
    }
  }

  if(gameState === "hallway"){
    
    //locked room
    if(Sakina.isTouching(sprite4)){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250)
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("Hmm... locked. Now that I think about it, this room never really was used for", 10, 440);
      text("anything...", 10, 470);
   }

   //going upstairs
   if(Sakina.isTouching(sprite19)){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(173, 83, 181));
    stroke("white");
    strokeWeight(3.5)
    text('Do wish to proceed? You cannot go back after this. Press 1 to proceed and', 10, 440);
    text("press 2 to go back.", 10, 470);
   }
   //player not ready to go upstairs yet
   if(Sakina.isTouching(sprite19) && keyDown('2')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(173, 83, 181));
    stroke("white");
    strokeWeight(3.5)
    text('Im not ready.. should probably explore a bit more...', 10, 440);
   }
   //player is going upstairs
   if(Sakina.isTouching(sprite19) && keyDown('1')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(173, 83, 181));
    stroke("white");
    strokeWeight(3.5)
    text('Here we go Sakina...', 10, 440);
   }

  }

  if(gameState === "hallway2"){
    //Sakina doesn't wanna go in the playroom anymore...
    if(Sakina.isTouching(sprite1)){
       fill(rgb(245, 255, 255))
       rect(0, 400, 1250, 250);
       textSize(25);
       textFont("Courier New");
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("I'd rather not go there now... *shudders*", 10, 440);
    }

    //going upstairs
   if(Sakina.isTouching(sprite19)){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(173, 83, 181));
    stroke("white");
    strokeWeight(3.5)
    text('Do wish to proceed? You cannot go back after this. Press 1 to proceed and', 10, 440);
    text('press 2 to go back.', 10, 470);
   }
   //player not ready to go upstairs yet
   if(Sakina.isTouching(sprite19) && keyDown('2')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(173, 83, 181));
    stroke("white");
    strokeWeight(3.5)
    text('Im not ready.. should probably explore a bit more...', 10, 440);
   }

     //locked room
     if(Sakina.isTouching(sprite4)){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("Hmm... locked. Now that I think about it, this room never really was used for", 10, 440);
      text("anything...", 10, 470);
   }
  }

  if(gameState === 'playroom'){

    //ballsy before the maze
    if(Sakina.isTouching(ballsy) && keyDown('space')){
       fill(rgb(245, 255, 255))
       rect(0, 400, 1250, 250);
       textSize(20);
       textFont("Courier New");
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("Our ball from when we were poor... Mother told us to keep ballsy so we would remember", 10, 440);
       text("our origin, where we came from. I did not like it. It would come to life and chase me.", 10, 470);
       text("I would get so scared. It said horrible things to me. When I was alone in the playroom, it would turn", 10, 500);
       text("me into a ball too and try to eat me. But my Crystal would always assure me...*", 10, 530);
    }

    //ballsy to scary ballsy
    if(Sakina.isTouching(ballsy) && keyDown('1')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("...I don't really think it was real tho-- ", 10, 440);
    } else if(Sakina.isTouching(ballsy) && keyWentUp('1')){
        gameState = "maze"
        Sakina.x = 285;
        Sakina.y = 440;
        ballsy.x = Sakina.x;
        ballsy.y = Sakina.y;
      }

      //curtain
    if(Sakina.isTouching(curtain) && keyDown('space')){
       fill(rgb(245, 255, 255))
       rect(0, 400, 1250, 250);
       textSize(20);
       textFont("Courier New");
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("To a normal kid, this would be such a pretty curtain... but to me it was a monster...", 10, 440);
       text("Shadows of the designs on the curtain would cast on the floor because of the sunlight.", 10, 470);
       text("They would come to life and whisper horrible things which would burn to my memory", 10, 500);
       text("It urks and upsets me that it didnt burn down with the rest of the house...", 10, 530);
      }
    //chest
    if(Sakina.isTouching(chest) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
       text("*smiles* Mother, before we got rich, was a gentle creature...", 10, 440);
       text("She loved painting and would make the most beautiful masterpieces for me and", 10, 470);
       text("Crystal, my dear sister. We would store them in this chest.", 10, 500);
      }

    //blocks
    if(Sakina.isTouching(blocks) && keyDown('space') || Sakina.isTouching(blocks2) && keyDown('space') || Sakina.isTouching(blocks3) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text("Building blocks we used to play with.. My crystal would pretend that she was the", 10, 440);
      text("president of the town we would build.", 10, 470);
      }
    
      //books
      if(Sakina.isTouching(books) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
       text('So much dust and grime on the books... tsk.. these were books that me and', 10, 440);
       text(' my Crystal actually enjoyed.. Oh how I miss my Crystal.', 10, 470);
      }

      //camera
      if(Sakina.isTouching(camera) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
        text('This camera documented a lot of my experiences... My parent asked me about it', 10, 440);
        text('several times for a month. After that they just abruptly stopped. I wonder why...', 10, 470);
        text(' It was always on when we were in the room.', 10, 500);
      }

  }

  if(gameState === 'maze'){
   fill('red');
   textSize(100);
   textFont("Courier New");
   stroke("pink");
   strokeWeight(3.5)
   text('RUN!', 530, 160);
   textSize(20);
   stroke('white')
   strokeWeight(3)
   fill('pink');
   text('I remember how some faces would mock me, some laugh and some pity that I', 250, 270);
   text("even existed...", 620, 300);
  }

  if(gameState === 'run'){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
       text("*GASP* ho- HOW?! DID I LIVE IN A HAUNTED HOUSE?! ...I really must be so bad that", 10, 440);
       text("even those from the spirit world hate me...", 10, 470);
  }

  if(gameState === 'office'){
    //painting
    if(Sakina.isTouching(painting) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
       text("Mother gifted this to father on the anniversary in the year their business boomed. Father never let it go anywhere.", 10, 430);
       text(" Even when they would have the worst fights, he would come in the office. Inside, I would", 10, 460);
       text("know he would look at this painting... I was so caught up in protecting Crystal, I never thought how stressed", 10, 490);
       text("they must have been... trying to protect us and the business from ill-wishers. Using material things to mask their", 10, 520);
       text("inner struggles from everyone. I wish I paid more attention to them.", 10, 550);
    }

   //bookshelves
   if(Sakina.isTouching(bookShelf) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
    text("Office books... business books... what...?", 10, 440);
    text("Books about mental health? But he always said mental issues are just excuses", 10, 470);
    text("to not work or phases.", 10, 500);
   }
   if(Sakina.isTouching(bookShelf2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
   text("Office books... business books... what...?", 10, 440);
   text("Books about mental health? But he always said mental issues are just excuses", 10, 470);
   text("to not work or phases.", 10, 500);
   }
   if(Sakina.isTouching(bookShelf3) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(15);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
    text("Realization hits as I stare at the now tattered and half burned books. He really did mask everything from us and the world.", 10, 440);
    text("The notes scribbled so vigorously.. are these water stains in the book? Father never really drank any beverages other", 10, 470);
    text(" than coffee in the office... Tears roll down from my cheeks and next to the water stains. They resemble your tear stains", 10, 500);
    text(" a lot as the tear sets in the withered page of the book.", 10, 530);  
   } 
   if(Sakina.isTouching(bookShelf4) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(15);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text("Realization hits as I stare at the now tattered and half burned books. He really did mask everything from us and the world.", 10, 440);
    text("The notes scribbled so vigorously.. are these water stains in the book? Father never really drank any beverages other", 10, 470);
    text(" than coffee in the office... Tears roll down from my cheeks and next to the water stains. They resemble your tear stains", 10, 500);
    text(" a lot as the tear sets in the withered page of the book.", 10, 530);  
   }

    //laptop
    if(Sakina.isTouching(laptop) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(20);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text("Father's laptop. Everything about the business was documented in it. Although I doubt the laptop", 10, 440);
    text("will work anymore.", 10, 480);
    }

    //books
    if(Sakina.isTouching(books2) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text('Dusty old books...', 10, 440);
    }

    //piles of paperwork
    if(Sakina.isTouching(paper) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text('piles of paper work..', 10, 440);
    }
    if(Sakina.isTouching(paper2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text('piles of paper work..', 10, 440);
    }
    if(Sakina.isTouching(paper3) && keyDown('space')){
        fill(rgb(245, 255, 255))
        rect(0, 400, 1250, 250);
        textSize(25);
        textFont("Courier New");
        fill(rgb(215, 153, 219));
        stroke("white");
        strokeWeight(3.5)
        text('piles of paper work..', 10, 440);
    }
    if(Sakina.isTouching(paper4) && keyDown('space')){
          fill(rgb(245, 255, 255))
          rect(0, 400, 1250, 250);
          textSize(25);
          textFont("Courier New");
          fill(rgb(215, 153, 219));
          stroke("white");
          strokeWeight(3.5)
          text('piles of paper work..', 10, 440);
    }

    //letter
    if(Sakina.isTouching(letter) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text('huh? Letter from my doctor to my father... in mint condition. Almost like it wanted', 10, 440);
      text('me to read it.', 10, 470);
      fill('black')
      strokeWeight(1)
      textSize(15)
      textFont('Arial')
      text('Press 1 to read the letter. Press 2 to go back, and anyways some things are better left unexplored...', 10, 520);
    }

    //player chose not to read
    if(Sakina.isTouching(letter) && keyDown('2')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text("Probably shouldn't read it. I think its better to leave things as they are...", 10, 440);
    }

    //prescription
    if(Sakina.isTouching(prescription) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text("My prescriptions... dilusional disorder? I mean those experiences were quite", 10, 440);
      text("unrealisitic... but they were real and happened... didn't they...?", 10, 470);
    }
  }

  if(gameState === 'office2'){
    //painting
    if(Sakina.isTouching(painting) && keyDown('space')){
       fill(rgb(245, 255, 255))
       rect(0, 400, 1250, 250);
       textSize(18);
       textFont("Courier New");
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("Mother gifted this to father on the anniversary in the year their business boomed. Father never let it go anywhere.", 10, 430);
       text(" Even when they would have the worst fights, he would come in the office. Inside, I would", 10, 460);
       text("know he would look at this painting... I was so caught up in protecting Crystal, I never thought how stressed", 10, 490);
       text("they must have been... trying to protect us and the business from ill-wishers. Using material things to mask their", 10, 520);
       text("inner struggles from everyone. I wish I paid more attention to them.", 10, 550);
    }

   //bookshelves
   if(Sakina.isTouching(bookShelf) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(173, 83, 181));
    stroke("white");
    strokeWeight(3.5)
    text("Office books... business books... what...?", 10, 440);
    text("Books about mental health? But he always said mental issues are just excuses", 10, 470);
    text("to not work or phases.", 10, 500);
   }
   if(Sakina.isTouching(bookShelf2) && keyDown('space')){
   fill(rgb(245, 255, 255))
   rect(0, 400, 1250, 250);
   textSize(25);
   textFont("Courier New");
   fill(rgb(173, 83, 181));
   stroke("white");
   strokeWeight(3.5)
   text("Office books... business books... what...?", 10, 440);
   text("Books about mental health? But he always said mental issues are just excuses", 10, 470);
   text("to not work or phases.", 10, 500);
   }
   if(Sakina.isTouching(bookShelf3) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(15);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text("Realization hits as I stare at the now tattered and half burned books. He really did mask everything from us and the world.", 10, 440);
    text("The notes scribbled so vigorously.. are these water stains in the book? Father never really drank any beverages other", 10, 470);
    text(" than coffee in the office... Tears roll down from my cheeks and next to the water stains. They resemble your tear stains", 10, 500);
    text(" a lot as the tear sets in the withered page of the book.", 10, 530);  
   } 
   if(Sakina.isTouching(bookShelf4) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(15);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text("Realization hits as I stare at the now tattered and half burned books. He really did mask everything from us and the world.", 10, 440);
    text("The notes scribbled so vigorously.. are these water stains in the book? Father never really drank any beverages other", 10, 470);
    text(" than coffee in the office... Tears roll down from my cheeks and next to the water stains. They resemble your tear stains", 10, 500);
    text(" a lot as the tear sets in the withered page of the book.", 10, 530);  
   }

    //laptop
    if(Sakina.isTouching(laptop) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(20);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text("Father's laptop. Everything about the business was documented in it. Although I doubt the laptop", 10, 440);
    text("will work anymore.", 10, 480);
    }

    //books
    if(Sakina.isTouching(books2) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text('Dusty old books...', 10, 440);
    }

    //piles of paperwork
    if(Sakina.isTouching(paper) && keyDown('space')){
    fill(rgb(245, 255, 255))
    rect(0, 400, 1250, 250);
    textSize(25);
    textFont("Courier New");
    fill(rgb(215, 153, 219));
    stroke("white");
    strokeWeight(3.5)
    text('piles of paper work..', 10, 440);
    }
    if(Sakina.isTouching(paper2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text('piles of paper work..', 10, 440);
    }
    if(Sakina.isTouching(paper3) && keyDown('space')){
        fill(rgb(245, 255, 255))
        rect(0, 400, 1250, 250);
        textSize(25);
        textFont("Courier New");
        fill(rgb(215, 153, 219));
        stroke("white");
        strokeWeight(3.5)
        text('piles of paper work..', 10, 440)
    }
    if(Sakina.isTouching(paper4) && keyDown('space')){
          fill(rgb(245, 255, 255))
          rect(0, 400, 1250, 250);
          textSize(25);
          textFont("Courier New");
          fill(rgb(215, 153, 219));
          stroke("white");
          strokeWeight(3.5)
          text('piles of paper work..', 10, 440)
    }

    //letter
    if(Sakina.isTouching(letter) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text('huh? Letter from my doctor to my father... in mint condition. Almost like it wanted', 10, 440);
      text('me to read it.', 10, 470);
      fill('black')
      strokeWeight(1)
      textSize(15)
      textFont('Arial')
      text('Press 1 to read the letter. Press 2 to go back, and anyways some things are better left unexplored...', 10, 520);
    }

    //player chose not to read
    if(Sakina.isTouching(letter) && keyDown('2')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text("Probably shouldn't read it. I think its better to leave things as they are...", 10, 440);
    }

    //prescription
    if(Sakina.isTouching(prescription) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Courier New");
      fill(rgb(215, 153, 219));
      stroke("white");
      strokeWeight(3.5)
      text("My prescriptions... dilusional disorder? I mean those experiences were quite", 10, 440);
      text("unrealisitic... but they were real and happened... didn't they...?", 10, 470);
    }
  }

  if(gameState === 'guest'){
    //books scattered on the floor
    if(Sakina.isTouching(book) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book3) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book4) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book5) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book6) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }

    //drawer
    if(Sakina.isTouching(drawer) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('This was one of the most magnificent pieces of furnitrure I have ever seen!', 10, 440);
      text('Seeing this brings so many memories.. As a kid, I would climb it, then', 10, 470);
      text('pretend to be on top of the world', 10, 500);

 
    }

    //bookshelves
    if(Sakina.isTouching(bookShelf5) && keyDown('space') || Sakina.isTouching(bookShelf6) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Dusty old book shelves... the wood is pretty sturdy.', 10, 440);
    }
  }
  
  if(gameState === 'guest2'){
    //books scattered on the floor
    if(Sakina.isTouching(book) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book2) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book3) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book4) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book5) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }
    if(Sakina.isTouching(book6) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Burned and old books... They were all for show anyways...', 10, 440);
    }

    //drawer
    if(Sakina.isTouching(drawer) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('This was one of the most magnificent pieces of furnitrure I have ever seen!', 10, 440);
      text('Seeing this brings so many memories.. As a kid, I would climb it, then', 10, 470);
      text('pretend to be on top of the world', 10, 500);

 
    }

    //bookshelves
    if(Sakina.isTouching(bookShelf5) && keyDown('space') || Sakina.isTouching(bookShelf6) && keyDown('space')){
      fill(rgb(245, 255, 255))
      rect(0, 400, 1250, 250);
      textSize(18);
      textFont("Courier New");
      fill(rgb(173, 83, 181));
      stroke("white");
      strokeWeight(3.5)
      text('Dusty old book shelves... the wood is pretty sturdy.', 10, 440);
    }
  }

  if(gameState === 'read'){
    var z = 15;

    textSize(15)
    textFont("Times New Roman")
    textStyle('bold');
    textStyle('italic');
    text('December 26th, 1989', 5, 15);
    text('[In-person conversation]', 5, 30);
    text('1:10:20 p.m.', 5, 50);
    textSize(18)
    text('Doctor: Hello Mr. Reeds. I am Brittany. I am glad you decided to call me. Before we talk any further, I would like to advise you to not jump to any conclusions and let us', 8, z + 60);
    text(' keep this conversation only as consulation.', 5, z + 60 + 20*1);
    text('Micheal R.: Thank you doc. That sounds comforting but seeing her condition, I doubt the conversation can be in the same state.', 5, z + 70 + 20*2);
    text('Doctor: Alright, so tell me what is her problem.', 5, z + 80 + 20*3);
    text('Micheal R.:  At first I and my wife, Ella thought it was all for seeking our attention since we are so caught up in our work, but after one year things started getting serious', 8, z + 90 + 20*4);
    text('One day, Ella decided to confront her about it. She went when she started screaming at the shadows. When Ella interrogated her for such an unacceptable behaviour she', 8, z + 90 + 20*5);
    text('said that the shadows screamed at her.', 8, z + 90 + 20*6);
    text('Also, during our meals together, she would scream at her food because they would come to life. She would see shadows behind me and others. After crying, she', 8, z + 90 + 20*7);
    text('would suddenly go back to normal and continue with her meal. All of us are very concerned doctor... please fix my baby girl...', 8, z + 90 + 20*8);
    text('Doctor: I understand your concern Mr. Reeds but what you are saying sounds a lot like Dilusional disorder. But I am going to need to talk to her myself.', 8, z + 100 + 20*9);
    text('You previously mentioned that you had suddenly boomed your business... do you think it might be related to-', 8, z + 100 + 20*10);
    text("Micheal R.: Please. I'm sure you're mistaken. We maintain a very pleasant environment at home. Our two beautiful daughters are very well educated and voluntarily", 8 , z + 110 + 20*11);
    text("read all the books in the house.  There is absolutely nothing wrong in that aspect of our lives.", 8, z + 110 + 20*12);
    text("Doctor: R-right. Im sorry Mr. Reeds. The public image of your family is exceptional. Nevertheless, I will need to talk to her personally.", 8, z + 120 + 20*13);
    text("Micheal R.: Thank you and its fine. I must really get to a meeting so let us end the consultance here. I will contact you when Sakina is free from her studies.", 8 , z + 120 + 20*14);
    text("Doctor: ... . But of course... sir. When would you li-", 8, z + 130 + 20*15);
    text("Micheal R.: I will contact you when she is free.", 8, z + 140 + 20*16);
    text("Doctor: But of course sir... Have a good day.", 8, z + 150 + 20*17);
    textSize(15)
    text("1:45:10 p.m.", 8, z + 170 + 20*18);
    text("Press space to continue", 1060, 535);

    if(keyDown('space')){
      gameState = 'READ';
    }
  }

  if(gameState === 'READ'){
    var z = 25;

    textSize(15)
    textFont("Times New Roman")
    textStyle('bold');
    textStyle('italic');
    text("June 30th, 1999", 8, 15);
    text("[Telephonic conversation]", 8, 30);
    text("10:00:02 a.m.", 8, 45);
    textSize(18)
    text("Father: Hello?", 8, z + 40 + z*1);
    text("Doctor: Hello Mr.Reeds. This is Brittany. Its been over 6 months but you still haven't scheduled a meeting of me with your daughter inspite of sending multiple emails.", 8, z + 50 + z*2);
    text("Micheal R.: ...", 8, z + 60 + z*3);
    text("Doctor: Mr.Reeds, I have a daughter too, her name is Cindy. I know how hard it is. But other than me, you have to take a step too... Please, for the sake", 8, z + 70 + z*4);
    text("of you daughter. What she is going through is quite serious and I would like to help.", 8, z + 70 + z*5);
    text("Micheal R.: My daughter is fine.", 8, z + 80 + z*6);
    text("Doctor: As a parent I can understand the anxiety you are experiencing but without knowledge you can express to the wrong person in the wrong way. Please let me", 8, z + 90 + z*7);
    text("help sir.", 8, z + 90 + z*8);
    text("Micheal R.: Ma'am, it was just a spur of the moment decision. Everything is _fine_. ", 8, z + 100 + z*9);
    text("Doctor: Sir, I know what you are going throught the pressure of work, and taking care of those rumours. On top of that taking care of the family. Please let me-", 8, z + 110 + z*10);
    text("Micheal R.: You know NOTHING Brittany. Now please I do not see this conversation progressing in any aspect. I have no more intention of communication", 8, z + 120 + z*11);
    text("and I suggest you do not interfere in the affairs of my life any further. Goodbye.", 8, z + 120 + z*12);
    textSize(15)
    text("End Call", 8, z + 140 + z*14);
    text("10:10:10 a.m.", 8, z + 127 + z*15);
    text("Press space to continue", 1000, 510);
      
  }

  if(gameState === 'death'){
   textSize(50)
   fill(rgb(65, 17, 8))
   text("Congratulations!", 450, 260);
   text("You died.", 550, 310);
   textSize(15)
   text("R-click to continue", 1070, 520);
  }

}
