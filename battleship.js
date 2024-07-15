function ship(length) {
  let hits = 0;
  let isSunk = false;

  function takeHit() {
    return hits++;
  }

  function sinkShip() {
    return (isSunk = true);
  }
  return {
    hits,
    isSunk,
    takeHit,
    sinkShip,
    length,
  };
}

console.log(ship(3));

export { ship };
