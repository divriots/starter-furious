```js script
import { provideDesignSystem } from '@divriots/starter-furious';
import { FASTElement, css, html } from '@microsoft/fast-element';

provideDesignSystem().register();
```

# misc-tokens

Contains a number of tokens which are hard to classify.

## bodyFont

The base font for most of the components.

### Usage

```js preview-story
import { bodyFont } from '@divriots/starter-furious';

class BodyFontUsage extends FASTElement {
  static definition = {
    name: 'body-font-usage',
    styles: css`
      :host {
        font-family: ${bodyFont};
      }
    `,
    template: html`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua.`,
  };
}

FASTElement.define(BodyFontUsage);

export const bodyFontUsageStory = () => html`<body-font-usage></body-font-usage>`;
```

## direction

The primary document direction (LTR or RTL). Please refer to [the official documentation about this token and `DirectionalStyleSheetBehavior`](https://www.fast.design/docs/design/localization#document-direction) to read more details.

### Usage

```js preview-story
import { direction } from '@divriots/starter-furious';
import { Direction } from '@microsoft/fast-web-utilities';

class DirectionUsage extends FASTElement {
  static definition = {
    name: 'direction-usage',
    styles: css`
      p {
        direction: ${direction};
      }
    `,
    template: html`
      <button @click=${(x) => x.switch()}>Click to switch the text direction</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    `,
  };

  switch() {
    const currentDirection = direction.getValueFor(this);
    const newDirection = currentDirection === Direction.ltr ? Direction.rtl : Direction.ltr;
    direction.setValueFor(this, newDirection);
  }
}

FASTElement.define(DirectionUsage);

export const directionUsageStory = () => html`<direction-usage></direction-usage>`;
```

## disabledOpacity

The opacity of disabled controls.

### Usage

```js preview-story
import { disabledOpacity } from '@divriots/starter-furious';

class DisabledOpacityUsage extends FASTElement {
  static definition = {
    name: 'disabled-opacity-usage',
    styles: css`
      :host([disabled]) {
        cursor: not-allowed;
        opacity: ${disabledOpacity};
        user-select: none;
      }
    `,
    template: html`Can't touch this.`,
  };
}

FASTElement.define(DisabledOpacityUsage);

export const disabledOpacityUsageStory = () => html`<disabled-opacity-usage disabled></disabled-opacity-usage>`;
```

## strokeWidth

Controls the width of the stroke of a component that has a stroke.

### Usage

```js preview-story
import { strokeWidth } from '@divriots/starter-furious';

class StrokeWidthUsage extends FASTElement {
  static definition = {
    name: 'stroke-width-usage',
    styles: css`
      :host {
        border: calc(${strokeWidth} * 1px) solid black;
        padding: 5px;
      }
    `,
    template: html`11:59`,
  };
}

FASTElement.define(StrokeWidthUsage);

export const strokeWidthUsageStory = () => html`<stroke-width-usage></stroke-width-usage>`;
```

## focusStrokeWidth

Controls the width of the stroke of a component that has a stroke when it has document focus.

### Usage

```js preview-story
import { focusStrokeWidth } from '@divriots/starter-furious';

class FocusStrokeWidthUsage extends FASTElement {
  static definition = {
    name: 'focus-stroke-width-usage',
    styles: css`
      button:focus {
        box-shadow: 0 0 0 calc(${focusStrokeWidth} * 1px) darkgrey;
        outline: 0;
      }
    `,
    template: html`<button>Focus me</button>`,
  };
}

FASTElement.define(FocusStrokeWidthUsage);

export const focusStrokeWidthUsageStory = () => html`<focus-stroke-width-usage></focus-stroke-width-usage>`;
```
