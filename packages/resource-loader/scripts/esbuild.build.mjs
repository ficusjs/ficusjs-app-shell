import esbuild from 'esbuild'
import { dirname } from 'node:path'

const bundles = [
  { entrypoint: 'src/main.js', splitting: false }
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
    footer: { js: `// FicusJS Resource loader ES Module bundle | v${process.env.npm_package_version}` },
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
