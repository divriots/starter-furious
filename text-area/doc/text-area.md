# text-area

An implementation of an [HTML textarea element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) as a form-connected web-component. The `fs-text-area` supports two visual appearances, outline and filled, with the control defaulting to the outline appearance.

## Setup

```ts
import { provideDesignSystem, getTextArea } from '@divriots/starter-furious';

provideDesignSystem().register(getTextArea());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTextArea } from '@divriots/starter-furious';

provideDesignSystem().register(getTextArea());

export const usageStory = () => html`
  <fs-text-area placeholder="Describe your experience">How was your stay?</fs-text-area>
`;
```

## Use cases

Used anywhere an author might otherwise use `<textarea></textarea>`.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/text-area/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/text-area/text-area.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/text-area/text-area.styles.ts)
