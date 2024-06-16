import _ from "lodash";
import { atom, RecoilState, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { menuItemsStore } from "./menu";

type BasketItemType = {
  count: number;
  name: string;
  order: number;
  price: number;
  totalPrice: number;
};

type BasketItemsType = { [key: string]: BasketItemType } & {
  sumCount: number;
  sumPrice: number;
};

type MenuItemType = {
  category: string;
  detail: string;
  imgSrc: string;
  name: string;
  order: number;
  price: number;
};

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<BasketItemsType> = atom({
  key: "basketItemsStore",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const addItemInBasket = selector({
  key: "addItemInBasketStore",
  get: () => null,
  set: ({ set, get }, id: string) => {
    const menuItem: MenuItemType = get(menuItemsStore)[id];
    const basket: BasketItemsType = get(basketItemsStore);
    const itemInBasket: BasketItemType | undefined = basket[id];

    const itemToBeUpdated: BasketItemType = {
      count: (itemInBasket?.count || 0) + 1,
      name: itemInBasket?.name || menuItem?.name || "",
      order: menuItem.order,
      price: menuItem.price,
      totalPrice: menuItem.price * ((itemInBasket?.count || 0) + 1),
    };

    set(basketItemsStore, {
      ...basket,
      [id]: itemToBeUpdated,
      sumCount: (basket.sumCount || 0) + 1,
      sumPrice: (basket.sumPrice || 0) + menuItem.price,
    });
  },
});

export const removeItemFromBasket = selector({
  key: "removeItemFromBasketStore",
  get: () => null,
  set: ({ set, get }, id: string) => {
    const menuItem: MenuItemType = get(menuItemsStore)[id];
    const basket: BasketItemsType = get(basketItemsStore);
    const itemInBasket: BasketItemType | undefined = basket[id];

    if (!itemInBasket) return;

    if (itemInBasket && itemInBasket.count === 1) {
      const newBasket: BasketItemsType = _.cloneDeep(basket);
      delete newBasket[id];

      set(basketItemsStore, {
        ...newBasket,
        sumCount: basket.sumCount - 1,
        sumPrice: basket.sumPrice - menuItem.price,
      });
    } else {
      const itemToBeUpdated: BasketItemType = {
        count: itemInBasket.count - 1,
        name: itemInBasket.name,
        order: menuItem.order,
        price: menuItem.price,
        totalPrice: menuItem.price * (itemInBasket.count - 1),
      };

      set(basketItemsStore, {
        ...basket,
        [id]: itemToBeUpdated,
        sumCount: basket.sumCount - 1,
        sumPrice: basket.sumPrice - menuItem.price,
      });
    }
  },
});

export const deleteItemFromBasket = selector({
  key: "deleteItemFromBasketStore",
  get: () => null,
  set: ({ set, get }, id: string) => {
    const menuItem: MenuItemType = get(menuItemsStore)[id];
    const basket: BasketItemsType = get(basketItemsStore);
    const itemInBasket: BasketItemType | undefined = basket[id];

    const newBasket: BasketItemsType = _.cloneDeep(basket);
    delete newBasket[id];

    set(basketItemsStore, {
      ...newBasket,
      sumCount: basket.sumCount - (itemInBasket?.count ?? 0),
      sumPrice: basket.sumPrice - (itemInBasket?.count ?? 0) * menuItem.price,
    });
  },
});
