import {
  ship,
  availableShips,
  randomOrientationSelector,
  randomPositionSelector,
  positionChecker,
} from "./battleship.js";

test("Ship sinking", () => {
  expect(ship(3).sinkShip()).toBe(true);
});

test("Ship sinking", () => {
  expect(ship(3).takeHit()).toBe(1);
});

test("Ship length", () => {
  expect(ship(3).length).toBe(3);
});

test("Test type", () => {
  expect(ship(3, "CA").symbol).toBe("CA");
});

test("Test type 2", () => {
  expect(ship(3, "BA").symbol).toBe("BA");
});

test("Available ship", () => {
  expect(availableShips[0].symbol).toBe("CA");
});

test("Orientation selector", () => {
  expect(
    randomOrientationSelector() === "horizontal" ||
      randomOrientationSelector() === "vertical"
  ).toBeTruthy();
});

test("Random position", () => {
  expect(typeof randomPositionSelector()).toBe("object");
});

test("Random position array length", () => {
  expect(randomPositionSelector().length).toBe(2);
});

test("Position checker", () => {
  expect(
    positionChecker(availableShips[0], [3, 5], "horizontal")
  ).toStrictEqual(true);
});
