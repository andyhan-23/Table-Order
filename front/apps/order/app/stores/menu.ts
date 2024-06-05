import { atom, RecoilState } from "recoil";

type MenuItemsStoreType = {
  [key: string]: {
    category: string;
    detail: string;
    imageSrc: string;
    name: string;
    order: number;
    price: { defaultPrice: number };
  };
};

export const menuItemsScore: RecoilState<MenuItemsStoreType> = atom({
  key: "menuItemsStore",
  default: {},
});

type MenuCategoriesType = {
  [key: string]: {
    id: string;
  };
};

export const menuCategoies: RecoilState<MenuCategoriesType> = atom({
  key: "menuCategoriesStore",
  default: {},
});
