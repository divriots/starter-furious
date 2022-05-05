# listbox

An implementation of a [listbox](https://w3c.github.io/aria-practices/#Listbox). While any DOM content is permissible as a child of the listbox, only [`fs-option`](../../option/doc/option.md) elements, `option` elements, and slotted items with `role="option"` will be treated as options and receive keyboard support.

The `listbox` component has no internals related to form association. For a form-associated `listbox`, see the [`fs-select` component](../../select/doc/select.md).

## Setup

```ts
import { provideDesignSystem, getListbox, getOption } from '@divriots/starter-furious';

provideDesignSystem().register(getListbox(), getOption());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getListbox, getOption } from '@divriots/starter-furious';

provideDesignSystem().register(getListbox(), getOption());

export const usageStory = () => html`
  <div>
    <label id="preferred-format">Preferred Format:</label>
    <br />
    <fs-listbox aria-labelledby="preferred-format" name="preferred-format">
      <fs-option value="vinyl">Vinyl Record</fs-option>
      <fs-option value="casette">Casette</fs-option>
      <fs-option value="cd">Compact Disc</fs-option>
      <fs-option value="digital">Digital</fs-option>
    </fs-listbox>
  </div>
`;
```

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#Listbox)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/listbox/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/listbox/listbox.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/listbox/listbox.styles.ts)
