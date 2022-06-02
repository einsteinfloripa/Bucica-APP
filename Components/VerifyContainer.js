// Refatorar esse código, poque não está muito bom!

import axios from 'axios';
import { useState } from 'react';
import ReactLoading from 'react-loading';

import maskCpf from '../public/mask';

export default function VerifyContainer() {
  const [inputValue, setInputValue] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [linkMeet, setLinkMeet] = useState(null);
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
          const promise = axios.post('/api/teste', { cpf: inputValue });
          promise.then((res) => {
            setIsLogin(false);
            setTimeout(() => {
              setLinkMeet(res.data.link);
            }, 1000);
          });
          promise.catch(() => {
            alert('CPF invalido');
          });
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
        ) : linkMeet ? (
          <button className='bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold'>
            <a href={linkMeet} target='_blank' rel='noreferrer'>
              Acessar Aula
            </a>
          </button>
        ) : (
          <ReactLoading type={'spin'} color={'000000'} height={70} width={70} />
        )}
      </form>
    </div>
  );
}
