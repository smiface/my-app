import axios from "axios";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CatImg } from "../../components/CatImg";
import { CatInfoLine } from "../../components/CatInfoLine";
import { Loader } from "../../components/Loader";
import { handleClickDownloadBlobImage } from "../../helpers/handleClickDownloadBlobImage";
import { MainLayout } from "../../layouts/MainLayout";
import { RootStore } from "../store/RootStore";

export const textStyle = "text-slate-500 hover:text-slate-100";
export const outlineStyle = "outline-none hover:outline-none hover:outline-4 active:outline-none";
export const borderStyle = "border-2 border-slate-500 hover:border-slate-300 active:border-slate-100";
export const customStyle = `duration-200 bg-slate-900 rounded-md`;

export async function getServerSideProps() {
  const res = await axios(`http://localhost:3000/api/cat-info`);
  const data = await res.data;
  return { props: { data } };
}

interface ICatData {
  name: string;
  age: string;
  type: string;
}

const CatPage = observer(({ data }: { data: ICatData }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    RootStore.cat.loadCatImage(id as string);
  }, []);

  return (
    <div className=" bg-slate-900 font-medium text-slate-200">
      <Head>
        <title>Vahui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div>
          <h1>Cat page</h1>

          {Object.entries(data).map((info) => (
            <CatInfoLine key={nanoid()} info={info} />
          ))}

          {RootStore.cat.status === "loading" && <Loader />}
          {RootStore.cat.status === "error" && <h2>No cat image 🐈</h2>}
          {RootStore.cat.status === "success" && (
            <>
              <CatImg url={RootStore.cat.catImg} />

              <button
                type="button"
                onClick={() => handleClickDownloadBlobImage(RootStore.cat.catImg)}
                className={clsx(customStyle, textStyle, borderStyle, " w-[240px] h-[50px] rounded-t-none border-t-0")}
              >
                ⇓
              </button>
            </>
          )}
        </div>
      </MainLayout>
    </div>
  );
});

export default CatPage;
