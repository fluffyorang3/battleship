import {
  ship,
  availableShips,
  orientationSelector,
  randomPositionSelector,
} from "./battleship.js";

test("Ship sinking", () => {
  expect(ship(3).sinkShip()).toBe(true);
});

test("Ship sinking", () => {
  expect(ship(3).takeHit()).toBe(1);
});

test("Ship length", () => {
  expect(ship(3).getState().length).toBe(3);
});

test("Test type", () => {
  expect(ship(3, "CA").type).toBe("CA");
});

test("Test type 2", () => {
  expect(ship(3, "BA").type).toBe("BA");
});

test("Available ship", () => {
  expect(availableShips[0].type).toBe("CA");
});

test("Orientation selector", () => {
  expect(
    orientationSelector() === "horizontal" ||
      orientationSelector() === "vertical"
  ).toBeTruthy();
});

test("Random position", () => {
  expect(typeof randomPositionSelector()).toBe("object");
});

test("Random position array length", () => {
  expect(randomPositionSelector().length).toBe(2);
});
