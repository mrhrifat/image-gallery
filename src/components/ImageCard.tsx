/**
 * Title: ImageCard
 * Description:
 * Filename: ImageCard.tsx
 * Path: /src/components/ImageCard.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 01, 2023
 * Last Updated Date: Nov 01, 2023
 *
 */

import { FC } from "react";
import { ImageCardType } from "../utils/type";

const ImageCard: FC<ImageCardType> = ({
  id,
  item,
  dropItem,
  dragItem,
  isAvailableSelected,
  handleSelected,
}) => {
  return (
    <div
      key={item.url}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => dropItem(event, item)}
      onClick={() => handleSelected(item)}
      className={`image-card ${id === 0 ? "featured" : "normal"} ${
        isAvailableSelected(item) ? "selected" : ""
      } hover:onhover group`}
    >
      <div
        className="relative"
        draggable={true}
        onDragStart={() => dragItem(item)}
      >
        <img
          src={item.url}
          alt={item.name}
          className={`rounded-md ${id === 0 && "max-md:h-[364px]"}`}
        />

        <div
          className={`absolute top-2 left-2 ${
            isAvailableSelected(item) ? "block" : "hidden group-hover:block"
          }`}
        >
          <input
            id="selectedImage"
            name="selectedImage"
            type="checkbox"
            checked={isAvailableSelected(item)}
            onChange={(event) => event.preventDefault()}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
