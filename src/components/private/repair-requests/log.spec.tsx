import { test, it, expect, assert } from 'vitest';
// Simple unit testing examples
console.log('My first test');
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

it('adds 2 + 3 to equal 5', () => {
    expect(2 + 3).toBe(5);
    assert.equal(2 + 3, 5);
});

it('should throw error when dividing by zero', () => {
    expect(() => divide(4, 0)).toThrow('Cannot divide by zero');
});

function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}