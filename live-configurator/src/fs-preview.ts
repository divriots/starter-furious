import { fillColor, provideDesignSystem } from '@divriots/starter-furious';
import { css, customElement, FASTElement } from '@microsoft/fast-element';
import { FsPreviewTemplate } from './fs-preview.template';

@customElement({
  name: 'fs-preview',
  template: FsPreviewTemplate,
  styles: css`
    :host {
      background-color: ${fillColor};
      display: block;
      padding: 2em;
    }
  `,
})
class FsPreview extends FASTElement {
  connectedCallback() {
    super.connectedCallback();
    provideDesignSystem(this);
  }
}

export { FsPreview };
