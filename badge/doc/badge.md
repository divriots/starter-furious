# badge

The `fs-badge` component is used to highlight an item and attract attention or flag status.

## Setup

```ts
import { provideDesignSystem, getBadge } from '@divriots/starter-furious';

provideDesignSystem().register(getBadge());
```

## Usage

The `fill` and `color` attributes of the _badge_ create CSS custom properties which can be used to style the control.

```css
fs-badge {
  --badge-fill-primary: #00ff00;
  --badge-fill-danger: #ff0000;
  --badge-color-light: #ffffff;
  --badge-color-dark: #000000;
}
```

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getBadge } from '@divriots/starter-furious';

provideDesignSystem().register(getBadge());

export const usageStory = () => html` <fs-badge fill="danger" color="dark">Danger</fs-badge> `;
```

## Use cases

Typical use cases include, but are not limited to, denoting a sale or new item, flagging an item as part of a category or representing a value of unread messages.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/badge/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/badge/badge.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/badge/badge.styles.ts)
