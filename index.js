const Stack = () => {
  const items = []

  const isEmpty = () => items.length === 0

  const peek = () => isEmpty() ? null : items[items.length - 1]

  const push = item => items.push(item)

  const pop = () => isEmpty() ? null : items.pop()

  const size = () => items.length

  const clear = () => {
    items.length = 0
  }

  return {
    peek,
    push,
    pop,
    size,
    clear,
    isEmpty
  }
}

module.exports = Stack
