import { useState } from 'react';

import maskCpf from '../functions/mask';

export default function VerifyContainer() {
  const [inputValue, setInputValue] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='relative flex flex-col items-center mt-10 bg-white w-80 h-80 rounded-2xl'>
      {isLogin ? (
        <p className='absolute font-montserrat font-bold text-4xl top-10'>
          Chamada
        </p>
      ) : (
        <></>
      )}
      <form
        className='absolute flex flex-col items-center top-32'
        onSubmit={(e) => {
          e.preventDefault();
          setIsLogin(!isLogin);
        }}>
        {isLogin ? (
          <input
            type='text'
            className='border-black border-2 rounded-2xl w-72 h-10 text-center font-montserrat text-xl'
            placeholder='Digite seu CPF'
            value={inputValue}
            onChange={(e) => {
              const cpfWithMask = maskCpf(e.target.value);
              setInputValue(cpfWithMask);
            }}
          />
        ) : (
          <></>
        )}
        {isLogin ? (
          <button className='bg-softblue w-60 h-12 rounded-3xl font-montserrat font-bold mt-10'>
            Verificar CPF
          </button>
        ) : (
          <button className='bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold'>
            Acessar Aula
          </button>
        )}
      </form>
    </div>
  );
}
