# card

The `fs-card` component is a visual container without semantics that takes children. Cards are snapshots of content that are typically used in a group to present collections of related information.

## Setup

```ts
import { provideDesignSystem, getCard } from '@divriots/starter-furious';

provideDesignSystem().register(getCard());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton, getCard } from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getCard());

export const usageStory = () => html`
  <fs-card>
    <h3>Card title</h3>
    <p>
      At purus lectus quis habitant commodo, cras. Aliquam malesuada velit a tortor. Felis orci tellus netus risus et
      ultricies augue aliquet.
    </p>
    <fs-button>Learn more</fs-button>
  </fs-card>
`;
```

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/card/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/card/card.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/card/card.styles.ts)
