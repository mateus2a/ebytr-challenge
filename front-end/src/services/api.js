import axios from 'axios';

const tasksUrl = 'http://localhost:8080/tasks';

export const index = async (id) => {
    id = id || '';
    return await axios.get(`${tasksUrl}/${id}`);
}

export const store = async (user) => {
    return await axios.post(`${tasksUrl}/add`, user);
}

export const remove = async (id) => {
    return await axios.delete(`${tasksUrl}/${id}`);
}

export const update = async (id, user) => {
    return await axios.put(`${tasksUrl}/${id}`, user);
}