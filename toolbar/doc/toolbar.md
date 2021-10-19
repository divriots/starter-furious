# toolbar

As defined by the [W3C](https://w3c.github.io/aria-practices/#toolbar):

> A toolbar is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.
>
> When a set of controls is visually presented as a group, the toolbar role can be used to communicate the presence and purpose of the grouping to screen reader users. Grouping controls into toolbars can also be an effective way of reducing the number of tab stops in the keyboard interface.

## Setup

```ts
import { provideDesignSystem, getToolbar } from '@divriots/starter-furious';

provideDesignSystem().register(getToolbar());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import {
  provideDesignSystem,
  getButton,
  getCombobox,
  getOption,
  getRadio,
  getRadioGroup,
  getSelect,
  getToolbar,
} from '@divriots/starter-furious';

provideDesignSystem().register(
  getButton(),
  getCombobox(),
  getOption(),
  getRadio(),
  getRadioGroup(),
  getSelect(),
  getToolbar(),
);

export const usageStory = () => html`
  <fs-toolbar>
    <fs-button>Button</fs-button>
    <fs-radio-group>
      <fs-radio checked="">One</fs-radio>
      <fs-radio>Two</fs-radio>
      <fs-radio>Three</fs-radio>
    </fs-radio-group>
    <fs-combobox>
      <fs-option>Please Please Me</fs-option>
      <fs-option>With The Beatles</fs-option>
      <fs-option>A Hard Day's Night</fs-option>
      <fs-option>Beatles for Sale</fs-option>
      <fs-option>Help!</fs-option>
      <fs-option>Rubber Soul</fs-option>
      <fs-option>Revolver</fs-option>
      <fs-option>Sgt. Pepper's Lonely Hearts Club Band</fs-option>
      <fs-option>Magical Mystery Tour</fs-option>
      <fs-option>The Beatles</fs-option>
      <fs-option>Yellow Submarine</fs-option>
      <fs-option>Abbey Road</fs-option>
      <fs-option>Let It Be</fs-option>
    </fs-combobox>
    <fs-button>Button</fs-button>
    <fs-select>
      <fs-option>Option 1</fs-option>
      <fs-option>Second option</fs-option>
      <fs-option>Option 3</fs-option>
    </fs-select>
  </fs-toolbar>
`;
```

## Use cases

Used anywhere someone may want to visually and structurally group related interactive controls.

- Tom is reading his favorite internet newspaper. Upon finishing an article, he notices that it has accrued nearly one thousand comments. Tom decides to read the comments and he ends up writing a response to someone he disagrees with. As he gets ready to submit, he realizes it will be easier for others to read his comment if he formats it. Tom sees a toolbar with formatting options and is able to bold all the words he deems important. He submits his comment and waits to see what happens next.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#toolbar)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/toolbar/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/toolbar/toolbar.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/toolbar/toolbar.styles.ts)
