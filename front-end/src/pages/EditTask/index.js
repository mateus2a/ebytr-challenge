import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { index, update } from '../../services/api';

const initialValue = {
    name: '',
    status: '',
}

const EditTask = () => {
  const [task, setTask] = useState(initialValue);
  const { name, status } = task;
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
      loadTaskDetails();
  }, []);

  const loadTaskDetails = async() => {
      const response = await index(id);
      setTask(response.data);
  }

  const editTaskDetails = async() => {
    const response = await update(id, task);
    history.push('/all');
  }

  const onValueChange = (e) => {
    console.log(e.target.value);
    setTask({...task, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <input onChange={(e) => onValueChange(e)} name='name' value={name} />

      <input onChange={(e) => onValueChange(e)} name='status' value={status} />

      <button variant="contained" color="primary" onClick={() => editTaskDetails()}>Edit Task</button>
    </div>
)
};

export default EditTask;