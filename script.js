document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector("#input").value;

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (keyElement) {
        setTimeout(() => {
            keyElement.classList.add('active');
        }, 0);
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 50);
    }

        if (audioElement) {
            audioElement.currentTime = 0;
        audioElement.play();
    }
}

function playComposition(songArray) {
    let wait = 0;
    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}