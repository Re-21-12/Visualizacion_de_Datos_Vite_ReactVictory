import { GlobalProvider } from "./components/context/GlobalState";
import TransactionForm from "./components/transactions/TransactionForm";
import Balance from "./components/Balance";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";
function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-4/6">
          <div className="bg-zinc-800 p-8 rounded-lg flex gap-x-4">
            <div>
              <h1 className="text-slate-100 text-xl font-bold w-full py-4">
                Ingrese una transaccion
              </h1>
              <TransactionForm />
              <IncomeExpenses />
              <Balance />
            </div>
            <div className="w-full flex-col flex">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
