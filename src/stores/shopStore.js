import { decorate, observable } from "mobx";
import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;
  fetchShops = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.loading = false;
    } catch (error) {
      console.error("ShopStore -> fetchShop -> error", error);
    }
  };

  createShop = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await instance.post(`/shops`, formData);
      this.shops.push(res.data);
    } catch (error) {
      console.error("ShopStore -> createShop -> error", error);
    }
  };
  updateShop = async (updatedShop) => {
    try {
      const formData = new FormData();
      for (const key in updatedShop) formData.append(key, updatedShop[key]);
      await instance.put(`/shops/${updatedShop.id}`, formData);
      const shop = this.shops.find((shop) => shop.id === updatedShop.id);
      for (const key in updatedShop) shop[key] = updatedShop[key];
      shop.image = URL.createObjectURL(updatedShop.image);
    } catch (error) {
      console.error("ShopStore -> updateShop -> error", error);
    }
  };

  deleteShop = async (shopId) => {
    try {
      await instance.delete(`/shops/${shopId}`);
      this.shops = this.shops.filter((shop) => shop.id !== +shopId);
    } catch (error) {
      console.error("ShopStore -> deleteShop -> error", error);
    }
  };
}
decorate(ShopStore, {
  shops: observable,
  loading: observable,
});

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
