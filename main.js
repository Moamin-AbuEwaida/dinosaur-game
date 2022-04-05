const dino= document.getElementById('dino');
const cactus= document.getElementById('cactus');
const score= document.getElementById('score');

const jump = ()=>{
    dino.classList.add('jump-animation');
    setTimeout(()=>{
        dino.classList.remove('jump-animation');
    },400);
}

document.addEventListener('keypress',()=>{
    if(!dino.classList.contains('jump-animation')){
        jump();
    }
   
})

setInterval(()=>{
    score.innerText++
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if(cactusLeft < 0) {
        cactus.style.display = 'none'
    } else {
        cactus.style.display = ''
    }
    if (cactusLeft < 100 && cactusLeft >50 && dinoTop >150){
        alert ('game over, your score is '+ score.innerText + '\n\nDo you want to play again?');
        location.reload();
    }
},50)