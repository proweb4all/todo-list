const baseUrl = 'https://crudcrud.com/api/a3c82f7d2d9142a09d6333f51acc078b/tasks'

export const createTask = taskData => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(taskData)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task')
      }
    })
}

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(tasksList =>
      tasksList.map(({
        _id,
        ...task
      }) => ({
        id: _id,
        ...task
      }))
    )
}

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    body: JSON.stringify(taskData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task')
    }
  })
}

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task')
    }
  })
}