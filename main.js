// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
let count = 0
const counter = document.querySelector('#counter')

// This function is called every 600ms
function update() {
if(count % 4 === 0){
    tock.play();
    
}else{
    // Play the 'tick' sound
    tick.play();
    }
    count++
    counter.innerText = `${count % 4}`

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
