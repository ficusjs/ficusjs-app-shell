import esbuild from 'esbuild'

const bundles = [
  // app bundles
  'app-ui-desktop/main.mjs',
  'app-ui-mobile/main.mjs',

  // module bundles
  'modules/module-1/module.mjs',
  'modules/module-2/module.mjs',

  // shell runtime
  'shell-runtime/main.mjs',

  // service worker
  'service-worker/main.mjs',

  // app shell
  'main.mjs'
]

const production = process.env.NODE_ENV === 'production'
const targetDir = production ? 'build' : 'tmp'

const genericBuildOptions = {
  bundle: true,
  sourcemap: production,
  logLevel: 'info',
  minify: true
}

const generateModuleBuild = lib => ({
  entryPoints: [`src/${lib}`],
  outfile: `${targetDir}/${lib}`,
  format: 'esm',
  footer: { js: `// FicusJS App Shell Example App ${lib} ES Module bundle | v${process.env.npm_package_version}` },
  ...genericBuildOptions
})

const builds = [
  ...bundles.map(generateModuleBuild)
]

Promise.all(builds.map(esbuild.buildSync))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
