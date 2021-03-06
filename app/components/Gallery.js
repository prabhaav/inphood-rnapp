import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  Platform,
  BackAndroid,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental

import GalleryView  from '../containers/GalleryViewContainer'
import ChatView from '../containers/ChatContainer'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const prefix = 'scene_'
    const { scene } = props
    if (scene.key === prefix + 'gallery') {
      return (
        <GalleryView
          _handleNavigate={this._handleNavigate.bind(this)}
        />
      )
    }
    else if (scene.key === prefix + 'chat') {
      return (
        <ChatView
          goBack={this._handleBackAction.bind(this)}
          caller="client"
        />
      )
    }
  }
  _renderOverlay(props) {
    if (this.props.galleryNav.index !== 0) {
      return (
        <NavigationHeader
          {...props}
          renderTitleComponent={this._renderTitleComponent}
          renderLeftComponent={this._renderLeftComponent.bind(this)}
        />
      )
    }
  }
  _renderLeftComponent(props) {
    return (
      <NavigationHeader.BackButton
        onPress={this._handleBackAction.bind(this)}
      />
    )
  }
  _renderTitleComponent(props) {
    return (
      <NavigationHeader.Title>
        {props.scene.route.title}
      </NavigationHeader.Title>
    )
  }
  _handleBackAction () {
    if (this.props.galleryNav.index === 0) {
      return false
    }
    this.props.popGal()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushGal(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        navigationState={this.props.galleryNav}
        onNavigate={this._handleNavigate.bind(this)}
        onNavigateBack={this._handleBackAction.bind(this)}
        renderScene={this._renderScene.bind(this)}
        renderHeader={this._renderOverlay.bind(this)}
      />
    )
  }
}
