import { loader } from '../util/loader.js'
import * as helpers from '../util/shell-runtime.js'
import { createComponents } from './components/create-components.js'

loader('mobile').then(() => createComponents(helpers))
