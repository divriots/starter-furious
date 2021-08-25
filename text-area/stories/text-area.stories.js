import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTextArea } from '@divriots/starter-furious';

provideDesignSystem().register(getTextArea());

export const defaultStory = () => html` <fs-text-area></fs-text-area> `;
defaultStory.storyName = 'Default';
