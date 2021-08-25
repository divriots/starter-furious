```js script
import '~/doc-layout';
```

# core

To start using `Furious` each application needs a bit of setup code. This page explains how to provide the design system to the application, register components which you plan to use and start off by making your own components.

## Provide design system

Normally you provide the design system globaly for the entire page like this:

```ts
import { provideDesignSystem } from '@divriots/starter-furious';

provideDesignSystem();
```

When your page needs multiple design systems, e.g. for demo purposes, you can select a specific app root and pass it to the provider function, so that it only effects this app root element and its DOM subtree.

```ts
import { provideDesignSystem } from '@divriots/starter-furious';

const $appRoot = document.querySelector('#app-root');
provideDesignSystem($appRoot);
```

Keep in mind that in any case all custom element names will be registered in the global registry and available everywhere, but the theme will only be applied correctly in the `#app-root`.

## Register components

The design system is shipped with a number of components. To use them you need to first register them within the design system. E.g. if you plan to use `fs-data-grid` and `fs-select` your code might look like this:

```ts
import {
  provideDesignSystem,
  getDataGrid,
  getDataGridCell,
  getDataGridRow,
  getSelect,
  getOption,
} from '@divriots/starter-furious';

provideDesignSystem().register(getDataGrid(), getDataGridCell(), getDataGridRow(), getSelect(), getOption());
```

Each component has it's own documentation which explains how to register it and any child components which are often used together with it. Please refer to individual components documentation to learn more about it, as well as see demos and stories.

Do not use component exports provided by FAST packages, because they are not customised for `Furious` and will result in slightly or fully incorrect UI.

## Build your own components

Application developers can build their own components and leverage the power of `FASTElement` and reusable design tokens. Start by reading [the official documentation of FASTElement](https://www.fast.design/docs/fast-element/getting-started/) and [the FAST Frame Design System](https://www.fast.design/docs/design-systems/fast-frame/) which `Furious` is based on. Then continue reading specific tokens sections: [`color-tokens`](../../color-tokens/doc/color-tokens.md), [`typography-tokens`](../../typography-tokens/doc/typography-tokens.md), [`sizing-tokens`](../../sizing-tokens/doc/sizing-tokens.md), and [`misc-tokens`](../../misc-tokens/doc/misc-tokens.md).

We highly recommend you to also read the sources of existing components to learn nuances of particular design tokens. Keep in mind that most components in `Furious` are just reexports of the FAST components and don't contain full implementation details except a few customisations. Refer to the FAST monorepository for individual components implementation, it's a great source of knowledge. Each component documentation has a link in the bottom to the corresponding monorepository package and styles.
