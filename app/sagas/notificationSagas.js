import {
  ADD_CLIENT_NOTIFICATION,
  ADD_TRAINER_NOTIFICATION,
  INCREMENT_CLIENT_CHAT_NOTIFICATION, 
  INCREMENT_TRAINER_CHAT_NOTIFICATION,
  INCREMENT_TRAINER_PHOTO_NOTIFICATION,
} from '../constants/ActionTypes'

import {call, cancel, cps, fork, put, select, take} from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import * as db from './firebaseCommands'
import Config from 'react-native-config'

import firebase from 'firebase'

const turlHead = Config.AWS_CDN_THU_URL


const delayDisplay = (displayTime) => {
  while (true) {
    if (Date.now() > displayTime) {
      return
    }
  }
}

function* setupClientChatNotification() {
  while (true) {
    const {path} = yield take(INCREMENT_CLIENT_CHAT_NOTIFICATION)
    const trainer = (yield select(state => state.authReducer.result)).trainerId
    const time = (yield call(db.getPath, path + '/time')).val()
    let fireDate = ''
    if ((time + 300000) > Date.now()) {
      fireDate = Date.now()
    }
    else {
      fireDate = Date.now() + 300000
    }
    let oldCount = yield select(state => state.notificationReducer.client)
    if (!oldCount)
      oldCount = 0
    const applicationIconBadgeNumber = oldCount + 1
    const alertBody = 'Trainer has sent a new message'
    const notification = {fireDate, alertBody, applicationIconBadgeNumber}
    yield put({type: ADD_CLIENT_NOTIFICATION, notification})
  }
}

function* setupTrainerChatNotification() {
  while (true) {
    const {uid, photo, path} = yield take(INCREMENT_TRAINER_CHAT_NOTIFICATION)
    const public_path = '/global/' + uid + '/userInfo/public'
    const name = (yield call(db.getPath, public_path + '/name')).val()
    const time = (yield call(db.getPath, path + '/time')).val()
    let fireDate = ''
    if ((time + 300000) > Date.now()) {
      fireDate = Date.now()
    }
    else {
      fireDate = Date.now() + 300000
    }
    let oldCount = yield select(state => state.notificationReducer.trainer)
    if (!oldCount)
      oldCount = 0
    const applicationIconBadgeNumber = oldCount + 1
    const alertBody = name + ' has sent a new message'
    const notification = {fireDate, alertBody, applicationIconBadgeNumber}
    yield put({type: ADD_TRAINER_NOTIFICATION, notification})
  }
}

function* setupTrainerPhotoNotification() {
  while (true) {
    const {uid, photo, time} = yield take(INCREMENT_TRAINER_PHOTO_NOTIFICATION)
    const path = '/global/' + uid + '/userInfo/public'
    const name = (yield call(db.getPath, path + '/name')).val()
    let fireDate = ''
    if ((time + 300000) > Date.now()) {
      console.log('Let\'s delay')
      fireDate = Date.now()
    }
    else {
      console.log('fire fire fire')
      fireDate = Date.now() + 300000
    }
    let oldCount = yield select(state => state.notificationReducer.trainer)
    if (!oldCount)
      oldCount = 0
    const applicationIconBadgeNumber = oldCount + 1
    const alertBody = name + ' has added a new meal photo'
    const notification = {fireDate, alertBody, applicationIconBadgeNumber}
    yield put({type: ADD_TRAINER_NOTIFICATION, notification})
  }
}

export default function* rootSaga() {
  yield fork(setupClientChatNotification)
  yield fork(setupTrainerChatNotification)
  yield fork(setupTrainerPhotoNotification)
}