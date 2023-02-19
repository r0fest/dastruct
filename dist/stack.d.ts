export default class Stack<T> {
    private items;
    get count(): number;
    get empty(): boolean;
    constructor(items?: T[]);
    push(item: T): number;
    pop(): T | undefined;
    peek(index?: number): T | undefined;
}
