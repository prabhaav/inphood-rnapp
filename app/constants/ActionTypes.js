import { createAction } from 'redux-actions'

//AUTH Actions
export const STORE_TRAINER = 'STORE_TRAINER'
export const STORE_TOKEN = 'STORE_TOKEN'
export const STORE_RESULT = 'STORE_RESULT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const EM_LOGIN_INIT = 'EM_LOGIN_INIT'
export const EM_LOGIN_REQUEST = 'EM_LOGIN_REQUEST'
export const EM_CREATE_USER = 'EM_CREATE_USER'
export const INIT_LOGIN = 'INIT_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const IS_NEW_USER = 'IS_NEW_USER'
export const RESET_PASSWORD = 'RESET_PASSWORD'



//Navigation Actions
export const PUSH_EXP_ROUTE = 'PUSH_EXP_ROUTE'
export const POP_EXP_ROUTE = 'POP_EXP_ROUTE'
export const PUSH_CAM_ROUTE = 'PUSH_CAM_ROUTE'
export const POP_CAM_ROUTE = 'POP_CAM_ROUTE'
export const PUSH_LIB_ROUTE = 'PUSH_LIB_ROUTE'
export const POP_LIB_ROUTE = 'POP_LIB_ROUTE'
export const PUSH_GAL_ROUTE = 'PUSH_GAL_ROUTE'
export const POP_GAL_ROUTE = 'POP_GAL_ROUTE'
export const PUSH_EXT_ROUTE = 'PUSH_EXT_ROUTE'
export const POP_EXT_ROUTE = 'POP_EXT_ROUTE'
export const CHANGE_TAB = 'CHANGE_TAB'
export const HOLD_CHANGE_TAB = 'HOLD_CHANGE_TAB'



//Media Actions
export const TAKE_PHOTO = 'TAKE_PHOTO'
export const STORE_64_PHOTO = 'STORE_64_PHOTO'
export const STORE_64_LIBRARY = 'STORE_64_LIBRARY'
export const INIT_PHOTOS = 'INIT_PHOTOS'
export const SELECT_PHOTO = 'SELECT_PHOTO'
export const FEEDBACK_PHOTO = 'FEEDBACK_PHOTO'
export const STORE_CAMERA_CAPTION = 'STORE_CAMERA_CAPTION'
export const STORE_LIBRARY_CAPTION = 'STORE_LIBRARY_CAPTION'
export const STORE_CAMERA_TITLE = 'STORE_CAMERA_TITLE'
export const STORE_LIBRARY_TITLE = 'STORE_LIBRARY_TITLE'
export const ADD_CAMERA_MEAL_DATA = 'ADD_CAMERA_MEAL_DATA'
export const ADD_LIBRARY_MEAL_DATA = 'ADD_LIBRARY_MEAL_DATA'
export const REFRESH_CLIENT_DATA = 'REFRESH_CLIENT_DATA'
export const REMOVE_CLIENT_PHOTO = 'REMOVE_CLIENT_PHOTO'



//Trainer Actions
export const SET_CLIENT_ID = 'SET_CLIENT_ID'
export const SET_CLIENT_PHOTO = 'SET_CLIENT_PHOTO'
export const SET_CLIENT_NAME = 'SET_CLIENT_NAME'
export const MARK_PHOTO_READ = 'MARK_PHOTO_READ'
export const MARK_MESSAGE_READ = 'MARK_MESSAGE_READ'
export const NUMBER_OF_CLIENTS = 'NUMBER_OF_CLIENTS'



//AWS Sagas Actions
export const SEND_AWS_ERROR = 'SEND_AWS_ERROR'
export const SEND_AWS_SUCCESS = 'SEND_AWS_SUCCESS'
export const SEND_FIREBASE_ERROR = 'SEND_FIREBASE_ERROR'
export const SEND_FIREBASE_INIT_CAMERA = 'SEND_FIREBASE_INIT_CAMERA'
export const SEND_FIREBASE_INIT_LIBRARY = 'SEND_FIREBASE_INIT_LIBRARY'
export const SEND_FIREBASE_CAMERA_SUCCESS = 'SEND_FIREBASE_CAMERA_SUCCESS'
export const SEND_FIREBASE_LIBRARY_SUCCESS = 'SEND_FIREBASE_LIBRARY_SUCCESS'



//DB Get Sagas Actions
export const LOAD_PHOTOS_INIT = 'LOAD_PHOTOS_INIT'
export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS'
export const LOAD_PHOTOS_ERROR = 'LOAD_PHOTOS_ERROR'
export const APPEND_PHOTOS_SUCCESS = 'APPEND_PHOTOS_SUCCESS'
export const APPEND_PHOTOS_ERROR = 'APPEND_PHOTOS_ERROR'



//CHAT Sagas Actions
export const LOAD_ID = 'LOAD_ID'
export const ADD_MESSAGES = 'ADD_MESSAGES'
export const INIT_MESSAGES = 'INIT_MESSAGES'
export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const STORE_MESSAGES = 'STORE_MESSAGES'
export const INIT_CHAT_SAGA = 'INIT_CHAT_SAGA'
export const STORE_CHAT_ERROR = 'STORE_CHAT_ERROR'
export const STORE_CHAT_SUCCESS = 'STORE_CHAT_SUCCESS'



//NOTIFICATION Actions
export const INCREMENT_CLIENT_NOTIFICATION = 'INCREMENT_CLIENT_NOTIFICATION'
export const DECREMENT_CLIENT_NOTIFICATION = 'DECREMENT_CLIENT_NOTIFICATION'
export const INCREMENT_TRAINER_NOTIFICATION = 'INCREMENT_TRAINER_NOTIFICATION'
export const DECREMENT_TRAINER_NOTIFICATION = 'DECREMENT_TRAINER_NOTIFICATION'
export const INCREMENT_CLIENT_CHAT_NOTIFICATION = 'INCREMENT_CLIENT_CHAT_NOTIFICATION'
export const DECREMENT_CLIENT_CHAT_NOTIFICATION = 'DECREMENT_CLIENT_CHAT_NOTIFICATION'
export const INCREMENT_TRAINER_CHAT_NOTIFICATION = 'INCREMENT_TRAINER_CHAT_NOTIFICATION'
export const DECREMENT_TRAINER_CHAT_NOTIFICATION = 'DECREMENT_TRAINER_CHAT_NOTIFICATION'
export const INCREMENT_TRAINER_PHOTO_NOTIFICATION = 'INCREMENT_TRAINER_PHOTO_NOTIFICATION'
export const DECREMENT_TRAINER_PHOTO_NOTIFICATION = 'DECREMENT_TRAINER_PHOTO_NOTIFICATION'
export const ADD_CLIENT_NOTIFICATION = 'ADD_CLIENT_NOTIFICATION'
export const ADD_TRAINER_NOTIFICATION = 'ADD_TRAINER_NOTIFICATION'


//FORM Actions
export const USER_SETTINGS = 'USER_SETTINGS'
export const STORE_SETTINGS_FORM = 'STORE_SETTINGS_FORM'



//BRANCH Actions
export const CLIENT_APP_INVITE = 'CLIENT_APP_INVITE'
export const FRIEND_APP_INVITE = 'FRIEND_APP_INVITE'
export const TRAINER_APP_INVITE = 'TRAINER_APP_INVITE'
export const APP_INVITE_ERROR = 'APP_INVITE_ERROR'



//CLARIFAI Actions
export const CLARIFAI_AUTH_SUCCESS = 'CLARIFAI_AUTH_SUCCESS'
export const CLARIFAI_AUTH_ERROR = 'CLARIFAI_AUTH_ERROR'
export const CLARIFAI_TAGS_SUCCESS = 'CLARIFAI_TAGS_SUCCESS'
export const CLARIFAI_TAGS_ERROR = 'CLARIFAI_TAGS_ERROR'



//SYNC Actions
export const INIT_DATA = 'INIT_DATA'
export const ADD_INFOS = 'ADD_INFOS'
export const ADD_PHOTOS = 'ADD_PHOTOS'
export const ADD_CLIENTS = 'ADD_CLIENTS'

export const SYNC_ADDED_ROOT_CHILD = 'SYNC_ADDED_ROOT_CHILD'
export const SYNC_REMOVED_ROOT_CHILD = 'SYNC_REMOVED_ROOT_CHILD'
export const syncAddedRootChild = createAction(SYNC_ADDED_ROOT_CHILD)
export const syncRemovedRootChild = createAction(SYNC_REMOVED_ROOT_CHILD)

export const SYNC_COUNT_CLIENTID_CHILD = 'SYNC_COUNT_CLIENTID_CHILD'
export const SYNC_ADDED_CLIENTID_CHILD = 'SYNC_ADDED_CLIENTID_CHILD'
export const SYNC_REMOVED_CLIENTID_CHILD = 'SYNC_REMOVED_CLIENTID_CHILD'
export const syncCountClientIdChild = createAction(SYNC_COUNT_CLIENTID_CHILD)
export const syncAddedClientIdChild = createAction(SYNC_ADDED_CLIENTID_CHILD)
export const syncRemovedClientIdChild = createAction(SYNC_REMOVED_CLIENTID_CHILD)

export const SYNC_ADDED_INFO_CHILD = 'SYNC_ADDED_INFO_CHILD'
export const SYNC_REMOVED_INFO_CHILD = 'SYNC_REMOVED_INFO_CHILD'
export const syncAddedInfoChild = createAction(SYNC_ADDED_INFO_CHILD)
export const syncRemovedInfoChild = createAction(SYNC_REMOVED_INFO_CHILD)

export const SYNC_COUNT_PHOTO_CHILD = 'SYNC_COUNT_PHOTO_CHILD'
export const SYNC_ADDED_PHOTO_CHILD = 'SYNC_ADDED_PHOTO_CHILD'
export const SYNC_REMOVED_PHOTO_CHILD = 'SYNC_REMOVED_PHOTO_CHILD'
export const syncCountPhotoChild = createAction(SYNC_COUNT_PHOTO_CHILD)
export const syncAddedPhotoChild = createAction(SYNC_ADDED_PHOTO_CHILD)
export const syncRemovedPhotoChild = createAction(SYNC_REMOVED_PHOTO_CHILD)

export const SYNC_ADDED_MESSAGES_CHILD = 'SYNC_ADDED_MESSAGES_CHILD'
export const SYNC_REMOVED_MESSAGES_CHILD = 'SYNC_REMOVED_MESSAGES_CHILD'
export const syncAddedMessagesChild = createAction(SYNC_ADDED_MESSAGES_CHILD)
export const syncRemovedMessagesChild = createAction(SYNC_REMOVED_MESSAGES_CHILD)

export const SYNC_COUNT_CLIENT_MESSAGES_CHILD = 'SYNC_COUNT_CLIENT_MESSAGES_CHILD'
export const SYNC_ADDED_MESSAGES_CLIENT_CHILD = 'SYNC_ADDED_MESSAGES_CLIENT_CHILD'
export const SYNC_REMOVED_MESSAGES_CLIENT_CHILD = 'SYNC_REMOVED_MESSAGES_CLIENT_CHILD'
export const syncCountClientMessagesChild = createAction(SYNC_COUNT_CLIENT_MESSAGES_CHILD)
export const syncAddedMessagesClientChild = createAction(SYNC_ADDED_MESSAGES_CLIENT_CHILD)
export const syncRemovedMessagesClientChild = createAction(SYNC_REMOVED_MESSAGES_CLIENT_CHILD)

export const SYNC_ADDED_MESSAGES = 'SYNC_ADDED_MESSAGES'
export const SYNC_REMOVED_MESSAGES = 'SYNC_REMOVED_MESSAGES'
export const syncAddedMessages = createAction(SYNC_ADDED_MESSAGES)
export const syncRemovedMessages = createAction(SYNC_REMOVED_MESSAGES)