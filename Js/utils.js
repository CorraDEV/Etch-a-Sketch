function generatePage(){
    const h1 = document.createElement('h1');
    h1.textContent = 'Etch-a-Sketch';
    document.body.appendChild(h1);
    generateGroupButtons();
    generateGrid();
}

function generateGrid(n = 10){                
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';                
    gridContainer.addEventListener('mouseover', handleColorCell);
    document.body.appendChild(gridContainer);    
    fillGrid(n);          
}

function handleButtons(evt){
    switch(evt.target.id){
        case 'reset':                        
            reset();
            break;
        case 'set-grid':
            const n = +prompt('Enter your "n" value for the grid (n*n): ');                                
            const userError = checkUserInput(n);            
            if(userError){                
                alert(userError);                              
            }
            else{
                setGrid(n);
            }        
            break;                                                                                     
        case 'rainbow':
            switchRainbowMode();  
    }                                              
}

function generateGroupButtons(){
    const groupButtons = document.createElement('div');
    groupButtons.id = 'group-buttons';
    groupButtons.addEventListener('click', handleButtons);
    document.body.appendChild(groupButtons);
    fillGroupButtons();
}

function fillGroupButtons(){
    const groupButtons = document.querySelector('#group-buttons')
    const rainbowBtn = document.createElement('button');
    rainbowBtn.id = 'rainbow';
    rainbowBtn.textContent = 'Rainbow';
    const resetBtn = document.createElement('button');
    resetBtn.id = 'reset';
    resetBtn.textContent = 'Reset';
    const setBtn = document.createElement('button');
    setBtn.id = 'set-grid';
    setBtn.textContent = 'Set';
    groupButtons.append(resetBtn, setBtn, rainbowBtn);
}

function handleColorCell(evt) {                            
    if(evt.target.classList.contains('cell')){                        
        const rainbowColor = generateRGB();
        const isRainbow = checkRainbowMode();    
        const color = isRainbow ? rainbowColor : 'black';
        evt.target.style.backgroundColor = color;
    }                               
}

function generateRGB(){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgb(${r},${g},${b})`;
}

function checkRainbowMode(){    
    const rainbowBtn = document.querySelector('#rainbow');
    return rainbowBtn.classList.contains('rainbowOn');            
}

function fillGrid(n){        
    const grid = document.querySelector('#grid-container');
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
    
function reset(){    
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');    
}

function setGrid(n){
    const oldGridContainer = document.querySelector('#grid-container');
    document.body.removeChild(oldGridContainer);                                    
    generateGrid(n);                                    
}

function checkUserInput(n){        
    const maxValue = 100;
    const minValue = 1;

    if(n > maxValue){
        return `Error: too many cells, the maximum limit is ${maxValue}`;
    }
    
    if(n < minValue){
        return `Error: too few cells, the lowest limit is ${minValue}`;
    }                                        
    
    if(Number.isNaN(n)){                
        return `Error: invalid input, you must enter a number between ${minValue} and ${maxValue}`;                    
    }
}                        

function switchRainbowMode(){  
    const rainbowBtn = document.querySelector('#rainbow');  
    const isRainbow = rainbowBtn.classList.toggle('rainbowOn');        
    rainbowBtn.style.backgroundColor = isRainbow ? 'green' : 'black';    
}

export default generatePage;