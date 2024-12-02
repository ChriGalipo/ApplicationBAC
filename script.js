document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const videoScreen = document.getElementById("video-screen");
    const finalScreen = document.getElementById("final-screen");
    const startButton = document.getElementById("start-button");
    const video = document.getElementById("video");
    const noButton = document.getElementById("no-button");
    const siButton = document.getElementById("yes-button");

    
    startButton.addEventListener("click", () => {
        startScreen.classList.remove("active");
        videoScreen.classList.add("active");
        video.play();
    });

    
    video.addEventListener("ended", () => {
        videoScreen.classList.remove("active");
        finalScreen.classList.add("active");
    });

    
    noButton.addEventListener("mouseover", () => {
        const form = noButton.closest(".form-container"); 
        const parentRect = form.getBoundingClientRect();
    
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
    
        const maxX = parentRect.width - buttonWidth;
        const maxY = parentRect.height - buttonHeight;
    
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
    
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX/1.5}px`;
        noButton.style.top = `${randomY}px`;
        noButton.textContent = "NO😜";
        noButton.style.width = "60px";
        noButton.style.height = "60px";
    });

    noButton.addEventListener("click", () => {
        const form = noButton.closest(".form-container"); 
        const parentRect = form.getBoundingClientRect();
    
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
    
        const maxX = parentRect.width - buttonWidth;
        const maxY = parentRect.height - buttonHeight;
    
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
    
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX/1.5}px`;
        noButton.style.top = `${randomY}px`;
        noButton.textContent = "NO😜";
        noButton.style.width = "60px";
        noButton.style.height = "60px";
    });

    noButton.addEventListener("touchstart", moveNoButton); // Per dispositivi mobili
    noButton.addEventListener("click", moveNoButton); // Per dispositivi desktop

    siButton.addEventListener("click", () => {
        window.open("https://www.youtube.com/watch?v=-XHWQLHLPm4&ab_channel=TOMS");
    });

    const simulateClickOutside = () => {
        const event = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
        });

        // Crea un elemento temporaneo per simulare il clic
        const tempElement = document.createElement("div");
        tempElement.style.position = "absolute";
        tempElement.style.left = "-9999px";
        tempElement.style.top = "-9999px";
        document.body.appendChild(tempElement);

        tempElement.dispatchEvent(event);
        document.body.removeChild(tempElement); // Rimuovi l'elemento
    };
    

});
