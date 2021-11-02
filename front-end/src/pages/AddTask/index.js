import React, { useState } from 'react';
import { store } from '../../services/api';
import { useHistory } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

const initialValue = {
  name: '',
  status: '',
}

const emAndamento = 'Em Andamento';

const AddTask = () => {
  const [task, setTask] = useState(initialValue);
  const { name, status } = task;
  let history = useHistory();

  const onValueChange = (e) => {
      console.log(e.target.value);
      setTask({...task, [e.target.name]: e.target.value})
  }

  const onSelectChange = (e) => {
    console.log(e.target.value);
    setTask({...task, status: e.target.value });
  }

  const addTaskDetails = async() => {
      await store(task);
      history.push('./all');
  }

  return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control onChange={(e) => onValueChange(e)} name='name' value={name} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select onChange={(e) => onSelectChange(e)} value={status}>
              <option>Open this select menu</option>
              <option name='status' value="Pendente">Pendente</option>
              <option name='status' value={emAndamento}>Em andamento</option>
              <option name='status' value="Pronto">Pronto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Button onClick={() => addTaskDetails()}>Add Task</Button>
          </Form.Group>
        </Form>
      </div>
  )
}

export default AddTask;