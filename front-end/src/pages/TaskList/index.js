import react, { useState, useEffect } from 'react';
import { index, remove } from '../../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  });

  const deleteTask = async (id) => {
    await remove(id);
    index();
  }

  const getAllTasks = async () => {
    let res = await index();
    setTasks(res.data);
  }
};

export default TaskList;