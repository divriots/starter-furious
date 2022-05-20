import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getProgress } from '@divriots/starter-furious';

provideDesignSystem().register(getProgress());

export default {
  title: 'Components/Progress',
  argTypes: {
    paused: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ paused, value }) => `
  <fs-progress
    ${paused ? `paused="${paused}"` : ''}
    ${value ? `value=${value}` : ''}
  ></fs-progress>
`,
};

export const defaultStory = () => html` <fs-progress></fs-progress> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    paused: false,
    value: 50,
  },
};
