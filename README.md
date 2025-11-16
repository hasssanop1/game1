🦖 Dino Runner – JS Mini Game

A fast, smooth and addictive jumping game made using HTML, CSS, and JavaScript. Inspired by Chrome Dino, but with your own characters, animations, scoring system, and a polished UI.

🎮 Features ✅ Smooth 60FPS Game Loop

The obstacle moves using requestAnimationFrame() for buttery-smooth motion.

✅ Smart Jump System

Jump works 100% of the time using:

CSS animation (if available)

automatic JavaScript fallback physics jump (if CSS fails)

✅ Collision Detection

Accurate bounding-box based collision detection with padding for fair gameplay.

✅ Score System

Score increases every time the obstacle passes the player

Speed increases progressively, making the game more challenging

✅ Game Over Screen

A pop-up overlay shows:

Game Over message

Final score

Restart button

🤩 Built For Fun & Addictiveness

Simple controls, clean animations, and progressive speed make the game engaging.

🕹 How to Play Action Key Jump Arrow Up or Space Move Right Arrow Right Move Left Arrow Left

Avoid the obstacle and survive as long as possible!

📁 Project Structure /your-project │── index.html │── style.css │── script.js │── /assests │ ├── bg.png │ ├── wahab.png │ ├── dragon.png

💡 How It Works Game Loop

A custom 60FPS loop moves the obstacle and checks collisions:

requestAnimationFrame(gameLoop);

Smart Jump

The game attempts CSS animation first. If the jump does not move the character → JS physics jump is used.

Collision

Bounding rectangles are compared:

dino.getBoundingClientRect() obstacle.getBoundingClientRect()

Padding makes collision detection more fair and enjoyable.

🚀 Future Improvements (Optional Ideas)

Add multiple obstacles

Add sound effects (jump, hit, score)

Add character selection

Add high-score saving using localStorage

Add double-jump feature

Add theme variations (night mode, neon, etc.)

🧑‍💻 Author

Made by Hassan – A learning developer building cool mini-games and websites.

Want to contribute? Feel free to submit a PR or open an issue. 😊
