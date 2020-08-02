import { decorate, observable } from "mobx";
import axios from "axios";

// slug
import slugify from "react-slugify";

class ItemStore {
  items = [];
  loading = true;
  fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fabrics");
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("itemStore -> fetchItems -> error", error);
    }
  };

  createFabric = async (newFabric) => {
    try {
      const formData = new FormData();
      // formData.append("name,newFabic.name")
      for (const key in newFabric) formData.append(key, newFabric[key]);
      const res = await axios.post(
        `http://localhost:8000/shops/${newFabric.shopId}/fabrics`,
        formData
      );
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
      const formData = new FormData();
      for (const key in updatedItem) formData.append(key, updatedItem[key]);
      await axios.put(
        `http://localhost:8000/fabrics/${updatedItem.id}`,
        formData
      );
      const item = this.items.find((item) => item.id === updatedItem.id);
      for (const key in updatedItem) item[key] = updatedItem[key];
    } catch (error) {
      console.error("itemStore -> updateItem -> error", error);
    }
  };
}

decorate(ItemStore, {
  items: observable,
  loading: observable,
});

const itemStore = new ItemStore();
itemStore.fetchItems();

export default itemStore;
