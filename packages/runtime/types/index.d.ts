import { createCustomElement } from '@ficusjs/core'
import { getEventBus } from '@ficusjs/event-bus'
import { getI18n, withI18n } from '@ficusjs/i18n'
import { getRouter } from '@ficusjs/router'
import { html, renderer } from '@ficusjs/renderers/uhtml'
import {
  XStateServiceStatus,
  addXStateService,
  assign,
  createAppState,
  createMachine,
  createPersist,
  createXStateService,
  getAppState,
  getXStateService,
  interpret,
  withLocalState,
  withStore,
  withWorkerStore,
  withXStateService
} from '@ficusjs/state'

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

declare function start (options?: Partial<RuntimeOptions>)

export {
  addXStateService,
  assign,
  createAppState,
  createCustomElement,
  createMachine,
  createPersist,
  createXStateService,
  getAppState,
  getEventBus,
  getI18n,
  getRouter,
  getXStateService,
  html,
  interpret,
  renderer,
  start,
  withI18n,
  withLocalState,
  withStore,
  withWorkerStore,
  withXStateService,
  XStateServiceStatus
}
