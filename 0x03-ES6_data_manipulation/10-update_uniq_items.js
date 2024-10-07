function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [grocery, quantity] of groceries) {
    if (quantity === 1) {
      groceries.set(grocery, 100);
    }
  }

  return groceries;
}

export default updateUniqueItems;
