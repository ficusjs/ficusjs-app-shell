/* global process */
import esbuild from 'esbuild'
import litPlugin from 'esbuild-plugin-lit'
import glob from 'glob-all'

const bundles = [
  // shell runtime
  'src/app-shell-runtime/main.js',
  
  // app ui
  'src/app-ui-desktop/main.js',
  'src/app-ui-mobile/main.js',

  // app
  'src/main.js',
  
  // service worker
  'src/service-worker/main.js',

  // modules
  ...glob.sync('src/modules/*/module.js').map(module => module)
]

const production = process.env.NODE_ENV === 'production'
const targetDir = production ? 'build' : 'tmp'

const genericBuildOptions = {
  bundle: true,
  sourcemap: production,
  logLevel: 'info',
  minify: true,
  plugins: [
    litPlugin({
      html: {
        htmlMinifier: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeTagWhitespace: true
        }
      }
    })
  ]
}

const generateModuleBuild = lib => {
  const build = {
    entryPoints: [`${lib}`],
    format: 'esm',
    ...genericBuildOptions
  }
  const outputEntrypoint = lib.replace('src/', '')
  build.outfile = `${targetDir}/${outputEntrypoint}`
  return build
}

const builds = [
  ...bundles.map(generateModuleBuild)
]

Promise.all(builds.map(esbuild.build))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
