import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getListbox, getOption } from '@divriots/starter-furious';

provideDesignSystem().register(getListbox(), getOption());

export default {
  title: 'Components/Listbox',
};

export const defaultStory = () => html`
  <fs-listbox>
    <fs-option value="1">Option 1</fs-option>
    <fs-option value="2">Option 2</fs-option>
    <fs-option value="3">Option 3</fs-option>
  </fs-listbox>
`;
defaultStory.storyName = 'Default';
