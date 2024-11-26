import Queue from "../src/queue.js";
import { mock } from "node:test";

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

/** @type {Item} */
let item = createItem("https://pro.xy", { field: "test" }, 0);

export const mocks = {
  createQueue,
  createItem,
};

export const constants = {
  item,
};

