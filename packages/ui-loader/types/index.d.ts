export interface LoaderOptions {
  // root app tag
  appTagName: 'fas-app',

  // breakpoint at which to switch from mobile to desktop
  desktopMediaQuery: '(min-width: 1280px)',

  // should the breakpoint be reactive on resize?
  breakpointReactive: false,

  // desktop shell ui components
  desktopUiTagName: 'fas-ui-desktop',
  desktopUiScriptUrl: '/app-ui-desktop/main.js',

  // mobile shell ui components
  mobileUiTagName: 'fas-ui-mobile',
  mobileUiScriptUrl: '/app-ui-mobile/main.js'
}

export declare function createLoader (options?: Partial<LoaderOptions>)

type TemplateFunction<T> = (
  template: TemplateStringsArray,
  ...values: any[]
) => T

export const html: TemplateFunction<string>
