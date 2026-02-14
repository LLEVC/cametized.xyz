const audioFiles = [
        "../audios/FlaxAudio1.mp3",
        "../audios/FlaxAudio2.mp3",
        "../audios/FlaxAudio3.wav"
    ];

    function playRandomAudio() {

        if (Math.random() < 0.05) {
            window.location.href = "../dess";
            return;
        }
        
        const audio = document.getElementById("audioPlayer");
        const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        audio.src = randomAudio;
        audio.play();
    }