import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getOption, getSelect } from '@divriots/starter-furious';

provideDesignSystem().register(getOption(), getSelect());

export const defaultStory = () => html`
  <fs-select>
    <fs-option value="1">Option 1</fs-option>
    <fs-option value="2">Option 2</fs-option>
    <fs-option value="3">Option 3</fs-option>
  </fs-select>
`;
defaultStory.storyName = 'Default';
