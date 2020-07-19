import { decorate, observable } from "mobx";
import axios from "axios";
// data
// import items from "../items";

// slug
import slugify from "react-slugify";

class ItemStore {
  items = [];

  fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fabrics");
      this.items = response.data;
    } catch (error) {
      console.error("itemStore -> fetchItems -> error", error);
    }
  };

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
itemStore.fetchItems();
export default itemStore;
