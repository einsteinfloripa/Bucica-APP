import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import logoEinstein from "../../public/Einstein Floripa horizontal.png";

export default function Home() {
  const router = useRouter();

  return (
    <main className='h-screen w-screen bg-einstein bg-center bg-cover'>
      <Head>
        <title>B.U.C.I.C.A - Einstein Floripa</title>
      </Head>
      <div className='flex flex-col items-center h-screen w-screen backdrop-grayscale'>
        <Image
          src={logoEinstein}
          alt='logo-einstein'
          width={270}
          height={130}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //@ts-ignore
            localStorage.setItem("username", e?.target[0].value);
            //@ts-ignore
            localStorage.setItem("password", e?.target[1].value);
            router.push("/bucicaqr");
          }}
          className='relative flex flex-col items-center justify-around mt-10 bg-white w-80 h-80 rounded-2xl'
        >
          <input
            className='flex justify-center items-center border-2 border-slate-200 w-60 h-16 rounded-xl font-montserrat font-bold text-center'
            placeholder='Usuário'
          />
          <input
            className='flex justify-center items-center border-2 border-slate-200 w-60 h-16 rounded-xl font-montserrat font-bold text-center'
            type="password"
            placeholder='Senha'
          />
          <button className='flex justify-center items-center bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold text-white  cursor-pointer'>
            Bucica QR
          </button>
        </form>
      </div>
    </main>
  );
}
