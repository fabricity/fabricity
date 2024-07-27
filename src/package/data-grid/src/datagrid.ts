import {ColumnDef, DataTableOptions, dataValue } from "./types.ts";

import './datagrid.css';

export class Main {
  private element: HTMLElement;
  private options: DataTableOptions;

  constructor(selector: string | HTMLDivElement, options: DataTableOptions) {
    const element =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (null === element) throw new Error("could not find element");
    if (!(element instanceof HTMLElement)) throw new Error("invalid element");

    this.element = element;
    this.options = options;

    this.render();
  }

  private render() {
      const columnDefs:ColumnDef[] = (this.options.columns ?? []).map((def: object) => new ColumnDef(def));
      const data = this.options.data ?? [];

      const dgContainer = document.createElement('div');
      dgContainer.classList.add('dg-container');

      const dgBody = document.createElement('div');
      dgBody.classList.add('dg-body');
      dgContainer.append(dgBody);

      const dgGrid = document.createElement('div');
      dgGrid.classList.add('dg-grid');
      dgGrid.style.gridTemplateColumns = `repeat(${columnDefs.length}, 1fr)`;
      
      dgBody.append(dgGrid);

      const dgRowHeaders = document.createElement('div');
      dgRowHeaders.classList.add('dg-row');
      dgGrid.append(dgRowHeaders);

      columnDefs.forEach((d : ColumnDef) => {
          const cellHeader = document.createElement('div');
          cellHeader.innerText = d.name;
          cellHeader.classList.add('dg-cell');
          dgRowHeaders.append(cellHeader);
      });

      data.forEach((dataRow : Record<string, dataValue> ) => {
          const columnDataRow = columnDefs.map((def) => {
              return dataRow[def.name] ?? null;
          });

          if (columnDataRow.every((v) => v === null)) return;

          const dgRow = document.createElement('div');
          dgRow.classList.add('dg-row');
          dgGrid.append(dgRow);

          columnDataRow.forEach((d) => {
              const cell = document.createElement('div');

              if (d !== null) cell.innerText = String(d);
              cell.classList.add('dg-cell');
              dgRow.append(cell);
          });
      });

      this.element.append(dgContainer);
  }
}