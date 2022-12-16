import axios from "axios";

const { makeAutoObservable } = require("mobx");

export class AuthStore {
  RootStore: any;
  constructor(root: any) {
    makeAutoObservable(this), (this.RootStore = root);
  }

  isAuth = false;
  loading = true;

  setAuth(value: boolean) {
    this.isAuth = value;
  }

  tryAuthByToken() {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
      axios.post("http://localhost:3000/api/loginBySessionToken", { sessionToken: sessionToken }).then((res) => {
        if (res.data.status !== 200) {
          this.loading = false;
          this.isAuth = false;
        } else {
          this.loading = false;
          this.isAuth = true;
          console.log(res.data.status);
        }
      });
      // setTimeout(() => {
      //   this.loading = false;
      //   this.isAuth = true;
      // }, 500);
    }
  }
}
