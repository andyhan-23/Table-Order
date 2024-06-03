import getData from "../mock/get-data";
import handlers from "../mock/handlers";

const getMenuItem = () => {
  handlers("get", "/item", getData("item"), (req, data) => data);
};

export default getMenuItem;
