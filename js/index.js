import Timer from "./timer.js";
import Controls from "./controls.js";
import Sound from "./sounds.js";
import { 
    btnPlay,
    btnPause, 
    btnSet,
    btnStop,
    btnSoundOn,
    btnSoundOff,
    minutesDisplay,
    secondsDisplay,
 } from "./elements.js";

const sound = Sound();

const controls = Controls({
    btnPlay,
    btnPause,
    btnStop,
    btnSet
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
});


btnPlay.addEventListener('click', ()=>{
    controls.play();
    timer.countdown();
    sound.pressButton();
})

btnPause.addEventListener('click', ()=>{
    controls.pause();
    timer.hold();
    sound.pressButton();
})

btnStop.addEventListener('click', ()=>{
   controls.reset();
   timer.reset();
   sound.pressButton();
});

btnSoundOn.addEventListener('click', ()=>{
    btnSoundOn.classList.add('hide');
    btnSoundOff.classList.remove('hide');
    sound.bgAudio.play();
})

btnSoundOff.addEventListener('click', ()=>{
    btnSoundOn.classList.remove('hide');
    btnSoundOff.classList.add('hide');
    sound.bgAudio.pause();
})

btnSet.addEventListener('click', ()=>{
   let newMinutes = controls.getMinutes();

    if(!newMinutes){
       timer.reset();
       return;
    }

   
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
});