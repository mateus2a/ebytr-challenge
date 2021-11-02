import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { index, update } from '../../services/api';

import { Form, Button } from 'react-bootstrap';

const initialValue = {
    name: '',
    status: '',
}

const emAndamento = 'Em Andamento';

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

  const onSelectChange = (e) => {
    console.log(e.target.value);
    setTask({...task, status: e.target.value });
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
            <Button onClick={() => editTaskDetails()}>Edit Task</Button>
          </Form.Group>
        </Form>
    </div>
)
};

export default EditTask;