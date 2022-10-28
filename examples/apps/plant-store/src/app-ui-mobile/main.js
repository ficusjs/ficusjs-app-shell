import * as helpers from '@ficusjs/app-shell-runtime'
import { start } from '@ficusjs/app-shell-runtime'
import { loader } from '../util/loader.js'
import { createComponents } from './components/create-components.js'

loader('mobile')
  .then(() => {
    createComponents(helpers)
    start()
  })
