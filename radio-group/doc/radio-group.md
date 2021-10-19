# radio-group

As defined by the [W3C](https://w3c.github.io/aria-practices/#radiobutton):

> A radio group is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time. Some implementations may initialize the set with all buttons in the unchecked state in order to force the user to check one of the buttons before moving past a certain point in the workflow.

While any DOM content is permissible as a child of the radiogroup, only `fs-radio`'s and slotted content with a role of `radio` will receive keyboard support.

## Setup

```ts
import { provideDesignSystem, getRadioGroup, getRadio } from '@divriots/starter-furious';

provideDesignSystem().register(getRadioGroup(), getRadio());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getRadio, getRadioGroup } from '@divriots/starter-furious';

provideDesignSystem().register(getRadio(), getRadioGroup());

export const usageStory = () => html`
  <fs-radio-group value="mango" name="favorite-fruit">
    <fs-radio value="apple">Apple</fs-radio>
    <fs-radio value="mango">Mango</fs-radio>
    <fs-radio value="orange">Orange</fs-radio>
  </fs-radio-group>
`;
```

## Use cases

Radio group allows the user to be presented with a list of all the options visible which can facilitate the comparison of choice.

## Additional resources

- [W3C Component Aria Practices](https://www.w3.org/TR/wai-aria/#radiogroup)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/radio-group/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/radio-group/radio-group.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/radio-group/radio-group.styles.ts)
