import {
  READ_TASKS
} from '../actions'
import _ from 'lodash'

export default (tasks = {}, action) => {
  switch (action.type) {
    case READ_TASKS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return tasks
  }
}