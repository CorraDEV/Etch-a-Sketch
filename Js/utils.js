function generateGrid(){                
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';            
    document.body.appendChild(gridContainer);        
}

function handleColorCell(evt, rainbowBtn) {    
    let r = Math.random() * 255 + 1;
    let g = Math.random() * 255 + 1;
    let b = Math.random() * 255 + 1;                
    
    if(evt.target.classList.contains('cell')){
        if(rainbowBtn.classList.contains('rainbowOn')){
            evt.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }            
        else{
            evt.target.style.backgroundColor = 'black';                
        }            
    }                               
}

function fillGrid(grid, n){        
    const cellWidth = `${grid.offsetWidth / n}rem`;        
    const cellHeight = cellWidth; 
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;    

    for(let i = 0; i < n; i++){                
        for(let j = 0; j < n; j++){                        
            const cell = document.createElement('div');                         
            cell.style.width = cellWidth;
            cell.style.height = cellHeight;
            cell.classList.add('cell');                        
            grid.appendChild(cell);
        }                
    }          
    
    grid.style.width = 'fit-content';
    grid.style.height = grid.style.width;
}
    
function reset(cells){    
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = 'white';
    }
}

function switchRainbowMode(ele){
    if(ele.classList.contains('rainbowOn')){
        ele.classList.remove('rainbowOn');
        ele.style.backgroundColor = 'black';
    }
    else{
        ele.classList.add('rainbowOn');
        ele.style.backgroundColor = 'green';
    }                    
}

export { generateGrid, reset, switchRainbowMode, fillGrid, handleColorCell };