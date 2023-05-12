import { useGlobalState } from "../context/GlobalState";
function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div>
      <h3 className="text-slate-300 text-xl font-bold w-full">Historial</h3>      
      <ul className="container">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-cemter"
          >
            <p className="px-1 py-1">{transaction.description}</p>
            <spa className="px-6 py-1">Q{transaction.amount}</spa>
            <button
              className="bg-red-800 text-white rounded-lg block px-1 py-1"
              onClick={() => {
                deleteTransaction(transaction.id);
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
