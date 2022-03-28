import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { setupSpeedyLinks } from '@divriots/dockit-core/speedy-links';
import { baseLayerLuminance, fillColor, provideDesignSystem } from '@divriots/starter-furious';
import { StandardLuminance } from '@microsoft/fast-components';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import logoSvg from './logo.svg?raw';

provideDesignSystem().register();

export const docLayoutTemplate = (content, context) => {
  setupSpeedyLinks({
    mapLinkUrlToModuleUrl: (url) => {
      return context.mapPageUrlToRenderModuleUrl(url);
    },
  });
  return html`
    <style>
      ${styles} .logo {
        color: #d13400;
      }
      .preview-story .story_padded {
        background-color: ${fillColor.createCSS()};
      }
    </style>
    <dockit-layout
      .context="${context}"
      @color-scheme-change="${(event) => {
        if (event.detail.colorScheme === 'dark') {
          document.documentElement.classList.add('dark');
          baseLayerLuminance.setValueFor(document.body, StandardLuminance.DarkMode);
        } else {
          document.documentElement.classList.remove('dark');
          baseLayerLuminance.setValueFor(document.body, StandardLuminance.LightMode);
        }
      }}"
    >
      <div class="logo" slot="logo" aria-label="starter-furious">${unsafeHTML(logoSvg)}</div>
      <div class="prose dark:prose-invert">${unsafeHTML(content)}</div>
    </dockit-layout>
  `;
};
