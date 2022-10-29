// @ts-nocheck
export function getAppTag () {
  return window._ficusAppShellRuntime_ && window._ficusAppShellRuntime_.appTag
    ? window._ficusAppShellRuntime_.appTag
    : 'fas-app'
}
