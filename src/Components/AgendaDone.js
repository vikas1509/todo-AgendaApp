import React, { useContext, useState } from 'react';
import { MdDeleteForever, MdOutlineDoneOutline } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import MyContext from '../Context/MyContext';

function AgendaDone(props) {
    const [index, setIndex] = useState(props.index);
    const {doneList, setDoneList} = useContext(MyContext);

    const deleteAgenda = () => {
      const filterArray = [...doneList].filter((agenda, i) => i!==Number(index));
      setDoneList(filterArray);
  }
    
    return (
        <div>
            <h3>{doneList[index]}</h3>

            <div>
                <div>
                    <FcOk />
                </div>
                <div onClick={deleteAgenda}>
                    <MdDeleteForever />
                </div>
            </div>
        </div>
    )
}

export default AgendaDone