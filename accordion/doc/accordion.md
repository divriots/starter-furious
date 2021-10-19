# accordion

As defined by the [W3C](https://w3c.github.io/aria-practices/#accordion):

> An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

## Setup

```ts
import { provideDesignSystem, getAccordion, getAccordionItem } from '@divriots/starter-furious';

provideDesignSystem().register(getAccordion(), getAccordionItem());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getAccordion, getAccordionItem } from '@divriots/starter-furious';

provideDesignSystem().register(getAccordion(), getAccordionItem());

export const usageStory = () => html`
  <fs-accordion>
    <fs-accordion-item expanded="">
      <span slot="heading">Panel one</span>
      Panel one content
    </fs-accordion-item>
    <fs-accordion-item>
      <span slot="heading">Panel two</span>
      Panel two content
    </fs-accordion-item>
    <fs-accordion-item expanded="">
      <span slot="heading">Panel three</span>
      Panel three content
    </fs-accordion-item>
  </fs-accordion>
`;
```

## Use cases

- Frank finds a spelling error in the FAST documentation. He submits a pull request (PR) to fix the error and goes to eat lunch while waiting for the maintainers to review his PR. Upon returning from lunch he notices a widget on the screen saying certain status checks failed. He clicks on the headline of the widget and it reveals additional information stating that he needs to run prettier to ensure proper formatting. He clicks the headline again and the additional information collapses. Frank runs prettier and his PR is completed successfully.

- On April 16th Randy wakes up in a cold sweat because he realized he made a mistake in filing his taxes with the IRS. He opens his laptop and goes to the IRS website and sees a link to "frequently asked questions". Randy sees a list of questions on the page with an arrow next to it indicating that answers are hidden. He sees a question titled, "What should I do if I made a mistake on my federal turn that I've already filed?" Randy clicks the question and sees a section detailing out the exact steps to take. With his anxiety eased, Randy goes back to bed and falls asleep.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#accordion)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/accordion/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/accordion/accordion.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/accordion/accordion.styles.ts)
