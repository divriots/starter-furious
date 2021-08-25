import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTextField } from '@divriots/starter-furious';

provideDesignSystem().register(getTextField());

export const defaultStory = () => html` <fs-text-field placeholder="name"></fs-text-field> `;
defaultStory.storyName = 'Default';
