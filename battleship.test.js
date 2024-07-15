import { ship } from "./battleship.js";

test("ship properties", () => {
  expect(ship(3).length).toBe(3);
});
