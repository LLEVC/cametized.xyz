function updateClockAndSeason() {
        const now = new Date();

        // Clock
        const time = now.toLocaleTimeString("en-US", { hour12: false });
        document.getElementById("clock").textContent = time;

        // Seasons (meteorological)
        const month = now.getMonth(); // 0 = Jan
        let season = "";

        if (month === 11 || month <= 1) season = "Winter";
        else if (month <= 4) season = "Spring";
        else if (month <= 7) season = "Summer";
        else season = "Fall";

        document.getElementById("season").textContent = `Season: ${season}`;

        // Snow logic
        if (season === "Winter") {
            createSnowflake();
        }
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "*";

        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.fontSize = 10 + Math.random() * 10 + "px";
        snowflake.style.opacity = Math.random();
        snowflake.style.animationDuration = 3 + Math.random() * 4 + "s";

        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 7000);
    }

    setInterval(updateClockAndSeason, 300);