import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { index, remove } from '../../services/api';
import { Table, Button } from 'react-bootstrap'

import NavBar from '../../components/NavBar';

import './styles.css';

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
    <div>
      <NavBar />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr>
              <td>{task._id}</td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>
                <Button variant="info">
                  <Link to={`/edit/${task._id}`}>Edit</Link>
                </Button>{' '}
                <Button onClick={() => deleteTask(task._id)} variant="danger">Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;