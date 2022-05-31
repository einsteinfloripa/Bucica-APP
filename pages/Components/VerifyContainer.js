export default function VerifyContainer() {
  return (
    <div className='flex flex-col items-center p-8 mt-10 bg-white w-80 h-80 rounded-2xl'>
      <p className="font-montserrat font-bold text-4xl">Chamada</p>
      <form
        className='flex flex-col items-center'
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input type='text' className='border-black border-2 mt-10 rounded-2xl w-72 h-10 text-center font-montserrat text-xl' placeholder="Digite seu CPF"/>
        <button className="bg-blue-600 w-52 h-12 rounded-2xl font-montserrat font-bold mt-4">Verificar CPF</button>
      </form>
    </div>
  );
}
