import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getBadge } from '@divriots/starter-furious';

provideDesignSystem().register(getBadge());

export const defaultStory = () => html`
  <div>
    <style>
      /* For example purposes only. App authors needs to define */

      fs-badge {
        --badge-fill-primary: rgba(255, 0, 0, 1);
        --badge-fill-secondary: #00ff00;
        --badge-fill-transparent: transparent;
        --badge-color-black: #000000;
        --badge-color-white: #ffffff;
      }
    </style>
    <fs-badge fill="primary" color="white">Badge</fs-badge>
  </div>
`;
defaultStory.storyName = 'Default';
