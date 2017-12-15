<canvas style="border:3px solid #C0C0C0;" id="mycanvas" width="750" height="500" style="border:2px solid #000000;"></canvas>


<script>

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const hitOne = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/3/3d/Jugg_underattack_01.mp3');
const hitTwo = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/a/af/Jug_pain_01.mp3');
const hitThree = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/0/02/Crowd_lv_02.wav');
const aWalk = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/0/01/Shared_footstep_hero_general1.mp3');
const bWalk = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/c/c8/Shared_footstep_hero_general5.mp3');
const timerOne = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/7/70/Jug_level_05.mp3');
const timerTwo = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/2/2e/Jug_laugh_04.mp3');
const defeatSound = new Audio('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/e/ea/Jug_death_07.mp3');
  const strange= function(a ){
                return a;
  }

  var isPaused=false;

  const imageBack=new Image();
  imageBack.src="https://image.ibb.co/cV0PZb/back.jpg";
const colorArray = ["red","Chartreuse ","Chocolate " , "Crimson ","DarkCyan  ","DarkGreen ","DarkOrange  ","Green ","Fuchsia   " ,"DeepSkyBlue " ,"HotPink "];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

  var audio = new Audio();
  audio.src = 'Sounds/BackMusic.mp3';
  audio.play();

  var audioType;
var audio = new Audio();
if (audio.canPlayType("audio/mp3")) {
    audioType = ".mp3";
} else {
    audioType = ".wav";
}
//Function to play the exact file format
function playAudio(){
    var audio = new Audio("files/sounds/audio" + audioType);
}
  var score = 0;
  var timer = 0;
const createPoints = function(count, canvasWidth, canvasHeight) {
  const points =  [];
  const pushToArray = function(n) {
    if (n < 1) {return ""}
    points.push({
      x: rand(canvasWidth - 50),
      y: rand(canvasHeight - 50),
      width:  8,
      height: 8,
      xDelta:  strange(1),
      yDelta:  strange(1),
      color:  colorArray[rand(12)-1]
    });
    pushToArray(n-1)
  }
  pushToArray(count);
  return points;
  };
const forEach = function(arr, func) {
    const helper = function(index) {
        if(index=== arr.length)
            return "";
        func(arr[index]);
        helper(index + 1);
    };
     helper(0);
};
   const imageR=new Image();
   imageR.src="https://image.ibb.co/eWwnnw/HeroR.png";

   const imageL=new Image();
   imageL.src="https://image.ibb.co/bB52LG/HeroL.png";
  const gameData={
    hero : {
      x: 100,
      y: 350,
      imgR:imageR,
      imgL:imageL,
      width: 100,
      height:150,
      xDelta:0,
      yDelta:0,
      moveR: false,  //p
      moveL: false   //p
          }
    };
  function over(){
     ctx.font = "30px Comic Sans MS";
     ctx.fillStyle = "red";
     ctx.textAlign = "center";
     ctx.fillText("You are about to lose be more careful !!!!", canvas.width/2, canvas.height/6);
    }
  function over2(){
     ctx.font = "50px Comic Sans MS";
     ctx.fillStyle = "black";
     ctx.textAlign = "center";
     ctx.fillText("game over !!!!", canvas.width/2, canvas.height/2);
    }

  function over3(){
     ctx.font = "30px Comic Sans MS";
     ctx.fillStyle = "orange";
     ctx.textAlign = "center";
     ctx.fillText("* you are doing bad !!!! *", canvas.width/2, canvas.height/2);
    }

  function stop(){
     ctx.font = "40px Comic Sans MS";
     ctx.fillStyle = "orange";
     ctx.textAlign = "center";
     ctx.fillText("Press space to continue.", canvas.width/2, canvas.height/2 );
    }

   function pain(){
     ctx.font = "90px Comic Sans MS";
     ctx.fillStyle = "yellow";
     ctx.textAlign = "center";
     ctx.fillText("ouch", canvas.width/2, canvas.height/2 );
    }

  const myAllPoints = createPoints(28, canvas.width, canvas.height);
const update = function() {
  forEach(myAllPoints, function(point) {
    if(point.x + point.width +5>= canvas.width || point.x < 10) {
      point.xDelta = - point.xDelta;
      point.color = colorArray[rand(12)-1];
                      }
    if(point.y + point.height +5>= canvas.height || point.y < 10) {
      point.yDelta = - point.yDelta;
      point.color = colorArray[rand(12)-1];
                      }
    point.x = point.x + point.xDelta;
    point.y = point.y + point.yDelta;
    if (point.x < gameData.hero.x + gameData.hero.width &&
          point.x + point.width > gameData.hero.x &&
         point.y < gameData.hero.y + gameData.hero.height &&
         point.height + point.y > gameData.hero.y) {
           point.x = rand(400);
           point.y = rand(400);
                     score++;
                      pain();
         var audio = new Audio("https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/f/f0/Medusa_projectile_launch2.mp3");
         audio.volume = 0.4;
         audio.play();
           var audioType;
           var audio = new Audio();
           if (audio.canPlayType("audio/mp3")) {
            audioType = ".mp3";
            } else {
        audioType = ".wav";
         }
     function playAudio(){
      var audio = new Audio("files/sounds/audio" + audioType);
      }
      // collision detected!
    }
    var big=0;
    if (score === 60){   timer = big;
                    }

    if (score === 60  ||  score ===0 ){  point.xDelta=1;
                    }
     if (score === 60  ||  score ===0 ){  point.yDelta=1;
                    }

      else{timer++;

          }

    if(timer > 50000   &&   timer <  200000){   point.xDelta += 1/100
          };

    if(timer > 70000   &&   timer <  200000){   point.yDelta += 1/100
          };


    if(timer >  200000  &&   timer <  390000){   point.xDelta += 1/90
          };

    if(timer >  200000  &&   timer < 390000 ){   point.yDelta += 1/90
          };


    if(timer >  390000  &&   timer < 500000 ){   point.yDelta += 1/80
          };

    if(timer >  390000  &&   timer < 500000 ){   point.yDelta += 1/80
          };


     if(timer >  500000  &&   timer < 800000 ){   point.yDelta += 1/70
          };

    if(timer >   500000  &&   timer < 800000 ){   point.yDelta += 1/70
          };

     if(timer >  800000  &&   timer < 1000000 ){   point.yDelta += 1/60
          };

    if(timer >   800000  &&   timer < 1000000 ){   point.yDelta += 1/60
          };

    if(timer >   1000000  ){   point.yDelta += 1/50
          };

    if(timer >   1000000  ){   point.yDelta += 1/50
          };





    if (score === 60){
      defeatSound.play();
                    }

    if(timer === 20000){
       timerTwo.play();
    }


    if(timer === 60000){
        timerOne.play();
    }




     if (score === 60 ){   over2(); //  || score === 0
                    }

     if (score === 60){   // || score === 0
     alert("Game over!   DO IT AGAIN ")}
    if (score === 60){   score = big;
                    }
    if(score === 60) {  over();
                     }


  })
  aWalk

        if(gameData.hero.moveL === true){
            gameData.hero.x -= 10;
        };
        if(gameData.hero.moveR === true){
            gameData.hero.x += 10;
            };

        if(gameData.hero.moveL === true){
            bWalk.play();
        };
        if(gameData.hero.moveR === true){
            aWalk.play();
            };


};
   function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText("  Hit: "+score, 38, 20);
       }
  function drawtimer() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Time Elapsed:"+timer, 500, 20);
       }
const draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageBack,0,0,canvas.width,canvas.height);
   if (isPaused) {  stop(); }
  const hero=gameData.hero;

  if(gameData.hero.moveL === false || gameData.hero.moveR === true){
    ctx.drawImage(hero.imgR,hero.x,hero.y,hero.width,hero.height);
        }
    else if(gameData.hero.moveL === true) {
        ctx.drawImage(hero.imgL,hero.x,hero.y,hero.width,hero.height);

    }





        forEach(myAllPoints, function(point) {
          ctx.strokeStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.width,0,2*Math.PI );
            ctx.lineWidth = 5.5;
            ctx.stroke();
          // ctx.fillStyle = ;
          // ctx.shadowColor = point.color;
          // ctx.shadowBlur =.0001;
          //  ctx.shadowOffsetX = 15;
          //  ctx.shadowOffsetY = 15;
          //  ctx.fill();
           drawScore();
           drawtimer();
          if( score < 59 && score > 50){
          over();
          }


          if(score === 55) {
             hitTwo.play();
          }

          if(score === 40){
          hitOne.play();
          over3();
                       };

               });
};
const looping = function() {
  draw();
  if (!isPaused) {update();}
  requestAnimationFrame(looping);
      };
  looping();


  const space = 32;
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;
  document.addEventListener('keydown', function(event) {
        if(event.keyCode === rightKey) {
            gameData.hero.moveR = true;
        }
        else if (event.keyCode === leftKey) {
            gameData.hero.moveL = true;
        }
         if(gameData.hero.x <= 0){
       gameData.hero.x = mycanvas.width  ;
      }
    if(gameData.hero.x > 750){
       gameData.hero.x = 0  ;
    }
   }, false);

   document.addEventListener('keyup', function(event) {

        if(event.keyCode === rightKey) {
            gameData.hero.moveR = false;
        }
        else if (event.keyCode === leftKey) {
            gameData.hero.moveL = false;
        }

      }, false);


  document.addEventListener('keyup', function(event) {

        if(event.keyCode === space) {
           isPaused = !isPaused ;
        }

      }, false);


   </script>
