import maskCpf from "../scripts/mask";

export default function InputComponent({
  setInputValue,
  setMessage,
  message,
  inputValue,
}) {
  const borderColor = {
    error: "border-red-500",
    ok: "border-green-500",
  };
  const textColor = {
    error: "text-red-500",
    ok: "text-green-500",
  };

  return (
    <>
      <input
        type='text'
        className={`${
          message?.type ? borderColor[message.type] : "border-black"
        } border-2 rounded-2xl w-72 h-10 text-center font-montserrat text-xl`}
        placeholder='Digite seu CPF'
        value={inputValue}
        onChange={(e) => {
          setInputValue(maskCpf(e.target.value));
          setMessage({});
        }}
      />
      {message?.type && (
        <p className={`${textColor[message.type]} text-lg my-2`}>
          {message.text}
        </p>
      )}
      <button className='bg-softblue w-60 h-12 rounded-3xl font-montserrat font-bold text-white'>
        Verificar CPF
      </button>
    </>
  );
}
