import { useGlobalState } from "./context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);
  //ingresos
  const incomeAmounts = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  //gastos
  const expenseAmounts = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <div className="flex justify-between my-2">
        <h1>Ingresos</h1>
        <p>{incomeAmounts}</p>
      </div>
      <div className="flex justify-between my-2">
        <h1>Gastos</h1>
        <p>{expenseAmounts}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
