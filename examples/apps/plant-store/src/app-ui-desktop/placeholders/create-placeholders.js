import { createIcon } from './icon.js'
import { createText } from './text.js'

export function createPlaceholders (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-desktop-icon-placeholder', createIcon(helpers))
  createCustomElement('fas-desktop-text-placeholder', createText(helpers))
}
