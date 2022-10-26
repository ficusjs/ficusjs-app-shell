export interface Breakpoint {
  method: string
}

export interface BreakpointMap {
  [key: number]: Breakpoint
}

export interface BreakpointConfig {
  reactive: boolean;
  breakpoints: BreakpointMap
}

export interface RuntimeOptions {
  appTag: string,
  breakpointConfig: BreakpointConfig,
  configUrl: string,
  routerOutletSelector: string,
  routerMode: 'hash' | 'history'
}

export declare function start (options?: Partial<RuntimeOptions>)
