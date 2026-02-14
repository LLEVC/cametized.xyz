const headers = [
            "hi flaxez page",
            "Hello everyone, this my website page for the Cametized.xyz Website. Enjoy.",
            "FLAXEZ PAGE CONFIRMATION",
            "Make sure to die",
            "Flaxez Yuri is real"
        ];

        const randomText = headers[Math.floor(Math.random() * headers.length)];
        document.getElementById("RandomTitle").textContent = randomText;