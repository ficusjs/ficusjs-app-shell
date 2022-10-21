import test from 'ava'
import { pathToFileURL } from 'node:url'
import { dirname } from 'node:path'
import { init } from '@ficusjs/testing'

test.before(() => {
  init({
    url: pathToFileURL(dirname(import.meta.url)),
  })
})

test('resource loader function', async t => {
  const loadResourceModule = await import('../src/main.mjs')
  const { loadResource } = loadResourceModule
  t.is(typeof loadResource, 'function')
})

test('load style resource', async t => {
  const loadResourceModule = await import('../src/main.mjs')
  const { loadResource } = loadResourceModule
  return loadResource({ url: '/fixtures/style.css', is: 'style' })
    .then(() => {
      t.is(globalThis.document.getElementsByTagName('head link')[0].getAttribute('href'), 'yellow')
    })
})
