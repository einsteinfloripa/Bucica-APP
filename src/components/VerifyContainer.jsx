import axios from "axios";
import { useCallback, useState } from "react";
import ReactLoading from "react-loading";

import InputComponent from "./InputComponent";

export default function VerifyContainer() {
  // States
  const [inputValue, setInputValue] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isAccess, setIsAccess] = useState(false);
  const [linkMeet, setLinkMeet] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const requestServer = useCallback(
    async (e) => {
      function getFetchUrl(cpf) {
        return `${process.env.NEXT_PUBLIC_API_URL}/presenca/cpf/${cpf}`;
      }

      e.preventDefault();
      setIsLogin(false);

      try {
        const { data } = await axios.post(getFetchUrl(inputValue));
        setLinkMeet("");
        setIsAccess(true);
      } 
      catch (error) {
        setIsLogin(true);
        setErrorMessage(error.response.data);
      }
    },
    [inputValue],
  );

  return (
    <div className='relative flex flex-col items-center mt-10 bg-white w-80 h-80 rounded-2xl'>
      {isLogin && (
        <p className='absolute font-montserrat font-bold text-4xl top-10'>
          Chamada
        </p>
      )}
      <form
        className='absolute flex flex-col justify-between items-center top-32 h-32'
        onSubmit={requestServer}>
        {isLogin && (
          <InputComponent
            setInputValue={setInputValue}
            setErrorMessage={setErrorMessage}
            errorMessage={errorMessage}
            inputValue={inputValue}
          />
        )}
        {!isLogin && !isAccess && (
          <ReactLoading type={"spin"} color={"000000"} height={70} width={70} />
        )}
        {isAccess && (
          <a
            className='flex justify-center items-center bg-softblue w-60 h-16 rounded-3xl font-montserrat font-bold text-white'
            href={linkMeet}
            target='_blank'
            rel='noopener noreferrer'>
            Acessar Aula
          </a>
        )}
      </form>
    </div>
  );
}
