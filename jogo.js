(function(){

    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var mvLeft = mvUp = mvRight = mvDown = false;
    var tileSize = 32;
    var player={
        x: tileSize +2,
        y: tileSize +2,
        width: 28,
        height: 28
    }
    var maze = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1],
        [1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1],
        [1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1],
        [1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1],
        [1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1],
        [1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1],
        [1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1],
        [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]  
    ];
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    function keydownHandler(e){
        var key = e.keyCode;
        switch(key){
        case LEFT: 
            mvLeft = true;
            break;
        case UP:
            mvUp = true;
            break;
        case RIGHT:
            mvRight = true;
            break;
        case DOWN:
            mvDown = true;
            break;
        }
    }

    function update(){

    }

    function render(){
        ctx.save();
        for(var row in maze){
            for(var column in maze[row]){
                var tile = maze[row][column];
                if(tile === 1){
                    var x = column *tileSize;
                    var y = row *tileSize;
                    ctx.fillRect(x,y,tileSize,tileSize);
                }
            }
        }
        ctx.fillStyle = "#939";
        ctx.fillRect(player.x, player.y, player.width, player.height);
        ctx.restore();
    }

    function loop(){
        update();
        render();
        
    }
    requestAnimationFrame(loop, cnv);

}());
