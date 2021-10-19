# tabs

_Tabs_ are a set of layered sections of content that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel.

## Setup

```ts
import { provideDesignSystem, getTabs, getTab, getTabPanel } from '@divriots/starter-furious';

provideDesignSystem().register(getTabs(), getTab(), getTabPanel());
```

## Usage

```js preview-story
import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getAnchor, getTab, getTabPanel, getTabs } from '@divriots/starter-furious';

provideDesignSystem().register(getAnchor(), getTab(), getTabPanel(), getTabs());

export const usageStory = () => html`
  <fs-tabs activeid="entrees">
    <fs-tab id="apps">Appetizers</fs-tab>
    <fs-tab id="entrees">Entrees</fs-tab>
    <fs-tab id="desserts">Desserts</fs-tab>
    <fs-tab-panel id="appsPanel">
      <ol>
        <li><fs-anchor href="#" appearance="hypertext">Stuffed artichokes</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Bruschetta</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Oven-baked polenta</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Salami and Fig Crostini with Ricotta</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Rosemary-Potato Focaccia with Goat Cheese</fs-anchor></li>
      </ol>
    </fs-tab-panel>
    <fs-tab-panel id="entreesPanel">
      <ol>
        <li><fs-anchor href="#" appearance="hypertext">Mushroom-Sausage Ragù</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Tomato Bread Soup with Steamed Mussels</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Grilled Fish with Artichoke Caponata</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Celery Root and Mushroom Lasagna</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Osso Buco with Citrus Gremolata</fs-anchor></li>
      </ol>
    </fs-tab-panel>
    <fs-tab-panel id="dessertsPanel">
      <ol>
        <li><fs-anchor href="#" appearance="hypertext">Tiramisu</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Spumoni</fs-anchor></li>
        <li><fs-anchor href="#" appearance="hypertext">Limoncello and Ice Cream with Biscotti</fs-anchor></li>
      </ol>
    </fs-tab-panel>
  </fs-tabs>
`;
```

## Use cases

- Steve is researching for an upcoming vacation for him and his family. He opens his web browser and opens a new tab to make a rental car reservation and another for his flight information. Steve can quickly switch back and fourth between tabs to get the information he needs for the rental car reservation.

- Monika visits a website to learn how to fix her leaky sink. The website displays a vertical tab interface with each step. Monika can jump ahead steps or go back to previous steps by selecting various tabs.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#tabpanel)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tabs/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tabs/tabs.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/tabs/tabs.styles.ts)
