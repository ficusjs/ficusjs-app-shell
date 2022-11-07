import * as helpers from '@ficusjs/app-shell-runtime'
import { start } from '@ficusjs/app-shell-runtime'
import { loader } from '../util/loader.js'
import { createComponents } from './components/create-components.js'
import { createPlaceholders } from './placeholders/create-placeholders.js'
import { breakpointConfig } from '../util/breakpoint-config.js'

loader('desktop')
  .then(() => {
    createComponents(helpers)
    createPlaceholders(helpers)
    start({ breakpointConfig })
  })
