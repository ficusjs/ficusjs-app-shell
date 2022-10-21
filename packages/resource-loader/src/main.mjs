// @ts-nocheck
function setAttributes (element, attributes) {
  if (attributes) {
    Object.keys(attributes).forEach(k => {
      element.setAttribute(k, attributes[k])
    })
  }
}

function getCacheBuster (cache = true) {
  return cache ? '' : `?${Date.now()}`
}

function createScript (url, attributes = null, cache = true) {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', `${url}${getCacheBuster(cache)}`)
  setAttributes(script, attributes)
  return script
}

function createStyleLink (url, attributes = null, cache = true) {
  const style = document.createElement('link')
  style.setAttribute('rel', 'stylesheet')
  style.setAttribute('type', 'text/css')
  style.setAttribute('href', `${url}${getCacheBuster(cache)}`)
  setAttributes(style, attributes)
  return style
}

function createPromise (dep) {
  if (!dep.url || !dep.is) {
    return Promise.reject(new Error('No url or type given!'))
  }

  if (!window.__ficusjs__.resources[dep.url]) {
    // create a promise to load the resource
    const promise = new Promise((resolve, reject) => {
      const handleResponse = (e) => {
        if (e.error || (e.type && e.type === 'error')) {
          reject(e.error)
        } else {
          window.__ficusjs__.resources[dep.url].hasLoaded = true
          resolve()
        }
      }

      if (dep.is === 'script') {
        const script = createScript(dep.url, dep.attributes, dep.cache)
        script.onerror = handleResponse
        script.onload = handleResponse
        document.body.appendChild(script)
      } else if (dep.is === 'style') {
        const style = createStyleLink(dep.url, dep.attributes, dep.cache)
        style.onerror = handleResponse
        style.onload = handleResponse
        document.getElementsByTagName('head')[0].appendChild(style)
      }
    })
    window.__ficusjs__.resources[dep.url] = { type: dep.is, hasLoaded: false, promise }
    return promise
  } else {
    return window.__ficusjs__.resources[dep.url].promise
  }
}

/**
 * Function to load one or more external resources
 * @param {...object|Array} items The resources to load
 * @returns {Promise} A pending promise
 * @example
 * loadResource(
 *   { url: '/css/label.css', is: 'style' },
 *   { url: '/js/label.iife.js', is: 'script', cache: false },
 *   { url: '/js/label.esm.js', is: 'script', attributes: { type: 'module' } },
 * )
 */
export function loadResource (...items) {
  window.__ficusjs__ = window.__ficusjs__ || {}
  window.__ficusjs__.resources = window.__ficusjs__.resources || {}
  if (!items.length) return Promise.resolve()
  const promises = items.map(x => {
    return createPromise(x)
  })
  return Promise.allSettled(promises)
}
