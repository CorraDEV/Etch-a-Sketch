import { generateGrid, reset, switchRainbowMode, fillGrid, handleColorCell } from "./utils.js";

const rainbowBtn = document.querySelector('#rainbow');
generateGrid();
const n = 10;
const gridContainer = document.querySelector('#grid-container');
fillGrid(gridContainer, n);

gridContainer.addEventListener('mouseover', (evt) => {
    handleColorCell(evt, rainbowBtn);
});

const groupButtons = document.querySelector('#group-buttons');
groupButtons.addEventListener('click', (evt) => {
    switch(evt.target.id){
        case 'reset':            
            const cells = document.querySelectorAll('.cell');
            reset(cells);
            break;
        case 'set-grid':
            const n = +prompt('Enter your "n" value for the grid (n*n): ');        
            const maxValue = 100;
            const minValue = 1;
            
            if(n >= minValue && n <= maxValue){
                const oldGridContainer = document.querySelector('#grid-container');
                document.body.removeChild(oldGridContainer);                                    
                generateGrid();                                
                const actualGridContainer = document.querySelector('#grid-container');
                actualGridContainer.addEventListener('mouseover', (evt) => {
                    handleColorCell(evt, rainbowBtn);
                });
                fillGrid(actualGridContainer, n);
            }
            else if(n > maxValue){
                alert(`Error: too many cells, the maximum limit is ${maxValue}`);
            }
            else if(n < minValue){
                alert(`Error: too few cells, the lowest limit is ${minValue}`);
            }                                        
            else{
                alert(`Error: invalid input, you must enter a number between ${minValue} and ${maxValue}`);                    
            }        
            break;                                                                                     
        case 'rainbow':
            switchRainbowMode(evt.target);            
    }                            
});