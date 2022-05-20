import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getProgressRing } from '@divriots/starter-furious';

provideDesignSystem().register(getProgressRing());

export default {
  title: 'Components/Progress Ring',
  argTypes: {
    paused: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ paused, value }) => `
  <fs-progress-ring
    ${value ? `value="${value}"` : ''}
    ${paused ? `paused="${paused}"` : ''}
  ></fs-progress-ring>
`,
};

export const defaultStory = () => html` <fs-progress-ring></fs-progress-ring> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    paused: false,
    value: 65,
  },
};
