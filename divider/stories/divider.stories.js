import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getDivider } from '@divriots/starter-furious';

provideDesignSystem().register(getDivider());

export default {
  title: 'Components/Divider',
  render: () => `<fs-divider role="presentation"></fs-divider>`,
};

export const defaultStory = () => html` <fs-divider></fs-divider> `;
defaultStory.storyName = 'Default';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {},
};
