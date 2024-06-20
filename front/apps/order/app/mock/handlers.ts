// import { rest } from "msw";
// import { MethodT, CallBackType, DataT } from "./types";

// const handlers = (
//   method: MethodT,
//   path: string,
//   data: DataT,
//   callback: CallBackType
// ) => rest[method](path, (req, res, ctx) => res(ctx.json(callback(req, data))));

// export default handlers;

import { rest } from "msw";
import menuItemsJSON from "./__fixtures__/menu-items.json";
import menuCategoriesJSON from "./__fixtures__/menu-categories.json";

const handlers = [
  rest.get("/item", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(menuItemsJSON))
  ),
  rest.get("/categories", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(menuCategoriesJSON))
  ),
];

export default handlers;
