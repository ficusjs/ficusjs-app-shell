export function getModuleLayoutItems (modules, getConfig) {
  const items = modules.reduce((prev, curr) => [...prev, getConfig(curr)], []).filter(x => x != null)
  const sortedItems = items.map((component) => {
    const moduleKeys = Object.keys(component)
    return moduleKeys.map((key) => {
      return component[key]
    })
  }).flat().sort((a, b) => a.order - b.order)
  return sortedItems
}
