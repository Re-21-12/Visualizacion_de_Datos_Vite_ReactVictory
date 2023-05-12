import { VictoryPie } from "victory";
import { useGlobalState } from "./context/GlobalState";
function ExpenseChart() {
  const { transactions } = useGlobalState();
  transactions.reduce((acc, transaction) => (acc += transaction.amount), 0);
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction), 0);
  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction), 0);
  //total de gasto es igual al total del gasto partido el total de ingreso
  const totalPorcentageExpense = Math.round((totalExpense / totalIncome) * 100);
  const totalPorcentageIncome = 100 - totalPorcentageExpense;
  return (
    <VictoryPie
      data={[
        { x: "Expenses", y:totalExpense },
        { x: "Incomes", y: totalIncome },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
    />
  );
}

export default ExpenseChart;
