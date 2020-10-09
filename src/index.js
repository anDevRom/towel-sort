
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  const result = []
  matrix.forEach((item, index) => {
    if (Array.isArray(item) && (index + 1) % 2 === 0) {
      result.push(...towelSort(item).reverse())
    } else if (Array.isArray(item)) {
      result.push(...towelSort(item))
    } else {
      result.push(item)
    }
  })
  return result
}
