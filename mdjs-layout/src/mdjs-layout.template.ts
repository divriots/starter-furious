import { html } from 'lit';
import { MdjsLayout } from './mdjs-layout';

export const mdjsLayoutTemplate = (component: MdjsLayout) => html`
  <header class="header">
    <div class="logo"><slot name="logo"></slot></div>
  </header>
  <button
    class="color-scheme-toggle"
    aria-label="Press to activate ${component.colorScheme === 'dark' ? 'light' : 'dark'} mode"
    aria-live="polite"
    @click="${component.toggleColorScheme}"
  >
    ${component.colorScheme === 'dark' ? '🌙' : '☀'}
  </button>
  <button
    class="navigation-toggle"
    aria-label="Press to ${component.isNavigationShown ? 'close' : 'open'} navigation"
    aria-live="polite"
    @click="${component.toggleNavigation}"
  >
    ${component.isNavigationShown ? '✕' : '☰'}
  </button>
  <div class="navigation-and-content-wrapper">
    <div
      class="navigation-wrapper ${component.isNavigationShown ? 'navigation-wrapper--mobile-show' : ''}"
      @click="${component.hideNavigation}"
    >
      <nav class="navigation prose dark:prose-light">
        <ul>
          ${component.context.pagesGraph
            .filter((group) => group.children.length > 0)
            .map(
              (group) => html` <li>
                <span>${group.key}</span>
                <ul>
                  ${group.children.map(
                    (item) => html`
                      <li>
                        <a
                          href="${component.relativeUrl(item.page.url)}"
                          aria-current="${location.href.endsWith(item.page.url) ? 'location' : ''}"
                          >${item.key}</a
                        >
                      </li>
                    `,
                  )}
                </ul>
              </li>`,
            )}
        </ul>
      </nav>
    </div>
    <main class="content-wrapper">
      <article class="content"><slot></slot></article>
    </main>
  </div>
`;
