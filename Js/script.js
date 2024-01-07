function generateGrid(cells){            
    let gridContainer = document.querySelector('#grid-container');    
    
    let row;
    let cell;
    
    let gridWidth = 600;
    let gridHeight = 600;
    
    let cellWidth = (gridWidth / cells).toString() + 'px';
    let cellHeight = (gridHeight / cells).toString() + 'px';                

    let rowsOldGrid = document.querySelectorAll('.row');

    if(rowsOldGrid.length > 0){        
        for(let i = 0; i < rowsOldGrid.length; i++){
            gridContainer.removeChild(rowsOldGrid[i]);
        }
    }

    for(let i = 0; i < cells; i++){
        row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < cells; j++){                        
            cell = document.createElement('div');                         
            cell.style.width = cellWidth;
            cell.style.height = cellHeight;                                    
            cell.classList.add('cell');            
            row.appendChild(cell);
        }        
        gridContainer.appendChild(row);        
    }    
}

function colorCell(evt){
    let r = Math.random() * 255 + 1;
    let g = Math.random() * 255 + 1;
    let b = Math.random() * 255 + 1;
    let rainbowBtn = document.querySelector('#rainbow');

    if(evt.target.classList.contains('cell')){
        if(rainbowBtn.classList.contains('rainbowOn'))
            evt.target.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
        else
            evt.target.style.backgroundColor = 'black';                
    }
}

let numCellsRow = 16;

const gridContainer = document.querySelector('#grid-container');
gridContainer.addEventListener('mouseover', colorCell);

const groupButtons = document.querySelector('#group-buttons');
groupButtons.addEventListener('click', (evt)=>{
    if(evt.target.id === 'reset'){        
        let cells = document.querySelectorAll('.cell');
        for(let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = 'white';
        }
    }
    else if(evt.target.id === 'set-grid'){        
        numCellsRow = +prompt('number of cells in a row: ');        
        if(numCellsRow >= 1 && numCellsRow <= 100)
            generateGrid(numCellsRow);
        else if(numCellsRow > 100)
            alert('Error: too many cells, the maximum limit is 100 for each row');
        else{
            alert('Error: too few cells, the lowest number is 1');
        }
    }
    else{
        if(evt.target.classList.contains('rainbowOn')){
            evt.target.classList.remove('rainbowOn');
            evt.target.style.backgroundColor = 'black';
        }
        else{
            evt.target.classList.add('rainbowOn');
            evt.target.style.backgroundColor = 'green';
        }        
    }
});

generateGrid(numCellsRow);