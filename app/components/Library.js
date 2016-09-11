import React, { Component } from "react"
import {
  Image,
  View,
  Text,
  Platform,
  StyleSheet,
  BackAndroid,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native'

const {
  Reducer: NavigationTabsReducer,
  CardStack: NavigationCardStack,
  AnimatedView: NavigationAnimatedView,
  Header: NavigationHeader,
} = NavigationExperimental

const route = {
  type: 'push',
  route: {
    key: 'caption',
    title: 'Meal ingredients'
  }
}

import Photos  from '../containers/PhotosContainer'
import Selected from './Selected'
import Caption from '../containers/CaptionContainer'
import Icon from 'react-native-vector-icons/Ionicons'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export default class Library extends Component {
  constructor(props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
    this._handleNavigate = this._handleNavigate.bind(this)
    this._handleCaptionAction = this._handleCaptionAction.bind(this)
  }
  componentWillMount() {
    this.props.loadPhotosInit()
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    this.props.mediaVisible(true)
    const prefix = 'scene_'
    const { scene } = props
    if (scene.key === prefix + 'photos') {
      return (
        <Photos
          callback={(action) => this.props.selectPhoto(action)}
          _handleNavigate={this._handleNavigate.bind(this)}/>
      )
    }
    else if (scene.key === prefix + 'selected') {
      return (
        <Selected
          _buttonName="Next"
          _nextRoute={route}
          _selectedPhoto={this.props.library.selected}
          _storeTitle={(action) => this.props.storeLibraryTitle(action)}
          _handleNavigate={this._handleNavigate.bind(this)}/>
      )
    }
    else if (scene.key === prefix + 'caption') {
      return (
        <Caption
          _transmit={this._handleCaptionAction.bind(this)}
          _selectedPhoto={this.props.library.selected}
          _storeCaption={(action) => this.props.storeLibraryCaption(action)}
          _handleBackAction={this._handleBackAction.bind(this)}
          _library={true}/>
      )
    }
  }
  _renderHeader(props) {
    return (
      <NavigationHeader
        {...props}
        renderTitleComponent={this._renderTitleComponent}
        renderLeftComponent={this._renderLeftComponent.bind(this)}
        renderRightComponent={this._renderRightComponent.bind(this)}
      />
    )
  }
  _renderLeftComponent(props) {
    if (this.props.library.index === 0) {
      return (
        <TouchableOpacity
          style={styles.lbuttonContainer}
          onPress={()=>this._goToLogin()}>
          <Icon name="ios-person-outline" size={30} color='#006400'/>
        </TouchableOpacity>
      )
    }
    return (
      <NavigationHeader.BackButton
        onPress={this._handleBackAction}
      />
    )
  }
  _renderRightComponent(props) {
    if (this.props.library.index === 0) {
      return (
        <TouchableOpacity
          style={styles.rbuttonContainer}
          onPress={()=>this._goToHome()}>
          <Icon name="ios-home-outline" size={30} color='#006400'/>
        </TouchableOpacity>
      )
    }
  }
  _renderTitleComponent(props) {
    return (
      <NavigationHeader.Title>
        {props.scene.route.title}
      </NavigationHeader.Title>
    )
  }
  _goToLogin() {
    this.props.mediaVisible(false)
    this.props.chatVisible(false)
    this.props.trainerChatVisible(false)
    this.props.changeTab(0)
  }
  _goToHome() {
    this.props.mediaVisible(false)
    this.props.chatVisible(false)
    this.props.trainerChatVisible(false)
    this.props.changeTab(2)
  }
  _handleBackAction () {
    if (this.props.library.index === 0) {
      return false
    }
    this.props.popLib()
    return true
  }
  _handleCaptionAction () {
    this.props.selectPhoto('')
    this._handleBackAction()
    this._handleBackAction()
    this.props.mediaVisible(false)
    this.props.chatVisible(false)
    this.props.trainerChatVisible(false)
    this.props.changeTab(1)
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushLib(action.route)
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
        navigationState={this.props.library}
        onNavigate={this._handleNavigate.bind(this)}
        onNavigateBack={this._handleBackAction.bind(this)}
        renderScene={this._renderScene.bind(this)}
        // renderHeader={this._renderHeader.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  base64: {
    flex: 1,
    height: 32,
    resizeMode: 'contain',
  },
  lbuttonContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rbuttonContainer: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 28,
    width: 28,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain',
    tintColor: '#006400'
  }
})
