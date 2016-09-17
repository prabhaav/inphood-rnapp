import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import Config from 'react-native-config'
import firebase from 'firebase'
require("firebase/app")
require("firebase/auth")
require("firebase/database")
const config = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
}

import rootReducer from '../reducers'
import rootSaga from '../sagas/index'

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  )
  firebase.initializeApp(config)
  console.log('PBJ Bananas')
  console.log(config)
  console.log(firebase)
  sagaMiddleware.run(rootSaga)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
