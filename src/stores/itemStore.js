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

  createFabric = async (newFabric) => {
    try {
      const res = await axios.post("http://localhost:8000/fabrics", newFabric);
      this.items.push(res.data);
    } catch (error) {
      console.error("itemStore -> createFabric -> error", error);
    }
  };

  deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/fabrics/${itemId}`);
      this.items = this.items.filter((item) => item.id !== +itemId);
    } catch (error) {
      console.error("itemStore -> deleteItem -> error", error);
    }
  };

  updateItem = async (updatedItem) => {
    try {
      await axios.put(
        `http://localhost:8000/fabrics/${updatedItem.id}`,
        updatedItem
      );
      const item = this.items.find((item) => item.id === updatedItem.id);
      for (const key in item) item[key] = updatedItem[key];
    } catch (error) {
      console.error("itemStore -> updateItem -> error", error);
    }
  };
}

decorate(ItemStore, {
  items: observable,
});

const itemStore = new ItemStore();
itemStore.fetchItems();

export default itemStore;
