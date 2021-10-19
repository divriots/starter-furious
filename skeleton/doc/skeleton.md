# skeleton

The `skeleton` component is used as a visual placeholder for an element while it is in a loading state and usually presents itself as a simplified wireframe-like version of the UI it is representing.

## Setup

```ts
import { provideDesignSystem, getSkeleton } from '@divriots/starter-furious';

provideDesignSystem().register(getSkeleton());
```

## Usage

### Basic Usage

```html
<fs-skeleton
  style="
        border-radius: 4px;
        width: 50px;
        height: 50px;
    "
  shape="circle"
></fs-skeleton>
```

### Pattern

A URL for an image asset may be passed to the `pattern` attribute. In this mode, the `fs-skeleton` component is used as a container for a transparent SVG that may express a more complex placeholder

```html
<fs-skeleton
  style="
        border-radius: 4px;
        width: 500px;
        height: 250px;
    "
  shape="rect"
  pattern="https://static.fast.design/assets/skeleton-test-pattern.svg"
></fs-skeleton>
```

### Shimmer

The `shimmer` boolean attribute will activate the component's shimmer effect.

```html
<fs-skeleton
  style="
        border-radius: 4px;
        width: 500px;
        height: 250px;
    "
  shape="rect"
  pattern="https://static.fast.design/assets/skeleton-test-pattern.svg"
  shimmer=""
></fs-skeleton>
```

### Custom SVG

An inline SVG can also be inserted into the slot of the `fs-skeleton`.

```html
<fs-skeleton
  style="
        border-radius: 4px;
        width: 500px;
        height: 250px;
    "
  shape="rect"
  shimmer=""
>
  <svg style="position: absolute; left: 0; top: 0;" id="pattern" width="100%" height="100%">
    <defs>
      <mask id="mask" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="#ffffff"></rect>
        <rect x="0" y="0" width="100%" height="45%" rx="4"></rect>
        <rect x="25" y="55%" width="90%" height="15px" rx="4"></rect>
        <rect x="25" y="65%" width="70%" height="15px" rx="4"></rect>
        <rect x="25" y="80%" width="90px" height="30px" rx="4"></rect>
      </mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="#ffffff"></rect>
  </svg>
</fs-skeleton>
```

### Further Customizations

The following CSS variables can be used to customize the appearance.

| CSS Variable                    | Expected value  |
| ------------------------------- | --------------- |
| `--skeleton-fill`               | Color           |
| `--skeleton-animation-fill`     | Color           |
| `--skeleton-animation-gradient` | Linear gradient |
| `--skeleton-animation-timing`   | Easing function |

## Use cases

Used to give users a sense of loading progress activity rather than merely presenting a blank page or container.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/skeleton/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/skeleton/skeleton.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/skeleton/skeleton.styles.ts)
