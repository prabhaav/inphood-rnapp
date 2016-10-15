import { 
  TAKE_PHOTO, STORE_64_PHOTO, CLARIFAI_TAGS_SUCCESS, 
  STORE_CAMERA_CAPTION, STORE_CAMERA_TITLE, ADD_CAMERA_MEAL_DATA, 
  PUSH_CAM_ROUTE, POP_CAM_ROUTE, SEND_FIREBASE_INIT_CAMERA, SEND_AWS_SUCCESS
} from '../constants/ActionTypes'
import { NavigationExperimental } from 'react-native'
const {
 StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  photo: '',
  photo64: '',
  caption: '',
  title: '',
  mealType: '',
  index: 0,
  key: 'root',
  tags: '',
  routes: [
    {
      key: 'picture',
      title: ''
    }
  ],
  inProgress: null
}

export default function camera (state = initialState, action) {
  switch (action.type) {
    case TAKE_PHOTO:
      return {
        ...state,
        photo: action.photo,
        inProgress: null
      }
    case STORE_64_PHOTO:
      return {
        ...state,
        photo64: action.photo
      }
    case CLARIFAI_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.tags
      }
    case STORE_CAMERA_CAPTION:
      return {
        ...state,
        caption: action.caption
      }
    case STORE_CAMERA_TITLE:
      return {
        ...state,
        title: action.title
      }
    case ADD_CAMERA_MEAL_DATA:
      return {
        ...state,
        mealType: action.mealType
      }
    case PUSH_CAM_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) {
        return state
      }
      else {
        return NavigationStateUtils.push(state, action.route)
      }
    case POP_CAM_ROUTE:
      if (state.index === 0 || state.routes.length === 1) {
        return state
      }
      else {
        return NavigationStateUtils.pop(state)
      }
    case SEND_FIREBASE_INIT_CAMERA:
      return {
        ...state,
        inProgress: true
      }
    case SEND_AWS_SUCCESS:
      return {
        ...state,
        inProgress: false
      }
    default:
      return state
  }
}
