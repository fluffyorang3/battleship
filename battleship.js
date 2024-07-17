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

const grid = gridCreator();

function orientationSelector() {
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

function positionChecker(shipType, startPosition, orientation) {
  let shipLength = shipType.length;
  let shipSymbol = shipType.symbol;

  return [shipSymbol, startPosition, orientation];
}

export {
  ship,
  availableShips,
  orientationSelector,
  randomPositionSelector,
  positionChecker,
};
