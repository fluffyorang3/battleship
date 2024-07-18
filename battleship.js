function ship(length, symbol) {
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
    symbol,
    length,
  };
}

function createAvailableShips() {
  const CARRIER = ship(5, "CA");
  const BATTLESHIP = ship(4, "BA");
  const CRUISER = ship(3, "CR");
  const SUBMARINE = ship(3, "SU");
  const DESTROYER = ship(2, "DE");
  return [CARRIER, BATTLESHIP, CRUISER, SUBMARINE, DESTROYER];
}

function randomOrientationSelector() {
  const orientationOptions = ["horizontal", "vertical"];
  const randomIndex = Math.floor(Math.random() * 2);
  return orientationOptions[randomIndex];
}

function gridCreator() {
  let grid = Array.from({ length: 10 }, () => Array(10).fill(0));
  return grid;
}

function randomPositionSelector() {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  return [row, column];
}

function rowChecker(grid, startPosition, length) {
  function horizontalCheck(grid, startPosition, length) {
    for (let i = 0; i < length; i++) {
      if (grid[startPosition[0]][startPosition[1] + i] !== 0) {
        return false;
      }
    }
    return true;
  }

  if (
    startPosition[1] + length > 10 ||
    horizontalCheck(grid, startPosition, length) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function columnChecker(grid, startPosition, length) {
  function verticalCheck(grid, startPosition, length) {
    for (let i = 0; i < length; i++) {
      if (grid[startPosition[0] + i][startPosition[1]] !== 0) {
        return false;
      }
    }
    return true;
  }

  if (
    startPosition[0] + length > 10 ||
    verticalCheck(grid, startPosition, length) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function positionChecker(grid, shipType, startPosition, orientation) {
  let length = shipType.length;
  if (orientation === "horizontal") {
    return rowChecker(grid, startPosition, length);
  } else {
    return columnChecker(grid, startPosition, length);
  }
}

function symbolPlacer(grid, shipType, startPosition, orientation) {
  let length = shipType.length;
  if (orientation === "horizontal") {
    rowSymbol(grid, startPosition, length, shipType.symbol);
  } else {
    columnSymbol(grid, startPosition, length, shipType.symbol);
  }
}

function rowSymbol(grid, startPosition, length, symbol) {
  for (let i = 0; i < length; i++) {
    grid[startPosition[0]][startPosition[1] + i] = symbol;
  }
}

function columnSymbol(grid, startPosition, length, symbol) {
  for (let i = 0; i < length; i++) {
    grid[startPosition[0] + i][startPosition[1]] = symbol;
  }
}

function shipPlacer() {
  const shipsToPlace = createAvailableShips();
  const grid = gridCreator();

  while (shipsToPlace.length !== 0) {
    let startPosition = randomPositionSelector();
    let orientation = randomOrientationSelector();
    let currentShip = shipsToPlace[0];

    if (positionChecker(grid, currentShip, startPosition, orientation)) {
      symbolPlacer(grid, currentShip, startPosition, orientation);
      shipsToPlace.shift();
    }
  }

  return grid;
}

const test = shipPlacer();

console.log(test);

export {
  ship,
  createAvailableShips,
  randomOrientationSelector,
  randomPositionSelector,
  positionChecker,
  gridCreator,
  symbolPlacer,
  shipPlacer,
  rowChecker,
  columnChecker,
  rowSymbol,
  columnSymbol,
};
