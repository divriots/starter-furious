import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTreeItem, getTreeView } from '@divriots/starter-furious';

provideDesignSystem().register(getTreeItem(), getTreeView());

export const defaultStory = () => html`
  <fs-tree-view>
    <fs-tree-item>
      Tree item 1
      <fs-tree-item slot="item">Tree item 1 - 1</fs-tree-item>
    </fs-tree-item>
    <fs-tree-item>Tree item 2</fs-tree-item>
  </fs-tree-view>
`;
defaultStory.storyName = 'Default';

export const flatStory = () => html`
  <fs-tree-view>
    <fs-tree-item>Tree item 1</fs-tree-item>
    <fs-tree-item>Tree item 2</fs-tree-item>
    <fs-tree-item>Tree item 3</fs-tree-item>
    <fs-tree-item>Tree item 4</fs-tree-item>
  </fs-tree-view>
`;
flatStory.storyName = 'Flat';
