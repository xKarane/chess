const { Chessground } = window;

const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");

// Setup position: White to move and mate in 1
// Example: Black King on h8, White Queen on g7, White King on g6
const fen = "7k/6Q1/6K1/8/8/8/8/8 w - - 0 1";

const ground = Chessground(boardElement, {
  fen,
  turnColor: "white",
  coordinates: true,
  movable: {
    color: "white",
    free: false,
    dests: new Map([
      ["g7", new Set(["h8"])] // only legal move to deliver checkmate
    ]),
    events: {
      after: (from, to) => {
        if (from === "g7" && to === "h8") {
          messageElement.hidden = false;
        }
      }
    }
  },
  highlight: {
    lastMove: true,
    check: true
  },
  animation: {
    enabled: true,
    duration: 300
  }
});
