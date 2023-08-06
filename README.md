# Stack Data Structure

[![GitHub license](https://img.shields.io/github/license/sachintalekar07/stack)](https://github.com/sachintalekar07/stack/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@sachintalekar07/stack.svg)](https://www.npmjs.com/package/@sachintalekar07/stack

## Description

A simple and efficient implementation of a stack data structure in JavaScript. This module provides methods for managing a stack, such as push, pop, peek, and more.

## Installation

To install the Stack module, use npm:

```bash
npm install @sachin.talekar07/stack
```

Usage

Basic Usage

```bash
const Stack = require('your-stack-module');

const stack = Stack();

stack.push(42);
stack.push(13);
stack.push(7);

console.log(stack.peek()); // Output: 7

stack.pop();
console.log(stack.size()); // Output: 2
```
## API

The Stack module provides the following methods:

- `push(item)`: Add an item to the top of the stack.
- `pop()`: Remove and return the top item from the stack.
- `peek()`: Return the top item without removing it from the stack.
- `isEmpty()`: Check if the stack is empty (returns true or false).
- `size()`: Get the number of items in the stack.
- `clear()`: Remove all items from the stack.


Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Contact
If you have any questions or feedback, you can reach me at sachin.talekar07@gmail.com or https://github.com/sachintalekar07.
