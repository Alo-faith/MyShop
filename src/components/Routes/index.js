import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import List from "../FabricList";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ItemDetails from "../FabricDetail";
import Signup from "../Sign/Signup";
import Signin from "../Sign/Signin";

// Stores
import itemStore from "../../stores/itemStore";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/shops/:shopSlug">
          <ShopDetail />
        </Route>

        <Route exact path="/shops">
          <ShopList />
        </Route>

        <Route exact path="/fabrics/:itemSlug">
          <ItemDetails />
        </Route>

        <Route exact path="/fabrics">
          <List fabrics={itemStore.items} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default observer(Routes);
