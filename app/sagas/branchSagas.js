import {
  LOGIN_SUCCESS, BRANCH_REFERRAL_INFO, BRANCH_AUTH_SETUP,
  CLIENT_APP_INVITE, FRIEND_APP_INVITE, GROUP_APP_INVITE,
  APP_INVITE_ERROR, APP_INVITE_SUCCESS, SEND_AWS_SUCCESS,
  SETUP_CLIENT_ERROR, SETUP_REFERRAL_ERROR, SETUP_GROUP_ERROR,
  RESET_BRANCH_INFO, REMOVE_TRAINER, REMOVE_TRAINER_ERROR,
  SETUP_REFERRAL_SUCCESS
} from '../constants/ActionTypes'

import {REHYDRATE} from 'redux-persist/constants'
import {call, cancel, cps, fork, put, select, take} from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { Alert } from "react-native"
import * as db from './firebaseCommands'
import Config from 'react-native-config'
import firebase from 'firebase'
import branch from 'react-native-branch'
import DeviceInfo from 'react-native-device-info'

const deviceId = DeviceInfo.getUniqueID()

const getLastParams = () => {
  return branch.getLatestReferringParams()
  .then(lastParams => ({lastParams}))
}

const getInstallParams = () => {
  return branch.getFirstReferringParams()
  .then(installParams => ({installParams}))
}

const showShareSheet = (branchUniversalObject, shareOptions, linkProperties, controlParams) => {
  return branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)
  .then((channel, completed) => ({channel, completed}))
}

const getUrl = (branchUniversalObject, linkProperties, controlParams) => {
  return branchUniversalObject.generateShortUrl(linkProperties, controlParams)
  .then(shareUrl => ({shareUrl}))
}

function* removeTrainer() {
  try {
    const {referralSetup, referralType, referralDeviceId} = yield select(state => state.infoReducer)
    const {uid} = yield select(state => state.authReducer)
    if (referralSetup === 'accept' && referralType === 'client') {
      firebase.database().ref('/global/' + deviceId + '/referralInfo')
      .update({
        referralSetup: 'pending',
        referralName: '',
        referralDeviceId: deviceId,
        referralType: '',
      })
      firebase.database().ref('/global/' + referralDeviceId + '/trainerInfo/clientId/' + deviceId).remove()
      firebase.database().ref('/global/deviceIdMap/' + uid + '/' + referralDeviceId).remove()
      yield put({type: BRANCH_REFERRAL_INFO, referralType: '', referralSetup: 'pending', referralDeviceId: deviceId, referralName: ''})
    }
  }
  catch (error) {
    yield put({type: REMOVE_TRAINER_ERROR})
  }
}

function* setupClient() {
  try {
    const {referralSetup, referralType, referralDeviceId, referralName} = yield select(state => state.infoReducer)
    const {uid} = yield select(state => state.authReducer)
    if (referralSetup === 'pending' && referralType === 'client') {
      const data = yield take(BRANCH_AUTH_SETUP)
      const {response} = data
      if (response === 'accept') {
        firebase.database().ref('/global/deviceIdMap/' + uid + '/' + referralDeviceId).set('trainer')
        firebase.database().ref('/global/' + referralDeviceId + '/trainerInfo/clientId/' + deviceId).set('accept')
      }
      firebase.database().ref('/global/' + deviceId + '/referralInfo').update({referralSetup: response})
      yield put({type: BRANCH_REFERRAL_INFO, referralType, referralSetup: response, referralDeviceId, referralName})
    }
  }
  catch (error) {
    yield put({type: SETUP_CLIENT_ERROR})
  }
}

function* setupTrainer() {
  try {
    const lastParams = (yield call(getLastParams)).lastParams
    const installParams = (yield call(getInstallParams)).installParams
    const {referralType, referralName, referralDeviceId} = lastParams
    const {referralSetup} = yield select(state => state.infoReducer)
    if (referralType === 'client' &&
        referralSetup === 'pending' &&
        (referralDeviceId !== deviceId || lastParams !== installParams)) {
      const {uid} = yield select(state => state.authReducer)
      if (uid) {
        yield put({type: BRANCH_REFERRAL_INFO, referralType, referralSetup: 'pending', referralDeviceId, referralName})
        firebase.database().ref('/global/' + deviceId + '/referralInfo').update({
          referralType,
          referralName,
          referralSetup: 'pending',
          referralDeviceId,
        })
      }
    }
    else if (referralSetup === 'decline') {
      const {uid} = yield select(state => state.authReducer)
      if (uid) {
        yield put({type: BRANCH_REFERRAL_INFO, referralType: '', referralSetup: 'pending', referralDeviceId: deviceId, referralName: ''})
        firebase.database().ref('/global/' + deviceId + '/referralInfo').update({
          referralType: '',
          referralName: '',
          referralSetup: 'pending',
          referralDeviceId: deviceId,
        })
      }
    }
    yield put({type: SETUP_REFERRAL_SUCCESS})
  }
  catch (error) {
    yield put({type: SETUP_REFERRAL_ERROR})
  }
}

function* branchInvite() {
  while (true) {
    try {
      const {referralType} = yield take([CLIENT_APP_INVITE, FRIEND_APP_INVITE])
      const {uid} = yield select(state => state.authReducer)
      if (!uid)
        throw 'User not authenticated'
      const {settings} = yield select(state => state.infoReducer)
      const referralName = settings.first_name
      const branchUniversalObject = branch.createBranchUniversalObject
      (
        'canonicalIdentifier',
        {
          metadata:
          {
            referralName,
            referralDeviceId: deviceId,
            referralType,
          },
          contentTitle: 'inPhood Invite',
          contentDescription: 'Sending invite for inPhood'
        }
      )
      const shareOptions = {
        messageHeader: 'inPhood App Invite',
        messageBody: 'Computer Vision enhanced food journaling'
      }
      const linkProperties = {
        feature: 'share',
        channel: 'ios'
      }
      const {channel, completed} = yield call(showShareSheet, branchUniversalObject, shareOptions, linkProperties)
      yield put({type: APP_INVITE_SUCCESS})
    }
    catch (error) {
      yield put({type: APP_INVITE_ERROR})
    }
  }
}

export default function* rootSaga() {
  yield fork(takeLatest, [REHYDRATE, LOGIN_SUCCESS], branchInvite)
  yield fork(takeLatest, [LOGIN_SUCCESS], setupTrainer)
  yield fork(takeLatest, [SETUP_REFERRAL_SUCCESS], setupClient)
  yield fork(takeLatest, [REMOVE_TRAINER], removeTrainer)
}
