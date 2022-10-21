import test from 'ava'
import { init } from '@ficusjs/testing'

test.before(() => {
  init({
    url: URL.file
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
  return loadResource({ url: '/test/fixtures/style.css', is: 'style' })
    .then(() => {
      t.is(globalThis.document.getElementsByTagName('head link')[0].getAttribute('href'), 'yellow')
    })
})
