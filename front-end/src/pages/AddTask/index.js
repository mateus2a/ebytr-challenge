import React, { useState } from 'react';
import { store } from '../../services/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
  name: '',
  status: '',
}

const AddTask = () => {
  const [task, setTask] = useState(initialValue);
  const { name, status } = task;
  let history = useHistory();

  const onValueChange = (e) => {
      console.log(e.target.value);
      setTask({...task, [e.target.name]: e.target.value})
  }

  const addTaskDetails = async() => {
      await store(task);
      history.push('./all');
  }

  return (
      <div>
        <input onChange={(e) => onValueChange(e)} name='name' value={name} />

        <input onChange={(e) => onValueChange(e)} name='status' value={status}  />

        <button onClick={() => addTaskDetails()}>Add Task</button>
      </div>
  )
}

export default AddTask;