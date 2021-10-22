import { html, ref, repeat } from '@microsoft/fast-element';
import { FsLiveConfigurator } from './fs-live-configurator';
import { PreviewTemplate } from './preview.template';

export const FsLiveConfiguratorTemplate = html<FsLiveConfigurator>`
  <h2>Configure</h2>
  <div>
    <label for="custom-accent-base-color">Pick a custom accent color</label>
    <input
      id="custom-accent-base-color"
      type="color"
      :value="${(x) => x.accentBaseColor}"
      @input="${(x, c) => x.accentBaseColorChangeHandler(c.event as CustomEvent)}"
    />
    <span>or select:</span>
    ${repeat(
      (x) => x.accentBaseColorOptions,
      html<string>`
        <button
          aria-label="select an accent color ${(x) => x}"
          @click="${(_, c) => c.parent.accentBaseColorClickHandler(c.event as CustomEvent)}"
        >
          ${(x, c) => x + '' + (x === c.parent.accentBaseColorDefault ? ' (default)' : '')}
        </button>
      `,
    )}
  </div>
  <div>
    <label for="custom-neutral-base-color">Pick a custom neutral color</label>
    <input
      id="custom-neutral-base-color"
      type="color"
      :value="${(x) => x.neutralBaseColor}"
      @input="${(x, c) => x.neutralBaseColorChangeHandler(c.event as CustomEvent)}"
    />
    <span>or select:</span>
    ${repeat(
      (x) => x.neutralBaseColorOptions,
      html<string>`
        <button
          aria-label="select neutral color ${(x) => x}"
          @click="${(_, c) => c.parent.neutralBaseColorClickHandler(c.event as CustomEvent)}"
        >
          ${(x, c) => x + '' + (x === c.parent.neutralBaseColorDefault ? ' (default)' : '')}
        </button>
      `,
    )}
  </div>
  <h2>Preview</h2>
  <div class="preview" ${ref('preview')}>${PreviewTemplate}</div>
`;
