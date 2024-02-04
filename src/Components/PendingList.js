import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import AgendaPending from '../Components/AgendaPending';

function PendingList() {
    const {pendingList} = useContext(MyContext);
    return (
      <div className='pending-list'>
          <h2>Pending Agendas</h2>
          <div className='agenda-box'>
              {pendingList.map((title, index) => {
                  return (<AgendaPending index={index} key={index}/>);
              })}
          </div>
      </div>
    )
}

export default PendingList