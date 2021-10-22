import { parseColorHexRGB } from '@microsoft/fast-colors';
import {
  fillColor as fillColorToken,
  accentPalette as accentPaletteToken,
  neutralPalette as neutralPaletteToken,
  PaletteRGB,
  SwatchRGB,
} from '@microsoft/fast-components';
import { css, customElement, FASTElement, observable } from '@microsoft/fast-element';
import { FsLiveConfiguratorTemplate } from './fs-live-configurator.template';

@customElement({
  name: 'fs-live-configurator',
  template: FsLiveConfiguratorTemplate,
  styles: css`
    :host {
      display: block;
    }

    .preview {
      background-color: ${fillColorToken};
      display: block;
      padding: 2em;
    }
  `,
  shadowOptions: null,
})
class FsLiveConfigurator extends FASTElement {
  preview: HTMLElement;

  accentBaseColorDefault;
  neutralBaseColorDefault;

  @observable
  accentBaseColorOptions: string[] = [];

  @observable
  neutralBaseColorOptions: string[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.accentBaseColorDefault = accentPaletteToken.getValueFor(this).source.toColorString().toUpperCase();
    this.neutralBaseColorDefault = neutralPaletteToken.getValueFor(this).source.toColorString().toUpperCase();
    this.accentBaseColorOptions = [this.accentBaseColorDefault, '#DA1A5F', '#10A7B5', '#109B82', '#E1A054'];
    this.neutralBaseColorOptions = [this.neutralBaseColorDefault, '#35719F', '#2D5F2D', '#5D437C', '#A35436'];
    this.accentBaseColor = this.accentBaseColorOptions[0];
    this.neutralBaseColor = this.neutralBaseColorOptions[0];
  }

  accentBaseColorChangeHandler(event: CustomEvent) {
    if (event.target instanceof HTMLInputElement) {
      this.accentBaseColor = event.target.value;
    }
  }

  accentBaseColorClickHandler(event: CustomEvent) {
    if (event.target instanceof HTMLButtonElement) {
      this.accentBaseColor = event.target.innerText.replace('(default)', '').trim();
    }
  }

  neutralBaseColorChangeHandler(event: CustomEvent) {
    if (event.target instanceof HTMLInputElement) {
      this.neutralBaseColor = event.target.value;
    }
  }

  neutralBaseColorClickHandler(event: CustomEvent) {
    if (event.target instanceof HTMLButtonElement) {
      this.neutralBaseColor = event.target.innerText.replace('(default)', '').trim();
    }
  }

  @observable
  accentBaseColor: string;
  private accentBaseColorChanged() {
    if (this.accentBaseColor === this.accentBaseColorOptions[0]) {
      if (accentPaletteToken.getValueFor(this.preview).source.toColorString() !== this.accentBaseColorDefault) {
        accentPaletteToken.deleteValueFor(this.preview);
      }
    } else {
      const color = parseColorHexRGB(this.accentBaseColor);
      const swatch = SwatchRGB.from(color);
      const palette = PaletteRGB.create(swatch);
      accentPaletteToken.setValueFor(this.preview, palette);
    }
  }

  @observable
  neutralBaseColor: string;
  private neutralBaseColorChanged() {
    if (this.neutralBaseColor === this.neutralBaseColorOptions[0]) {
      if (neutralPaletteToken.getValueFor(this.preview).source.toColorString() !== this.neutralBaseColorDefault) {
        neutralPaletteToken.deleteValueFor(this.preview);
      }
    } else {
      const color = parseColorHexRGB(this.neutralBaseColor);
      const swatch = SwatchRGB.from(color);
      const palette = PaletteRGB.create(swatch);
      neutralPaletteToken.setValueFor(this.preview, palette);
    }
  }
}

export { FsLiveConfigurator };
