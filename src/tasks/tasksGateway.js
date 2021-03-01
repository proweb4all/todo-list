// const baseUrl = 'https://crudcrud.com/api/d8daec8ccd9741f7a475ef43c9a91046/tasks'
const baseUrl = 'https://603bb8e4f4333a0017b66dd7.mockapi.io/api/v1/tasks'

export const createTask = taskData =>
  fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(taskData)
    })

export const fetchTasksList = () => 
  fetch(baseUrl)
    .then(response => response.json())

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    body: JSON.stringify(taskData)
  })

export const deleteTask = (taskId) => 
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  })
