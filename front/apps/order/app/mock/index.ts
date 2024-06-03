import { setupWorker } from "msw";
import getMenuItem from "../api/get-menu-item";
import getMenuCategories from "../api/get-menu-categories";

const initMocks = () => {
  try {
    const mockHandler = [getMenuItem, getMenuCategories].map((handler) =>
      handler()
    );
    const worker = setupWorker(...mockHandler);
    worker.start();
    return true;
  } catch (error) {
    console.error(`worker error: ${error}`);
  }
  return false;
};

export default initMocks;
