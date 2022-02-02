import * as fastComponents from '@microsoft/fast-components';
import { Palette, Swatch } from '@microsoft/fast-components';
import { attr, css, customElement, FASTElement, html, observable, repeat } from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';

@customElement({
  name: 'dockit-fast-frame-color-palette',
  styles: css`
    .colors {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .color {
      flex-grow: 1;
      height: 100px;
    }
  `,
  template: html<DockitFastFrameColorPalette>`
    <ul class="colors">
      ${repeat(
        (x) => x.swatches,
        html<Swatch>`<li class="color" style="background-color: ${(swatch) => swatch.toColorString()};"></li>`,
      )}
    </ul>
  `,
})
class DockitFastFrameColorPalette extends FASTElement {
  @observable
  swatches: Swatch[] = [];

  @attr
  public type: string;
  typeChanged() {
    if (this.type) {
      const paletteToken = fastComponents[this.type + 'Palette'] as DesignToken<Palette<Swatch>>;
      paletteToken.subscribe(
        {
          handleChange: (change) => {
            const palette = change.token.getValueFor(this);
            this.swatches = [...palette.swatches];
          },
        },
        this,
      );
    }
  }
}
