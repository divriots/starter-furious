import type { Container } from '@microsoft/fast-foundation';
import { getAccordion } from '../../accordion';
import { getAccordionItem } from '../../accordion-item';
import { getAnchor } from '../../anchor';
import { getAnchoredRegion } from '../../anchored-region';
import { getAvatar } from '../../avatar';
import { getBadge } from '../../badge';
import { getBreadcrumb } from '../../breadcrumb';
import { getBreadcrumbItem } from '../../breadcrumb-item';
import { getButton } from '../../button';
import { getCard } from '../../card';
import { getCheckbox } from '../../checkbox';
import { getCombobox } from '../../combobox';
import { getDataGrid } from '../../data-grid';
import { getDataGridCell } from '../../data-grid-cell';
import { getDataGridRow } from '../../data-grid-row';
import { getDialog } from '../../dialog';
import { getDisclosure } from '../../disclosure';
import { getDivider } from '../../divider';
import { getFlipper } from '../../flipper';
import { getHorizontalScroll } from '../../horizontal-scroll';
import { getListbox } from '../../listbox';
import { getMenu } from '../../menu';
import { getMenuItem } from '../../menu-item';
import { getNumberField } from '../../number-field';
import { getOption } from '../../option';
import { getProgress } from '../../progress';
import { getProgressRing } from '../../progress-ring';
import { getRadio } from '../../radio';
import { getRadioGroup } from '../../radio-group';
import { getSelect } from '../../select';
import { getSkeleton } from '../../skeleton';
import { getSlider } from '../../slider';
import { getSliderLabel } from '../../slider-label';
import { getSwitch } from '../../switch';
import { getTab } from '../../tab';
import { getTabPanel } from '../../tab-panel';
import { getTabs } from '../../tabs';
import { getTextArea } from '../../text-area';
import { getTextField } from '../../text-field';
import { getToolbar } from '../../toolbar';
import { getTooltip } from '../../tooltip';
import { getTreeItem } from '../../tree-item';
import { getTreeView } from '../../tree-view';

const components = [
  getAccordion,
  getAccordionItem,
  getAnchor,
  getAnchoredRegion,
  getAvatar,
  getBadge,
  getBreadcrumb,
  getBreadcrumbItem,
  getButton,
  getCard,
  getCheckbox,
  getCombobox,
  getDataGrid,
  getDataGridCell,
  getDataGridRow,
  getDialog,
  getDisclosure,
  getDivider,
  getFlipper,
  getHorizontalScroll,
  getListbox,
  getMenu,
  getMenuItem,
  getNumberField,
  getOption,
  getProgress,
  getProgressRing,
  getRadio,
  getRadioGroup,
  getSelect,
  getSkeleton,
  getSlider,
  getSliderLabel,
  getSwitch,
  getTab,
  getTabPanel,
  getTabs,
  getTextArea,
  getTextField,
  getToolbar,
  getTooltip,
  getTreeItem,
  getTreeView,
];

export const allComponents = {
  register(container: Container, ...rest: any[]) {
    for (const component of components) {
      component().register(container, ...rest);
    }
  },
};
