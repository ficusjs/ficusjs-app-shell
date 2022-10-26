// @ts-nocheck
export function getPrototypeRoute (helpers) {
  return {
    path: '/prototype',
    action () {
      return import('../pages/prototype.js')
        .then(({ createPrototypePage }) => createPrototypePage(helpers))
        .then(() => 'prototype-page')
    }
  }
}
