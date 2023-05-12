import { useGlobalState } from "./context/GlobalState";

function Balance() {
  //usa el contexto y trae lo que ya tiene
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);

  /*sintaxis : array.reduce(function(acumulador, elementoActual, índiceActual, arreglo) {
  // Lógica de reducción
}, valorInicial);
 */
  const total = amounts.reduce(
    (acumulator, actualAmount) => (acumulator += actualAmount),
    0
  );
  return (
    <div className="flex justify-between">
      <h1>Total</h1>
      <p className="text-2xl font-bold">{JSON.stringify(total)}</p>
    </div>
  );
}

export default Balance;
