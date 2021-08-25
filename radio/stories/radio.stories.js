import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getRadio } from '@divriots/starter-furious';

provideDesignSystem().register(getRadio());

export const defaultStory = () => html` <fs-radio>Label</fs-radio> `;
defaultStory.storyName = 'Default';
