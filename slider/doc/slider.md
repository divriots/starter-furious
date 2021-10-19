# slider

An implementation of a [range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range) as a form-connected web-component. Note that if the slider is in vertical orientation by default the component will get a height using the css var `--fast-slider-height`, by default that equates to `(10px * var(--thumb-size))` or 160px. Inline styles will override that height.

## Setup

```ts
import { provideDesignSystem, getSlider, getSliderLabel } from '@divriots/starter-furious';

provideDesignSystem().register(getSlider(), getSliderLabel());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getSlider, getSliderLabel } from '@divriots/starter-furious';

provideDesignSystem().register(getSlider(), getSliderLabel());

export const usageStory = () => html`
  <fs-slider min="0" max="100" step="10" value="70">
    <fs-slider-label position="0"> 0 </fs-slider-label>
    <fs-slider-label position="10"> 10 </fs-slider-label>
    <fs-slider-label position="90"> 90 </fs-slider-label>
    <fs-slider-label position="100"> 100 </fs-slider-label>
  </fs-slider>
`;
```

## Use cases

- _A customer using the component on a web page._
  On a web page the customer drags the slider from min to max values ultimately setting the value of the component to a value constrained by step and min and max values.

- _A developer building an app with the component and interacting through HTML/CSS/JavaScript._
  A developer can inject labels on the slider into the default slot, if they use `slider-label` elements those will be styled a specific way internally and any part of that style can be overridden. Styles and items intending to be placed in the default slot can be replaced as needed.

- _A designer customizing the component._
  A designer can override any internal styling applied to the slotted labels, the track, the progress track and the thumb(s) if appropriate.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#slider)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/slider/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/slider/slider.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/slider/slider.styles.ts)
