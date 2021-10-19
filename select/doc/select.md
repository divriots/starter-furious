# select

An implementation of an [HTML select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) as a form-connected web-component.

## Setup

```ts
import { provideDesignSystem, getSelect, getOption } from '@divriots/starter-furious';

provideDesignSystem().register(getSelect(), getOption());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getOption, getSelect } from '@divriots/starter-furious';

provideDesignSystem().register(getOption(), getSelect());

export const usageStory = () => html`
  <fs-select id="shirt-size">
    <fs-option value="s">Small</fs-option>
    <fs-option value="m">Medium</fs-option>
    <fs-option value="l">Large</fs-option>
    <fs-option value="xl">Extra Large</fs-option>
  </fs-select>
`;
```

## Use cases

- _A customer using the component on a web page._
  On a web page a customer is shopping for a new shirt in size medium. The customer opens the size `<fs-select>` and sees a list of options and selects size medium.

## Additional resources

- [W3C Component Aria Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/select/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/select/select.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/select/select.styles.ts)
