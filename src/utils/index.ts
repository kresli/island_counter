export const getAboveIndex = (rowLength: number, sourceIndex: number) =>
  sourceIndex > rowLength ? sourceIndex - rowLength : null;

export const getBelowIndex = (rowLength: number, sourceIndex: number) =>
  sourceIndex < rowLength * rowLength - rowLength
    ? sourceIndex + rowLength
    : null;
export const getRightIndex = (rowLength: number, sourceIndex: number) =>
  (sourceIndex + 1) % rowLength !== 0 ? sourceIndex + 1 : null;
export const getLeftIndex = (rowLength: number, sourceIndex: number) =>
  sourceIndex % rowLength !== 0 ? sourceIndex - 1 : null;

export const getSoroundingIndexes = (rowLength: number, index: number) =>
  [
    getAboveIndex(rowLength, index),
    getLeftIndex(rowLength, index),
    getBelowIndex(rowLength, index),
    getRightIndex(rowLength, index),
  ].filter((index) => index !== null);
