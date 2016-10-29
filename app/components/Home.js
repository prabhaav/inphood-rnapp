import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import PushNotification from 'react-native-push-notification'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'

import CommonStyles from './styles/common-styles'
import Gallery from '../containers/GalleryContainer'
import Clients from '../containers/ExpertContainer'
import Extras from '../containers/ExtrasContainer'

const HomeTabBar = React.createClass({
  tabIcons: ['ios-home-outline', 'ios-people-outline', 'ios-options-outline'],
  tabTitle: ['Home', 'Clients', 'Extras'],
  render() {
    return <View style={CommonStyles.tabs}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={CommonStyles.tab}>
          <Icon
            name={tab}
            size={40}
            color={this.props.activeTab === i ? '#006400' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[i] = icon }}
          />
        </TouchableOpacity>
      })}
    </View>
  },
})

export default class HomeTabs extends Component {
  constructor(props) {
    super(props)
  }
  _renderTabContent (key) {
    switch (key) {
      case 'ios-home':
        return (
          <Gallery
            result={this.props.auth.result}
          />
        )
      case 'ios-people':
        return (
          <Clients
            result={this.props.auth.result}
          />
        )
      case 'ios-options':
        return (
          <Extras />
        )
      default:
        return <View />
    }
  }
  render () {
    const notificationCount = this.props.notification.client + this.props.notification.trainer
    const notification = notificationCount > 0 ? notificationCount : 0
    PushNotification.setApplicationIconBadgeNumber(notification)
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
        return(
          <View
            tabLabel={tab.key}
            style={{flex: 1}}>
            {this._renderTabContent(tab.key)}
          </View>)
      }
    })
    return (
      <ScrollableTabView
        ref="scrollableTabView"
        tabBarPosition="bottom"
        prerenderingSiblingsNumber={3}
        renderTabBar={() => <HomeTabBar />}
      >
        {tabs}
      </ScrollableTabView>
    )
  }
}
