// score = 0;
// cross = true;

// document.onkeydown = function (e) {
//     console.log("key code is:", e.code);
//     if (e.code === "ArrowUp") {
//         dino = document.querySelector('.dino');
//         dino.classList.add('animateDino');
//         setTimeout(() => {
//             dino.classList.remove('animateDino');
//         }, 700);
//     }

//     if (e.code === "ArrowRight") {
//         dino = document.querySelector('.dino');
//         dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//         dino.style.left = dinoX + 112 + "px";
//     }

//     if (e.code === "ArrowLeft") {
//         dino = document.querySelector('.dino');
//         dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//         dino.style.left = dinoX - 112 + "px";
//     }
// }

// setInterval(() => {
//     dino = document.querySelector('.dino');
//     gameOver = document.querySelector('.gameOver');
//     obstacle = document.querySelector('.obstacle');

//     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

//     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
//     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

//     offsetX = Math.abs(dx - ox);
//     offsetY = Math.abs(dy - oy);
//     console.log(offsetX, offsetY);

//     // A slightly tighter horizontal collision box for better clearance
// if (offsetX < 110 && offsetY < 52) { 
//     gameOver.style.visibility = 'visible';
//         obstacle.classList.remove('obstacleAni');
//     // ... game over logic ...
// }
//     else if (offsetX < 145 && offsetY < 52 ) {
//         score += 1;
//         updateScore(score);
//         cross = false;
//         setTimeout(() => {
//             cross = true;
//         }, 1000);
//         // setTimeout(() => {
//         //     obstacle.style.animationDuration = newDur + 's'; 
//         //     newDur = aniDur - 0.8 
//         //     aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
//         //     console.log('New animation duration:',newDur)

//         // }, 500);
//         // --- Speed up obstacle ---
//         setTimeout(() => {
//             let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
//         let newDur = aniDur - 0.8; // decrease duration to make it faster
//         if (newDur < 0.8) newDur = 0.8; // optional minimum speed limit
//         obstacle.style.animationDuration = newDur + 's';
//         console.log('New animation duration:', newDur);
//         }, 500);
        
//     }

// }, 10);

// function updateScore(score) {
//     scoreCont.innerHTML = "your score: " + score;
// }


// // testing
// // ... (previous code)

let score = 0;
let cross = true;

const dino = document.querySelector(".dino");
const obstacle = document.querySelector(".obstacle");
const gameOver = document.querySelector(".gameOver");
const scoreCont = document.getElementById("scoreCont");

// Obstacle movement variables
let obstacleX = window.innerWidth; 
let speed = 8; // change this to make faster or slower

// -------- DINO CONTROLS --------
document.onkeydown = function (e) {

    if (e.code === "ArrowUp") {
        if (!dino.classList.contains("animateDino")) {
            dino.classList.add("animateDino");
            setTimeout(() => {
                dino.classList.remove("animateDino");
            }, 600);
        }
    }

    if (e.code === "ArrowRight") {
        let dinoX = parseInt(getComputedStyle(dino).left);
        dino.style.left = (dinoX + 112) + "px";
    }

    if (e.code === "ArrowLeft") {
        let dinoX = parseInt(getComputedStyle(dino).left);
        dino.style.left = (dinoX - 112) + "px";
    }
};

// -------- 60FPS GAME LOOP --------
function gameLoop() {

    // Move obstacle smoothly
    obstacleX -= speed;
    if (obstacleX < -150) {
        obstacleX = window.innerWidth + 200;
        cross = true;
    }
    obstacle.style.left = obstacleX + "px";

    // Collision + scoring
    let dx = parseInt(getComputedStyle(dino).left);
    let dy = parseInt(getComputedStyle(dino).bottom);

    let ox = obstacleX;
    let oy = 0;

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    // Collision
    if (offsetX < 80 && offsetY < 70) {
        gameOver.style.visibility = "visible";
        return; // stop game
    }

    // Score when obstacle passed
    if (ox < dx && cross) {
        score++;
        updateScore(score);
        cross = false;

        // Increase speed every score
        speed += 0.4;
    }

    requestAnimationFrame(gameLoop);
}

// Start game
requestAnimationFrame(gameLoop);

// Update score text
function updateScore(score) {
    scoreCont.innerHTML = "Your score : " + score;
}
