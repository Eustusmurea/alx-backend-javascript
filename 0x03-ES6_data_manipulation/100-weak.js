const weakMap = new WeakMap();

export { weakMap, queryAPI };

function queryAPI(endpoint) {
  // Initialize count if not already present
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if count is >= 5 and throw error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the count for this endpoint
  return count;
}
