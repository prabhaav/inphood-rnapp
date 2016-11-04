import { createAction } from 'redux-actions'

//AUTH Actions
export const STORE_TOKEN = 'STORE_TOKEN'
export const STORE_RESULT = 'STORE_RESULT'
export const STORE_VALUE = 'STORE_VALUE'
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
export const EM_LOGIN_SUCCESS = 'EM_LOGIN_SUCCESS'
export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS'



//Navigation Actions
export const PUSH_EXP_ROUTE = 'PUSH_EXP_ROUTE'
export const POP_EXP_ROUTE = 'POP_EXP_ROUTE'
export const PUSH_CAM_ROUTE = 'PUSH_CAM_ROUTE'
export const POP_CAM_ROUTE = 'POP_CAM_ROUTE'
export const PUSH_GAL_ROUTE = 'PUSH_GAL_ROUTE'
export const POP_GAL_ROUTE = 'POP_GAL_ROUTE'
export const PUSH_EXT_ROUTE = 'PUSH_EXT_ROUTE'
export const POP_EXT_ROUTE = 'POP_EXT_ROUTE'
export const PUSH_GRP_ROUTE = 'PUSH_GRP_ROUTE'
export const POP_GRP_ROUTE = 'POP_GRP_ROUTE'
export const CHANGE_TAB = 'CHANGE_TAB'
export const CHANGE_PAGE = 'CHANGE_PAGE'


//Media Actions
export const RESET_CAMERA = 'RESET_CAMERA'
export const TAKE_PHOTO = 'TAKE_PHOTO'
export const STORE_64_PHOTO = 'STORE_64_PHOTO'
export const INIT_PHOTOS = 'INIT_PHOTOS'
export const FEEDBACK_PHOTO = 'FEEDBACK_PHOTO'
export const STORE_CAPTION = 'STORE_CAPTION'
export const STORE_TITLE = 'STORE_TITLE'
export const ADD_MEAL_DATA = 'ADD_MEAL_DATA'
export const REFRESH_CLIENT_DATA = 'REFRESH_CLIENT_DATA'
export const REMOVE_CLIENT_PHOTO = 'REMOVE_CLIENT_PHOTO'
export const MARK_PHOTO_READ = 'MARK_PHOTO_READ'



//Trainer Actions
export const SET_CLIENT_ID = 'SET_CLIENT_ID'
export const SET_CLIENT_PHOTO = 'SET_CLIENT_PHOTO'
export const SET_CLIENT_NAME = 'SET_CLIENT_NAME'
export const NUMBER_OF_CLIENTS = 'NUMBER_OF_CLIENTS'
export const MARK_CLIENT_PHOTO_READ = 'MARK_CLIENT_PHOTO_READ'



//Group Actions
export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_GROUP_ERROR = 'CREATE_GROUP_ERROR'
export const NUMBER_OF_GROUPS = 'NUMBER_OF_GROUPS'
export const SET_GROUP_NAME = 'SET_GROUP_NAME'



//AWS Sagas Actions
export const SEND_AWS_ERROR = 'SEND_AWS_ERROR'
export const SEND_AWS_SUCCESS = 'SEND_AWS_SUCCESS'
export const SEND_FIREBASE_ERROR = 'SEND_FIREBASE_ERROR'
export const SEND_FIREBASE_INIT_CAMERA = 'SEND_FIREBASE_INIT_CAMERA'
export const SEND_FIREBASE_CAMERA_SUCCESS = 'SEND_FIREBASE_CAMERA_SUCCESS'



//DB Get Sagas Actions
export const LOAD_PHOTOS_INIT = 'LOAD_PHOTOS_INIT'
export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS'
export const LOAD_PHOTOS_ERROR = 'LOAD_PHOTOS_ERROR'



//CHAT Sagas Actions
export const LOAD_ID = 'LOAD_ID'
export const MSG_COUNT = 'MSG_COUNT'
export const LOAD_GROUP = 'LOAD_GROUP'
export const ADD_MESSAGES = 'ADD_MESSAGES'
export const INIT_MESSAGES = 'INIT_MESSAGES'
export const STORE_MESSAGES = 'STORE_MESSAGES'
export const INIT_CHAT_SAGA = 'INIT_CHAT_SAGA'
export const STORE_CHAT_ERROR = 'STORE_CHAT_ERROR'
export const STORE_CHAT_SUCCESS = 'STORE_CHAT_SUCCESS'



//NOTIFICATION Actions
export const INCREMENT_GROUP_NOTIFICATION = 'INCREMENT_GROUP_NOTIFICATION'
export const DECREMENT_GROUP_NOTIFICATION = 'DECREMENT_GROUP_NOTIFICATION'
export const INCREMENT_CLIENT_PHOTO_NOTIFICATION = 'INCREMENT_CLIENT_PHOTO_NOTIFICATION'
export const DECREMENT_CLIENT_PHOTO_NOTIFICATION = 'DECREMENT_CLIENT_PHOTO_NOTIFICATION'
export const INCREMENT_TRAINER_PHOTO_NOTIFICATION = 'INCREMENT_TRAINER_PHOTO_NOTIFICATION'
export const DECREMENT_TRAINER_PHOTO_NOTIFICATION = 'DECREMENT_TRAINER_PHOTO_NOTIFICATION'



//FORM Actions
export const USER_SETTINGS = 'USER_SETTINGS'
export const STORE_SETTINGS_FORM = 'STORE_SETTINGS_FORM'
export const GROUP_SETTINGS = 'GROUP_SETTINGS'
export const STORE_GROUP_FORM = 'STORE_GROUP_FORM'



//BRANCH Actions
export const CLIENT_APP_INVITE = 'CLIENT_APP_INVITE'
export const FRIEND_APP_INVITE = 'FRIEND_APP_INVITE'
export const GROUP_APP_INVITE = 'GROUP_APP_INVITE'
export const APP_INVITE_SUCCESS = 'APP_INVITE_SUCCESS'
export const APP_INVITE_ERROR = 'APP_INVITE_ERROR'
export const BRANCH_REFERRAL_INFO = 'BRANCH_REFERRAL_INFO'
export const BRANCH_AUTH_TRAINER = 'BRANCH_AUTH_TRAINER'
export const RESET_BRANCH_INFO = 'RESET_BRANCH_INFO'
export const SETUP_CLIENT_ERROR = 'SETUP_CLIENT_ERROR'
export const SETUP_TRAINER_ERROR = 'SETUP_TRAINER_ERROR'
export const SETUP_GROUP_ERROR = 'SETUP_GROUP_ERROR'



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
export const REMOVE_PHOTO = 'REMOVE_PHOTO'
export const INIT_GROUP_DATA = 'INIT_GROUP_DATA'
export const ADD_GROUPS = 'ADD_GROUPS'
export const ADD_GROUP_INFOS = 'ADD_GROUP_INFOS'
export const ADD_GROUP_PHOTOS = 'ADD_GROUP_PHOTOS'
export const ADD_GROUP_MESSAGES = 'ADD_GROUP_MESSAGES'
export const REMOVE_GROUP_PHOTO = 'REMOVE_GROUP_PHOTO'
export const INIT_GROUP_MESSAGES = 'INIT_GROUP_MESSAGES'
export const INIT_CLIENT_MESSAGES = 'INIT_CLIENT_MESSAGES'

export const SYNC_ADDED_GALLERY_CHILD = 'SYNC_ADDED_GALLERY_CHILD'
export const SYNC_COUNT_GALLERY_CHILD = 'SYNC_COUNT_GALLERY_CHILD'
export const SYNC_ADDED_MESSAGES_CHILD = 'SYNC_ADDED_MESSAGES_CHILD'
export const SYNC_REMOVED_GALLERY_CHILD = 'SYNC_REMOVED_GALLERY_CHILD'
export const syncAddedGalleryChild = createAction(SYNC_ADDED_GALLERY_CHILD)
export const syncGalleryChildCount = createAction(SYNC_COUNT_GALLERY_CHILD)
export const syncAddedMessagesChild = createAction(SYNC_ADDED_MESSAGES_CHILD)
export const syncRemovedGalleryChild = createAction(SYNC_REMOVED_GALLERY_CHILD)

export const SYNC_COUNT_GROUPS_CHILD = 'SYNC_COUNT_GROUPS_CHILD'
export const SYNC_ADDED_GROUPS_CHILD = 'SYNC_ADDED_GROUPS_CHILD'
export const SYNC_REMOVED_GROUPS_CHILD = 'SYNC_REMOVED_GROUPS_CHILD'
export const syncCountGroupsChild = createAction(SYNC_COUNT_GROUPS_CHILD)
export const syncAddedGroupsChild = createAction(SYNC_ADDED_GROUPS_CHILD)
export const syncRemovedGroupsChild = createAction(SYNC_REMOVED_GROUPS_CHILD)

export const SYNC_ADDED_GROUP_INFO_CHILD = 'SYNC_ADDED_GROUP_INFO_CHILD'
export const SYNC_REMOVED_GROUP_INFO_CHILD = 'SYNC_REMOVED_GROUP_INFO_CHILD'
export const syncAddedGroupInfoChild = createAction(SYNC_ADDED_GROUP_INFO_CHILD)
export const syncRemovedGroupInfoChild = createAction(SYNC_REMOVED_GROUP_INFO_CHILD)

export const SYNC_ADDED_GROUP_PHOTO_CHILD = 'SYNC_ADDED_GROUP_PHOTO_CHILD'
export const syncAddedGroupPhotoChild = createAction(SYNC_ADDED_GROUP_PHOTO_CHILD)
export const SYNC_REMOVED_GROUP_PHOTO_CHILD = 'SYNC_REMOVED_GROUP_PHOTO_CHILD'
export const syncRemovedGroupPhotoChild = createAction(SYNC_REMOVED_GROUP_PHOTO_CHILD)
export const SYNC_ADDED_GROUP_MESSAGES_CHILD = 'SYNC_ADDED_GROUP_MESSAGES_CHILD'
export const syncAddedGroupMessagesChild = createAction(SYNC_ADDED_GROUP_MESSAGES_CHILD)

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

export const SYNC_ADDED_PHOTO_CHILD = 'SYNC_ADDED_PHOTO_CHILD'
export const syncAddedPhotoChild = createAction(SYNC_ADDED_PHOTO_CHILD)
export const SYNC_REMOVED_PHOTO_CHILD = 'SYNC_REMOVED_PHOTO_CHILD'
export const syncRemovedPhotoChild = createAction(SYNC_REMOVED_PHOTO_CHILD)
export const SYNC_ADDED_MESSAGES_CLIENT_CHILD = 'SYNC_ADDED_MESSAGES_CLIENT_CHILD'
export const syncAddedMessagesClientChild = createAction(SYNC_ADDED_MESSAGES_CLIENT_CHILD)
