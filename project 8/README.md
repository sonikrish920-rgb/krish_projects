# ♟️ Chess Game

![HTML5](https://img.shields.io/badge/HTML5-board-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-themes-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-rules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-CDN-0769AD?style=flat-square&logo=jquery&logoColor=white)

A two-player chess game played locally in the browser. Select a piece to see its available legal moves, then select a highlighted square. The game reports check, checkmate, and stalemate.

## 🚀 Run

Open `index.html` in a modern browser with an internet connection. The game loads jQuery from a CDN. Use **New game** to reset the board and **Board theme** to switch between the light and dark styles.

## 📜 Rules and limitations

The move validator prevents moves that leave the moving side's king in check and supports kingside castling when the king's path is safe. Pawn promotion and en passant are not implemented, and queenside castling is not available.

## 📁 Files

| File | Purpose |
|---|---|
| `index.html` | Board and controls |
| `style.css`, `light.css`, `dark.css` | Board layout and themes |
| `script.js` | Piece movement, turn handling, and game-state checks |
