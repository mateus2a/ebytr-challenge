import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>
                <button component={Link} to={`/edit/${task._id}`}>Edit</button>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;