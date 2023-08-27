//外部から使用できる
export function plus(a, b) {
  return a + b;
}

//外部から使用できないようにする
function minus(a, b) {
  return a - b;
}

// export {
//   plus,
//   minus,
// };
