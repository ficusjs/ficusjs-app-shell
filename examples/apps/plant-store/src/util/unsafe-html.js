/**
 * Function to create valid HTML content nodes from an HTML string
 * @param {string} value
 * @returns {DocumentFragment}
 */
export function unsafeHTML (value) {
  const template = document.createElement('template')
  template.innerHTML = value // innerHTML casts to string internally
  const fragment = document.importNode(template.content, true)
  return fragment
}
