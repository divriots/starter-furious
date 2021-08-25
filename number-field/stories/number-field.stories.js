import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getNumberField } from '@divriots/starter-furious';

provideDesignSystem().register(getNumberField());

export const defaultStory = () => html` <fs-number-field placeholder="number"></fs-number-field> `;
defaultStory.storyName = 'Default';
