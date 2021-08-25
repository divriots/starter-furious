import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getAnchoredRegion } from '@divriots/starter-furious';

provideDesignSystem().register(getAnchoredRegion());

export const defaultStory = () => {
  const update = () => {
    const region = document.getElementById('default-region');
    region.update();
  };
  return html`
    <div id="viewport-default" style="height: 100%; width: 100%; position: relative;">
      <button id="anchor-default" style="margin-left: 200px; margin-top: 200px;" @click="${() => update()}">
        update position
      </button>
      <fs-anchored-region
        id="default-region"
        viewport="viewport-default"
        anchor="anchor-default"
        vertical-positioning-mode="dynamic"
        horizontal-positioning-mode="dynamic"
      >
        <div style="height: 200px; width: 200px; background: yellow;"></div>
      </fs-anchored-region>
    </div>
  `;
};
defaultStory.storyName = 'Default';
