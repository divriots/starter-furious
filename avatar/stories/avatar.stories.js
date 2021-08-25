import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getAvatar } from '@divriots/starter-furious';

provideDesignSystem().register(getAvatar());

export const defaultStory = () => html`
  <div>
    <style>
      /* For example purposes only. App authors needs to define */
      fs-avatar {
        --avatar-fill-accent-primary: #cf4073;
      }
    </style>

    <fs-avatar
      alt="Annie's profile image"
      link="#"
      name="Annie Lennox"
      shape="circle"
      fill="accent-primary"
    ></fs-avatar>
  </div>
`;
defaultStory.storyName = 'Default';
