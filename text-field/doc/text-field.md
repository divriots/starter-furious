# text-field

An implementation of a [text field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text) as a form-connected web-component. The `fs-text-field` supports two visual appearances, outline and filled, with the control defaulting to the outline appearance.

This component filters out slotted _text_ nodes that are only white space to properly hide the label when the label is not in use.

## Setup

```ts
import { provideDesignSystem, getTextField } from '@divriots/starter-furious';

provideDesignSystem().register(getTextField());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTextField } from '@divriots/starter-furious';

provideDesignSystem().register(getTextField());

export const usageStory = () => html`
  <fs-text-field appearance="filled" placeholder="user@email.com">Email</fs-text-field>
`;
```

## Use cases

Used anywhere an author might otherwise use:

- input\[type="text"]
- input\[type="email"]
- input\[type="password"]
- input\[type="tel"]
- input\[type="url"]

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/text-field/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/text-field/text-field.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/text-field/text-field.styles.ts)
