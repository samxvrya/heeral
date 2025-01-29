let highestZ = 1 ;

class paper{

    holdingPaper = false;
    
    prevMousex = 0;
    prevMousey = 0;

    mouseX = 0;
    mousey = 0;

    velocityX = 0;
    velocityY = 0;
    
    currentPaperX = 0;
    currentPaperY = 0;

    init(paper) {

   paper.addEventlistener('mousedown', (e) => {
   
    this.holdingPaper = true ;

    paper.style.zIndex = highestZ;
    highestZ+= 1;

    if ( e.button === 0){
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mousey;

        console.log (this.prevMouseX);
        console.log (this.prevMouseY);
    }

   })

   document.addEventListener('mousemove' , (e) => {
    
    this.mouseX = e.clientX;
    this.mousey = e.clientY;

    this.velocityX = this.mouseX - this.prevMouseX;
    this.velocityY = this.mousey - this.prevMouseY;

    if (this.holdingPaper) {

        this.currentPaperX += this.velocityX;
        this.currentPaperY += this.velocityY;

        this.prevMouseX = this.mouseX ;
        this.prevMouseY = this.mousey ;

        paper.style.transform = `translateX(${this.currentPaperX})px translate(${this.currentPaperY})px`;


    }
   })
   
   window.addEventListener('mouseup' , (e) => {
    console.log('mouse button is released');
    this.holdingPaper = false;
   })


    }
}

const paper=Array.from(document.querySelectorAll( '.paper'));

papers.forEach( paper => {
const p = new paper ();
p.init(paper);
})