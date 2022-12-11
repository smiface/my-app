import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function LoginPage() {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);
  
  const submitLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/api/login`, {
        login: loginRef?.current?.value && loginRef.current.value,
        password: passwordRef?.current?.value && passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          console.log(res.data);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          localStorage.setItem("sessionToken", res.data.sessionToken);
        }
      });
  };

  useEffect(() => passwordRef?.current?.focus(), [showPassword]);

  const inputPasswordType = useMemo(() => (showPassword ? "text" : "password"), [showPassword]);
  const inputPasswordIcon = useMemo(() => (showPassword ? "😯" : "😪"), [showPassword]);
  const inputPasswordPlaceholder = useMemo(() => (showPassword ? "" : "password"), [showPassword]);
  const textStyle = "text-slate-500 hover:text-slate-100";
  const outlineStyle = "outline-none hover:outline-none hover:outline-4 active:outline-none";
  const borderStyle = "border-2 border-slate-500 hover:border-slate-300 active:border-slate-100";
  const customStyle = `duration-200 bg-slate-900 rounded-md`;

  return (
    <form method="POST" className="w-[300px] flex flex-col space-y-2" onSubmit={submitLogin}>
      <input
        type="text"
        placeholder="login"
        ref={loginRef}
        className={clsx(customStyle, textStyle, outlineStyle, borderStyle, "p-2")}
      />
      <div className="flex relative">
        <input
          type={inputPasswordType}
          placeholder={inputPasswordPlaceholder}
          ref={passwordRef}
          className={clsx(customStyle, textStyle, outlineStyle, borderStyle, " w-full p-2 border-slate-500")}
        />
        <button
          type="button"
          onClick={togglePasswordView}
          className={"absolute right-0 top-0 h-[100%] w-[50px] flex items-center justify-center"}
        >
          {inputPasswordIcon}
        </button>
      </div>
      <button type="submit" className={clsx(customStyle, textStyle, borderStyle, "p-2 w-1/2")}>
        login
      </button>
    </form>
  );
}
