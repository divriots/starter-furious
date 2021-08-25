import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getSkeleton } from '@divriots/starter-furious';

provideDesignSystem().register(getSkeleton());

export const defaultStory = () => html`
  <div>
    <div class="card-placeholder">
      <fs-skeleton style="width: 50px; height: 50px;" shape="circle"></fs-skeleton>
      <fs-skeleton style="border-radius: 4px; margin-top: 10px; height: 10px;" shape="rect"></fs-skeleton>
      <fs-skeleton style="border-radius: 4px; margin-top: 10px; height: 10px;" shape="rect"></fs-skeleton>
      <fs-skeleton style="border-radius: 4px; margin-top: 10px; height: 10px;" shape="rect"></fs-skeleton>
      <fs-skeleton
        style="
                    border-radius: 4px;
                    width: 75px;
                    height: 30px;
                    margin-top: 20px;
                    margin-bottom: 10px;
                "
        shape="rect"
      ></fs-skeleton>
    </div>
    <style>
      .card-placeholder {
        background-color: #fff;
        padding: 20px;
        width: 500px;
        border-radius: 4px;
      }
    </style>
  </div>
`;
defaultStory.storyName = 'Default';
