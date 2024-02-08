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
const kickDrumInterval = document.querySelector('#kickDrumInterval')
const hiHatInterval = document.querySelector('#hiHatInterval')
const snareDrumInterval = document.querySelector('#snareDrumInterval')

// This function is called every 600ms
function update() {
    if(count > 4){
        count = 1
    }
    if(metronome.checked){
        if(count === 4){
            tockSound.play();
        }else{
            tickSound.play();
            }
    }
    console.log(hiHatInterval.value)
    if(hiHat.checked && (hiHatInterval.value == count || hiHatInterval.value === "")){
          hiHatSound.play();
    }
    if(kickDrum.checked && (kickDrumInterval.value == count || kickDrumInterval.value === "")){
          kickDrumSound.play();
    }
    if(snareDrum.checked && (snareDrumInterval.value == count || snareDrumInterval.value === "")){
            snareDrumSound.play();
    }
    counter.innerText = count
    count++
   
    

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
