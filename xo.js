let title = document.querySelector(".title");
let squares =[];
let turn="x";
let movesCount = 0;


function game(id){
    let element =document.getElementById(id);
    if (turn === "x" && element.innerHTML==""){
        element.innerHTML ="<span class='x'>X</span>";
        turn= "O";
        title.innerHTML ="O its your turn!"
        title.style.color=" rgb(126, 16, 141)"
        title.style.fontsize="50px"
        
        movesCount++;
    }else{
        element.innerHTML = "<span class='o'>O</span>";
        turn ="x";
        title.innerHTML = "x";
        movesCount++;
        title.innerHTML ="X its your turn!"
        title.style.color=" rgb(126, 16, 141)"
        title.style.fontsize="50px"
        
    }
    winner();
    draw();
}
function winner(){
    for(let i =1; i<10; i++){
        squares[i]= document.getElementById("item"+i).innerHTML;

    }
    if(squares[1]==squares[2]&& squares[2]==squares[3]&& squares[1]!=""){
        end(1,2,3);

    }
    else if(squares[4]==squares[5]&& squares[5]==squares[6]&& squares[4]!=""){
        end(4,5,6);

    }
    else if(squares[7]==squares[8]&& squares[8]==squares[9]&& squares[7]!=""){
        end(7,8,9);

    }
    else if(squares[1]==squares[4]&& squares[4]==squares[7]&& squares[4]!=""){
        end(1,4,7);

    }
    else if(squares[2]==squares[5]&& squares[5]==squares[8]&& squares[2]!=""){
        end(2,5,8);

    }
    else if(squares[3]==squares[6]&& squares[6]==squares[9]&& squares[3]!=""){
        end(3,6,9);

    }
    else if(squares[3]==squares[5]&& squares[5]==squares[7]&& squares[3]!=""){
        end(3,5,7);

    }
    else if(squares[1]==squares[5]&& squares[5]==squares[9]&& squares[1]!=""){
        end(1,5,9);

    }

}
function end (num1, num2, num3 ){
    title.innerHTML = `${squares[num1]} IS THE WINNER`
    title.style.color=" rgb(126, 16, 141)"
    title.style.fontsize="50px"
    document.getElementById("item"+num1).style.backgroundColor=" blueviolet"
    document.getElementById("item"+num2).style.backgroundColor=" blueviolet"
    document.getElementById("item"+num3).style.backgroundColor=" blueviolet"
    setInterval(()=>{
        title.innerHTML+=".";
    },1000);
    setTimeout(()=>{
        window.location.reload();
    },4000);
}

function draw(){
    if(movesCount === 9){
        title.innerHTML = "It's a draw ..Game over!";
        title.style.color=" rgb(126, 16, 141)"
        title.style.fontsize="50px"
        setInterval(()=>{
            title.innerHTML+=".";
        },1000);
        setTimeout(()=>{
            window.location.reload();
        },4000);
    }
}
let logo = document.querySelector("#logo");
let nav = document.querySelector("#navigator");
let opened= true;

logo.addEventListener("click", function() {
  if (opened) {
    nav.style.display = "none";
    opened = false;
  } else {
    nav.style.display = "block";
    opened = true;
  }
});