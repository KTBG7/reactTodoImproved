import axios from "axios";

const retrieveTodoList = (username) =>{
    return axios.get(`http://localhost:8080/users/${username}/todos`);
}

const deleteTodo = (username, id) => {
    return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`);
}

const updateTodo = (username, id) => {
    return axios.post(`http://localhost:8080/users/${username}/todos/${id}`);
}

const retrieveTodo = (username, id) => {
    return axios.get(`http://localhost:8080/users/${username}/todos/${id}`);
}

export {retrieveTodoList, deleteTodo, updateTodo, retrieveTodo}