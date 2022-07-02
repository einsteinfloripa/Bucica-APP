import maskCpf from "../scripts/mask";

export default function InputComponent({
  setInputValue,
  setErrorMessage,
  errorMessage,
  inputValue,
}) {
  return (
    <>
      <input
        type='text'
        className={`${
          errorMessage ? "border-red-500" : "border-black"
        } border-2 rounded-2xl w-72 h-10 text-center font-montserrat text-xl`}
        placeholder='Digite seu CPF'
        value={inputValue}
        onChange={(e) => {
          setInputValue(maskCpf(e.target.value));
          setErrorMessage("");
        }}
      />
      {errorMessage && (
        <p className='text-red-500 text-lg my-2'>{errorMessage}</p>
      )}
      <button className='bg-softblue w-60 h-12 rounded-3xl font-montserrat font-bold'>
        Verificar CPF
      </button>
    </>
  );
}
