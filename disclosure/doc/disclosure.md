# disclosure

A disclosure component is the implementation of native `details` and `summary` controls that toggles the visibility of the extra content. Visually, it would look like a button or hyperlink and beneath extra content. As defined by the W3C:

> A disclosure is a button that controls the visibility of a section of content. When the controlled content is hidden, it is often styled as a typical push button with a right-pointing arrow or triangle to hint that activating the button will display additional content. When the content is visible, the arrow or triangle typically points down.

## Setup

```ts
import { provideDesignSystem, getDisclosure } from '@divriots/starter-furious';

provideDesignSystem().register(getDisclosure());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getDisclosure } from '@divriots/starter-furious';

provideDesignSystem().register(getDisclosure());

export const usageStory = () => html`
  <fs-disclosure appearance="lightweight">
    <strong slot="title">Read about FAST</strong>
    <div>
      FAST is a collection of technologies built on Web Components and modern Web Standards, designed to help you
      efficiently tackle some of the most common challenges in website and application design and development.
    </div>
  </fs-disclosure>
`;
```

## Use cases

- In general, reveal the extra information on button click when the end-user is needed to know/see.
- Laurel wanted to buy a new phone and she was looking at one of the websites where all the basic information was shown. She read about a camera feature called Night Mode and there was a section labeled "See the advanced technology that goes into every Night mode shot". She clicked on it and found out how that feature would work. With that extra information on that feature, she was quite confident in her buying.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#disclosure)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/disclosure/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/disclosure/disclosure.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/disclosure/disclosure.styles.ts)
