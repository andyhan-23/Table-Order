import menuCategoriesJSON from "./__fixtures__/menu-categories.json";
import menuItemsJSON from "./__fixtures__/menu-items.json";
import { MenuItemType, MenuCategoryType } from "./types";

const getData = (
  target: string
):
  | Record<string, MenuItemType>
  | Record<string, MenuCategoryType>
  | undefined => {
  try {
    switch (target) {
      case "item":
        return menuItemsJSON;
      case "categories":
        return menuCategoriesJSON;
      default:
        throw new Error("No data");
    }
  } catch (error) {
    console.error(error);
  }
};

export default getData;
