import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getRadio, getRadioGroup } from '@divriots/starter-furious';

provideDesignSystem().register(getRadio(), getRadioGroup());

export default {
  title: 'Components/Radio Group',
  argTypes: {
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
  render: ({ disabled, required }) => `
  <fs-radio-group
    ${disabled ? 'disabled' : ''}
    ${required ? 'required' : ''}
  >
    <fs-radio>Apples</fs-radio>
    <fs-radio>Bananas</fs-radio>
    <fs-radio>Tomatoes</fs-radio>
  </fs-radio-group>`,
};

export const defaultStory = () => html`
  <fs-radio-group>
    <label style="color: var(--neutral-foreground-rest);" slot="label"> Group label </label>
    <fs-radio>Radio label 1</fs-radio>
    <fs-radio>Radio label 2</fs-radio>
    <fs-radio>Radio label 3</fs-radio>
  </fs-radio-group>
`;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    disabled: false,
    required: false,
  },
};
