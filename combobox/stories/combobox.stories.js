import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getCombobox, getOption } from '@divriots/starter-furious';

provideDesignSystem().register(getCombobox(), getOption());

export default {
  title: 'Components/Combobox',
  argTypes: {
    appearance: {
      options: ['filled', 'outline'],
      control: {
        type: 'radio',
      },
    },
    autocomplete: {
      options: ['inline', 'list', 'none', 'both'],
      control: {
        type: 'radio',
      },
    },
    position: {
      options: ['above', 'below'],
      control: {
        type: 'radio',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ appearance, autocomplete, position, required }) => `
  <fs-combobox
    ${appearance ? `appearance="${appearance}"` : ''}
    ${appearance ? `autocomplete="${autocomplete}"` : ''}
    ${required ? 'required' : ''}
    ${position ? `position="${position}"` : ''}
    style="margin-bottom: 500px;"
  >
    <fs-option>Please Please Me</fs-option>
    <fs-option>With The Beatles</fs-option>
    <fs-option>A Hard Day's Night</fs-option>
    <fs-option>Beatles for Sale</fs-option>
    <fs-option>Help!</fs-option>
    <fs-option>Rubber Soul</fs-option>
    <fs-option>Revolver</fs-option>
    <fs-option>Sgt. Pepper's Lonely Hearts Club Band</fs-option>
    <fs-option>Magical Mystery Tour</fs-option>
    <fs-option>The Beatles</fs-option>
    <fs-option>Yellow Submarine</fs-option>
    <fs-option>Abbey Road</fs-option>
    <fs-option>Let It Be</fs-option>
  </fs-combobox>
`,
};

export const defaultStory = () => html`
  <fs-combobox>
    <fs-option value="1">Option 1</fs-option>
    <fs-option value="2">Option 2</fs-option>
    <fs-option value="3">Option 3</fs-option>
  </fs-combobox>
`;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    value: 'Christopher Eccleston',
    appearance: 'outline',
  },
};
