import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton, getCard } from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getCard());

export const defaultStory = () => html`
  <fs-card style="width: 300px;">
    <img src="https://via.placeholder.com/300x200/414141" />
    <div style="padding: 0 10px 10px; color: var(--neutral-foreground-rest);">
      <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque varius ornare. Etiam convallis
        sollicitudin scelerisque. Maecenas in velit vehicula, aliquet orci et, consequat purus. Donec eget sodales
        lectus, vel sollicitudin ligula. Suspendisse volutpat auctor diam, vel mattis lorem venenatis in.
      </p>
      <fs-button>Button</fs-button>
    </div>
  </fs-card>
`;
defaultStory.storyName = 'Default';
