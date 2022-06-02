import Head from 'next/head';
import Image from 'next/image';
import VerifyContainer from '../components/VerifyContainer';
import logoEinstein from '../../public/Einstein Floripa horizontal.png';

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
        <VerifyContainer />
      </div>
    </main>
  );
}
