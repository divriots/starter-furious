import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton, getTooltip } from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getTooltip());

export default {
  title: 'Components/Tooltip',
  argTypes: {
    position: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'radio',
      },
    },
  },
  render: ({ label, position }) => `
  <fs-tooltip 
    anchor="button" 
    ${position ? `position="${position}"` : ''}
  >
    ${label}
  </fs-tooltip>
  <fs-button id="button">Reveal Tooltip</fs-button>
`,
};

export const defaultStory = () => html`
  <div>
    <fs-button id="anchor" style="height: 40px; width: 100px; margin: 100px; background: green;"> Hover me </fs-button>
    <fs-tooltip anchor="anchor">Tooltip text</fs-tooltip>
  </div>
`;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    label: `I'm helping!`,
  },
};
