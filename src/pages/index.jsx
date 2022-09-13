import Head from "next/head";
import Image from "next/image";
import VerifyContainer from "../components/VerifyContainer";
import logoEinstein from "../../public/Einstein Floripa horizontal.png";
import Link from "next/link";

export default function Home() {
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
        <div className='relative flex flex-col items-center justify-around mt-10 bg-white w-80 h-80 rounded-2xl'>
          <Link href='/bucicaonline'>
            <div className='flex justify-center items-center bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold text-white  cursor-pointer'>
              Bucica Online
            </div>
          </Link>
          <Link href='/bucicaqr'>
            <div className='flex justify-center items-center bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold text-white  cursor-pointer'>
              Bucica QR
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
