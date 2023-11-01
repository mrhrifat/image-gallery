/**
 * Title: type
 * Description:
 * Filename: type.ts
 * Path: /src/utils/type.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 01, 2023
 * Last Updated Date: Nov 01, 2023
 *
 */
// Grid Item Type
export type GridItem = {
  id: number;
  name: string;
  url: string;
};

// Grid Item Arr Type
export type GridItemArr = GridItem[];

// Header Type
export type HeaderType = {
  selected: number;
  handleDelete: () => void;
};

// Image Card Type
export type ImageCardType = {
  id: number;
  item: GridItem;
  dropItem: (event: any, item: GridItem) => void;
  dragItem: (item: GridItem) => void;
  isAvailableSelected: (item: GridItem) => boolean;
  handleSelected: (item: GridItem) => void;
};
