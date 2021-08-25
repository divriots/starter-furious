import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getSlider, getSliderLabel } from '@divriots/starter-furious';

provideDesignSystem().register(getSlider(), getSliderLabel());

export const defaultStory = () => html` <fs-slider></fs-slider> `;
defaultStory.storyName = 'Default';

export const verticalWithLabelsStory = () => html`
  <fs-slider min="0" max="100" step="10" value="70" orientation="vertical">
    <fs-slider-label position="0">0%</fs-slider-label>
    <fs-slider-label position="10">10%</fs-slider-label>
    <fs-slider-label position="90">90%</fs-slider-label>
    <fs-slider-label position="100">100%</fs-slider-label>
  </fs-slider>
`;
verticalWithLabelsStory.storyName = 'Vertical with labels';

export const orientationWithLabelsStory = () => html`
  <fs-slider min="0" max="100" step="10" value="70">
    <fs-slider-label position="0">0%</fs-slider-label>
    <fs-slider-label position="10">10%</fs-slider-label>
    <fs-slider-label position="90">90%</fs-slider-label>
    <fs-slider-label position="100">100%</fs-slider-label>
  </fs-slider>
`;
orientationWithLabelsStory.storyName = 'Orientation with labels';
