// https://todo-itacademy.herokuapp.com

const base = 'https://todo-itacademy.herokuapp.com/api'

function requestsHeaders(accessToken){
  return {
    'Content-type':'application/json',
    'Authorization':`Bearer ${accessToken}`
  }
}

export const API = {

  // POST

  register: (body) => {
    return fetch(`${base}/registration`, {
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(body)
      })
      .then(res => res.json())
  },
  auth: (body) => {
    return fetch(`${base}/login`, {
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(body)
      })
      .then(res => res.json())
  },
  signOut: (body) => {
    return fetch(`${base}/logout`, {
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(body)
      })
      .then(res => res.json())
  },

  createTodo: (accessToken , body) => {
    return fetch(`${base}/todos/create`, {
      method:'POST',
      headers:requestsHeaders(accessToken),
      body:JSON.stringify(body)
    })
    .then(res => res.json())
  },

  // DELETE

  deleteTodo: (id , accessToken) => {
    return fetch(`${base}/todos/${id}` , {
      method:"DELETE",
      headers:requestsHeaders(accessToken)
    })
    .then(res => res.json())
  },

  // PUT

  edit: (id, accessToken , body) => {
    return fetch(`${base}/todos/${id}`, {
      method:'PUT',
      headers:requestsHeaders(accessToken),
      body:JSON.stringify(body)
    })
    .then(res => res.json())
  },

  // GET

  completed: (id, accessToken) => {
    return fetch(`${base}/todos/${id}/completed`, {
      method:'GET',
      headers:requestsHeaders(accessToken),
    })
    .then(res => res.json())
  },


  all: (accessToken) => {
    return fetch(`${base}/todos`, {
      method:'GET',
      headers: requestsHeaders(accessToken),
      })
      .then(res => res.json())
  },
  
  single: (id , accessToken) => {
    return fetch(`${base}/todos/${id}`, {
      method:'GET',
      headers: requestsHeaders(accessToken),
      })
      .then(res => res.json())
  }
}