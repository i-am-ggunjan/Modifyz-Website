import { createContext, useState } from "react";

const Store = createContext();
export { Store };

const RegStore = (props) => {
  let [data, setData] = useState([
    {
      num: 9685467896,
    },
  ]);
  console.log(data);

  const handleCreate = (num) => {
    setData([...data, { num }]);
  };

  return (
    <Store.Provider value={{ data, handleCreate }}>
      {props.children}
    </Store.Provider>
  );
};

export default RegStore;
