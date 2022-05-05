# tooltip

The `fs-tooltip` component is used to provide extra information about another element when it is hovered.

## Setup

```ts
import { provideDesignSystem, getTooltip } from '@divriots/starter-furious';

provideDesignSystem().register(getTooltip());
```

## Usage

```html
<div>
  <fs-button id="anchor">Hover me</fs-button>
  <fs-tooltip anchor="anchor">Tooltip text</fs-tooltip>
</div>
```

## Use cases

Tooltips are often used to supplement UI elements and provide additional information. Tooltips will often provide accessible names or add additional context to other UI components (such as icon buttons). While tooltips are natively provided to elements via the title attribute, they are notoriously difficult to style. Additionally, they are only invoked on hover and not on focus.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#tooltip)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tooltip/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tooltip/tooltip.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/tooltip/tooltip.styles.ts)
