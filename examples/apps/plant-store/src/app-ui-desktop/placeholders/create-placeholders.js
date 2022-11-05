import { createIcon } from './icon.js'

export function createPlaceholders (helpers) {
  const { createCustomElement } = helpers
  createCustomElement('fas-desktop-icon-placeholder', createIcon(helpers))
}
