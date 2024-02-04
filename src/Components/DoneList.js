import React, { useContext } from 'react'
import MyContext from '../Context/MyContext';
import AgendaDone from './AgendaDone';

function DoneList() {
  const {doneList} = useContext(MyContext);

  return (
    <div>
        <h2>Completed Agendas</h2>
        {doneList.map((title, index) => {
              return (<AgendaDone index={index} key={index}/>);
        })}
    </div>
  )
}

export default DoneList