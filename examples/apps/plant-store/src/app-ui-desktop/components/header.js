export function createHeader (helpers) {
  const { html, renderer } = helpers
  return {
    renderer,
    render () {
      return html`
        <header>
          <nav aria-label="Top" class="mx-auto max-w-7xl w-full px-8 h-16">
            <!-- Logo & navigation -->
            <ul> 
              <li>
                <a href="#">
                  <span class="sr-only">FicusJS</span>
                  <img class="h-8 w-auto" src="/assets/img/logo.svg" alt="Ficus logo">
                </a>
              </li>
              <fas-desktop-nav></fas-desktop-nav>
            </ul>
            <!-- Account, search & basket-->
            <ul class="ml-auto">
              <li>
                <a href="#">Sign in</a>
              </li>
              <span class="h-6 w-px mx-2 bg-gray-200" aria-hidden="true"></span>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <!-- Heroicon name: outline/magnifying-glass -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center">
                  <!-- Heroicon name: outline/shopping-bag -->
                  <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      `
    }
  }
}
