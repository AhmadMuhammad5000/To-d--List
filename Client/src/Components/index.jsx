import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.min.css"

const Item = () => {
    const [input, setInput] = useState();
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState(-1);

    // Fetching record
    const fetchTask = () => {
        axios.get("http://localhost:5000/auth/tasks")
            .then(result => {
                if (result.data.status) {
                    setItems(result.data.data)
                } else {

                }
            }).catch(err => console.log(`Error While Fetching API : ${err}`))

    }

    useEffect(() => {
        fetchTask();
    }, []);


    // handle click
    const handleClick = (index, id) => {
        setSelected(index);

        // deleting specific Task
        axios.delete("http://localhost:5000/auth/delete_task/" + id)
            .then(result => {
                if (result.data.status) {
                    console.log(result.data.data);
                    location.reload(3000);
                } else {
                    console.log(result.data.error);
                }
            }).catch(e => console.log(`Error while deleting... ${e}`));
    }

    // handleSave
    const handleSave = useCallback((e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/auth/add_task", { input })
            .then(result => {
                if (result.data.status) {
                    console.log(result.data.status);
                    window.location.reload();
                } else {
                    console.log(result.data.error);
                }
            })
            .catch(err => console.log(`bayayi ${err}`))
    })

    return (
        <>
            <div className='p-3 w-100'>
                <h3 className='fs-4 text-light d-flex'><i className='bi-speedometer pe-2'></i> Your Tasks</h3>
                <div className='p-3 d-flex flex-nowrap shadow'>
                    <input type='text' className='p-2 form-control'
                        placeholder="Enter Todo" onChange={(e) => setInput(e.target.value)} />
                    <button onClick={handleSave} className='btn btn-secondary text-light'>Save</button>
                </div>

                <ul className='list-group mt-3'>
                    {
                        items.map((task, index) => (
                            <li key={index} className={selected === index ? ' mb-2 list-group-item active d-flex justify-content-center'
                                : 'bg-secondary shadow text-light list-group-item'}
                                onClick={() => handleClick(index, task.id)}>{task.tasks} </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Item
