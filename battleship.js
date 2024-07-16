import { randomUUID } from "crypto";

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

function shipPlacer(type) {}

function placeShip(coordinate, orientation, shipType) {}

export { ship, availableShips, orientationSelector, randomPositionSelector };
