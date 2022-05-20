import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getNumberField } from '@divriots/starter-furious';

provideDesignSystem().register(getNumberField());

export default {
  title: 'Components/Number Field',
  argTypes: {
    appearance: {
      defaultValue: 'outline',
      options: ['filled', 'outline'],
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
    hideStep: {
      control: {
        type: 'boolean',
      },
    },
    maxlength: {
      control: {
        type: 'number',
      },
    },
    minlength: {
      control: {
        type: 'number',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    readonly: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    step: {
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    size: {
      control: {
        type: 'number',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
  },
  render: ({
    appearance,
    autoFocus,
    disabled,
    hideStep,
    label,
    maxlength,
    minlength,
    placeholder,
    readonly,
    required,
    size,
    step,
    value,
  }) => `
  <fs-number-field
    ${appearance ? `appearance="${appearance}"` : ''}
    ${autoFocus ? 'autofocus' : ''}
    ${disabled ? 'disabled' : ''}
    ${hideStep ? 'hide-step' : ''}
    ${maxlength ? `maxlength="${maxlength}"` : ''}
    ${minlength ? `minlength="${minlength}"` : ''}
    ${placeholder ? `placeholder="${placeholder}"` : ''}
    ${readonly ? 'readonly' : ''}
    ${required ? 'required' : ''}
    ${size ? `size="${size}"` : ''}
    ${step ? `step="${step}"` : ''}
    ${value ? `value="${value}"` : ''}
  >
    ${label ? `${label}` : ''}
  </fs-number-field>
`,
};

export const defaultStory = () => html` <fs-number-field placeholder="number"></fs-number-field> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    placeholder: 'type a number',
    autoFocus: false,
    disabled: false,
    hideStep: false,
    readonly: false,
    required: false,
  },
};
