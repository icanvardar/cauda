export { };

declare global {
  enum Action {
    ADD,
    REMOVE,
    UPDATE,
  };

  interface IQueue {
    length: number;
    enqueue(item: Item): void;
    dequeue(): Item | undefined;
    peek(): Item | undefined;
  };

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
