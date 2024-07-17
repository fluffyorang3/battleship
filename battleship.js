import { randomUUID } from "crypto";
import { start } from "repl";

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

const availableShips = (function () {
  const CARRIER = ship(5, "CA");
  const BATTLESHIP = ship(4, "BA");
  const CRUISER = ship(3, "CR");
  const SUBMARINE = ship(3, "SU");
  const DESTROYER = ship(2, "DE");
  return [CARRIER, BATTLESHIP, CRUISER, SUBMARINE, DESTROYER];
})();

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

const grid = gridCreator();

function rowChecker(startPosition, length) {
  function horizontalCheck(startPosition, length) {
    for (let i = 0; i < length; i++) {
      if (grid[startPosition[0]][startPosition[1] + i] !== 0) {
        return false;
      }
    }
    return true;
  }

  if (
    startPosition[1] + length > 10 ||
    horizontalCheck(startPosition, length) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function columnChecker(startPosition, length) {
  function verticalCheck(startPosition, length) {
    for (let i = 0; i < length; i++) {
      if (grid[startPosition[0] + i][startPosition[1]] !== 0) {
        return false;
      }
    }
    return true;
  }

  if (
    startPosition[0] + length > 10 ||
    verticalCheck(startPosition, length) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function positionChecker(startPosition, shipType, orientation) {
  let length = shipType.length;

  if (orientation === "horizontal") {
    return rowChecker(startPosition, length);
  } else {
    return columnChecker(startPosition, length);
  }
}

export {
  ship,
  availableShips,
  randomOrientationSelector,
  randomPositionSelector,
  positionChecker,
};
