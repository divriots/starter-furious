import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton, getDialog } from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getDialog());

export default {
  title: 'Components/Dialog',
};

export const defaultStory = () => html`
  <fs-dialog>
    <div style="padding: 0 10px 10px; color: var(--neutral-foreground-rest);">
      <h2>Dialog with text and a button.</h2>
      <fs-button>Button</fs-button>
    </div>
  </fs-dialog>
`;
defaultStory.storyName = 'Default';
