export default class LinkedList {
  head: string | null = null;

  add(): void {
    this.head = 'test';
  }

  remove(): void {
    this.head = null;
  }
}
