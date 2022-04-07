let sceneNum = 0;
let clocks = []; // empty array
let ClockNum = 8;
let me1;
let san = 0;
let snorings = [];
let SnoringNum = 8;
let checkFail = 0;
let lastTime;
// tons of image >>>>>>>>>>
// scene0
let sceneZeroBgImage;
// scene1
let s1bg;
let s1_1;
let s1_2;
let s1end;
// scene2
let s2bg;
let s2end;
//scene3
let s3end1;
let s3end2;
let s3monster;
let s3snore;
let s3_1;
// Main Character
let meImage;
let weaponU;
let weaponD;
// Clock
let clockImage;
// keyboard
let keyboardBG;
let keyboardWASD;
let arrow_W;
let arrow_A;
let arrow_S;
let arrow_D;
let wH;
let aH;
let sH;
let dH;
let wMove = 0;
let aMove = 0;
let sMove = 0;
let dMove = 0;
let keyboardSPACE;
let spaceH;
// san
let sanHeart;
// sound
var battleBgm;
let swish;
let win;
let lose;
let ring;


function preload() {
  // scene0
  sceneZeroBgImage = loadImage("assets/scene0bg.gif");
  //scene1
  s1bg = loadImage("assets/s1bg.png");
  s1_1 = loadImage("assets/s1_1.png");
  s1_2 = loadImage("assets/s1_2.png");
  s1end = loadImage("assets/s1end.png");
  //scene2
  s2bg = loadImage("assets/s2bg.png");
  s2end = loadImage("assets/s2end.png");
  //scene3
  s3end1 = loadImage("assets/s3end1.png");
  s3end2 = loadImage("assets/s3end2.png");
  s3monster = loadImage("assets/s3monster.png");
  s3snore = loadImage("assets/s3snore.png");
  s3_1 = loadImage("assets/s3_1.png");
  // Main Character
  meImage = loadImage("assets/MC.gif");
  weaponU = loadImage("assets/weaponU.png");
  weaponD = loadImage("assets/weaponD.png");
  //Clock
  clockImage = loadImage("assets/clockImage.png");
  // keyboard
  keyboardBG = loadImage("assets/keyboardBG.png");
  keyboardWASD = loadImage("assets/keyboardWASD.png");
  arrow_W = loadImage("assets/arrow_W.png");
  arrow_A = loadImage("assets/arrow_A.png");
  arrow_S = loadImage("assets/arrow_S.png");
  arrow_D = loadImage("assets/arrow_D.png");
  wH = loadImage("assets/wH.png");
  aH = loadImage("assets/aH.png");
  sH = loadImage("assets/sH.png");
  dH = loadImage("assets/dH.png");
  keyboardSPACE = loadImage("assets/keyboardSPACE.png");
  spaceH = loadImage("assets/spaceH.png");
  // san
  sanHeart = loadImage("assets/sanHeart.png");
  // sound
  battleBgm = loadSound("assets/boss_battle.mp3");
  swish = loadSound("assets/swish.wav");
  win= loadSound("assets/win.mp3");
lose= loadSound("assets/lose.mp3");
 ring= loadSound("assets/ring.mp3");
}

function setup() {
  createCanvas(600, 400);
  // Clock Generation
  for (let i = 0; i < ClockNum; i++) {
    clocks[i] = new Clock(
      random(50, width - 50),
      random(50, height - 100),
      "#ffffff"
    );
    
  }
  // Main Character
  me1 = new Me();
  // Snoring
  // for (let i = 0; i < SnoringNum; i++) {
  //   snorings[i] = new Snoring(300, 400);
  // }
  battleBgm.loop();
  battleBgm.setVolume(0);
  swish.loop();
   ring.loop();
   win.loop();
  lose.loop();
  
  
}

function draw() {
  background(220);

  switch (sceneNum) {
    case 0:
      // Scene Console
      console.log("scene 0");
      battleBgm.setVolume(0.5);
      swish.setVolume(0);
      ring.setVolume(0);
       win.setVolume(0);
      lose.setVolume(0);
      // Window
      image(sceneZeroBgImage, 0, 0);
      

      // Enter Next Scene
      if (keyIsDown(13)) {
        sceneNum = 1;
        lastTime = millis();
      }
      break;

    case 1:
      // Scene Console
      console.log("scene 1");
      image(s1bg, 0, 0);
      battleBgm.setVolume(0.2);
      swish.setVolume(0);
      ring.setVolume(1-san);
      win.setVolume(0);
      lose.setVolume(0);
      let timeElapsed = millis() - lastTime;
      if (timeElapsed < 3000) {
        image(s1_2, 84, 42);
        image(s1_1, 167, 330);
      } else {
        image(s1_2, 84, -100);
        image(s1_1, 167, -100);
      }
      // Clock Generation
      for (let i = 0; i < 1; i++) {
        clocks[i].body();
        // clocks[i].move();
        clocks[i].checkCollision();
      }
      // Main Character
      me1.body();
      me1.move();
      //me1.home();
      // Sanity
      currentSan();
      // keyboard
      keyboard(0, 0);
      // Enter Next Scene
      if (san == 1) {
        image(s1end, 160, 85);
        //win.jump(0);
        win.setVolume(0.5);
        if (keyIsDown(13)) {
          sceneNum = 2;
          for (let i = 0; i < ClockNum; i++) {
            clocks[i] = new Clock(
              random(50, width - 50),
              random(50, height - 100),
              "#ffffff"
            );
          }
        }
      }
      break;

    case 2:
      // Scene Console
      console.log("scene 2");
      image(s2bg, 0, 0);
      battleBgm.setVolume(0.2);
      swish.setVolume(0);
      ring.setVolume(1-san/8+1/8);
      win.setVolume(0);
      lose.setVolume(0);
      // Clock Generation
      for (let i = 0; i < ClockNum; i++) {
        clocks[i].body();
        // clocks[i].move();
        clocks[i].checkCollision();
      }
      // Main Character
      me1.body();
      me1.move();
      //me1.home();
      // Sanity
      currentSan();
       // keyboard
      keyboard(0, 0);
      // Enter Next Scene
      if (san == 9) {
        image(s2end, 160, 85);
        win.setVolume(0.5);
        if (keyIsDown(13)) {
          sceneNum = 3;
          for (let i = 0; i < ClockNum; i++) {
            clocks[i] = new Clock(
              random(50, width - 50),
              random(50, height - 100),
              "#ffffff"
            );
          }
          for (let i = 0; i < SnoringNum; i++) {
            snorings[i] = new Snoring(300, 400);
          }
          me1.x = 40;
          me1.y = 60;
          lastTime = millis();
        }
      }
      break;

    case 3:
      // Scene Console
      console.log("scene 3");
      image(s1bg, 0, 0);
       //image(s2bg, 0, 0);
      battleBgm.setVolume(0.2);
      swish.setVolume(0);
      ring.setVolume(1-(san-9)/8);
      win.setVolume(0);
      lose.setVolume(0);
      let timeElapsed2 = millis() - lastTime;
      if (timeElapsed2 < 3000) {
        image(s3_1, 197, 64);
      } else {
        image(s3_1, 197, -100);
      }
      // Clock Generation
      for (let i = 0; i < ClockNum; i++) {
        clocks[i].body();
        // clocks[i].move();
        clocks[i].checkCollision();
      }
      // Main Character
      me1.body();
      me1.move();
      //me1.home();
      // Sleep Monster
      image(s3monster, 267, 330);
      //
      for (let i = 0; i < SnoringNum; i++) {
        snorings[i].body();
        snorings[i].move();
        snorings[i].checkCollision();
        //clocks[i].checkCollision();
      }
      // Sanity
      currentSan();
       // keyboard
      keyboard(0, 0);
      // Enter Next Scene // play this level again
      //
      if (checkFail == 1) {
        image(s3end2, 160, 97);
        lose.setVolume(0.5);
        if (keyIsDown(13)) {
          sceneNum = 4;
          me1.x = 40;
          me1.y = 60;
          san = 9;
          checkFail = 0;
          for (let i = 0; i < ClockNum; i++) {
            clocks[i] = new Clock(
              random(50, width - 50),
              random(50, height - 100),
              "#ffffff"
            );
          }
          for (let i = 0; i < SnoringNum; i++) {
            snorings[i] = new Snoring(300, 400);
          }
        }
      }
      // Enter Next Scene // play again
      if (san == 17) {
        image(s3end1, 160, 97);
        win.setVolume(0.5);
        if (keyIsDown(13)) {
          sceneNum = 0;
          san = 0;
          for (let i = 0; i < ClockNum; i++) {
            clocks[i] = new Clock(
              random(50, width - 50),
              random(50, height - 100),
              "#ffffff"
            );
          }
        }
      }
      break;

    case 4:
           // Scene Console
      console.log("scene 3+1");
       image(s2bg, 0, 0);
      battleBgm.setVolume(0.2);
      swish.setVolume(0);
      ring.setVolume(1-(san-9)/8);
      win.setVolume(0);
      lose.setVolume(0);
     // image(s1bg, 0, 0);
      // Clock Generation
      for (let i = 0; i < ClockNum; i++) {
        clocks[i].body();
        // clocks[i].move();
        clocks[i].checkCollision();
      }
      // Main Character
      me1.body();
      me1.move();
      //me1.home();
      // Sleep Monster
      image(s3monster, 267, 330);
      //
      for (let i = 0; i < SnoringNum; i++) {
        snorings[i].body();
        snorings[i].move();
        snorings[i].checkCollision();
        //clocks[i].checkCollision();
      }
      // Sanity
      currentSan();
       // keyboard
      keyboard(0, 0);
      // Enter Next Scene // play this level again
      //
      if (checkFail == 1) {
        image(s3end2, 160, 97);
        lose.setVolume(0.5);
        if (keyIsDown(13)) {
          sceneNum = 3;
          me1.x = 40;
          me1.y = 60;
          san = 9;
          checkFail = 0;
          for (let i = 0; i < ClockNum; i++) {
            clocks[i] = new Clock(
              random(50, width - 50),
              random(50, height - 100),
              "#ffffff"
            );
          }
          for (let i = 0; i < SnoringNum; i++) {
            snorings[i] = new Snoring(300, 400);
          }
        }
      }
      // Enter Next Scene // play again
      if (san == 17) {
        image(s3end1, 160, 97);
        win.setVolume(0.5);
        if (keyIsDown(13)) {
          sceneNum = 0;
          san = 0;
          for (let i = 0; i < ClockNum; i++) {
            clocks[i] = new Clock(
              random(50, width - 50),
              random(50, height - 100),
              "#ffffff"
            );
          }
        }
      }
      break;
  }

  // // buttons
  // button(80, 290, 40, 40, "W");
  // button(30, 340, 40, 40, "A");
  // button(80, 340, 40, 40, "S");
  // button(130, 340, 40, 40, "D");
  // button(450, 340, 120, 40, "SPACE");
}

class Me {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.w = 62;
    this.h = 66;
    this.c = color(0, 255, 0);
  }

  body() {
    // fill(this.c);
    // ellipse(this.x, this.y, this.w, this.h);
    image(meImage, this.x - this.w / 2, this.y - this.h / 2);
    if (keyIsDown(32)) {
      image(weaponD, this.x - this.w / 2 + 36, this.y - this.h / 2 + 28);
      //swish.play();
      // swish.jump(0.2);
      swish.setVolume(0.5);
          
    } else {
      image(weaponU, this.x - this.w / 2 + 41, this.y - this.h / 2 + 21);
      //swish.stop();
      swish.setVolume(0);
    }
  }

  move() {
    if (keyIsDown(87) || keyIsDown(38)) {
      this.y -= 3;
    }
    if (keyIsDown(83) || keyIsDown(40)) {
      this.y += 3;
    }
    if (keyIsDown(65) || keyIsDown(37)) {
      this.x -= 3;
    }
    if (keyIsDown(68) || keyIsDown(39)) {
      this.x += 3;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.y > height) {
      this.y = 0;
    }
  }

  //   home() {
  //     if (this.y < 0) {
  //       sceneNum++;
  //       this.y = height - 50;
  //     }

  //     if (sceneNum > 2) {
  //       sceneNum = 0;
  //     }
  //   }
}

class Clock {
  constructor(x, y, c) {
    // a special method that creates the car object

    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 35;
    this.c = c;
  }

  body() {
    // fill(this.c);
    // circle(this.x, this.y, this.w);
    image(clockImage, this.x - 20, this.y - 20);
  }

  move() {
    this.x++;

    if (this.x > width) {
      this.x = 0;
    }
  }

  checkCollision() {
    if (
      dist(me1.x, me1.y, this.x, this.y) <= this.w / 2 + me1.w / 2 &&
      keyIsDown(32)
      // me1.x + me1.w / 2 > this.x &&
      // me1.x < this.x + this.w &&
      // me1.y + me1.h / 2 > this.y &&
      // me1.y < this.y + this.h
      // //
    ) {
      console.log("bumped!");
      // me1.y = height - 50; // reset me pos
      this.x = -800;
      this.y = -800;
      san++;
    }
  }
}

class Snoring {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = random([-0.8, -0.4, 0.2, 0, 0.2, 0.4, 0.8]);
    this.speedY = random([0.2, 0.4, 0.8]);
  }

  body() {
    // fill(255, 255, 0);
    // circle(this.x, this.y, 40);
    image(s3snore, this.x - 18, this.y - 18);
  }

  move() {
    this.x -= this.speedX;
    this.y -= this.speedY;
  }
  checkCollision() {
    if (
      dist(me1.x, me1.y, this.x, this.y) <=
      20 + me1.w / 2
      // me1.x + me1.w / 2 > this.x &&
      // me1.x < this.x + this.w &&
      // me1.y + me1.h / 2 > this.y &&
      // me1.y < this.y + this.h
      // //
    ) {
      console.log("boombumped!");
      checkFail = 1;
      // me1.y = height - 50; // reset me pos
      // this.x = -800;
      // this.y = -800;
      // san++;
    }
  }
}

function currentSan() {
  for (let i = 0; i < san; i++) {
    //ellipse(30 + i * 12, 30, 10);
    image(sanHeart, 20 + i * 23, 22);
  }
}

// function button(x, y, w, h, a) {
//   push();
//   translate(x, y);
//   fill("#ffffff");
//   rect(0, 0, w, h);
//   fill(0);
//   textAlign(CENTER, CENTER);
//   textSize(20);
//   text(a, w / 2, h / 2);
//   pop();
// }

function keyboard(x, y) {
  push();
  translate(x, y);
  image(keyboardBG, 30, 305);
  image(arrow_W, 69, 291 - wMove);
  image(arrow_A, 16 - aMove, 344);
  image(arrow_S, 69, 364 + sMove);
  image(arrow_D, 122 + dMove, 344);
  image(keyboardWASD, 32, 307);
  if (keyIsDown(87) || keyIsDown(38)) {
    //w
    image(wH, 67, 309);
    wMove = 4;
  } else {
    image(wH, -100, 309);
    wMove = 0;
  }
  if (keyIsDown(65) || keyIsDown(37)) {
    //a
    image(aH, 34, 342);
    aMove = 4;
  } else {
    image(aH, -100, 342);
    aMove = 0;
  }
  if (keyIsDown(83) || keyIsDown(40)) {
    //s
    image(sH, 67, 342);
    sMove = 4;
  } else {
    image(sH, -100, 342);
    sMove = 0;
  }

  if (keyIsDown(68) || keyIsDown(39)) {
    //d
    image(dH, 100, 342);
    dMove = 4;
  } else {
    image(dH, -100, 342);
    dMove = 0;
  }
  image(keyboardSPACE, 468, 297);
  if (keyIsDown(32)) {
    image(spaceH, 472, 342);
  } else {
    image(spaceH, -100, 342);
  }
  pop();
}
