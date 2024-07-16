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

  function placeShip() {
    number--;
    return number;
  }
  return {
    takeHit,
    sinkShip,
    getState,
    type,
  };
}

const availableShips = () => {
  const CARRIER = ship(5, "CA");
  const BATTLESHIP = ship(4, "BA");
  const CRUISER = ship(3, "CR");
  const SUBMARINE = ship(3, "SU");
  const DESTROYER = ship(2, "DE");
  return [CARRIER, BATTLESHIP, CRUISER, SUBMARINE, DESTROYER];
};

export { ship };
