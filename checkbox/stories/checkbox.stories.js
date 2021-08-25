import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getCheckbox } from '@divriots/starter-furious';

provideDesignSystem().register(getCheckbox());

export const defaultStory = () => html` <fs-checkbox>Checkbox</fs-checkbox> `;
defaultStory.storyName = 'Default';
