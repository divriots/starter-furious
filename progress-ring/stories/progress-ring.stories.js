import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getProgressRing } from '@divriots/starter-furious';

provideDesignSystem().register(getProgressRing());

export const defaultStory = () => html` <fs-progress-ring></fs-progress-ring> `;
defaultStory.storyName = 'Default';
