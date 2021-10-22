# sizing-tokens

Contains the following tokens:

- `baseHeightMultiplier`: This value, multiplied by `designUnit`, sets the base height of most controls. Works with adaptive `density` values.
- `controlCornerRadius`: Sets the corner radius used by controls with backplates.
- `density`: An adjustment to sizing tokens like `baseHeightMultiplier`.
- `designUnit`: The unit size of the Design Grid. Used to calculate height and spacing sizes for controls.

## Usage

```js preview-story
import {
  provideDesignSystem,
  baseHeightMultiplier,
  controlCornerRadius,
  density,
  designUnit,
} from '@divriots/starter-furious';
import { FASTElement, css, html } from '@microsoft/fast-element';

provideDesignSystem().register();

class SizingTokensUsage extends FASTElement {
  static definition = {
    name: 'sizing-tokens-usage',
    styles: css`
      :host {
        border-radius: calc(${controlCornerRadius} * 1px);
        border: 1px solid black;
        display: inline-block;
        overflow: hidden;
      }

      .video-loading {
        padding: calc((${designUnit} + ${density}) * 3px);
        width: 320px;
        height: 180px;
      }

      .controls {
        border-top: 1px solid black;
        display: flex;
        height: calc((${baseHeightMultiplier} + ${density}) * ${designUnit} * 1px);
      }

      .play-button {
        background-color: transparent;
        border: 0;
        border-radius: 0;
        border-right: 1px solid black;
        padding: 0 calc((${designUnit} + ${density}) * 3px);
        margin: 0;
      }
    `,
    template: html`
      <div class="video-loading">Video is loading...</div>
      <div class="controls">
        <button class="play-button" aria-label="play">▶</button>
      </div>
    `,
  };
}

FASTElement.define(SizingTokensUsage);

export const usageStory = () => html`<sizing-tokens-usage></sizing-tokens-usage>`;
```
