document.addEventListener("DOMContentLoaded", function () {
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement("div");
        star.className = "shooting_star";
        document.body.appendChild(star);

        const randomX = Math.random();
        const randomY = Math.random();

        star.style.left = `${randomX * 100}vw`;
        star.style.top = `${randomY * 100}vh`;

        const animationDuration = 10 + Math.random() * 15; // Điều chỉnh thời gian rơi
        star.style.animation = `shooting ${animationDuration}s linear infinite`;

        // Tạo đuôi sao
        const tail = document.createElement("div");
        tail.className = "tail";
        star.appendChild(tail);
    }
});

const openLink = (platform) => {
    const links = {
        fb: "https://www.facebook.com/quochom11111/",
        ig: "https://www.instagram.com/vquoc.113/",
        tw: "https://x.com/",
        git: "https://github.com/hvQuoc133"
    };

    const link = document.createElement('a');
    link.href = links[platform];
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const petIcon = document.querySelector('.pet-icon');

function getRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (windowWidth - petIcon.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - petIcon.offsetHeight));

    return { x: randomX, y: randomY };
}

function moveIconStep() {
    const randomPosition = getRandomPosition();

    let currentX = petIcon.offsetLeft;
    let currentY = petIcon.offsetTop;

    const stepX = (randomPosition.x - currentX) / 100;
    const stepY = (randomPosition.y - currentY) / 100;

    let stepCount = 0;
    const interval = setInterval(() => {
        if (stepCount < 100) {
            currentX += stepX;
            currentY += stepY;
            petIcon.style.left = `${currentX}px`;
            petIcon.style.top = `${currentY}px`;
            stepCount++;
        } else {
            clearInterval(interval);
        }
    }, 10);
}

setInterval(moveIconStep, 3000); 
