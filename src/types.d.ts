export { };

declare global {
  enum Action {
    ADD,
    REMOVE,
    UPDATE,
  }

  interface IQueue {
    enqueue(item: Item): void;
    dequeue(): string | undefined;
    peek(): Item | undefined;
  }

  type Item = {
    proxy: string,
    content: Object,
    action: Action,
  };

  type QueueNode = {
    id: string,
    item: Item,
    next?: QueueNode,
  };

  interface IExtractor {
    extractAll(queue: number): Item[];
  };
};
