
const drawButton = document.querySelector(".draw")

function draw(){
    const min =  Math.ceil(document.querySelector(".first").value);
    const max = Math.floor(document.querySelector(".second").value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    

    alert(result)

    
}


drawButton.addEventListener("click", draw )
