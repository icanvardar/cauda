import Queue from "../src/queue.js";
import { describe, it, mock, beforeEach } from "node:test";
import assert from "node:assert";

const createQueue = mock.fn(function mock__createQueue() {
  return new Queue();
});

const createItem = mock.fn(function mock__createItem(proxy, content, action) {
  return {
    proxy,
    content,
    action,
  };
});

describe("Queue class", () => {
  /** @type {IQueue} */
  let queue;
  /** @type {Item} */
  let item = createItem("https://pro.xy", { field: "test" }, 0);

  beforeEach(() => {
    queue = createQueue();
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

    assert.strictEqual(typeof result, "string");
  });

  it("tries to dequeue empty queue", () => {
    const result = queue.dequeue();

    assert.strictEqual(result, undefined);
  });
});
