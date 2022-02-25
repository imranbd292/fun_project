




const startBtn = document.getElementById("btn");
startBtn.addEventListener("click", function(){
    const blockDisp = document.getElementById("container");
    blockDisp.style.display = "none";
    const backBtn = document.getElementById("welcome");
    backBtn.style.display = "block";
   


let randoms = Math.floor(Math.random() * 4);

if (randoms == 0){
 

        alert("Congratulations! Abdullah Nahian ");

    }
    
    else if (randoms == 1){

            alert(" Congratulations! Esrat Sultana Popy")
    
    }
    else if (randoms == 2){

            alert(" Congratulations! Ashraful Sarkar")
    
    }
    else if (randoms == 3){

            alert("Congratulations! Jesmin Juthi")
    
    }
    else if (randoms == 4){

            alert("Congratulations! Saidur Rahman Setu")
    
    }
    
})




