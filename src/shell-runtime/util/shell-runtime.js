// @ts-nocheck
import { createCustomElement } from '@ficusjs/core'
import { getEventBus } from '@ficusjs/event-bus'
import { getI18n, withI18n } from '@ficusjs/i18n'
import { getRouter, addMatcherToRoute } from '@ficusjs/router'
import {
  addXStateService,
  assign,
  createAppState,
  createMachine,
  createPersist,
  createXStateService,
  getAppState,
  getXStateService,
  withLocalState,
  withStore,
  withXStateService
} from '@ficusjs/state'
import { html, renderer } from '../util/renderer.js'

export {
  addMatcherToRoute,
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
  renderer,
  withI18n,
  withLocalState,
  withStore,
  withXStateService
}
