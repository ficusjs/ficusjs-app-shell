export function getAppTag () {
  return window.ficusShellRuntime && window.ficusShellRuntime.appTag
    ? window.ficusShellRuntime.appTag
    : 'fas-app'
}
