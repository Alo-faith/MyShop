import { decorate, observable } from "mobx";

// data
import items from "../items";

// slug
import slugify from "react-slugify";

class ItemStore {
  items = items;

  createFabric = (newFabric) => {
    newFabric.id = this.items[this.items.length - 1].id + 1;
    // newFabric.url = newFabric.name.replace(/ /g, "-");
    newFabric.url = slugify(newFabric.name);
    this.items.push(newFabric);
  };

  deleteItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== +itemId);
  };
}

decorate(ItemStore, {
  items: observable,
});

const itemStore = new ItemStore();
export default itemStore;
