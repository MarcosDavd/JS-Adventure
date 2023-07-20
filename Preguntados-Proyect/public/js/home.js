const join = document.getElementById("join");
const create = document.getElementById("create");

let createRoom = document.getElementById("create-room");
let formCreate = document.getElementById("form-create");
let joinRoom =  document.getElementById("join-room");
let formJoin = document.getElementById("form-join");

create.addEventListener("click",function(){    
    console.log("Funco");
    joinRoom.style.display="none";
    createRoom.style.display="block";
    formCreate.classList.add('form-game');
});
join.addEventListener("click",function () {
    createRoom.style.display="none";
    joinRoom.style.display="block";
    formJoin.classList.add('form-game');
});

const buttons = document.querySelectorAll('.cancel');
buttons.forEach(button => {
    button.addEventListener("click",function(){
        let divButtons=document.querySelectorAll('.button');
        divButtons.forEach(db => {
            db.style.display="none";
        });
    });
});

function roomAnimation(){
    let array= document.querySelectorAll("td");
    
        for (let i = 0; i < array.length; i++) {                                     
            setTimeout(function() {
                let p2= document.createElement('p');
                let p1= document.createElement('p');
                array[i].style.backgroundColor="red";                        
                p1.textContent='P1'; 
                p2.textContent="P2"
                if(i > 3){
                    array[i-2].style.backgroundColor="green";                       
                    array[i-2].appendChild(p2);    
                }
                
                array[i].appendChild(p1);
                setTimeout(function() {
                    array[i].removeAttribute("style"); 
                    array[i].removeChild(p1);       
                    if(i > 3){                                
                        array[i-2].removeAttribute("style"); 
                        array[i-2].removeChild(p2);    
                    }
                }, 1000);
                
                
            }, i*1000);
            
    }        

}
setInterval(roomAnimation, 22000);

