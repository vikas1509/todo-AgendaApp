import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [pendingList, setPendingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [editOn, setEditOn] = useState(null);

  return (
    <MyContext.Provider value={{ pendingList, setPendingList, doneList, setDoneList, editOn, setEditOn}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;