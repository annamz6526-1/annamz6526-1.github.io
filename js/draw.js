
var drawModule = (function () { 

  var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }

  var pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }

  var scoreText = function() {
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 285, h-5);
  }

  var drawSnake = function() {
      var length = 4;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }  
  }
    
  var paint = function(){
      ctx.fillStyle = 'lightgrey';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, w, h);

      btn.setAttribute('disabled', true);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

      if (direction == 'right') { 
        snakeX++;
        snakeX = snakeX % (w / snakeSize);
      } else if (direction == 'left') { 
        snakeX--; 
        snakeX = (snakeX + w / snakeSize) % (w / snakeSize);
      } else if (direction == 'up') { 
        snakeY--; 
        snakeY = (snakeY + h / snakeSize) % (h / snakeSize);
      } else if(direction == 'down') { 
        snakeY++; 
        snakeY = snakeY % (h / snakeSize);
      }

      if (snakeX == -1){
        snake[0].X = (w / snakeSize) - 1;
      }
      else if (snakeX == w / snakeSize){
        snake[0].X == 0
      }

      if (snakeY == -1){
        snake[0].Y = (h / snakeSize) - 1;
      }
      if (snakeY == h / snakeSize){
        snake[0].Y == -1
      }


      if (checkCollision(snakeX, snakeY, snake)) {
          //restart game
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;          
        }
        
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
          score ++;
          
          createFood(); //Create new food
        } else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX; 
          tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        } 
        
        pizza(food.x, food.y); 
        scoreText();
  }

  var createFood = function() {
      food = {
        x: Math.floor((Math.random() * 33) ),
        y: Math.floor((Math.random() * 33) )
      }

      for (var i=0; i<snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food.y == snakeY && food.x == snakeX) {
          //food.x = Math.floor((Math.random() * 30) + 1);
          //food.y = Math.floor((Math.random() * 30) + 1);
          createFood()
        }
      }
  }

  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  }

  var init = function(){
      direction = 'down';
      drawSnake();
      createFood();
      gameloop = setInterval(paint, 80);
  }


    return {
      init : init
    };

    
}());