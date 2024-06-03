import getData from "../mock/get-data";
import handlers from "../mock/handlers";

const getMenuCategories = () => {
  handlers("get", "/categories", getData("categories"), (req, data) => data);
};

export default getMenuCategories;
