import { ship, availableShips } from "./battleship.js";

test("ship sinking", () => {
  expect(ship(3).sinkShip()).toBe(true);
});

test("ship sinking", () => {
  expect(ship(3).takeHit()).toBe(1);
});

test("ship length", () => {
  expect(ship(3).getState().length).toBe(3);
});

test("test type", () => {
  expect(ship(3, "CA").type).toBe("CA");
});

test("test type 2", () => {
  expect(ship(3, "BA").type).toBe("BA");
});

test("available ship", () => {
  expect(availableShips[0].type).toBe("CA");
});
