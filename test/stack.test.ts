import { Stack } from "../dist/dastruct";

describe('Stack init', () => {
  test('empty', () => {
    const stack = new Stack();

    expect(stack.count).toBe(0);
  });

  test('not empty', () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.count).toBe(3);
  });

  test('check data', () => {
    const stack = new Stack([1, 2, 3]);

    for (let i = 0; i < stack.count; i++) {
      expect(stack.peek(i)).toBe(i + 1);
    }
  });
});

const stack = new Stack([1, 2, 3]);

describe('Stack method push', () => {
  test('return', () => {
    expect(stack.push(10)).toBe(4);
  });

  test('count after', () => {
    expect(stack.count).toBe(4);
  });

  test('last value', () => {
    expect(stack.peek(stack.count - 1)).toBe(10);
  });
});

describe('Stack method pop', () => {
  test('return', () => {
    expect(stack.pop()).toBe(10);
  });

  test('count after', () => {
    expect(stack.count).toBe(3);
  });

  test('last value', () => {
    expect(stack.peek(stack.count - 1)).toBe(3);
  });
});

describe('Stack method peek', () => {
  test('negative', () => {
    expect(stack.peek(-1)).toBe(undefined);
  });

  test('result', () => {
    expect(stack.peek(0)).toBe(1);
    expect(stack.peek(1)).toBe(2);
    expect(stack.peek(2)).toBe(3);
  });
});

describe('Stack method isEmpty', () => {
  test('not empty', () => {
    expect(stack.empty).toBe(false);
  });

  test('empty', () => {
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.empty).toBe(true);
  });
});
