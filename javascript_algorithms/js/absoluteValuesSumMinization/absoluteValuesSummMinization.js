function absoluteValuesSumMinimization(a) {
  //Find the median
  return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}