const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // Get the current count for the endpoint, default to 0 if not found
  let endpointCount = weakMap.get(endpoint) || 0;

  // Implement the count first
  endpointCount += 1;

  // Update the WeakMap with the new count
  weakMap.set(endpoint, endpointCount);

  // Check if the count is 5 or more, and throw an error if so
  if (endpointCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
