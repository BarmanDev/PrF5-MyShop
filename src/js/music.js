function mute() {
    let audio = document.getElementById("music");
    if (audio.muted == false) {audio.muted = true}
    else {audio.muted = false}
    }

let muted = false;
let aud = document.getElementById("music");

aud.volume = 0.1;
fadeIn(aud);

document.getElementById("first").addEventListener("click", function() {
    if (muted) {
        muted = false;
        fadeIn(aud);
    } else {
        muted = true;
        fadeOut(aud);        
    }    
});

document.getElementById("second").addEventListener("click", function() {
    if (muted) {
        muted = false;
        fadeIn(aud);
    } else {
        muted = true;
        fadeOut(aud);        
    }    
});

function fadeIn(aud) {
    if (aud.volume < 1) {
        aud.volume += 0.02;
        setTimeout(function () {
            fadeIn(aud);            
        }, 100)        
    }    
}

function fadeOut(aud) {
    if (aud.volume > 0) {
        aud.volume -= 0.08;
        setTimeout(function () {
            fadeOut(aud);
        }, 100);        
    }    
}

function view_first() {
    document.getElementById('first').style.visibility='visible';
    document.getElementById('first').style.display='block';
    document.getElementById('second').style.visibility='hidden';
    document.getElementById('second').style.display='none';
}

function view_second() {
    document.getElementById('second').style.visibility='visible';
    document.getElementById('second').style.display='block';
    document.getElementById('first').style.visibility='hidden';
    document.getElementById('first').style.display='none';
}

