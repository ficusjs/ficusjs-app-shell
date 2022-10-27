// @ts-nocheck
import { createCustomElement } from '@ficusjs/core'
import { getEventBus } from '@ficusjs/event-bus'
import { getI18n, withI18n } from '@ficusjs/i18n'
import { getRouter } from '@ficusjs/router'
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
  withXStateService,
  wrapXStateService
} from '@ficusjs/state'
import { html, renderer } from './renderer.mjs'

export {
  XStateServiceStatus,
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
  withI18n,
  withLocalState,
  withStore,
  withWorkerStore,
  withXStateService,
  wrapXStateService
}
