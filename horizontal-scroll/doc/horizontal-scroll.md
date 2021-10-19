# horizontal-scroll

An implementation of a content scroller as a web-component.

## Setup

```ts
import { provideDesignSystem, getHorizontalScroll, getFlipper } from '@divriots/starter-furious';

provideDesignSystem().register(getHorizontalScroll(), getFlipper());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton, getCard, getFlipper, getHorizontalScroll } from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getCard(), getFlipper(), getHorizontalScroll());

export const usageStory = () => html`
  <style>
    fs-horizontal-scroll {
      max-width: 400px;
    }

    fs-card {
      padding: 10px;
      width: 170px;
    }
  </style>
  <fs-horizontal-scroll>
    <fs-card>
      Card number 1
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 2
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 3
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 4
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 5
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 6
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 7
      <fs-button>A button</fs-button>
    </fs-card>
    <fs-card>
      Card number 8
      <fs-button>A button</fs-button>
    </fs-card>
  </fs-horizontal-scroll>
`;
```

## Additional resources

- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/horizontal-scroll/README.md)
