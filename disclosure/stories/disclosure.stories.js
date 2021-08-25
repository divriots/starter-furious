import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getDisclosure } from '@divriots/starter-furious';

provideDesignSystem().register(getDisclosure());

export const defaultStory = () => html`
  <div>
    The Flash (or simply Flash) is the name of several superheroes appearing in American comic books published by DC
    Comics.
    <fs-disclosure title="More about Flash">
      <span slot="end">⚡️</span>
      <div>
        Created by writer Gardner Fox and artist Harry Lampert, the original Flash first appeared in Flash Comics #1
        (cover date January 1940/release month November 1939). Nicknamed the "Scarlet Speedster", all incarnations of
        the Flash possess "super speed", which includes the ability to run, move, and think extremely fast, use
        superhuman reflexes, and seemingly violate certain laws of physics.
      </div>
    </fs-disclosure>
  </div>
`;
defaultStory.storyName = 'Default';
