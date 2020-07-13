import items from "../items";
import { decorate, observable } from "mobx";

class ItemStore {
  items = items;

  createFabric = (newFabric) => {
    newFabric.id = this.items[this.items.length - 1].id + 1;
    newFabric.url = newFabric.name.replace(/ /g, "-");
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
