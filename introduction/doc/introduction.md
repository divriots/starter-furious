# introduction

**Furious** is a design system starter kit based on [FAST](https://www.fast.design/) and [FAST Frame Design System](https://www.fast.design/docs/design-systems/fast-frame/) (`@microsoft/fast-components`). It configures FAST Frame with sensible defaults, makes it ready for your extensions where needed and lays a foundation for your future documentation.

## Features

- ♻️ Open source
- 🔥 40+ accessible components
- 🎨 Adaptive color system
- 📚 Interactive documentation
- 🌗 Dark mode support out of the box
- 📦 Published on NPM to try in your project

## Getting Started

To start using `Furious` each application needs a bit of setup code. It consists of the design system initialization and registration of components which app developers plan to use.

### Initialize design system

Normally you initialize the design system globally for the entire page like this:

```ts
import { provideDesignSystem } from '@divriots/starter-furious';

provideDesignSystem().register();
```

Method `register` is used to register required components.

### Register components

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

Each component has it's own documentation which explains how to register it and any child components which are often used together with it. Please explore individual components documentation to learn more about it, as well as see demos and stories.

Do not use component exports provided by FAST packages, because they are not customized for `Furious` and will result in slightly or fully incorrect UI.

### Explore and customize design tokens

**Furious** comes with a flexible design tokens system thanks to FAST. All components rely on these tokens for styling purposes. In the core of it there are [`color-tokens`](../../color-tokens/doc/color-tokens.md) where you can find information about the adaptive color system. Continue exploring other tokens in [`typography-tokens`](../../typography-tokens/doc/typography-tokens.md), [`sizing-tokens`](../../sizing-tokens/doc/sizing-tokens.md), and [`misc-tokens`](../../misc-tokens/doc/misc-tokens.md). Each package comes with a configuration file (e.g. `color-tokens/src/color-tokens.ts`) where you can change base token values which are processed by FAST algorithms at the time of the design system initialization. As a result FAST calculates derived token values which can be used by developers. Look for usage section in each package documentation for code examples.

### Build your own components

Application developers can build their own components and leverage the power of `FASTElement`, FAST design tokens and a number of other features provided by the FAST ecosystem. Start by reading [the official documentation of FASTElement](https://www.fast.design/docs/fast-element/getting-started/) and [the FAST Frame Design System](https://www.fast.design/docs/design-systems/fast-frame/).

We highly recommend you to also read the sources of existing components, e.g. to learn nuances of particular design tokens. Keep in mind that most components in `Furious` are just reexports of the FAST components and don't contain full implementation details except a few customizations. Refer to the FAST monorepository for individual components implementation, it's a great source of knowledge. Each component documentation has a link in the bottom to the corresponding monorepository package and styles.
