import minifyHTML from 'rollup-plugin-minify-html-literals'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import glob from 'glob-all'
import { dirname } from 'node:path'

function getPlugins () {
  return [
    nodeResolve(),
    filesize(),
    minifyHTML(),
    terser({ mangle: { keep_fnames: true, toplevel: true, module: true } })
  ]
}

const production = process.env.NODE_ENV === 'production'
const targetDir = production ? 'build' : 'tmp'

const config = glob.sync('src/modules/*/module.js').map(module => {
  const build = {
    input: module,
    output: {
      dir: dirname(module).replace('src/', `${targetDir}/`),
      format: 'es'
    },
    external: [],
    sourcemap: production,
    plugins: getPlugins()
  }
  return build
})

export default config
