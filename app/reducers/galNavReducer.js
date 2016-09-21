import { PUSH_GAL_ROUTE, POP_GAL_ROUTE, LOGOUT_SUCCESS } from '../constants/ActionTypes'
import { NavigationExperimental } from 'react-native'
const {
 StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [
    {
      key: 'gallery',
      title: ''
    }
  ]
}

export default function galleryNav(state = initialState, action) {
  switch(action.type) {
    case PUSH_GAL_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) {
        return state
      }
      else {
        return NavigationStateUtils.push(state, action.route)
      }
    case POP_GAL_ROUTE:
      if (state.index === 0 || state.routes.length === 1) {
        return state
      }
      else {
        return NavigationStateUtils.pop(state)
      }
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}
