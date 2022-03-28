import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { baseLayerLuminance, fillColor, provideDesignSystem } from '@divriots/starter-furious';
import { StandardLuminance } from '@microsoft/fast-components';
import { html } from '@microsoft/fast-element';
import { logoSvg } from './logo.svg';

provideDesignSystem().register();

export const docLayoutTemplate = (content, context) => {
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
      :context="${() => context}"
      @color-scheme-change="${(_, c) => {
        if (c.event.detail.colorScheme === 'dark') {
          document.documentElement.classList.add('dark');
          baseLayerLuminance.setValueFor(document.body, StandardLuminance.DarkMode);
        } else {
          document.documentElement.classList.remove('dark');
          baseLayerLuminance.setValueFor(document.body, StandardLuminance.LightMode);
        }
      }}"
    >
      <div class="logo" slot="logo" aria-label="starter-furious">${logoSvg}</div>
      <div class="prose dark:prose-invert" :innerHTML="${() => content}"></div>
    </dockit-layout>
  `;
};
