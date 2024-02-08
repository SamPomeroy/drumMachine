// Setup 'tick' sound
const tickSound = new Audio('sounds/tick.mp3');
const tockSound = new Audio('sounds/tock.mp3');
const hiHatSound = new Audio('sounds/hi-hat.mp3');
const kickDrumSound = new Audio('sounds/kick-drum.mp3');
const snareDrumSound = new Audio('sounds/snare-drum.mp3')
let count = 0;
const counter = document.querySelector('#counter');
const metronome = document.querySelector('#metronome');
const hiHat = document.querySelector('#hiHat');
const kickDrum = document.querySelector('#kickDrum')
const snareDrum = document.querySelector('#snareDrum')

// This function is called every 600ms
function update() {
    if(metronome.checked){
        if((count+2)%4 === 0){
            tockSound.play();
        }else{
            // Play the 'tick' sound
            tickSound.play();
            }
    }
    if(hiHat.checked){
        // if((count+2)%4 === 0){
        //     tockSound.play();
        // }else{
            // Play the 'tick' sound
            hiHatSound.play();
            }
    // }
    if(kickDrum.checked && document.querySelector('#kickDrumInterval').value == count){
        // if((count+2)%4 === 0){
        //     tockSound.play();
        // }else{
            // Play the 'tick' sound
            kickDrumSound.play();
            }
    // }
    if(snareDrum.checked){
        // if((count+2)%4 === 0){
        //     tockSound.play();
        // }else{
            // Play the 'tick' sound
            snareDrumSound.play();
            }
    // }
    count++
    counter.innerText = `${count % 4 +1}`
   
    

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
