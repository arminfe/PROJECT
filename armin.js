<canvas id="mycanvas" width="750" height="500" style="border:2px solid #000000;"></canvas>


<script>
 
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");



  const strange= function(a ){
                return a;
  }

  const imageBack=new Image();
  imageBack.src="https://st.depositphotos.com/1005805/3202/v/950/depositphotos_32020041-stock-illustration-circus-tent-on-nature.jpg";


const colorArray = ["red","MidnightBlue","DarkBlue" , "black","DarkViolet ","Navy","Darkor ","DarkGreen ","DarkRed " ,"blue" ,"DarkSlateGray"];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};
  var audio = new Audio("https://www.high-tech.com/panther/archive/the%20ventures_the%20pink%20panther%20theme.mp3");
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
      width:  10,
      height: 10,
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

    const image=new Image();
   image.src="http://clipartandscrap.com/wp-content/uploads/2017/07/The-pink-panther-clip-art-images-cartoon-2.gif";



  const gameData={
    hero : {
      x: 100,
      y: 350,
      img:image,
      width: 100,
      height:150,
      xDelta:0,
      yDelta:0
          }
    };

  function over(){
     ctx.font = "30px Comic Sans MS";
     ctx.fillStyle = "red";
     ctx.textAlign = "center";
     ctx.fillText("You are about to lose be more careful !!!!", canvas.width/2, canvas.height/2);

    }

  function over2(){
     ctx.font = "50px Comic Sans MS";
     ctx.fillStyle = "black";
     ctx.textAlign = "center";
     ctx.fillText("game over !!!!", canvas.width/2, canvas.height/2);

    }

 

  const myAllPoints = createPoints(35, canvas.width, canvas.height);

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
           point.x = rand(300);
           point.y = rand(300);
                     score++;

         var audio = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18362_1464637241.mp3");
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

    if (score === 50){   timer = big;
                    }
    else{timer++; }

     if (score === 50 || score === 0){   over2();
                    }

    if (score === 50){   score = big;
                    }

    if(score === 50) {  over();
                     }

  })

};

   function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Hit: "+score, 38, 20);
       }

  function drawtimer() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Time Elapsed:"+timer, 545, 20);
       }


const draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageBack,0,0,canvas.width,canvas.height);
  const hero=gameData.hero;
    ctx.drawImage(hero.img,hero.x,hero.y,hero.width,hero.height);
        forEach(myAllPoints, function(point) {
          ctx.strokeStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.width,0,2*Math.PI );
            ctx.lineWidth = 10;
            ctx.stroke();
          // ctx.fillStyle = ;
          // ctx.shadowColor = point.color;
          // ctx.shadowBlur =.0001;
          //  ctx.shadowOffsetX = 15;
          //  ctx.shadowOffsetY = 15;
          //  ctx.fill();
           drawScore();
           drawtimer();

          if( score < 49 && score > 40){  over();}

          ///

          if ( timer > 6000) {      }

               });

};



const looping = function() {
  draw();
  update();

  requestAnimationFrame(looping);
      };

  looping();




   const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;

  document.addEventListener('keydown', function(event) {
    if(event.keyCode === rightKey) {
        gameData.hero.x = gameData.hero.x  + 20
    }  else if (event.keyCode === leftKey){
        gameData.hero.x = gameData.hero.x  - 20
    } if(gameData.hero.x <= 0){
       gameData.hero.x = mycanvas.width  ;
      }
    if(gameData.hero.x > 750){
       gameData.hero.x = 0  ;

    }


   }, false);


   </script>
