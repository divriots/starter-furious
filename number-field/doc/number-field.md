# number-field

An implementation of a [text field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text) as a form-connected web-component. The `fs-number-field` supports two visual appearances, outline and filled, with the control defaulting to the outline appearance.

## Setup

```ts
import { provideDesignSystem, getNumberField } from '@divriots/starter-furious';

provideDesignSystem().register(getNumberField());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getNumberField } from '@divriots/starter-furious';

provideDesignSystem().register(getNumberField());

export const usageStory = () => html` <fs-number-field appearance="filled" min="0" max="10"></fs-number-field> `;
```

## Use cases

Used anywhere an author might otherwise use:

- input\[type="number"]

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/number-field/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/number-field/number-field.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/number-field/number-field.styles.ts)
