# anchored-region

An _anchored region_ is a container component which enables authors to create layouts where the contents of the anchored region can be positioned relative to another "anchor" element. Additionally, the _anchored region_ can react to the available space between the anchor and a parent ["viewport"](https://developer.mozilla.org/en-US/docs/Glossary/viewport) element such that the region is placed on the side of the anchor with the most available space, or even resize itself based on that space.

## Setup

```ts
import { provideDesignSystem, getAnchoredRegion } from '@divriots/starter-furious';

provideDesignSystem().register(getAnchoredRegion());
```

## Usage

A region that always renders above the anchor element.

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getAnchoredRegion } from '@divriots/starter-furious';

provideDesignSystem().register(getAnchoredRegion());

export const usageStory = () => html`
  <div id="viewport">
    <button id="anchor">Button is an anchor</button>
    <fs-anchored-region anchor="anchor" vertical-positioning-mode="locktodefault" vertical-default-position="top">
      This shows up above the button
    </fs-anchored-region>
  </div>
`;
```

## Use cases

It is envisioned that this component would be used as a building block for other components in this library that need to position elements relative to another HTMLElement(select, flyout, tooltip, etc) as well as being available for standalone use in responsive layouts.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/anchored-region/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/anchored-region/anchored-region.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/anchored-region/anchored-region.styles.ts)
