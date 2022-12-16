import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useCallback, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import LoginPage from "./login";
import { RootStore } from "./store/RootStore";
import { Loader } from "../components/Loader";
import { observer } from "mobx-react-lite";

// export async function getServerSideProps() {
//   const res = await axios(`http://localhost:3000/api/cat-info`);
//   const isAuth = await res.data;
//   return { props: { isAuth } };
// }

export const AuthProvider: React.FC<{ children: any }> = observer(({ children }) => {

  useLayoutEffect(() => {
    RootStore.auth.tryAuthByToken();
  }, []);

  return (
    <div className="min-h-[100vh] bg-slate-900 pl-4 font-medium text-slate-200 flex items-center justify-center">
      {RootStore.auth.loading && <Loader />}
      {!RootStore.auth.loading && RootStore.auth.isAuth && <>{children}</>}
      {!RootStore.auth.loading && !RootStore.auth.isAuth && <LoginPage />}
    </div>
  );
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
