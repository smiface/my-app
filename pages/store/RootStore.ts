import { makeAutoObservable } from "mobx";
import { AuthStore } from "./AuthStore";
import { CatStore } from "./CatStore";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  auth = new AuthStore(this);
  cat = new CatStore(this);
}

export const RootStore = new Store();
