import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import VerifyContainer from "../../components/VerifyContainer";

export default function BucicaOnline() {
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

        <VerifyContainer />
      </div>
    </main>
  );
}
