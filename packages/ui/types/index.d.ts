export interface AppShellOptions {
  // root app tag
  appTagName: 'fas-app',

  // breakpoint at which to switch from mobile to desktop
  desktopMediaQuery: '(min-width: 1280px)',

  // should the breakpoint be reactive on resize?
  reactive: false,

  // desktop shell ui components
  desktopUiTagName: 'fas-ui-desktop',
  desktopUiScriptUrl: '/app-ui-desktop/main.mjs',

  // mobile shell ui components
  mobileUiTagName: 'fas-ui-mobile',
  mobileUiScriptUrl: '/app-ui-mobile/main.mjs'
}

export declare function createAppShellComponents (options: AppShellOptions)
