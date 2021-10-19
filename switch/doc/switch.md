# switch

An implementation of a [switch](https://w3c.github.io/aria/#switch) as a form-connected web-component.

## Setup

```ts
import { provideDesignSystem, getSwitch } from '@divriots/starter-furious';

provideDesignSystem().register(getSwitch());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getSwitch } from '@divriots/starter-furious';

provideDesignSystem().register(getSwitch());

export const usageStory = () => html`
  <fs-switch>
    Theme
    <span slot="checked-message">Dark</span>
    <span slot="unchecked-message">Light</span>
  </fs-switch>
`;
```

## Use cases

Typical use cases include, but are not limited to, turning a feature on and off or showing or hiding a piece of UI

## Additional resources

- [W3C Component Aria Practices](https://www.w3.org/TR/wai-aria/#switch)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/switch/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/switch/switch.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/switch/switch.styles.ts)
