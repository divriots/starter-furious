import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getProgress } from '@divriots/starter-furious';

provideDesignSystem().register(getProgress());

export const defaultStory = () => html` <fs-progress></fs-progress> `;
defaultStory.storyName = 'Default';
