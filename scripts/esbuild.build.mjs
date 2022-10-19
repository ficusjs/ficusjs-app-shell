import esbuild from 'esbuild'
import { dirname } from 'node:path'

const bundles = [
  // app bundles
  { entrypoint: 'app-ui-desktop/main.js', splitting: true },
  { entrypoint: 'app-ui-mobile/main.js', splitting: true },

  // module bundles
  { entrypoint: 'modules/basket/module.js', splitting: true },
  { entrypoint: 'modules/checkout/module.js', splitting: true },
  { entrypoint: 'modules/home/module.js', splitting: true },
  { entrypoint: 'modules/products/module.js', splitting: true },

  // shell runtime
  { entrypoint: 'shell-runtime/main.js', splitting: true },

  // service worker
  { entrypoint: 'service-worker/main.js', splitting: false },

  // app shell
  { entrypoint: 'main.js', splitting: false }
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
    entryPoints: [`src/${lib.entrypoint}`],
    format: 'esm',
    footer: { js: `// FicusJS App Shell Example App ${lib.entrypoint} ES Module bundle | v${process.env.npm_package_version}` },
    ...genericBuildOptions
  }
  if (!lib.splitting) {
    build.outfile = `${targetDir}/${lib.entrypoint}`
  } else {
    build.splitting = true
    build.outdir = `${targetDir}/${dirname(lib.entrypoint)}`
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
