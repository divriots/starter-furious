import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getDivider } from '@divriots/starter-furious';

provideDesignSystem().register(getDivider());

export const defaultStory = () => html` <fs-divider></fs-divider> `;
defaultStory.storyName = 'Default';
