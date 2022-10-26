// @ts-nocheck
export function getAppTag () {
  return window.ficusAppShellRuntime && window.ficusAppShellRuntime.appTag
    ? window.ficusAppShellRuntime.appTag
    : 'fas-app'
}
