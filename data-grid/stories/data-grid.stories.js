import { html } from '@microsoft/fast-element';
import {
  provideDesignSystem,
  getButton,
  getDataGrid,
  getDataGridCell,
  getDataGridRow,
} from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getDataGrid(), getDataGridCell(), getDataGridRow());

export const defaultStory = () => {
  const rowsData = [
    {
      item1: 'value 1-1',
      item2: 'value 2-1',
      item3: 'value 4-1',
      item4: 'value 5-1',
    },
    {
      item1: 'value 1-2',
      item2: 'value 2-2',
      item3: 'value 4-2',
      item4: 'value 5-2',
    },
    {
      item1: 'value 1-3',
      item2: 'value 2-3',
      item3: 'value 4-3',
      item4: 'value 5-3',
    },
  ];
  return html`
    <div>
      <fs-data-grid :rowsData=${() => rowsData}></fs-data-grid>
      <p></p>
      <h1>A basic data-grid</h1>
      <h2>A row is generated for each object in the rowsData array.</h2>
      <h2>A column is automatically generated for each key in the first object in the array.</h2>
    </div>
  `;
};
defaultStory.storyName = 'Default';

export const generateHeaderOptionsStory = () => {
  const rowsData = [
    {
      item1: 'value 1-1',
      item2: 'value 2-1',
      item3: 'value 3-1',
      item4: 'value 4-1',
    },
    {
      item1: 'value 1-2',
      item2: 'value 2-2',
      item3: 'value 3-2',
      item4: 'value 4-2',
    },
    {
      item1: 'value 1-3',
      item2: 'value 2-3',
      item3: 'value 3-3',
      item4: 'value 4-3',
    },
    {
      item1: 'value 1-4',
      item2: 'value 2-4',
      item3: 'value 3-4',
      item4: 'value 4-4',
    },
    {
      item1: 'value 1-5',
      item2: 'value 2-5',
      item3: 'value 3-5',
      item4: 'value 4-5',
    },
  ];
  const setGeneratedHeader = (headerOption) => {
    const sampleGrid = document.getElementById('samplegrid');
    sampleGrid.generateHeader = headerOption;
  };
  return html`
    <div>
      <fs-data-grid id="samplegrid" :rowsData=${() => rowsData} style="height: 200px;"></fs-data-grid>
      <p>
        <fs-button @click="${() => setGeneratedHeader('default')}"> Default header </fs-button>
        <fs-button @click="${() => setGeneratedHeader('sticky')}"> Sticky header </fs-button>
        <fs-button @click="${() => setGeneratedHeader('none')}"> No header </fs-button>
      </p>

      <p></p>
      <h1>Generate header options</h1>
      <h2>
        Authors can choose for the grid to generate a normal header row, a sticky header row, or no header row at all
      </h2>
    </div>
  `;
};
generateHeaderOptionsStory.storyName = 'Generate header options';

export const customColumnsStory = () => {
  const rowsData = [
    {
      item1: 'value 1-1',
      item2: 'value 2-1',
      item3: 'value 3-1',
      item4: 'value 4-1',
    },
    {
      item1: 'value 1-2',
      item2: 'value 2-2',
      item3: 'value 3-2',
      item4: 'value 4-2',
    },
    {
      item1: 'value 1-3',
      item2: 'value 2-3',
      item3: 'value 3-3',
      item4: 'value 4-3',
    },
  ];
  const set2Columns = () => {
    document.getElementById('samplegrid').columnDefinitions = [{ columnDataKey: 'item2' }, { columnDataKey: 'item3' }];
  };
  const set3Columns = () => {
    document.getElementById('samplegrid').columnDefinitions = [
      { columnDataKey: 'item2' },
      { columnDataKey: 'item1' },
      { columnDataKey: 'item4' },
    ];
  };
  return html`
    <div>
      <fs-data-grid id="samplegrid" :rowsData=${() => rowsData}></fs-data-grid>
      <p>
        <fs-button @click="${() => set2Columns()}">2 Columns</fs-button>
        <fs-button @click="${() => set3Columns()}">3 Columns</fs-button>
      </p>

      <p></p>
      <h1>Custom columns</h1>
      <h2>Authors can specify columns rather than let the grid generate them</h2>
      <h2>Columns render in the order specified</h2>
    </div>
  `;
};
customColumnsStory.storyName = 'Custom columns';

export const columnTitlesStory = () => {
  const rowsData = [
    {
      item1: 'value 1-1',
      item2: 'value 2-1',
      item3: 'value 3-1',
      item4: 'value 4-1',
    },
    {
      item1: 'value 1-2',
      item2: 'value 2-2',
      item3: 'value 3-2',
      item4: 'value 4-2',
    },
    {
      item1: 'value 1-3',
      item2: 'value 2-3',
      item3: 'value 3-3',
      item4: 'value 4-3',
    },
  ];
  const columnDefinitions = [
    { columnDataKey: 'item2', title: 'My custom title' },
    { columnDataKey: 'item1', title: 'My other custom title' },
    { columnDataKey: 'item4', title: 'Yet another custom title' },
  ];
  return html`
    <div>
      <fs-data-grid :rowsData=${() => rowsData} :columnDefinitions=${() => columnDefinitions}></fs-data-grid>
      <p></p>
      <h1>Column Titles</h1>
      <h2>Authors can specify custom column titles in the columnDefinition</h2>
    </div>
  `;
};
columnTitlesStory.storyName = 'Column titles';

export const columnWidthsStory = () => {
  const rowsData = [
    {
      item1: 'value 1-1',
      item2: 'value 2-1',
      item3: 'value 3-1',
      item4: 'value 4-1',
    },
    {
      item1: 'value 1-2',
      item2: 'value 2-2',
      item3: 'value 3-2',
      item4: 'value 4-2',
    },
    {
      item1: 'value 1-3',
      item2: 'value 2-3',
      item3: 'value 3-3',
      item4: 'value 4-3',
    },
  ];
  const toggleColumnWidth = (newWidths) => {
    const sampleGrid = document.getElementById('samplegrid');
    sampleGrid.gridTemplateColumns = newWidths;
  };
  return html`
    <div>
      <fs-data-grid id="samplegrid" :rowsData=${() => rowsData}></fs-data-grid>
      <p>
        <fs-button @click="${() => toggleColumnWidth('2fr 1fr 1fr 1fr')}"> Expand 1 </fs-button>
        <fs-button @click="${() => toggleColumnWidth('1fr 2fr 1fr 1fr')}"> Expand 2 </fs-button>
        <fs-button @click="${() => toggleColumnWidth('1fr 1fr 2fr 1fr')}"> Expand 3 </fs-button>
        <fs-button @click="${() => toggleColumnWidth('1fr 1fr 1fr 2fr')}"> Expand 4 </fs-button>
      </p>

      <p></p>
      <h1>Column widths</h1>
      <h2>Each row of a data grid is rendered using css grid layout</h2>
      <h2>
        The parent grid ensures that each child row has the same gridTemplateColumns value set to keep layout in sync
      </h2>
      <h2>The parent data grid automatically sets the width of each column to "1fr"</h2>
      <h2>
        Authors can set the data-grid's gridTemplateColumns property themselves for finer control over column widths
      </h2>
      <h2>
        By default the generated cells in each row are assigned the column that corresponds to the index of that column
        in the grid's columnDefinitions.
      </h2>
      <h2>
        The "gridColumn" property of a columnDefinition can specify another column for cells in that column to render
        to.
      </h2>
      <h2>
        Note: keyboard navigation across a row is currently based on order of cell children in the dom which matches the
        order in the grid's columnDefinitions.
      </h2>
    </div>
  `;
};
columnWidthsStory.storyName = 'Column widths';

export const manualGridStory = () => html`
  <div>
    <fs-data-grid grid-template-columns="1fr 1fr" generate-header="none">
      <fs-data-grid-row row-type="header">
        <fs-data-grid-cell grid-column="1" cell-type="columnheader"> Column 1 </fs-data-grid-cell>
        <fs-data-grid-cell grid-column="2" cell-type="columnheader"> Column 2 </fs-data-grid-cell>
      </fs-data-grid-row>
      <fs-data-grid-row>
        <fs-data-grid-cell grid-column="1">1.1</fs-data-grid-cell>
        <fs-data-grid-cell grid-column="2">1.2</fs-data-grid-cell>
      </fs-data-grid-row>
      <fs-data-grid-row>
        <fs-data-grid-cell grid-column="1">2.1</fs-data-grid-cell>
        <fs-data-grid-cell grid-column="2">2.2</fs-data-grid-cell>
      </fs-data-grid-row>
    </fs-data-grid>
    <p></p>
    <h1>Manual grid</h1>
    <h2>Grids can also be defined with html</h2>
    <h2>
      Authors will need to define the 'grid-template-columns' of manual grids as well as assign each cell to a
      'grid-column'.
    </h2>
  </div>
`;
manualGridStory.storyName = 'Manual grid';
