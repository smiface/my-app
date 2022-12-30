import axios from "axios";

const { makeAutoObservable } = require("mobx");

export class CatStore {
  RootStore: any;
  constructor(root: any) {
    makeAutoObservable(this), (this.RootStore = root);
  }

  status: "loading" | "error" | "success" = "loading";
  catImg: string = "";
  uploadCatImg: string | null = null;
  uploadCatCreateObjectURL: any | null = null;

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

  uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      this.uploadCatImg = i;
      this.uploadCatCreateObjectURL = URL.createObjectURL(this.uploadCatImg);
    }
  };

  uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", this.uploadCatImg);
    axios.post("http://localhost:3000/api/cat-img-upload", body).then((res) => console.log(res));
  };
}
