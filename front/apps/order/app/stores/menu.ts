import { atom, RecoilState } from "recoil";

type MenuItemsStoreType = {
  [key: string]: {
    category: string;
    detail: string;
    imgSrc: string;
    name: string;
    order: number;
    price: { defaultPrice: number };
  };
};

export const menuItemsStore: RecoilState<MenuItemsStoreType> = atom({
  key: "menuItemsStore",
  default: {},
});

type MenuCategoriesType = {
  [key: string]: {
    id: string;
  };
};

export const menuCategoriesStore: RecoilState<MenuCategoriesType> = atom({
  key: "menuCategoriesStore",
  default: {},
});
