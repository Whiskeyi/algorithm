var evalRPN = function (tokens) {
  const s = new Map([
    ["+", (a, b) => a * 1 + b * 1],
    ["-", (a, b) => b - a],
    ["*", (a, b) => b * a],
    ["/", (a, b) => (b / a) | 0]
  ]);
  const stack = [];
  for (const i of tokens) {
    if (!s.has(i)) {
      stack.push(i);
      continue;
    }
    stack.push(s.get(i)(stack.pop(), stack.pop()))
  }
  return stack.pop();
};