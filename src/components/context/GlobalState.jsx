import { createContext, useContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import PropTypes from "prop-types";

export const Context = createContext();
const initialState = {
  transactions: [],
};
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};
//corrige el error de props

export const GlobalProvider = ({ children }) => {
  //retornar las transacciones
  //en lugar de setState vamos a usar dispatch es como su "equivalente"
  //dispatch llama a el swtich de AppReducer.jsx, y segun la lista de opciones nosotros lo llamaremos para ejecutar una funcion

  const localData = () => {
    const data = localStorage.getItem("transactions");
    return data ? JSON.parse(data) : initialState;
  };
  const [state, dispatch] = useReducer(AppReducer, initialState, localData);

  /* cada vez que algo cambien va a actualizarlo */
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  //va a esperar un objeto "transaction" -> que va a contener una description y un amount
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
