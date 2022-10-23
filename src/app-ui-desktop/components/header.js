export function createHeader (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
            <nav>
              <ul>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#" role="button">Button</a></li>
              </ul>
            </nav>
            
            <a href="/" aria-label="Company" title="Company" class="inline-flex items-center lg:mx-auto">
              <img src="/assets/img/logo.svg" alt="" style="height: 64px;">
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">FicusJS</span>
            </a>
            <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
              <li><a href="/" aria-label="Sign in" title="Sign in" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Sign in</a></li>
              <li>
                <a
                  href="/"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  }
}
