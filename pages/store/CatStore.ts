import axios from "axios";

const { makeAutoObservable } = require("mobx");

export class CatStore {
  RootStore: any;
  constructor(root: any) {
    makeAutoObservable(this), (this.RootStore = root);
  }

  status: "loading" | "error" | "success" = "loading";
  catImg: string = "";
  

  loadCatImage(id: string) {
    axios.post(`http://localhost:3000/api/cat-img`, { catId: id }).then((res) => {
      if (res.data.status === 0) {
        this.catImg = res.data.payload;
        this.status = "success";
      }
      if (res.data.status === 1) {
        this.status = "error";
      }
    });
  }
}
