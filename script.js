
const urlValues=new URLSearchParams(window.location.search);

// Login page+dificulty level choise


function register(){
    let username=document.getElementById('reg-name').value;
    let userpass=document.getElementById('reg-pass').value; 
    window.location.href = `login.html?user=${username}&password=${userpass}`;
}

const username=urlValues.get("user");
const userpass=urlValues.get("password");

function login() {
    let usernameval = document.getElementById('UserNameInput').value;
    let passwordval = document.getElementById('PasswordInput').value;

    if (usernameval === username && passwordval === userpass ) {
        window.location.href="dificulty.html";
    }

    else if (usernameval !== username && passwordval !==userpass ) {
        document.getElementById('inputuser').innerHTML = 'Wrong ID';
        document.getElementById('inputpassword').innerHTML= 'Wrong Password';
        }

    else if (usernameval === username && passwordval !== userpass ) {
        document.getElementById('inputuser').innerHTML = '';
        document.getElementById('inputpassword').innerHTML = 'Wrong Password';
    }

    else {
        document.getElementById('inputuser').innerHTML = 'Wrong ID';
        document.getElementById('inputpassword').innerHTML = '';
    }
}

// this allows only input of numbers 
function numberOnly() {
    let cellNumber = 1;
     for(index = 0 ; index < 82 ;index++, cellNumber++){
        let newCellnumber = 'cell' + cellNumber;
        let input = document.getElementById(newCellnumber).value ;
    if (input >= 0 ) {
        
    }
    else{
        document.getElementById(newCellnumber).value= '';
        alert ('numbers only');
       
      }

    }
}

let board1=[[2,1,5,3,7,9,8,6,4],[9,8,6,1,2,4,3,5,7],[7,3,4,8,5,6,2,1,9],[4,5,2,7,8,1,6,9,3],[8,6,9,5,4,3,1,7,2],[3,7,1,6,9,2,4,8,5],[5,2,7,4,1,8,9,3,6],[6,4,8,9,3,7,5,2,1],[1,9,3,2,6,5,7,4,8]];
let board2=[[8,7,6,4,9,3,2,5,1],[3,4,5,7,1,2,9,6,8],[2,9,1,5,6,8,4,7,3],[9,8,2,1,3,5,7,4,6],[7,5,4,8,2,6,3,1,9],[1,6,3,9,4,7,8,2,5],[4,1,7,3,5,9,6,8,2],[6,3,8,2,7,1,5,9,4],[5,2,9,6,8,4,1,3,7]];
let board3=[[1,6,5,8,4,7,9,2,3],[7,8,9,3,1,2,5,4,6],[4,3,2,5,9,6,1,7,8],[2,9,7,4,6,3,8,5,1],[5,1,8,7,2,9,3,6,4],[3,4,6,1,5,8,2,9,7],[9,7,3,2,8,4,6,1,5],[8,2,1,6,7,5,4,3,9],[6,5,4,9,3,1,7,8,2]];

let newBoard1=[[2,1,5,3,7,9,8,6,4],[9,8,6,1,2,4,3,5,7],[7,3,4,8,5,6,2,1,9],[4,5,2,7,8,1,6,9,3],[8,6,9,5,4,3,1,7,2],[3,7,1,6,9,2,4,8,5],[5,2,7,4,1,8,9,3,6],[6,4,8,9,3,7,5,2,1],[1,9,3,2,6,5,7,4,8]];
let newBoard2=[[8,7,6,4,9,3,2,5,1],[3,4,5,7,1,2,9,6,8],[2,9,1,5,6,8,4,7,3],[9,8,2,1,3,5,7,4,6],[7,5,4,8,2,6,3,1,9],[1,6,3,9,4,7,8,2,5],[4,1,7,3,5,9,6,8,2],[6,3,8,2,7,1,5,9,4],[5,2,9,6,8,4,1,3,7]];
let newBoard3=[[1,6,5,8,4,7,9,2,3],[7,8,9,3,1,2,5,4,6],[4,3,2,5,9,6,1,7,8],[2,9,7,4,6,3,8,5,1],[5,1,8,7,2,9,3,6,4],[3,4,6,1,5,8,2,9,7],[9,7,3,2,8,4,6,1,5],[8,2,1,6,7,5,4,3,9],[6,5,4,9,3,1,7,8,2]];
// if newBoard1=board1, randomDelete function changes both vars

// load game functions

let dificulty=urlValues.get("level");
let boardNum=0;
function goToGame(level){
    window.location.href="theGame.html?level="+level;
}
loadGame(dificulty);
function loadGame(){
    document.getElementById('levelHeader').innerHTML=dificulty;
    boardNum=Math.floor(Math.random()*(4-1)+1);
   randomDelete(boardNum,dificulty);
}


// Random choise of cells to empty
function randomDelete(boardNum, dificulty){
    let deleteAmount;
    if(dificulty=='Easy'){
        deleteAmount=20;
    }
    else if(dificulty=='Medium'){
        deleteAmount=40;
    }
    else if(dificulty=='Hard'){
        deleteAmount=60;
    }
    
    if(boardNum==1){
        newBoard1=[[2,1,5,3,7,9,8,6,4],[9,8,6,1,2,4,3,5,7],[7,3,4,8,5,6,2,1,9],[4,5,2,7,8,1,6,9,3],[8,6,9,5,4,3,1,7,2],[3,7,1,6,9,2,4,8,5],[5,2,7,4,1,8,9,3,6],[6,4,8,9,3,7,5,2,1],[1,9,3,2,6,5,7,4,8]];
        for(i=0; i<=deleteAmount; i++){
            let row=Math.floor(Math.random()*9);
            let cell=Math.floor(Math.random()*9);
            if(newBoard1[row][cell]!==''){
                newBoard1[row][cell]='';
            }
            else{
                i--;
            }
        }
        insertNewBoard(boardNum)
    }
    else if(boardNum==2){
        newBoard2=[[8,7,6,4,9,3,2,5,1],[3,4,5,7,1,2,9,6,8],[2,9,1,5,6,8,4,7,3],[9,8,2,1,3,5,7,4,6],[7,5,4,8,2,6,3,1,9],[1,6,3,9,4,7,8,2,5],[4,1,7,3,5,9,6,8,2],[6,3,8,2,7,1,5,9,4],[5,2,9,6,8,4,1,3,7]];
        for(i=0; i<=deleteAmount; i++){
            let row=Math.floor(Math.random()*9);
            let cell=Math.floor(Math.random()*9);
            if(newBoard2[row][cell]!==''){
                newBoard2[row][cell]='';
            }
            else{
                i--;
            }
        }
        insertNewBoard(boardNum)
    }
    else if(boardNum==3){
        newBoard3=[[1,6,5,8,4,7,9,2,3],[7,8,9,3,1,2,5,4,6],[4,3,2,5,9,6,1,7,8],[2,9,7,4,6,3,8,5,1],[5,1,8,7,2,9,3,6,4],[3,4,6,1,5,8,2,9,7],[9,7,3,2,8,4,6,1,5],[8,2,1,6,7,5,4,3,9],[6,5,4,9,3,1,7,8,2]];
        for(i=0; i<=deleteAmount; i++){
            let row=Math.floor(Math.random()*9);
            let cell=Math.floor(Math.random()*9);
            if(newBoard3[row][cell]!==''){
                newBoard3[row][cell]='';
            }
            else{
                i--;
            }
        }
        insertNewBoard(boardNum)
    }
}

// after newBoard was created - we copy it to the game

function insertNewBoard(boardNum){
    let cellNum=1;
    if(boardNum==1){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let input=document.createElement('input');
                    input.type="text";
                    input.maxLength="1";
                    input.className="input";
                let chosenCell="cell"+cellNum;
                if(newBoard1[i][j]==''){
                    document.getElementById(chosenCell).appendChild(input);
                }
                else{
                    document.getElementById(chosenCell).innerHTML=newBoard1[i][j];
                    document.getElementById(chosenCell).value=newBoard1[i][j];

                }
            }
        }
    }
    else if(boardNum==2){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let input=document.createElement('input');
                    input.type="text";
                    input.maxLength="1";
                    input.className="input";
                let chosenCell="cell"+cellNum;
                if(newBoard2[i][j]==''){
                    document.getElementById(chosenCell).appendChild(input);
                }
                else{
                    document.getElementById(chosenCell).innerHTML=newBoard2[i][j];
                    document.getElementById(chosenCell).value=newBoard2[i][j];

                }
            }
        }
    }
    else if(boardNum==3){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let input=document.createElement('input');
                    input.type="text";
                    input.maxLength="1";
                    input.className="input";
                let chosenCell="cell"+cellNum;
                if(newBoard3[i][j]==''){
                    document.getElementById(chosenCell).appendChild(input);
                }
                else{
                    document.getElementById(chosenCell).innerHTML=newBoard3[i][j];
                    document.getElementById(chosenCell).value=newBoard3[i][j];

                }
            }
        }
    }
}

// "Finish" button - prints right or wrong
function printResult(){
    let flag=compareBoards(boardNum)
    if(flag==true){
        document.getElementById('gameResult').innerHTML="Congrats! You win!";
        document.getElementById('gameResult').style.color="gold";
    }
    else if(flag==false){
        document.getElementById('gameResult').innerHTML="Oops... Try again!";
        document.getElementById('gameResult').style.color="white";
    }
}

// compares boards to determin flag (right/wrong)
function compareBoards(boardNum){
    let flag=true;
    if(boardNum==1){
    let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                let checkedNum;
                if(document.getElementById(chosenCell).innerHTML=='<input type="text" maxlength="1" class="input">'){
                    checkedNum=document.getElementById(chosenCell).firstChild.value;
                }
                else(
                    checkedNum=document.getElementById(chosenCell).value
                )
                if(checkedNum != board1[i][j] || checkedNum == ''){
                    flag=false;
                }
            }
           
        }
        return flag;
    }

    else if(boardNum==2){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                let checkedNum;
                if(document.getElementById(chosenCell).innerHTML=='<input type="text" maxlength="1" class="input">'){
                    checkedNum=document.getElementById(chosenCell).firstChild.value;
                }
                else(
                    checkedNum=document.getElementById(chosenCell).value
                )
                if(checkedNum != board2[i][j] || checkedNum == ''){
                    flag=false;
                }
            }
        }
        return flag;
    }
    else if(boardNum==3){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                let checkedNum;
                if(document.getElementById(chosenCell).innerHTML=='<input type="text" maxlength="1" class="input">'){
                    checkedNum=document.getElementById(chosenCell).firstChild.value;
                }
                else(
                    checkedNum=document.getElementById(chosenCell).value
                )
                if(checkedNum != board3[i][j] || checkedNum == ''){
                    flag=false;
                }
            }
        }
        return flag;
    }
}

// "Again" button
function again(){
    document.getElementById('gameResult').innerHTML="";
    // insertNewBoard(boardNum);
    let inputs=document.getElementsByTagName('input');
    for(i=0; i<inputs.length;i++){
        inputs[i].value="";
    }
}


