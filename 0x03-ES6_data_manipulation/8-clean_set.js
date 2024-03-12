export default function cleanSet(set, startString) {
  let result = '';

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  });

  // Remove the trailing dash if there's any
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
