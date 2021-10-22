import { baseLayerLuminance, fillColor, provideDesignSystem } from '@divriots/starter-furious';
import { StandardLuminance } from '@microsoft/fast-components';
import { html } from '@microsoft/fast-element';
import '~/mdjs-layout';
import { logoSvg } from './logo.svg';

provideDesignSystem().register();

export const docLayoutTemplate = (content, context) => html`
  <style>
    .preview-story .story_padded {
      background-color: ${fillColor.createCSS()};
    }
  </style>
  <mdjs-layout
    :context="${() => context}"
    @color-scheme-change="${(_, c) => {
      if (c.event.detail.colorScheme === 'dark') {
        baseLayerLuminance.setValueFor(document.body, StandardLuminance.DarkMode);
      } else {
        baseLayerLuminance.setValueFor(document.body, StandardLuminance.LightMode);
      }
    }}"
  >
    <div slot="logo">${logoSvg}</div>
    <div class="prose dark:prose-light" :innerHTML="${() => content}"></div>
  </mdjs-layout>
`;
