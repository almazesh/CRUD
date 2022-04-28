import { API } from './api';

// POST

export const getRegister = (body) => {
  return API.register(body)
}

export const getAuth = (body) => {
  return API.auth(body)
}

export const getOut = (body) => {
  return API.signOut(body)
}

export const getCreate = (accessToken , body) => {
  return API.createTodo(accessToken , body)
}

// DELETE

export const getDelete = (id , accessToken) => {
  return API.deleteTodo(id , accessToken)
}

// PUT

export const getEdit = (id , accessToken , body) => {
  return API.edit(id , accessToken , body)
}

// GET

export const getTodos = (accessToken) => {
  return API.all(accessToken)
}

export const getCompleted = (id , accessToken) => {
  return API.completed(id ,accessToken)
}

export const getSingleTodo = (id , accessToken) => {
  return API.single(id ,accessToken)
}



