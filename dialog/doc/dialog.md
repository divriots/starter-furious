# dialog

As defined by the [W3C](https://w3c.github.io/aria-practices/#dialog_modal):

> A dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window. Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close.
>
> Like non-modal dialogs, modal dialogs contain their tab sequence. That is, Tab and Shift + Tab do not move focus outside the dialog. However, unlike most non-modal dialogs, modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog.

## Setup

```ts
import { provideDesignSystem, getDialog } from '@divriots/starter-furious';

provideDesignSystem().register(getDialog());
```

## Usage

```html
<fs-dialog id="example1" class="example-dialog" aria-label="Simple modal dialog" modal="true" hidden="">
  <h2>Dialog</h2>
  <p>This is an example dialog.</p>
  <fs-button>Close Dialog</fs-button>
</fs-dialog>
```

## Use cases

- Joanna has some friends coming over and is searching online for some adult beverage ideas. She visits a website of a local distillery and a form overlays the screen asking her to confirm she is over 21 years of age by entering her birthday.

- Harold is in the process of removing old data sets from his company's content management system. He selects a group of data and clicks delete. A popup appears asking him to confirm that he wants to delete the selected files permanently.

- Meredith is browsing news articles online and clicks a link to a local newspaper story about an upcoming heat wave in the region. She is informed that she has read through an allotted number of free articles for the month and must either login or become a subscriber of the news site to continue. Meredith tries to continue interacting with the web page, but she's unable to. Meredith decides to subscribe to the online newspaper because they are running a special.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#dialog_modal)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/dialog/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/dialog/dialog.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/dialog/dialog.styles.ts)
