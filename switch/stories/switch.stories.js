import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getSwitch } from '@divriots/starter-furious';

provideDesignSystem().register(getSwitch());

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
