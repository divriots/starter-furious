# progress-ring

_Progress_ and _progress ring_ are used to display the length of time a process will take or to visualize percentage value (referred to as a **determinate** state) and to represent an unspecified wait time (referred to as an **indeterminate** state). _Progress_ components are typically visually represented by a circular or linear animation. When the `value` attribute is passed the state is **determinate**, otherwise it is **indeterminate**.

For progress components which have a linear visual appearance, use [`fs-progress`](../../progress/doc/progress.md). For progress implementations which are circular, use `fs-progress-ring`.

## Setup

```ts
import { provideDesignSystem, getProgressRing } from '@divriots/starter-furious';

provideDesignSystem().register(getProgressRing());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getProgressRing } from '@divriots/starter-furious';

provideDesignSystem().register(getProgressRing());

export const usageStory = () => html` <fs-progress-ring min="0" max="100" value="75"></fs-progress-ring> `;
```

## Use cases

- Jim is building a dashboard to track fulfillment for his online store, he uses progress ring to visualize various metrics.

- Fin is scrolling a large list of continuously loading data as he scrolls he sees a indeterminate progress ring to let him know that data is loading.

## Additional resources

- [W3C Component Aria Practices](https://www.w3.org/TR/wai-aria/#progressbar)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/progress/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/progress/progress.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/progress/progress.styles.ts)
