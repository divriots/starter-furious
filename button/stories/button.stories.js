import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton } from '@divriots/starter-furious';

provideDesignSystem().register(getButton());

export default {
  title: 'Components/Button',
  argTypes: {
    appearance: {
      description: 'This controls the basic appearances',
      control: {
        type: 'select',
      },
      options: ['neutral', 'accent', 'lightweight', 'outline', 'stealth', 'withEndStory'],
      default: 'neutral',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ appearance, disabled, label }) => `
    <fs-button
      ${disabled ? 'disabled' : ''}
      ${appearance ? `appearance="${appearance}"` : ''}
    >
      ${label}
    </fs-button>
  `,
};

export const defaultStory = () => html` <fs-button href="#">Button</fs-button> `;
defaultStory.storyName = 'Default';

export const withTargetStory = () => html` <fs-button href="https://microsoft.com" target="_blank">Button</fs-button> `;
withTargetStory.storyName = 'With target';

export const neutralStory = () => html` <fs-button href="#" appearance="neutral">Button</fs-button> `;
neutralStory.storyName = 'Neutral';

export const accentStory = () => html` <fs-button href="#" appearance="accent">Button</fs-button> `;
accentStory.storyName = 'Accent';

export const hypertextStory = () => html` <fs-button href="#" appearance="hypertext">Button</fs-button> `;
hypertextStory.storyName = 'Hypertext';

export const hypertextNoHrefStory = () => html` <fs-button appearance="hypertext">Button</fs-button> `;
hypertextNoHrefStory.storyName = 'Hypertext no href';

export const lightweightStory = () => html` <fs-button href="#" appearance="lightweight">Button</fs-button> `;
lightweightStory.storyName = 'Lightweight';

export const outlineStory = () => html` <fs-button href="#" appearance="outline">Button</fs-button> `;
outlineStory.storyName = 'Outline';

export const stealthStory = () => html` <fs-button href="#" appearance="stealth">Button</fs-button> `;
stealthStory.storyName = 'Stealth';

export const withStartStory = () => html`
  <fs-button href="#">
    Button
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" slot="start">
      <path
        d="M6.5,7.7h-1v-1h1V7.7z M10.6,7.7h-1v-1h1V7.7z M14.7,6.7v2.1h-1v2.6c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.2,0.4-0.3,0.5c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.4,0.1-0.6,0.1H10l-3.5,3v-3H3.9c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.3-0.3-0.5c-0.1-0.2-0.1-0.4-0.1-0.6V8.8h-1V6.7h1V5.2c0-0.2,0-0.4,0.1-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.1,0.3-0.3,0.5-0.3c0.2-0.1,0.4-0.1,0.6-0.1h3.6V1.9C7.3,1.8,7.2,1.7,7.1,1.5C7,1.4,7,1.2,7,1C7,0.9,7,0.8,7,0.6c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2C7.7,0,7.9,0,8,0c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.1,0.3,0.2C8.8,0.4,8.9,0.5,9,0.6C9,0.8,9,0.9,9,1c0,0.2,0,0.4-0.1,0.5C8.8,1.7,8.7,1.8,8.5,1.9v1.7h3.6c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.3,0.3,0.3,0.5c0.1,0.2,0.1,0.4,0.1,0.6v1.5H14.7z M12.6,5.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.2H3.9c-0.1,0-0.3,0.1-0.4,0.2C3.4,4.9,3.4,5,3.4,5.2v6.2c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2h3.6v1.8l2.1-1.8h2.5c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4V5.2z M5.8,8.9c0.3,0.3,0.6,0.5,1,0.7C7.2,9.7,7.6,9.8,8,9.8s0.8-0.1,1.2-0.2c0.4-0.2,0.7-0.4,1-0.7l0.7,0.7c-0.4,0.4-0.8,0.7-1.4,0.9c-0.5,0.2-1,0.3-1.6,0.3s-1.1-0.1-1.6-0.3c-0.5-0.2-1-0.5-1.3-0.9L5.8,8.9z"
      ></path>
    </svg>
  </fs-button>
`;
withStartStory.storyName = 'With start';

export const withEndStory = () => html`
  <fs-button href="#">
    Button
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" slot="end">
      <path
        d="M6.5,7.7h-1v-1h1V7.7z M10.6,7.7h-1v-1h1V7.7z M14.7,6.7v2.1h-1v2.6c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.2,0.4-0.3,0.5c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.4,0.1-0.6,0.1H10l-3.5,3v-3H3.9c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.3-0.3-0.5c-0.1-0.2-0.1-0.4-0.1-0.6V8.8h-1V6.7h1V5.2c0-0.2,0-0.4,0.1-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.1,0.3-0.3,0.5-0.3c0.2-0.1,0.4-0.1,0.6-0.1h3.6V1.9C7.3,1.8,7.2,1.7,7.1,1.5C7,1.4,7,1.2,7,1C7,0.9,7,0.8,7,0.6c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2C7.7,0,7.9,0,8,0c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.1,0.3,0.2C8.8,0.4,8.9,0.5,9,0.6C9,0.8,9,0.9,9,1c0,0.2,0,0.4-0.1,0.5C8.8,1.7,8.7,1.8,8.5,1.9v1.7h3.6c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.3,0.3,0.3,0.5c0.1,0.2,0.1,0.4,0.1,0.6v1.5H14.7z M12.6,5.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.2H3.9c-0.1,0-0.3,0.1-0.4,0.2C3.4,4.9,3.4,5,3.4,5.2v6.2c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2h3.6v1.8l2.1-1.8h2.5c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4V5.2z M5.8,8.9c0.3,0.3,0.6,0.5,1,0.7C7.2,9.7,7.6,9.8,8,9.8s0.8-0.1,1.2-0.2c0.4-0.2,0.7-0.4,1-0.7l0.7,0.7c-0.4,0.4-0.8,0.7-1.4,0.9c-0.5,0.2-1,0.3-1.6,0.3s-1.1-0.1-1.6-0.3c-0.5-0.2-1-0.5-1.3-0.9L5.8,8.9z"
      ></path>
    </svg>
  </fs-button>
`;
withEndStory.storyName = 'With end';

export const iconInDefaultSlotStory = () => html`
  <fs-button href="#">
    Button
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.5,7.7h-1v-1h1V7.7z M10.6,7.7h-1v-1h1V7.7z M14.7,6.7v2.1h-1v2.6c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.2,0.4-0.3,0.5c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.4,0.1-0.6,0.1H10l-3.5,3v-3H3.9c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.3-0.3-0.5c-0.1-0.2-0.1-0.4-0.1-0.6V8.8h-1V6.7h1V5.2c0-0.2,0-0.4,0.1-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.1,0.3-0.3,0.5-0.3c0.2-0.1,0.4-0.1,0.6-0.1h3.6V1.9C7.3,1.8,7.2,1.7,7.1,1.5C7,1.4,7,1.2,7,1C7,0.9,7,0.8,7,0.6c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2C7.7,0,7.9,0,8,0c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.1,0.3,0.2C8.8,0.4,8.9,0.5,9,0.6C9,0.8,9,0.9,9,1c0,0.2,0,0.4-0.1,0.5C8.8,1.7,8.7,1.8,8.5,1.9v1.7h3.6c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.3,0.3,0.3,0.5c0.1,0.2,0.1,0.4,0.1,0.6v1.5H14.7z M12.6,5.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.2H3.9c-0.1,0-0.3,0.1-0.4,0.2C3.4,4.9,3.4,5,3.4,5.2v6.2c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2h3.6v1.8l2.1-1.8h2.5c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4V5.2z M5.8,8.9c0.3,0.3,0.6,0.5,1,0.7C7.2,9.7,7.6,9.8,8,9.8s0.8-0.1,1.2-0.2c0.4-0.2,0.7-0.4,1-0.7l0.7,0.7c-0.4,0.4-0.8,0.7-1.4,0.9c-0.5,0.2-1,0.3-1.6,0.3s-1.1-0.1-1.6-0.3c-0.5-0.2-1-0.5-1.3-0.9L5.8,8.9z"
      ></path>
    </svg>
  </fs-button>
`;
iconInDefaultSlotStory.storyName = 'Icon in default slot';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    label: 'Button',
    disabled: false,
    appearance: 'accent',
  },
};
