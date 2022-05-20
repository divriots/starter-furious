import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTextArea } from '@divriots/starter-furious';

provideDesignSystem().register(getTextArea());

export default {
  title: 'Components/Text Area',
  argTypes: {
    appearance: {
      defaultValue: 'outlined',
      options: ['filled', 'outlined'],
      control: {
        type: 'radio',
      },
    },
    autoFocus: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      control: {
        type: 'boolean',
      },
    },
    resize: {
      options: ['both', 'horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ appearance, autoFocus, disabled, placeholder, readonly, resize, required }) => `
<fs-text-area
  ${appearance ? `appearance="${appearance}"` : ''}
  ${autoFocus ? 'autofocus' : ''}
  ${disabled ? 'disabled' : ''}
  ${placeholder ? `placeholder="${placeholder}"` : ''}
  ${readonly ? 'readonly' : ''}
  ${resize ? `resize="${resize}"` : ''}
  ${required ? 'required' : ''}
></fs-text-area>`,
};

export const defaultStory = () => html` <fs-text-area></fs-text-area> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    placeholder: '',
    autoFocus: false,
    disabled: false,
    readonly: false,
    required: false,
  },
};
