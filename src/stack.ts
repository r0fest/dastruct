export default class Stack<T> {
  private items: T[] = [];

  get count(): number {
    return this.items.length;
  }

  get empty(): boolean {
    return this.count === 0;
  }

  constructor(items: T[] = []) {
    this.items = items;
  }

  push(item: T): number {
    return this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(index: number = this.count - 1): T | undefined {
    return this.items[index];
  }
}
