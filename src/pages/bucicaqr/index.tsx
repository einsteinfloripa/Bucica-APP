import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { QrCodeScanner } from "@components";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "@hooks";

export default function BucicaQR() {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (!!username && !!password) {
      const onSuccess = () => {};

      const onError = () => {
        alert("Sua sessão expirou, faça login novamente");
        localStorage.clear();
        router.push("/");
      };

      login(
        {
          username,
          password,
        },
        onSuccess,
        onError,
      );
    } else {
      alert("Você precisa estar logado para acessar essa página");
      router.push("/");
    }
  }, []);

  return (
    <main className='h-screen w-screen bg-einstein bg-center bg-cover'>
      <Head>
        <title>B.U.C.I.C.A - Einstein Floripa</title>
      </Head>
      <div className='flex flex-col items-center h-screen w-screen backdrop-grayscale'>
        <Link href='/'>
          <Image
            src='/Einstein Floripa horizontal.png'
            alt='logo-einstein'
            width={270}
            height={130}
            className='cursor-pointer'
          />
        </Link>
        <div className='mt-10 bg-white w-80 h-80 rounded-2xl p-8'>
          <QrCodeScanner />
        </div>
      </div>
    </main>
  );
}
