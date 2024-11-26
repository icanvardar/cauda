/**
  * @implements {IExtractor}
  */
class Extractor {
  /**
    * @param {IQueue} queue
    * @returns {Item[]}
    */
  static extractAll(queue) {
    /** @type {Item[]} */
    let result = [];

    while (queue.length !== 0) {
      let item = queue.dequeue();

      if (item !== undefined) {
        result.push(item);
      }
    }

    return result;
  }
}

export default Extractor;
