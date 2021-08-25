import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getRadio, getRadioGroup } from '@divriots/starter-furious';

provideDesignSystem().register(getRadio(), getRadioGroup());

export const defaultStory = () => html`
  <fs-radio-group>
    <label style="color: var(--neutral-foreground-rest);" slot="label"> Group label </label>
    <fs-radio>Radio label 1</fs-radio>
    <fs-radio>Radio label 2</fs-radio>
    <fs-radio>Radio label 3</fs-radio>
  </fs-radio-group>
`;
defaultStory.storyName = 'Default';
