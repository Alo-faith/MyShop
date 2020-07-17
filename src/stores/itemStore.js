import { decorate, observable } from "mobx";

// data
import items from "../items";

// slug
import slugify from "react-slugify";

class ItemStore {
  items = items;

  createFabric = (newFabric) => {
    newFabric.id = this.items[this.items.length - 1].id + 1;
    newFabric.url = slugify(newFabric.name);
    this.items.push(newFabric);
  };

  deleteItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== +itemId);
  };

  updateItem = (updatedItem) => {
    const item = this.items.find((item) => item.id === updatedItem.id);
    for (const key in item) item[key] = updatedItem[key];
  };
}

decorate(ItemStore, {
  items: observable,
});

const itemStore = new ItemStore();
export default itemStore;
