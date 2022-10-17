export function getAppTag () {
  return window.ficusAppShell && window.ficusAppShell.appTag
    ? window.ficusAppShell.appTag
    : 'fas-app'
}
