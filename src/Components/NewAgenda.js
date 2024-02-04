import React, { useContext, useState } from 'react'
import MyContext from '../Context/MyContext';

function NewAgenda() {
    const [input, setInput] = useState('');

    const {pendingList, setPendingList, setEditOn} = useContext(MyContext);

    const handleClick = () => {
        setEditOn(null)

        if (!input || /^\s*$/.test(input)) {
            setInput('');
            return;
        }

        setPendingList([...pendingList, (input.replaceAll(/\s+/g, ' ')).trim()]);
        setInput('');
    }

    return (
        <div className='add-agenda'>
            <input value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setEditOn(null)} placeholder='Write Your Agenda Name'/>
            <button onClick={handleClick}>Add Agenda</button>
        </div>
    )
}

export default NewAgenda