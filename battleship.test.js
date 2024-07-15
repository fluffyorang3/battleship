import { ship } from "./battleship.js";

test("ship sinking", () => {
  expect(ship(3).sinkShip()).toBe(true);
});

test("ship sinking", () => {
  expect(ship(3).takeHit()).toBe(1);
});

test("ship length", () => {
  expect(ship(3).getState().length).toBe(3);
});
