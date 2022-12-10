import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useEffect } from "react";
import axios from "axios";
import LoginPage from "./login";

export async function getServerSideProps() {
  const res = await axios(`http://localhost:3000/api/cat-info`);
  const isAuth = await res.data;
  return { props: { isAuth } };
}

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const isAuth = false;

  return (
    <div className="min-h-[100vh] bg-slate-900 pl-4 font-medium text-slate-200 flex items-center justify-center">
      {isAuth ? <>{children}</> : <LoginPage />}
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
