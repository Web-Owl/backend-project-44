export const gcd = (x, y) => {
  x = Math.abs(x)
  y = Math.abs(y)

  if (x === 0) return y
  if (y === 0) return x

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
