import { 
  LOAD_ID,
  MSG_COUNT,
  LOAD_GROUP,
  ADD_MESSAGES,
  FEEDBACK_PHOTO, 
  STORE_MESSAGES,
} from '../constants/ActionTypes'

const initialState = {
  count: 0,
  group: '',
  client: '',
  cdnPath: '',
  messages: [],
  chatMessages: [],
  databasePath: '',
}

export default function chat(state = initialState, action) {
  switch(action.type) {
    case MSG_COUNT:
      return {
        ...state,
        count: action.count
      }
    case FEEDBACK_PHOTO:
      return {
        ...state,
        databasePath: action.databasePath,
        cdnPath: action.cdnPath
      }
    case STORE_MESSAGES:
      return {
        ...state,
        chatMessages: action.messages
      }
    case LOAD_ID:
      return {
        ...state,
        client: action.id
      }
    case LOAD_GROUP:
      return {
        ...state,
        group: action.group
      }
    case ADD_MESSAGES:
      const {path, messages} = action
      let array = state.messages
      if (!array[path]) {
        array[path] = []
      }
      array[path] = [...array[path], messages]
      return {
        ...state,
        messages: array
      }
    default:
      return state
  }
}
