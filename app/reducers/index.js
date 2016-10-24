import { combineReducers } from 'redux'
import tabReducer from './tabReducer'
import authReducer from './authReducer'
import mediaReducer from './mediaReducer'
import captionReducer from './captionReducer'
import extReducer from './extReducer'
import galReducer from './galReducer'
import galNavReducer from './galNavReducer'
import chatReducer from './chatReducer'
import visionReducer from './visionReducer'
import selectedReducer from './selectedReducer'
import trainerReducer from './trainerReducer'
import trainerDataReducer from './trainerDataReducer'
import trainerNavReducer from './trainerNavReducer'
import notificationReducer from './notificationReducer'
import { LOGOUT_SUCCESS }from '../constants/ActionTypes'

const appReducer = combineReducers({
    tabReducer,
    authReducer,
    mediaReducer,
    captionReducer,
    extReducer,
    galReducer,
    galNavReducer,
    chatReducer,
    selectedReducer,
    trainerReducer,
    trainerDataReducer,
    trainerNavReducer,
    notificationReducer,
    visionReducer
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) { 
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
