import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getCheckbox, getToolbar } from '@divriots/starter-furious';

provideDesignSystem().register(getCheckbox(), getToolbar());

export default {
  title: 'Components/Toolbar',
};

export const defaultStory = () => html`
  <fs-toolbar>
    <label slot="label">Toolbar</label>
    <fs-checkbox>Checkbox</fs-checkbox>
    <fs-checkbox>Checkbox</fs-checkbox>
    <fs-checkbox>Checkbox</fs-checkbox>
  </fs-toolbar>
`;
defaultStory.storyName = 'Default';
