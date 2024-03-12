export default function hasArrayValues(set, array) {
  const result = [];
  array.forEach((value) => {
    if (set.has(value)) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  return result;
}
