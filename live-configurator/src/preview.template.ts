import { html, repeat } from '@microsoft/fast-element';
import * as accordionStories from '~/accordion/stories/accordion.stories';
import * as anchorStories from '~/anchor/stories/anchor.stories';
import * as breadcrumbStories from '~/breadcrumb/stories/breadcrumb.stories';
import * as buttonStories from '~/button/stories/button.stories';
import * as checkboxStories from '~/checkbox/stories/checkbox.stories';
import * as comboboxStories from '~/combobox/stories/combobox.stories';
import * as disclosureStories from '~/disclosure/stories/disclosure.stories';
import * as dividerStories from '~/divider/stories/divider.stories';
import * as flipperStories from '~/flipper/stories/flipper.stories';
import * as listboxStories from '~/listbox/stories/listbox.stories';
import * as menuStories from '~/menu/stories/menu.stories';
import * as numberFieldStories from '~/number-field/stories/number-field.stories';
import * as progressStories from '~/progress/stories/progress.stories';
import * as progressRingStories from '~/progress-ring/stories/progress-ring.stories';
import * as radioGroupStories from '~/radio-group/stories/radio-group.stories';
import * as selectStories from '~/select/stories/select.stories';
import * as skeletonStories from '~/skeleton/stories/skeleton.stories';
import * as sliderStories from '~/slider/stories/slider.stories';
import * as switchStories from '~/switch/stories/switch.stories';
import * as textAreaStories from '~/text-area/stories/text-area.stories';
import * as textFieldStories from '~/text-field/stories/text-field.stories';
import * as toolbarStories from '~/toolbar/stories/toolbar.stories';
import * as tooltipStories from '~/tooltip/stories/tooltip.stories';
import * as treeViewStories from '~/tree-view/stories/tree-view.stories';

const stories = [];

[
  accordionStories,
  anchorStories,
  breadcrumbStories,
  buttonStories,
  checkboxStories,
  comboboxStories,
  disclosureStories,
  dividerStories,
  flipperStories,
  listboxStories,
  menuStories,
  numberFieldStories,
  progressStories,
  progressRingStories,
  radioGroupStories,
  selectStories,
  skeletonStories,
  sliderStories,
  switchStories,
  textAreaStories,
  textFieldStories,
  toolbarStories,
  tooltipStories,
  treeViewStories,
].forEach((storiesModule) => {
  Object.values(storiesModule).forEach((exportedValue) => {
    if (exportedValue && exportedValue.hasOwnProperty('storyName')) {
      stories.push(exportedValue);
    }
  });
});

export const PreviewTemplate = html`${repeat(
  () => stories,
  html`<div style="display: inline-block; padding: 5px;">${(x) => x()}</div>`,
)}`;
