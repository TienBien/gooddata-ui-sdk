// (C) 2007-2022 GoodData Corporation
/**
 * This package provides the PivotTable component that you can use to visualize your data in a table-based manner.
 *
 * @remarks
 * The PivotTable component provides additional capabilities such as totals, automatic column resizing, and more.
 *
 * @packageDocumentation
 */
export { PivotTable, pivotTableMenuForCapabilities } from "./PivotTable";
export { CorePivotTable } from "./CorePivotTable";

export {
    IPivotTableBucketProps,
    IPivotTableBaseProps,
    IPivotTableProps,
    IPivotTableConfig,
    IColumnSizing,
    DefaultColumnWidth,
    ICorePivotTableProps,
    ColumnResizedCallback,
    IMenu,
} from "./publicTypes";

export {
    IWeakMeasureColumnWidthItem,
    IWeakMeasureColumnWidthItemBody,
    isWeakMeasureColumnWidthItem,
    ColumnWidthItem,
    ColumnWidth,
    IAttributeColumnWidthItem,
    IAttributeColumnWidthItemBody,
    IMeasureColumnWidthItem,
    IMeasureColumnWidthItemBody,
    isAttributeColumnWidthItem,
    isMeasureColumnWidthItem,
    IAbsoluteColumnWidth,
    IAllMeasureColumnWidthItem,
    IAllMeasureColumnWidthItemBody,
    isAbsoluteColumnWidth,
    isAllMeasureColumnWidthItem,
    IAutoColumnWidth,
    ColumnLocator,
    IAttributeColumnLocator,
    IAttributeColumnLocatorBody,
    IMeasureColumnLocator,
    IMeasureColumnLocatorBody,
    isMeasureColumnLocator,
    isAttributeColumnLocator,
    newAttributeColumnLocator,
    newWidthForAllColumnsForMeasure,
    newWidthForAllMeasureColumns,
    newWidthForAttributeColumn,
    newWidthForSelectedColumns,
} from "./columnWidths";
