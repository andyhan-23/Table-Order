import { RestRequest } from "msw";

export type MethodT = "get" | "post" | "put" | "delete";

type MenuCategoryIdType = "커피" | "디저트";

export type MenuItemType = {
  name: string;
  detail: string;
  price: number;
  imageSrc?: string;
  category: string;
  categoryOrder: number;
};

export type MenuCategoryType = {
  MenuCategoryIdType: string[];
};

export type DataT =
  | Record<string, MenuItemType>
  | undefined
  | Record<string, MenuCategoryType>;

export type CallBackType = (
  req: RestRequest,
  data: DataT
) => DataT | MenuItemType | MenuCategoryType | undefined;
