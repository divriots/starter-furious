import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getBreadcrumb, getBreadcrumbItem, getButton } from '@divriots/starter-furious';

provideDesignSystem().register(getBreadcrumb(), getBreadcrumbItem(), getButton());

export default {
  title: 'Components/Breadcrumb',
};

export const defaultStory = () => html`
  <fs-breadcrumb>
    <fs-breadcrumb-item href="#">Breadcrumb item 1</fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">Breadcrumb item 2</fs-breadcrumb-item>
    <fs-breadcrumb-item>Breadcrumb item 3</fs-breadcrumb-item>
  </fs-breadcrumb>
`;
defaultStory.storyName = 'Default';

export const withStartAndEndStory = () => html`
  <fs-breadcrumb>
    <fs-breadcrumb-item href="#">
      Breadcrumb item 1
      <svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.28906L15.3516 8.64844L14.6484 9.35156L14 8.71094V15H9V10H7V15H2V8.71094L1.35156 9.35156L0.648438 8.64844L8 1.28906ZM13 14V7.71094L8 2.71094L3 7.71094V14H6V9H10V14H13Z"
        ></path>
      </svg>
      <svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.28906L15.3516 8.64844L14.6484 9.35156L14 8.71094V15H9V10H7V15H2V8.71094L1.35156 9.35156L0.648438 8.64844L8 1.28906ZM13 14V7.71094L8 2.71094L3 7.71094V14H6V9H10V14H13Z"
        ></path>
      </svg>
    </fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">
      Breadcrumb item 2
      <svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.28906L15.3516 8.64844L14.6484 9.35156L14 8.71094V15H9V10H7V15H2V8.71094L1.35156 9.35156L0.648438 8.64844L8 1.28906ZM13 14V7.71094L8 2.71094L3 7.71094V14H6V9H10V14H13Z"
        ></path>
      </svg>
      <svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.28906L15.3516 8.64844L14.6484 9.35156L14 8.71094V15H9V10H7V15H2V8.71094L1.35156 9.35156L0.648438 8.64844L8 1.28906ZM13 14V7.71094L8 2.71094L3 7.71094V14H6V9H10V14H13Z"
        ></path>
      </svg>
    </fs-breadcrumb-item>
    <fs-breadcrumb-item>
      Breadcrumb item 3
      <svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.28906L15.3516 8.64844L14.6484 9.35156L14 8.71094V15H9V10H7V15H2V8.71094L1.35156 9.35156L0.648438 8.64844L8 1.28906ZM13 14V7.71094L8 2.71094L3 7.71094V14H6V9H10V14H13Z"
        ></path>
      </svg>
      <svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.28906L15.3516 8.64844L14.6484 9.35156L14 8.71094V15H9V10H7V15H2V8.71094L1.35156 9.35156L0.648438 8.64844L8 1.28906ZM13 14V7.71094L8 2.71094L3 7.71094V14H6V9H10V14H13Z"
        ></path>
      </svg>
    </fs-breadcrumb-item>
  </fs-breadcrumb>
`;
withStartAndEndStory.storyName = 'With start and end';

export const withAriaCurrentStory = () => html`
  <fs-breadcrumb>
    <fs-breadcrumb-item href="#">Breadcrumb item 1</fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">Breadcrumb item 2</fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">Breadcrumb item 3</fs-breadcrumb-item>
  </fs-breadcrumb>
`;
withAriaCurrentStory.storyName = 'With aria-current';

export const withCustomSeparatorStory = () => html`
  <fs-breadcrumb>
    <fs-breadcrumb-item href="#">
      Breadcrumb item 1
      <svg slot="separator" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.10056 2L10.6592 6.55866H0V9.62011H10.6592L6.10056 14.1899H9.91061L16 8.08939L9.91061 2H6.10056Z"
        ></path>
      </svg>
    </fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">
      Breadcrumb item 2
      <svg slot="separator" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.10056 2L10.6592 6.55866H0V9.62011H10.6592L6.10056 14.1899H9.91061L16 8.08939L9.91061 2H6.10056Z"
        ></path>
      </svg>
    </fs-breadcrumb-item>
    <fs-breadcrumb-item>
      Breadcrumb item 3
      <svg slot="separator" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.10056 2L10.6592 6.55866H0V9.62011H10.6592L6.10056 14.1899H9.91061L16 8.08939L9.91061 2H6.10056Z"
        ></path>
      </svg>
    </fs-breadcrumb-item>
  </fs-breadcrumb>
`;
withCustomSeparatorStory.storyName = 'With custom separator';

export const withDefaultAndCustomBreadcrumbItemStory = () => html`
  <fs-breadcrumb>
    <fs-breadcrumb-item href="#">Breadcrumb item 1</fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">Breadcrumb item 2</fs-breadcrumb-item>
    <fs-breadcrumb-item>
      <fs-button>breadcrumb item 3 - custom</fs-button>
    </fs-breadcrumb-item>
    <fs-breadcrumb-item href="#">Breadcrumb item 4</fs-breadcrumb-item>
  </fs-breadcrumb>
`;
withDefaultAndCustomBreadcrumbItemStory.storyName = 'With default and custom breadcrumb-item';
