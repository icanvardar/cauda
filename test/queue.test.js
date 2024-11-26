import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { mocks, constants } from "./setup.mjs";

describe("Queue class", () => {
  /** @type {IQueue} */
  let queue;
  let item = constants.item;

  beforeEach(() => {
    queue = mocks.createQueue();
  });

  it("enqueues and peaks item", () => {
    queue.enqueue(item);

    const result = queue.peek();

    assert.equal(item.action, result.action);
    assert.equal(item.content, result.content);
    assert.equal(item.proxy, result.proxy);
  });

  it("dequeues item", () => {
    queue.enqueue(item);

    const result = queue.dequeue();

    assert.equal(item.action, result.action);
    assert.equal(item.content, result.content);
    assert.equal(item.proxy, result.proxy);
  });

  it("tries to dequeue empty queue", () => {
    const result = queue.dequeue();

    assert.strictEqual(result, undefined);
  });
});
