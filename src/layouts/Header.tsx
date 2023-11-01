/**
 * Title: Header
 * Description:
 * Filename: Header.tsx
 * Path: /src/layouts/Header.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 01, 2023
 * Last Updated Date: Nov 01, 2023
 *
 */

import { FC } from "react";
import { HeaderType } from "../utils/type";

const Header: FC<HeaderType> = ({ selected, handleDelete }) => {
  return (
    <div className="flex flex-row justify-between border-b border-slate-400 pb-3">
      {selected === 0 ? (
        <h2 className="text-xl">Gallery</h2>
      ) : (
        <>
          <div className="flex flex-row gap-3 items-center">
            <input
              id="selectedImage"
              name="selectedImage"
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="selectedImage" className="text-xl">
              {selected} Items Selected
            </label>
          </div>
          <button className="text-red-600 font-bold" onClick={handleDelete}>
            Delete files
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
