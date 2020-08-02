import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import List from "../FabricList";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ItemDetails from "../FabricDetail";

// Stores
import itemStore from "../../stores/itemStore";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/shops/:shopSlug">
          <ShopDetail />
        </Route>

        <Route path="/shops">
          <ShopList />
        </Route>

        <Route path="/fabrics/:itemSlug">
          <ItemDetails />
        </Route>

        <Route path="/fabrics">
          <List fabrics={itemStore.items} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default observer(Routes);
