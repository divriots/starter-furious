```js script
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getFlipper } from '@divriots/starter-furious';

provideDesignSystem().register(getFlipper());
```

# flipper

The flipper component is most often used to page through blocks of content or collections of ui elements. As flippers are often a supplemental form of navigation, the flippers are hidden by default to avoid duplicate keyboard interaction. Passing an attribute of `aria-hidden="false"` will expose the flippers to assistive technology.

## Setup

```ts
import { provideDesignSystem, getFlipper } from '@divriots/starter-furious';

provideDesignSystem().register(getFlipper());
```

## Usage

### Previous

```js preview-story
export const previousUsageStory = () => html` <fs-flipper direction="previous"></fs-flipper> `;
```

### Next

```js preview-story
export const nextUsageStory = () => html` <fs-flipper direction="next"></fs-flipper> `;
```

## Use cases

- Tony is looking for a new refrigerator. He goes onto his computer and navigates the browser to a site that sells appliances. He sees a list of refrigerators but not the one he wants so he clicks an arrow button (flipper) to show more. He sees a new GE Cafe that interests him and clicks on it which directs him to a purchase page.

- Bobby is blind and is also looking for a new refrigerator. He goes onto his computer and navigates the browser to the same site that sells appliances. He tabs through a list of refrigerators until he finds the one that was recommended to him by a friend. Bobby is unaware of the flipper.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/flipper/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/flipper/flipper.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/flipper/flipper.styles.ts)
