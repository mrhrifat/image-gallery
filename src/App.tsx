/**
 * Title: App
 * Description:
 * Filename: App.tsx
 * Path: /src/App.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Oct 31, 2023
 * Last Updated Date: Oct 31, 2023
 *
 */

import { DragEvent, useState } from "react";
import { gridItemData } from "./utils/data";
import Header from "./layouts/Header";
import { AddImage, ImageCard } from "./components";
import { GridItem, GridItemArr } from "./utils/type";

const App = () => {
  const [gridItem, setGridItem] = useState<GridItemArr>(gridItemData);
  const [selected, setSelected] = useState<GridItemArr>([]);
  const [, setDragImgName] = useState<number>();
  const [dragImgSrc, setDragImgSrc] = useState<string>("");
  const [, setDropImgSrc] = useState<string>("");

  //  Is selected item is available or not
  const isAvailableSelected = (item: GridItem) => selected.includes(item);

  // Item Drop on new place
  const dropItem = (event: DragEvent<HTMLDivElement>, item: GridItem) => {
    event.preventDefault();
    const tempDropImg = item.url;
    const tempDragImg = dragImgSrc;
    setDropImgSrc(item.url);

    setGridItem((prevArr: GridItemArr) => {
      return prevArr.map((el) => {
        if (el.url === tempDropImg) return { ...el, url: tempDragImg };
        if (el.url === tempDragImg) return { ...el, url: tempDropImg };
        return el;
      });
    });
  };

  // Item Drag from it's place
  const dragItem = (item: GridItem) => {
    setDragImgName(item.id);
    setDragImgSrc(item.url);
  };

  // Toggle Selected & Unselected
  const handleSelected = (item: GridItem) => {
    if (isAvailableSelected(item)) {
      setSelected((prevState) =>
        prevState.filter((selected) => selected !== item)
      );
    } else {
      setSelected((prevState) => [...prevState, item]);
    }
  };

  // Delete Selected Item
  const handleDelete = () => {
    setGridItem((prevState) =>
      prevState.filter((item) => !isAvailableSelected(item))
    );
    setSelected([]);
  };

  return (
    <div className="container mx-auto py-8 max-sm:py-4">
      <div className="flex flex-col gap-4 justify-center p-2 border border-slate-600 rounded-md">
        <Header selected={selected.length} handleDelete={handleDelete} />

        <div className="flex flex-row justify-center">
          <div className="grid grid-rows-15 md:grid-rows-5 lg:grid-rows-3 md:grid-flow-col items-center justify-center gap-3 my-6 lg:max-h-[600px] lg:max-w-[1000px] h-full w-full place-items-center">
            {gridItem.map((item, id) => (
              <ImageCard
                key={item.name}
                id={id}
                item={item}
                isAvailableSelected={isAvailableSelected}
                dragItem={dragItem}
                dropItem={dropItem}
                handleSelected={handleSelected}
              />
            ))}
            <AddImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
