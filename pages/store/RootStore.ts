import { makeAutoObservable } from "mobx";
import { AuthStore } from "./Auth";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  auth = new AuthStore(this);
}

export const RootStore = new Store();
