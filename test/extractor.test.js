import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { mocks, constants } from "./setup.mjs";
import Extractor from "../src/extractor.js";

describe("Extractor class", () => {
  /** @type {IQueue} */
  let queue;
  /** @type {Item} */
  let item = constants.item;

  beforeEach(() => {
    queue = mocks.createQueue();
  });

  it("extracts items in queue", () => {
    for (let i = 0; i < 50; ++i) {
      queue.enqueue(item);
    }

    assert.equal(queue.length, 50);

    const result = Extractor.extractAll(queue);

    assert.equal(queue.length, 0);
    assert.equal(result.length, 50);
  });
});
