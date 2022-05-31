import Image from 'next/image';
import VerifyContainer from './Components/VerifyContainer';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-screen w-screen p-8 bg-blue-300'>
      <Image
        src='/../public/Einstein Floripa horizontal.png'
        alt='logo-einstein'
        layout='raw'
        sizes='100vw'
        width={270}
        height={130}
      />
      <VerifyContainer />
    </main>
  );
}
