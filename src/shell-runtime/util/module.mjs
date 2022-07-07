export function use (module, { ...args }) {
  if (module.create && typeof module.create === 'function') {
    return module.create({
      ...args,
      use
    })
  }
}
