import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getCheckbox } from '@divriots/starter-furious';

provideDesignSystem().register(getCheckbox());

export default {
  title: 'Components/Checkbox',
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
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
  render: ({ checked, disabled, label, required }) => `<fs-checkbox
    ${checked ? 'checked' : ''}
    ${disabled ? 'disabled' : ''}
    ${required ? 'required' : ''}
    >${label}</fs-checkbox>`,
};

export const defaultStory = () => html` <fs-checkbox>Checkbox</fs-checkbox> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    label: 'Label string',
    checked: false,
    disabled: false,
    required: false,
  },
};
