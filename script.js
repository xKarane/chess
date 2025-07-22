const { Chessground } = window;

const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");

// Einfache Mattposition, Weiß am Zug
const fen = "7k/6Q1/6K1/8/8/8/8/8 w - - 0 1";

// Nur ein Zug erlaubt: Qg7-h8# → danach erscheint die Botschaft
const ground = Chessground(boardElement, {
  fen,
  turnColor: "white",
  coordinates: true,
  movable: {
    color: "white",
    free: false,
    dests: new Map([
      ["g7", new Set(["h8"])]
    ]),
    events: {
      after(from, to) {
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
