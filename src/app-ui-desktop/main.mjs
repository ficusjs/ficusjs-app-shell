import { loader } from '../util/loader.mjs'
import * as helpers from '../util/shell-runtime.mjs'
import { createComponents } from './components/create-components.mjs'

loader().then(() => createComponents(helpers))
