function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    return 'Parameters must be a Number';
  }

  // Creating the Array buffer with the specified length value
  const buffer = new ArrayBuffer(length);

  // Creating a data view to manipulate the buffer
  const view = new DataView(buffer);

  // Checking the position and set the value
  if (position >= length) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
