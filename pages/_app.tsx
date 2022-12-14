import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";
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

const LogoutButton: FC = () => {
  return <button onClick={() => RootStore.auth.logout()}>Logout</button>;
};

export const AuthProvider: React.FC<{ children: any }> = observer(({ children }) => {
  useEffect(() => {
    RootStore.auth.tryAuthByToken();
  }, []);

  return (
    <div className="w-100 h-screen bg-slate-900 font-medium text-slate-200">
      {!RootStore.auth.loading && RootStore.auth.isAuth && <LogoutButton />}
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
