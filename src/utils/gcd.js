export const gcd = (x, y) => {
  x = Math.abs(x)
  y = Math.abs(y)

  if (x == y) {
    return x
  }

  if (x > y) {
    return gcd(x - y, y)
  }
  else {
    return gcd(x, y - x)
  }
}