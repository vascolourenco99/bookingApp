export const compare = (a, b) => {
  if (a.newPrice > b.newPrice) {
    return -1;
  }
  if (a.newPrice < b.newPrice) {
    return 1;
  }
  return 0;
};

export const comparision = (a, b) => {
  if (a.newPrice < b.newPrice) {
    return -1;
  }
  if (a.newPrice > b.newPrice) {
    return 1;
  }
  return 0;
};

