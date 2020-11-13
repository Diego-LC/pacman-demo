
        const worldOriginal = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,5,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
            [0,0,0,0,0,2,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,2,0,0,0,0,0],
            [2,2,2,2,2,2,1,2,2,1,2,2,2,0,0,2,2,2,1,2,2,1,2,2,2,2,2,2],
            [0,0,0,0,0,0,1,1,1,1,2,0,0,4,0,0,0,2,1,1,1,1,0,0,0,0,0,0],
            [2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2],
            [0,0,0,0,0,2,1,2,2,1,1,1,1,3,1,1,1,1,1,2,2,1,2,0,0,0,0,0],
            [2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2],
            [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
            [2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];
        var world = worldOriginal;

        var score = 0;
        var life = 1;
        var cherry = {
            y:14,
            x:13
        }

        var pacman = {
            x: 1,
            y: 1,
            p:0
        }
        var pacman2 = {
            y:1,
            x:1,
            p:"<div id='pacman2'></div>"
        }

        var ghost = {
            y:12,
            x:13,
            aleat:0,
            k:0,
            l:0
        }
        var teclas = {
            a:0,
            b:0
        }
        
        // var start = window.setTimeout(Timer(),Timer2(),3000)
        Start();
        function Start() {
            Timer();
            Timer2();
        }
        function puntos(){
            if(teclas.a == 27){
                location.reload();
            }
            if(life == 0){
                alert (location.reload(),"perdiste",sleep(1000));
                location.reload();
            }
            if(world[pacman.y][pacman.x] == 1){
                world[pacman.y][pacman.x] = 0;
                score+=10;
                displayWorld();
                displayScore();
            }
            if(world[pacman.y][pacman.x] == 3){
                world[pacman.y][pacman.x] = 0;
                score+=50;
                displayWorld();
                displayScore();
            }
            if(world[pacman.y][pacman.x] == 4 ){
                world[pacman.y][pacman.x] = 0;
                life--;
                sleep(1200);
                pacman.x = 1;
                pacman.y = 1;
                ghost.x = 13;
                ghost.y = 12;
                world[ghost.y][ghost.x] = 4;
                clearTimeout(ghost.l)
                ghost.k=0;
                pacman.p=0;
                // world = worldOriginal;
                displayScore();
                displayWorld();
                ;
            }
        }
        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        }
        function Timer(){
            if(world[ghost.y][ghost.x] != 5 && ghost.k == 1){
                movghost(ghost.y,ghost.x);
                displayWorld();
                setTimeout(Timer, 310);
            }return;
        }
        function Timer2(){
            
            ghost.aleat = Math.floor(Math.random() * 2);
            displayWorld();

            ghost.l=setTimeout(Timer2, 1300);
        }

        //ciclo movimiento pacman 1 (pocisión absoluta)
        function TimerpacmanDown(){
            
            let a = movPacmanDown();
            puntos();
            displayWorld();
            if (a == 1 && teclas.a != 38){
                setTimeout(TimerpacmanDown, 192);
            }
            return
        }
        function TimerpacmanR(){
            
            let a = movPacmanR();
            puntos();
            displayWorld();
            if (a == 1 && teclas.a != 37){
                setTimeout(TimerpacmanR, 185);
            }
            return
        }
        function TimerpacmanUp(){
            
            let a = movPacmanUp();
            puntos();
            displayWorld();
            if (a == 1 && teclas.a != 40){
                setTimeout(TimerpacmanUp, 192);
            }
            return
        }
        function TimerpacmanL(){
            
            let a = movPacmanL();
            puntos();
            displayWorld();
            if (a == 1 && teclas.a != 39){
                setTimeout(TimerpacmanL, 185);
            }
            return
        }


        //ciclo movimiento Pacman 2 (pocisión en el mapa)
        function Timerpacman2Down(){
            
            let a = movPacman2Down();
            puntos();
            displayWorld();
            if (a == 1 && teclas.b != 87){
                setTimeout(Timerpacman2Down, 192);
            }
            return
        }
        function Timerpacman2R(){
            
            let a = movPacman2R();
            puntos();
            displayWorld();
            if (a == 1 && teclas.b != 65){
                setTimeout(Timerpacman2R, 185);
            }
            return
        }
        function Timerpacman2Up(){
            
            let a = movPacman2Up();
            puntos();
            displayWorld();
            if (a == 1 && teclas.b != 83){
                setTimeout(Timerpacman2Up, 192);
            }
            return
        }
        function Timerpacman2L(){
            
            let a = movPacman2L();
            puntos();
            displayWorld();
            if (a == 1 && teclas.b != 68){
                setTimeout(Timerpacman2L, 185);
            }
            return
        }


        //actualizacion del mapa
        function displayWorld(){
            var output = "";

            for(var i=0; i<world.length; i++){
                output += "\n<div class='row'>\n"
                for(var j=0; j<world[i].length; j++){
                    if(world[i][j]==2)
                        output += "<div class='brick'></div>";

                    else if(world[i][j]==1)
                        output += "<div class='coin'></div>";
                    
                    if(world[i][j]==0)
                        output += "<div class='empty'></div>";

                    if(world[i][j]==3)
                        output += "<div id='cherry'></div>";

                    if(world[i][j]==4)
                        output += "<div id='ghost'></div>";
                    
                    if(world[i][j]==5)
                    output += pacman2.p;
                        
                    
                }
                output +="\n</div>"
            }
            // console.log(output);
            document.getElementById('world').innerHTML = output;
        }
        //actualización del pacman
        function displayPacman(){
            
            document.getElementById('pacman').style.top = pacman.y*20+"px";
            document.getElementById('pacman').style.left = pacman.x*20+"px";
            
        }
        //actualizacion de puntos y vida
        function displayScore(){
            document.getElementById('score').innerHTML = score;
            document.getElementById('life').innerHTML = life;
        }

        function cherryInterval(){

        }
        function cherry(y,x){

            world[y][x] = 3
        }

        //movimiento del fantasma
        function movghost(y,x){
            if (ghost.aleat == 0){
                puntos();
                mov1(y,x);
            }
            else{
                puntos();
                mov2(y,x);
            }
            
        }
        function mov1(y,x){
            if(world[y-1][x] != 2){
                world[y][x] = world[y-1][x];
                world[y-1][x] = 4;
                ghost.y--;
                puntos();
                return;
            }
            else if(world[y][x-1] !=2){
                world[y][x] = world[y][x-1];
                world[y][x-1] = 4;
                ghost.x--;
                puntos();
                return;
            }
            mov2(y,x);
        }
        function mov2(y,x){
            if(world[y+1][x] !=2){
                world[y][x] = world[y+1][x];
                world[y+1][x] = 4;
                ghost.y++;
                puntos();
                return;
            }
            else if(world[y][x+1] !=2){
                world[y][x] = world[y][x+1];
                world[y][x+1] = 4;
                ghost.x++;
                puntos();
                return;
            }
            mov1(y,x)
        }

        //movimiento pacman 1
        function movPacmanDown(){
            if(world[pacman.y+1][pacman.x] != 2){
                pacman.y++;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
            
        }
        function movPacmanR(){
            if (world[pacman.y][pacman.x+1] != 2){
                pacman.x++;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
        }
        function movPacmanUp(){
            if(world[pacman.y-1][pacman.x] != 2){
                pacman.y--;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
        }
        function movPacmanL(){
            if(world[pacman.y][pacman.x-1] != 2){
                pacman.x--;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
        }

        //movimiento pacman 2
        function movPacman2Down(){
            if(world[pacman2.y+1][pacman2.x] != 2){
                world[pacman2.y][pacman2.x] = 0;
                world[pacman2.y+1][pacman2.x] = 5;
                pacman2.y++;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
            
        }
        function movPacman2R(){
            if(world[pacman2.y][pacman2.x+1] !=2){
                world[pacman2.y][pacman2.x] = 0;
                world[pacman2.y][pacman2.x+1] = 5;
                pacman2.x++;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
        }
        function movPacman2Up(){
            if(world[pacman2.y-1][pacman2.x] !=2){
                world[pacman2.y][pacman2.x] = 0;
                world[pacman2.y-1][pacman2.x] = 5;
                pacman2.y--;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
        }
        function movPacman2L(){
            if(world[pacman2.y][pacman2.x-1] != 2){
                world[pacman2.y][pacman2.x] = 0;
                world[pacman2.y][pacman2.x-1] = 5;
                pacman2.x--;
                displayPacman();
                displayWorld();
                return 1;
            }else
            {return 2};
        }
        
        displayPacman();       
        displayWorld();

        //deteccion y accion de teclas
        document.onkeydown = function(e){

            if (e.keyCode > 30 && e.keyCode < 88 && pacman.p == 0){
                ghost.k = 1;
                Timer();
                Timer2();
                TimerpacmanR();
                pacman.p = 1;
            }
            if(e.keyCode == 40){//down
                document.getElementById('pacman').style.transform = "rotate(90deg)";
                teclas.a = e.keyCode;
                TimerpacmanDown();
            }
            if (e.keyCode == 37){//Left
                document.getElementById('pacman').style.transform = "rotate(180deg)";
                teclas.a = e.keyCode;
                TimerpacmanL();
            }
            if(e.keyCode == 39 && pacman.p == 1){//right
                document.getElementById('pacman').style.transform = "rotate(0deg)";
                teclas.a = e.keyCode;
                TimerpacmanR();
            }
            if(e.keyCode == 38){ //Up
                document.getElementById('pacman').style.transform = "rotate(270deg)";
                teclas.a = e.keyCode;
                TimerpacmanUp();
            }

            if(e.keyCode == 83){//w down
                teclas.b = e.keyCode;
                Timerpacman2Down();
            }
            if (e.keyCode == 65){//a Left
                teclas.b = e.keyCode;
                Timerpacman2L();
            }
            if(e.keyCode == 68){//d right
                teclas.b = e.keyCode;
                Timerpacman2R();
            }
            if(e.keyCode == 87){ //s Up
                teclas.b = e.keyCode;
                Timerpacman2Up();
            }
            if(e.keyCode == 13){ //tecla Enter
                location.reload();
            }
            if(e.keyCode == 77){ //tecla M
                alert(sleep(2000),location.reload(),"demo");
                // sleep(3000);
            }

            displayPacman();
            displayWorld();
            console.log(e.keyCode);
        }
