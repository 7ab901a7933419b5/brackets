module.exports = function check(str, bracketsConfig) {
  let cancel = Object.fromEntries(bracketsConfig);
  let stack = [];
  for (const c of str.split("")) {
    if (stack && cancel[stack[stack.length - 1]] == c) { stack.pop(); }
    else { stack.push(c); }
  }
  return stack.length == 0;
}
