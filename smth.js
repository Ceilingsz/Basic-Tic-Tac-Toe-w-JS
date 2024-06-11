function disableAdd(){
    for(let i = 0; i < 9; i++){
        buts[i].disabled = true;
    }
}


function CheckWin(){
    
    // Horizontal check for winner. 

    for(let i = 0; i < 9; i+=3){
        let v = 0;
        let s = 0;
        for(let j = 0; j < 3; j++){
            if(stat[i+j] === 1)v++;
            else if(stat[i+j] === 2)s++;
        }
        if(v === 3){
            document.getElementById("Winner").innerText = 'The winner is X!';
            disableAdd();
        }
        else if(s === 3){
            document.getElementById("Winner").innerText = 'The winner is O!';
            disableAdd();
        }
    }

    // Vertical Check for Winner.

    for(let i = 0; i < 3; i++){
        let v = 0;
        let s = 0;
        for(let j = 0; j < 9; j+=3){
            if(stat[i+j] === 1)v++;
            else if(stat[i+j] === 2)s++;
        }
        if(v === 3){
            document.getElementById("Winner").innerText = 'The winner is X!';
            disableAdd();
        }
        else if(s === 3){
            document.getElementById("Winner").innerText = 'The winner is O!';
            disableAdd();
        }
    }

    // Diagonal Check for winner
    let u = stat[0] + stat[4] + stat[8];
    let v = stat[2] + stat[4] + stat[6];
    if(stat[0] ===1  && stat[4] === 1 && stat[8] ===1){
        document.getElementById("Winner").innerText = 'The winner is X!';
            disableAdd();
    }
    if(stat[2] === 1 && stat[4] === 1 && stat[6] === 1){
        document.getElementById("Winner").innerText = 'The winner is X!';
            disableAdd();
    }
    if(u === 6){
        document.getElementById("Winner").innerText = 'The winner is O!';
            disableAdd();
    }
    if(v===6){
        document.getElementById("Winner").innerText = 'The winner is O!';
            disableAdd();
    }
}


const buts = document.querySelectorAll(".box");
let stat = [0,0,0,0,0,0,0,0,0];

let u = 0;

for(let i = 0; i < buts.length; i++){
    buts[i].addEventListener("click", function(){
        if(u%2 === 0){
            buts[i].innerText = 'X';
            stat[i]=1;
            CheckWin();
        }
        else{
             buts[i].innerText = 'O';
             stat[i]=2;
             CheckWin();
        }
        u++;
    })
}