import { RowID, RowElement} from './interface.ts'

export function insertRow(row: RowElement): number;

export function deletedRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): RowID;
