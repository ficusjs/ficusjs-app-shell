export class ExtensionBuilder {
  constructor () {
    this.extensions = {}
  }

  with (extension, ...args) {
    this.extensions[extension] = { extension, args }
    return this
  }

  create (options) {
    return Object.keys(this.extensions)
      .reduce((prev, current) => {
        const ext = this.extensions[current]
        return ext.extension.apply(null, [...ext.args, prev])
      }, options)
  }
}
