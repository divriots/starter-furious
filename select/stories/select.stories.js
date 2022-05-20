import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getOption, getSelect } from '@divriots/starter-furious';

provideDesignSystem().register(getOption(), getSelect());

export default {
  title: 'Components/Select',
  argTypes: {
    appearance: {
      options: ['filled', 'outlined', 'stealth'],
      control: {
        type: 'radio',
      },
      defaultValue: 'outlined',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    position: {
      options: ['above', 'below'],
      control: {
        type: 'radio',
      },
      defaultValue: 'below',
    },
  },
  render: ({ appearance, disabled, position }) => `
  <fs-select
    ${appearance ? `appearance="${appearance}"` : ''}
    ${disabled ? 'disabled' : ''} 
    ${position ? `position="${position}"` : ''}
    style="margin-bottom: 200px;"
  >
    <fs-option>Option One</fs-option>
    <fs-option>Option Two</fs-option>
    <fs-option>Option Three</fs-option>
    <fs-option>Option Four</fs-option>
  </fs-select>
`,
};

export const defaultStory = () => html`
  <fs-select>
    <fs-option value="1">Option 1</fs-option>
    <fs-option value="2">Option 2</fs-option>
    <fs-option value="3">Option 3</fs-option>
  </fs-select>
`;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    disabled: false,
  },
};
