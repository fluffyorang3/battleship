function ship(length, type) {
  let hits = 0;
  let isSunk = false;

  function takeHit() {
    hits++;
    return hits;
  }

  function sinkShip() {
    isSunk = true;
    return isSunk;
  }

  function getState() {
    return { hits, isSunk, length };
  }
  return {
    takeHit,
    sinkShip,
    getState,
    type,
  };
}

let test = ship(3, "CA");

console.log(test.type);

function gameBoard() {}

export { ship };
