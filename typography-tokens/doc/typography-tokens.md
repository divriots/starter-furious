```js script
import '~/dockit/dockit-fast-frame-typography-tokens';
```

# typography-tokens

Contains a set of font sizes and line heights.

## Usage

```js preview-story
import {
  provideDesignSystem,
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
  typeRampPlus5FontSize,
  typeRampPlus5LineHeight,
  typeRampPlus6FontSize,
  typeRampPlus6LineHeight,
} from '@divriots/starter-furious';
import { FASTElement, css, html } from '@microsoft/fast-element';

provideDesignSystem().register();

class TypographyTokensUsage extends FASTElement {
  static definition = {
    name: 'typography-tokens-usage',
    styles: css`
      h1 {
        font-size: ${typeRampPlus6FontSize};
        line-height: ${typeRampPlus6LineHeight};
      }
      h2 {
        font-size: ${typeRampPlus5FontSize};
        line-height: ${typeRampPlus5LineHeight};
      }
      p {
        font-size: ${typeRampBaseFontSize};
        line-height: ${typeRampBaseLineHeight};
      }
    `,
    template: html`
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    `,
  };
}

FASTElement.define(TypographyTokensUsage);

export const usageStory = () => html`<typography-tokens-usage></typography-tokens-usage>`;
```

## Typography Tokens

```js story
export const demosStory = () => {
  return html`<dockit-fast-frame-typography-tokens></dockit-fast-frame-typography-tokens>`;
};
```
