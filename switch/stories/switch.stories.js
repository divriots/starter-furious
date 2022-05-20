import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getSwitch } from '@divriots/starter-furious';

provideDesignSystem().register(getSwitch());

export default {
  title: 'Components/Switch',
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
  },
  render: ({ checked, disabled, label }) => `
<fs-switch
  ${checked ? 'checked' : ''}
  ${disabled ? 'disabled' : ''}
>${label}
  <span slot="checked-message">On</span>
  <span slot="unchecked-message">Off</span>
</fs-switch>
`,
};

export const defaultStory = () => html` <fs-switch></fs-switch> `;
defaultStory.storyName = 'Default';

export const withSlotStory = () => html` <fs-switch>Dark Mode</fs-switch> `;
withSlotStory.storyName = 'With slot';

export const withSlotCheckedAndUncheckedMessageStory = () => html`
  <fs-switch>
    Theme
    <div slot="checked-message">Light</div>
    <div slot="unchecked-message">Dark</div>
  </fs-switch>
`;
withSlotCheckedAndUncheckedMessageStory.storyName = 'With slot, checked and unchecked message';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
  },
};
