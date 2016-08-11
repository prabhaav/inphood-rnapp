import {
  PUSH_ROUTE,
  POP_ROUTE,
  POP_GAL_ROUTE,
  PUSH_GAL_ROUTE,
  POP_CAM_ROUTE,
  PUSH_CAM_ROUTE,
  POP_LIB_ROUTE,
  PUSH_LIB_ROUTE,
  CHANGE_TAB,
  TAKE_PHOTO,
  SELECT_PHOTO,
  FEEDBACK_PHOTO,
  LOAD_PHOTOS_INIT,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
  TAKE_PICTURE,
  LOAD_PICTURE,
  LOAD_CAMERAMEDIA_SUCCESS,
  LOAD_CAMERAMEDIA_ERROR,
  SEND_FIREBASE_LIBRARY_SUCCESS,
  SEND_FIREBASE_CAMERA_SUCCESS,
  SEND_FIREBASE_ERROR,
  SEND_FIREBASE_INIT_CAMERA,
  SEND_FIREBASE_INIT_LIBRARY,
  STORE_TOKEN,
  STORE_RESULT,
  STORE_CAMERA_CAPTION,
  STORE_LIBRARY_CAPTION,
  STORE_CAMERA_TITLE,
  STORE_LIBRARY_TITLE,
  ADD_CAMERA_MEAL_DATA,
  ADD_LIBRARY_MEAL_DATA,
  STORE_USER_MESSAGES,
  STORE_TRAINER_MESSAGES,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERRROR,
  IS_NEW_USER,
  FILTER_PHOTOS
} from '../constants/ActionTypes'

export function push (route) {
  return {
    type: PUSH_ROUTE,
    route,
  }
}

export function pop () {
  return {
    type: POP_ROUTE
  }
}

export function pushGal (route) {
  return {
    type: PUSH_GAL_ROUTE,
    route,
  }
}

export function popGal () {
  return {
    type: POP_GAL_ROUTE
  }
}

export function pushCam (route) {
  return {
    type: PUSH_CAM_ROUTE,
    route,
  }
}

export function popCam () {
  return {
    type: POP_CAM_ROUTE
  }
}

export function pushLib (route) {
  return {
    type: PUSH_LIB_ROUTE,
    route,
  }
}

export function popLib () {
  return {
    type: POP_LIB_ROUTE
  }
}

export function changeTab (index) {
  return {
    type: CHANGE_TAB,
    index
  }
}

export function takePhoto (photo) {
  return {
    type: TAKE_PHOTO,
    photo
  }
}

export function selectPhoto (selected) {
  return {
    type: SELECT_PHOTO,
    selected
  }
}

export function feedbackPhoto (selected) {
  return {
    type: FEEDBACK_PHOTO,
    selected
  }
}

export function loadPhotosInit() {
  return {
    type: LOAD_PHOTOS_INIT,
  }
}

export function loadPhotosSuccess(photos) {
  return {
    type: LOAD_PHOTOS_SUCCESS,
    photos: photos
  }
}

export function loadPhotosFailure(error) {
  return {
    type: LOAD_PHOTOS_FAILURE,
    error: error
  }
}

export function sendFirebaseInitCamera() {
  return {
    type: SEND_FIREBASE_INIT_CAMERA,
  }
}

export function sendFirebaseInitLibrary() {
  return {
    type: SEND_FIREBASE_INIT_LIBRARY,
  }
}

export function storeCameraCaption(caption) {
  return {
    type: STORE_CAMERA_CAPTION,
    caption
  }
}


export function storeLibraryCaption(caption) {
  return {
    type: STORE_LIBRARY_CAPTION,
    caption
  }
}

export function storeCameraTitle(title) {
  return {
    type: STORE_CAMERA_TITLE,
    title
  }
}


export function storeLibraryTitle(title) {
  return {
    type: STORE_LIBRARY_TITLE,
    title
  }
}

export function addCameraMealData(mealType) {
  return {
    type: ADD_CAMERA_MEAL_DATA,
    mealType
  }
}

export function addLibraryMealData(mealType) {
  return {
    type: ADD_LIBRARY_MEAL_DATA,
    mealType
  }
}

export function storeMessages(messages) {
  return {
    type: STORE_USER_MESSAGES,
    messages
  }
}


export function storeTrainerMessages(trainerMessages) {
  return {
    type: STORE_TRAINER_MESSAGES,
    trainerMessages
  }
}

export function storeToken(token) {
  return {
    type: STORE_TOKEN,
    token
  }
}

export function storeResult(result) {
  return {
    type: STORE_RESULT,
    result
  }
}

export function loginRequest(){
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(){
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginError(error){
  return {
    type: LOGIN_ERROR,
    error: error
  };
}

// triggered to logout the user
export function logoutRequest(){
  return {
    type: LOGOUT_REQUEST
  };
}

export function logoutSuccess(){
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logoutError(error){
  return {
    type: LOGOUT_ERROR,
    error: error
  }
}

export function isNewUser(flag){
  return {
    type: IS_NEW_USER,
    flag: flag
  }
}

export function filterPhotos(filter){
  return {
    type: FILTER_PHOTOS,
    filter: filter
  }
}
