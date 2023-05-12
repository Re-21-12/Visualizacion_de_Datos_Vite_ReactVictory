import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    //aqui llamamos la funcion para retornar los datos
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      /*Cualquier valor que reciba lo va a convertir en numero por eso el operador "+" */
      amount: +amount,
    });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-1 py-2 rounded-lg block mb-2 w-full"
        ></input>
        <input
          type="number"
          placeholder="Ingresa una cantidad"
          step="0.01"
          /*Actualiza el estado con el set */
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        ></input>
        <button className="bg-slate-400 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Añadir Transaccion
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
