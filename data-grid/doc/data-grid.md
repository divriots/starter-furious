# data-grid

The `fs-data-grid` component is used to display tabular data. The `fs-data-grid-row` and `fs-data-grid-cell` components are typically created programmatically by the parent grid but some authors may find it useful to create them manually.

## Setup

```ts
import { provideDesignSystem, getDataGrid, getDataGridCell, getDataGridRow } from '@divriots/starter-furious';

provideDesignSystem().register(getDataGrid(), getDataGridCell(), getDataGridRow());
```

## Usage

```html
<fs-data-grid id="samplegrid"></fs-data-grid>
```

Note that data must be provided to the grid by setting a property.

```ts
document.getElementById('samplegrid').rowsData = [
  { item1: 'value 1-1', item2: 'value 2-1' },
  { item1: 'value 1-2', item2: 'value 2-2' },
  { item1: 'value 1-3', item2: 'value 2-3' },
];
```

## Use cases

Any time an author wants to display tabular data.

## Additional resources

- [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#grid)
- [Fast documentation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/data-grid/README.md)
- [Fast specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/data-grid/data-grid.spec.md)
- [Fast styles implementation](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-components/src/data-grid/data-grid.styles.ts)
