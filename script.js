/* Initially creating a 16x16 grid*/ 
const grid = document.querySelector('#grid');
let dim = 16;
function constructGrid(dim){
    for(i = 0; i < dim**2; i++){
        const div = document.createElement('div');
        div.classList.toggle('square');
        div.setAttribute('style', `flex: 1 0 calc(100% / ${dim}); padding-top: calc(100% / ${dim})`)
        grid.appendChild(div);
    }
    /*flex: 1 0 calc(100% / 9);
        padding-top: calc(100% / 9); */
    
    const squares = document.querySelectorAll('.square');
    squares.forEach((squares) => {
        squares.addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = "black";
        })
    });
}
constructGrid(dim)

function resetGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((squares) => {
        squares.remove();
    })
    let validNumber = false;
    do {
        validNumber = true;
        let stringPrompt = "What do you want your dimension of the grid to be? (Enter a number from 1 to 100)"
        dim = prompt(stringPrompt);
        if(dim === null) return;
        dim = +dim;
        if(!Number.isInteger(dim) || dim < 1 || dim > 100){
            alert("Bad input (1 to 100 plis)");
            validNumber = false;
        }
    }
    while(!validNumber)
    constructGrid(dim);
}

