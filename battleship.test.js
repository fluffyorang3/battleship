import { ship, availableShips, orientationSelector } from "./battleship.js";

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
  expect(orientationSelector()).toBeGreaterThanOrEqual(0);
  expect(orientationSelector()).toBeLessThanOrEqual(1);
});
