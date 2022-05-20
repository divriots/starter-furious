import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getRadio } from '@divriots/starter-furious';

provideDesignSystem().register(getRadio());

export default {
  title: 'Components/Radio',
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ checked, disabled, required, label }) => `
  <fs-radio
    ${checked ? 'checked' : ''}
    ${disabled ? 'disabled' : ''}
    ${required ? 'required' : ''}
  >${label}</fs-radio>
`,
};

export const defaultStory = () => html` <fs-radio>Label</fs-radio> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
    required: false,
  },
};
