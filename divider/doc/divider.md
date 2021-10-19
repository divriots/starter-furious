# divider

A web component implementation of a [horizontal rule](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr).

## Setup

```ts
import { provideDesignSystem, getDivider } from '@divriots/starter-furious';

provideDesignSystem().register(getDivider());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getDivider } from '@divriots/starter-furious';

provideDesignSystem().register(getDivider());

export const usageStory = () => html` <fs-divider></fs-divider> `;
```

## Use cases

Used anywhere a horizontal rule might be used.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/divider/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/divider/divider.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/divider/divider.styles.ts)
