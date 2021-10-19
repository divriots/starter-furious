# breadcrumb

As defined by the [W3C](https://w3c.github.io/aria-practices/#breadcrumb):

> A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.

## Setup

```ts
import { provideDesignSystem, getBreadcrumb, getBreadcrumbItem } from '@divriots/starter-furious';

provideDesignSystem().register(getBreadcrumb(), getBreadcrumbItem());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getBreadcrumb, getBreadcrumbItem } from '@divriots/starter-furious';

provideDesignSystem().register(getBreadcrumb(), getBreadcrumbItem());

export const usageStory = () => html`
  <fs-breadcrumb>
    <fs-breadcrumb-item href="#">Breadcrumb item 1</fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">Breadcrumb item 2</fs-breadcrumb-item>
    <fs-breadcrumb-item>Breadcrumb item 3</fs-breadcrumb-item>
  </fs-breadcrumb>
`;
```

## Use cases

- James is browsing an ecommerce website and is looking for a few items to add to his new kitchen. He needs a knife set, and an espresso machine. He checks out `Home and Kitchen` page, then selects `Kitchen and Dining`, first category he picks is `Cutlery`, he finds the sets of knives. There is now a breadcrumb trail of the pages James has clicked through. `Home and Kitchen / Kitchen and Dining / Cutlery / Knife Sets`
  He clicks on `Kitchen and Dining` to go back to the category of kitchen items, selects `Coffee and Espresso` finds the best one that suits his needs. If James wants to continue looking for another item for his kitchen, or other things for his home, he just needs to click on any of the links in the breadcrumb trail to continue his search.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#breadcrumb)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/breadcrumb/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/breadcrumb/breadcrumb.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/breadcrumb/breadcrumb.styles.ts)
