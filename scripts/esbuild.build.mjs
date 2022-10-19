import esbuild from 'esbuild'
import { dirname } from 'node:path'
import glob from 'glob-all'

const bundles = [
  // app
  { entrypoint: 'src/app-ui-desktop/main.js', splitting: true },
  { entrypoint: 'src/app-ui-mobile/main.js', splitting: true },

  // shell runtime
  { entrypoint: 'src/shell-runtime/main.js', splitting: true },

  // service worker
  { entrypoint: 'src/service-worker/main.js', splitting: false },

  // app shell
  { entrypoint: 'src/main.js', splitting: false },

  // modules
  ...glob.sync('src/modules/*/module.js').map(module => ({ entrypoint: module, splitting: true }))
]

const production = process.env.NODE_ENV === 'production'
const targetDir = production ? 'build' : 'tmp'

const genericBuildOptions = {
  bundle: true,
  sourcemap: production,
  logLevel: 'info',
  minify: true
}

const generateModuleBuild = lib => {
  const build = {
    entryPoints: [`${lib.entrypoint}`],
    format: 'esm',
    footer: { js: `// FicusJS App Shell Example App ${lib.entrypoint} ES Module bundle | v${process.env.npm_package_version}` },
    ...genericBuildOptions
  }
  const outputEntrypoint = lib.entrypoint.replace('src/', '')
  if (!lib.splitting) {
    build.outfile = `${targetDir}/${outputEntrypoint}`
  } else {
    build.splitting = true
    build.outdir = `${targetDir}/${dirname(outputEntrypoint)}`
  }
  return build
}

const builds = [
  ...bundles.map(generateModuleBuild)
]

Promise.all(builds.map(esbuild.buildSync))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
