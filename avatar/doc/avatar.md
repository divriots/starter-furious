# avatar

The `fs-avatar` component is used to graphically represent a user or an object.

## Setup

```ts
import { provideDesignSystem, getAvatar } from '@divriots/starter-furious';

provideDesignSystem().register(getAvatar());
```

## Usage

### Basic Usage

```html
<fs-avatar src="..." alt="..." link="..."> </fs-avatar>
```

### Used with a Badge

```html
<fs-avatar src="..." alt="..." link="...">
  <fs-badge slot="badge">&nbsp</fs-badge>
</fs-avatar>
```

### Filled, Colored, and Shaped

The `fill` and `color` attributes of the _avatar_ create CSS custom properties which can be used to style the control.

```css
fs-avatar {
  --avatar-fill-primary: #00ff00;
  --avatar-fill-danger: #ff0000;
  --avatar-color-light: #ffffff;
  --avatar-color-dark: #000000;
}
```

While the `shape` attribute lets you choose between `circle` (default) or `square`:

```html
<fs-avatar src="..." alt="..." link="..." fill="primary" color="dark" shape="square"> </fs-avatar>
```

## Use cases

A common use case would be to display an image or text (usually initials) of a user or an object, such as in a user profile.

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/avatar/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/avatar/avatar.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/avatar/avatar.styles.ts)
