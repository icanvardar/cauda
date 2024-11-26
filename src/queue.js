/** 
  * @implements {IQueue}
  */
class Queue {
  /** @type {QueueNode} */
  #head;
  /** @type {QueueNode} */
  #tail;
  length = 0;

  /**
  * @return {string}
  */
  #createItemUUID() {
    return crypto.randomUUID();
  }

  /**
  * @param {Item} item 
  */
  enqueue(item) {
    /** @type {QueueNode} */
    const node = { id: this.#createItemUUID(), item };

    this.length++;

    if (!this.#tail) {
      this.#head = this.#tail = node;
      return;
    }

    this.#tail.next = node;
    this.#tail = this.#tail.next;
  }

  /**
  * @return {Item | undefined}
  */
  dequeue() {
    if (!this.#head) {
      return undefined;
    }

    this.length--;

    const head = this.#head;
    this.#head = this.#head.next;

    head.next = undefined;

    if (this.length === 0) {
      this.#tail = undefined;
    }

    return head.item;
  }

  /**
  * @return {Item | undefined}
  */
  peek() {
    return this.#head.item;
  }
}

export default Queue;
