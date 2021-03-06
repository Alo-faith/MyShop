import { decorate, observable } from "mobx";
import instance from "./instance";

class ItemStore {
  items = [];
  loading = true;
  fetchItems = async () => {
    try {
      const response = await instance.get("/fabrics");
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ItemStore -> fetchItems -> error", error);
    }
  };
  getItemById = (itemId) => this.items.find((item) => item.id === itemId);

  createFabric = async (newFabric, shop) => {
    try {
      const formData = new FormData();
      for (const key in newFabric) formData.append(key, newFabric[key]);
      const res = await instance.post(`/shops/${shop.id}/fabrics`, formData);

      const _item = res.data;
      this.items.push(_item);
      shop.items.push({ id: _item.id });
    } catch (error) {
      console.error("ItemStore -> createFabric -> error", error);
    }
  };

  deleteItem = async (itemId) => {
    try {
      await instance.delete(`/fabrics/${itemId}`);
      this.items = this.items.filter((item) => item.id !== +itemId);
    } catch (error) {
      console.error("itemStore -> deleteItem -> error", error);
    }
  };

  updateItem = async (updatedItem) => {
    try {
      const formData = new FormData();
      for (const key in updatedItem) formData.append(key, updatedItem[key]);

      await instance.put(`/fabrics/${updatedItem.id}`, formData);

      const item = this.items.find((item) => item.id === updatedItem.id);
      for (const key in updatedItem) item[key] = updatedItem[key];
      item.image = URL.createObjectURL(updatedItem.image);
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
