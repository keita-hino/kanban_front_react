import axios from 'axios'
export const READ_TASKS = 'READ_TASKS'
// export const CREATE_EVENTS = 'CREATE_EVENTS'
// export const DELETE_EVENTS = 'DELETE_EVENTS'
// export const READ_EVENT = 'READ_EVENT'
// export const UPDATE_EVENT = 'UPDATE_EVENT'


const ROOT_URL = 'http://localhost:3000/api/v1'

export const readTasks = () => async dispatch => {
  // APIを叩く
  const response = await axios.get(`${ROOT_URL}/tasks`)
  console.log(response)
  dispatch({ type: READ_TASKS, response })
}

// export const postEvent = values => async dispatch => {
//   // APIを叩く
//   const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
//   dispatch({ type: CREATE_EVENTS, response })
// }

// export const deleteEvent = id => async dispatch => {
//   // APIを叩く
//   await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
//   dispatch({ type: DELETE_EVENTS, id })
// }

// export const getEvent = id => async dispatch => {
//   // APIを叩く
//   const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
//   dispatch({ type: READ_EVENT, response })
// }

// export const putEvent = values => async dispatch => {
//   // APIを叩く
//   const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
//   dispatch({ type: UPDATE_EVENT, response })
// }