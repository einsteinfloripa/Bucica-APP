import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactLoading from "react-loading";
import { QrReader } from "react-qr-reader";

export default function BucicaQR() {
  const [data, setData] = useState(false);
  const [QRData, setQRData] = useState("");
  const [swap, setSwap] = useState("environment");

  useEffect(() => {
    function getFetchUrl(matricula) {
      return `${process.env.NEXT_PUBLIC_API_URL}/presenca/qr/${matricula}`;
    }

    async function fetchQRData() {
      try {
        const response = await axios.post(getFetchUrl(QRData));
        alert(response.data);
      } catch (error) {
        alert(error.response.data);
      }
      window.location.reload();
    }

    if (QRData) {
      setData(true);
      fetchQRData();
    }
  }, [QRData]);

  function swapCamera() {
    if (swap === "environment") setSwap("user");
    else setSwap("environment");
  }

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
        <div className='flex flex-col justify-center mt-10 bg-white w-80 rounded-2xl p-5'>
          {data ? (
            <ReactLoading
              className='mx-auto my-20'
              type={"spin"}
              color={"000000"}
              height={70}
              width={70}
            />
          ) : (
            <>
              <QrReader
                constraints={{ facingMode: swap }}
                onResult={(result) => {
                  if (result?.text) {
                    setQRData(result.text);
                  }
                }}
                scanDelay={2000}
              />
              <div
                className='flex justify-center items-center bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold text-white mx-auto my-8 cursor-pointer'
                onClick={swapCamera}>
                Trocar Camera
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
