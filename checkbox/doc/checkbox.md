# checkbox

An implementation of a [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox) as a form-connected web-component.

## Setup

```ts
import { provideDesignSystem, getCheckbox } from '@divriots/starter-furious';

provideDesignSystem().register(getCheckbox());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getCheckbox } from '@divriots/starter-furious';

provideDesignSystem().register(getCheckbox());

export const usageStory = () => html`
  <fieldset>
    <legend>Fruits</legend>
    <fs-checkbox checked="">Apple</fs-checkbox>
    <fs-checkbox checked="">Banana</fs-checkbox>
    <fs-checkbox>Honeydew</fs-checkbox>
    <fs-checkbox checked="">Mango</fs-checkbox>
  </fieldset>
`;
```

## Use cases

Used anywhere an author might otherwise use an `input[type="checkbox"]`

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#checkbox)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/checkbox/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/checkbox/checkbox.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/checkbox/checkbox.styles.ts)
