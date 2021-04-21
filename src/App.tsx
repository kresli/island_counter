import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { countIslands } from "./countIslands";

interface DataContext {
  rows: (0 | 1)[][];
}

const defaultData: DataContext = {
  rows: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

const dataContext = createContext<
  [data: DataContext, setData: (data: DataContext) => void]
>([defaultData, () => {}]);

const useData = () => {
  const [data, setData] = useContext(dataContext);
  const { rows } = data;
  const size = rows.length;

  const islandCount = useMemo(() => {
    return countIslands(rows);
  }, [rows]);

  const changeSize = useCallback(
    (size: number) => {
      const length = size;
      const rows = Array.from({ length }).map(() =>
        Array.from({ length }).map(() => 0 as const)
      );
      setData({
        ...data,
        rows,
      });
    },
    [data, setData]
  );
  const toggleTile = useCallback(
    ({ row, column }: { row: number; column: number }) => {
      rows[row][column] = rows[row][column] ? 0 : 1;
      setData({
        ...data,
        rows: [...rows],
      });
    },
    [data, rows, setData]
  );
  return { rows, size, changeSize, toggleTile, islandCount };
};

const Grid = () => {
  const { size, rows, changeSize, toggleTile, islandCount } = useData();

  return (
    <div>
      <label>size</label>
      <input
        type="number"
        value={size}
        onChange={({ currentTarget }) =>
          changeSize(Number(currentTarget.value))
        }
      />
      <br />
      <div>Count: {islandCount}</div>
      <div style={{ display: "flex" }}>
        {rows.map((columns, rowIndex) => (
          <div key={rowIndex}>
            {columns.map((val, columnIndex) => (
              <div
                key={columnIndex}
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid black",
                  background: val ? "burlywood" : "aqua",
                  cursor: "pointer",
                }}
                onClick={() =>
                  toggleTile({ column: columnIndex, row: rowIndex })
                }
              >
                {val ? 1 : 0}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const data = useState(defaultData);
  return (
    <div className="App">
      <dataContext.Provider value={data}>
        <Grid />
      </dataContext.Provider>
    </div>
  );
}

export default App;
