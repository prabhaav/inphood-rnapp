import React, { Component } from 'react'
import {
  View,
  AlertIOS,
  Platform,
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  Reducer: NavigationTabsReducer,
  CardStack: NavigationCardStack,
  AnimatedView: NavigationAnimatedView,
  Header: NavigationHeader,
} = NavigationExperimental

import Icon from 'react-native-vector-icons/Ionicons'
import Media from '../containers/MediaContainer'
import Home from '../containers/GalleryContainer'
import Clients from '../containers/ExpertContainer'
import Extras from '../containers/ExtrasContainer'

export default class HomeTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientNotification: '',
      trainerNotification: ''
    }
  }
  componentWillMount() {
    if (Platform.OS === 'ios') {
      var {PushNotificationIOS} = require('react-native')
      PushNotificationIOS.requestPermissions()
    }
    // PushNotificationIOS.addEventListener('register', this._onRegistered)
    // PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError)
    // PushNotificationIOS.addEventListener('notification', this._onRemoteNotification)
    // PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification)
  }

  componentWillUnmount() {
    // PushNotificationIOS.removeEventListener('register', this._onRegistered)
    // PushNotificationIOS.removeEventListener('registrationError', this._onRegistrationError)
    // PushNotificationIOS.removeEventListener('notification', this._onRemoteNotification)
    // PushNotificationIOS.removeEventListener('localNotification', this._onLocalNotification)
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.notification.clientNotification) {
    //   this.setState({
    //     clientNotification: nextProps.notification.clientNotification
    //   })
    //   this.props.clearClientAlert()
    // }
    // if (nextProps.notification.trainerNotification) {
    //   this.setState({
    //     trainerNotification: nextProps.notification.trainerNotification
    //   })
    //   this.props.clearTrainerAlert()
    // }
  }
  _onRegistered(deviceToken) {}
  _onRegistrationError(error) {
    AlertIOS.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    )
  }
  _onRemoteNotification(notification) {
    AlertIOS.alert(
      'inPhood Notification',
      notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    )
  }
  _onLocalNotification(notification){
    AlertIOS.alert(
      'inPhood Notification',
      notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
  _renderTabContent (key) {
    switch (key) {
      case 'Camera':
        return (
          <Media
            changeTab={(i)=>this.props.changeTab(i)}
          />
        )
      case 'Home':
        return (
          <Home
            result={this.props.auth.result}
          />
        )
      case 'Clients':
        return (
          <Clients
            result={this.props.auth.result}
          />
        )
      case 'Extras':
        return (
          <Extras />
        )
      default:
        return <View />
    }
  }
  render () {
    console.disableYellowBox = true
    if (this.props.auth.result === null) {
      return <Extras />
    }
    const notificationCount = this.props.notification.client + this.props.notification.trainer
    const notification = notificationCount > 0 ? notificationCount : 0
    if (Platform.OS === 'ios') {
      var {PushNotificationIOS} = require('react-native')
      PushNotificationIOS.setApplicationIconBadgeNumber(notification)
    }
    // if (this.state.clientNotification) {
    //   PushNotificationIOS.presentLocalNotification({alertBody: this.state.clientNotification})
    // }
    // if (this.state.trainerNotification) {
    //   PushNotificationIOS.presentLocalNotification({alertBody: this.state.trainerNotification})
    // }
    const trainer = this.props.trainer.clients.length > 0
    const trainerNotificationCount = this.props.notification.trainer > 0 ? this.props.notification.trainer : undefined
    const clientNotificationCount = this.props.notification.client > 0 ? this.props.notification.client : undefined
    const tabs = this.props.tabs.routes.map((tab, i) => {
      if (tab.title !== 'Clients') {
        badgeValue = tab.title === 'Home' ? clientNotificationCount : undefined
      }
      else {
        badgeValue = trainerNotificationCount
      }
      if ( (tab.title !== 'Clients') ||
           (tab.title === 'Clients' && trainer)) {
        if (Platform.OS === 'ios') {
          return (
            <Icon.TabBarItemIOS
              key={tab.name}
              title={tab.title}
              iconName={tab.name}
              selectedIconName={tab.iconName}
              iconSize={40}
              badge={badgeValue}
              onPress={() => {
                this.props.changeTab(i)
              }}
              selected={this.props.tabs.index === i}>
              {this._renderTabContent(tab.key)}
            </Icon.TabBarItemIOS>
          )
        }
        else {
          // Android
          return(
            <View
              tabLabel={tab.title}
              style={{flex: 1}}>
              {this._renderTabContent(tab.key)}
            </View>)
        }
      }
    })
    if (Platform.OS === 'ios') {
      var {TabBarIOS} = require('react-native')
      return (
        <TabBarIOS
          unselectedTintColor="black"
          tintColor="#006400"
          barTintColor="white"
          translucent={true}
        >
          {tabs}
        </TabBarIOS>
      )
    } else {
      // TODO: Something better for Android
      var ScrollableTabView = require('react-native-scrollable-tab-view')
      return (
        <ScrollableTabView
          tabBarPosition="bottom">
          {tabs}
        </ScrollableTabView>
      )
    }
  }
}
