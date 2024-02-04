import React, { useContext, useEffect, useState } from 'react';
import { MdDeleteForever, MdEditSquare, MdOutlineDone } from "react-icons/md";
import MyContext from '../Context/MyContext';

function AgendaPending(props) {
    const {pendingList, setPendingList, doneList, setDoneList, editOn, setEditOn} = useContext(MyContext);

    const [index, setIndex] = useState(props.index);
    const [editValue, setEditValue] = useState(pendingList[index]);

    useEffect(() => {
        setEditValue(pendingList[index]);
    }, [pendingList, index]);

    const doneAgenda = () => {
        setDoneList([...doneList, pendingList[index]]);
        deleteAgenda();
    }
    
    const deleteAgenda = () => {
        setEditOn(null);
        const filterArray = [...pendingList].filter((agenda, i) => i!==index);
        setPendingList(filterArray);
    }

    const updateAgenda = () => {
        setEditOn(null);
        const updatedArray = [...pendingList].map((agenda, i) => {
            if(i != index) return agenda;
            else return editValue;
        })
        setPendingList(updatedArray);
    }
    

    return (editOn && editOn.index === index) ? (
        <div id={index}>
            <input onChange={(e) => {setEditValue(e.target.value)}} value={editValue}/>
            <button onClick={updateAgenda}>Update</button>
            <button onClick={() => {setEditValue(pendingList[index]);setEditOn(null)}}>Discard</button>
        </div>
    ) 
    : (
        <div id={index} className='agenda-pending'>
            <h3>{pendingList[index]}</h3>

            <div className='btn-box'>
                <div onClick={doneAgenda}>
                    <MdOutlineDone />
                </div>
                <div onClick={() => setEditOn({index:index})}>
                    <MdEditSquare />
                </div>
                <div onClick={deleteAgenda}>
                    <MdDeleteForever />
                </div>
            </div>
        </div>
    )
}

export default AgendaPending