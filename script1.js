console.log('js connected');
const canvas=document.querySelector('.canvas')
const canvasWidth=650
const gridSize=16
let color='black'

function createGrid(size) {
    for(i=0;i<size;i++){
    const row=document.createElement('div')
    row.classList.add('row')
    row.style.height=`${canvasWidth/size}px`
    for(j=0;j<size;j++){
        const square=document.createElement('div')
        square.classList.add('square')
        square.style.height=`${canvasWidth/size}px`
        square.style.width=`${canvasWidth/size}px`
        row.appendChild(square)
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor=color
            // square.style.boxShadow= `.1vh .1vh .5vh 0.1vh ${color}`
        })
    }
    canvas.appendChild(row)
    }
}


// creating grid according to input 
document.getElementById('range').oninput=function(){
    val = parseInt(document.getElementById("range").value) //gets the oninput value
    document.getElementById('rangeValue').innerHTML = val
        canvas.innerHTML=''
    createGrid(val)    
    
}

document.getElementById('clear').addEventListener('click',handleClear)

function handleClear() {
    canvas.innerHTML=''
    createGrid(parseInt(document.getElementById("range").value))
}

document.getElementById('pencil').addEventListener('click',handlePencil)

function handlePencil() {
    color= 'black'
}


document.getElementById('rainbow').addEventListener('click',handleRainbow)
function handleRainbow() {
    color= `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}

document.getElementById('eraser').addEventListener('click',handleEraser)
function handleEraser() {
    color='white' 
}                                                                                                                                                                       


createGrid(gridSize)