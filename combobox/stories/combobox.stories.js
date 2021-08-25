import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getCombobox, getOption } from '@divriots/starter-furious';

provideDesignSystem().register(getCombobox(), getOption());

export const defaultStory = () => html`
  <fs-combobox>
    <fs-option value="1">Option 1</fs-option>
    <fs-option value="2">Option 2</fs-option>
    <fs-option value="3">Option 3</fs-option>
  </fs-combobox>
`;
defaultStory.storyName = 'Default';
