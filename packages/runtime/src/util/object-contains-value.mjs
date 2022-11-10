export function objectContainsValue (object, value) {
  if (!object) return false
  return Object.values(object).some(function (val) {
    if (val === value) {
      return true
    }
    if (val && typeof val === 'object') {
      return objectContainsValue(val, value)
    }
    return false
  })
}
