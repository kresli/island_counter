import { getSoroundingIndexes } from "./utils";

type Field = (0 | 1)[][];

type Records = Set<number>;

type Island = Set<number>;
type Islands = Set<Island>;

interface VisitTileData {
  arr: number[];
  rowLength: number;
  index: number | null;
  parentIsland: Island | null;
  visited: Records;
  islands: Islands;
}

function visitTile(data: VisitTileData) {
  const { arr, rowLength, index, visited, islands } = data;
  let parentIsland = data.parentIsland;
  // if we didn't visit tile then register it otherwise return;
  if (index === null || visited.has(index)) return null;
  visited.add(index);

  const currentTile = arr[index];
  if (!currentTile) return null;
  if (!parentIsland) {
    parentIsland = new Set();
    islands.add(parentIsland);
  }
  parentIsland.add(index);

  const nextData = {
    ...data,
    parentIsland,
  };
  const sorounded = getSoroundingIndexes(rowLength, index);
  sorounded.forEach((index) =>
    visitTile({
      ...nextData,
      index,
    })
  );
  return null;
}

export function countIslands(field: Field): number {
  const flatField = field.flat();
  const islands = new Set<Island>();
  const visited: Records = new Set();

  flatField.forEach((_, index) =>
    visitTile({
      arr: flatField,
      rowLength: field[0].length,
      index,
      parentIsland: null,
      visited,
      islands,
    })
  );
  return islands.size;
}
