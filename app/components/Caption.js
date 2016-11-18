import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  Switch,
  Platform,
  TextInput,
  Picker,
  Dimensions,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native'

import Button from './Button'
import Spinner from 'react-native-loading-spinner-overlay'

import CommonStyles from './styles/common-styles'

var { width, height } = Dimensions.get('window');

export default class Caption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animating: false,
      meal: false,
      recipe: false,
      breakfast: false,
      lunch: false,
      dinner: false,
      snack: false,
      caption: '',
      color: 'grey',
    }
    this._workBeforeTransition = this._workBeforeTransition.bind(this)
  }
  _workBeforeTransition(text) {
    const {meal, recipe, breakfast, lunch, dinner, snack} = this.state
    let mealType = ''
    if (breakfast) {
      mealType = 'Breakfast'
    }
    else if (lunch) {
      mealType = 'Lunch'
    }
    else if (dinner) {
      mealType = 'Dinner'
    }
    else if (snack){
      mealType = 'Snack'
    }
    this.props.storeCaption(text)
    this.props.addMealData(mealType)
    this.props.sendFirebaseInitCamera()
  }
  componentWillMount() {
    const time = new Date().getHours()
    if (time < 11) {
      this.setState({
        breakfast: true,
        lunch: false,
        dinner: false,
        snack: false,
      })
    }
    else if (time < 14) {
      this.setState({
        breakfast: false,
        lunch: true,
        dinner: false,
        snack: false,
      })
    }
    else if (time < 18) {
      this.setState({
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: true,
      })
    }
    else if (time < 24) {
      this.setState({
        breakfast: false,
        lunch: false,
        dinner: true,
        snack: false,
      })
    }
  }
  _renderImage() {
    return (
      <View
        style={[CommonStyles.selectedImage,
                CommonStyles.universalMargin]}>
        <Image
          style={[{flex:1},
                  CommonStyles.universalBorderRadius]}
          resizeMode='cover'
          source={{uri: this.props.selected.photo}}/>
      </View>
    )
  }
  _renderSpinner() {
    return (
      <View>
        <Spinner color='black' overlayColor='rgba(0, 0, 0, 0)' visible={this.props._inProgress} />
      </View>
    )
  }
  _renderTextInput(textInputAutoFocus) {
    let whiteSpace = new RegExp(/^\s+$/)
    const defaultValue = this.props.vision.tags
    const placeholder = this.props.vision.tags === '' ? "Ingredients, e.g.: Beef, Tomatoes ..." : ''
    const selectionColor = this.props.vision.tags === '' ? '' : 'blue'
    const clearButtonMode = this.props.vision.tags === '' ? 'while-editing' : 'always'

    return (
      <TextInput
        style={[CommonStyles.singleSegmentView,
                CommonStyles.universalFontSize]}
        autoCapitalize="none"
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoFocus={textInputAutoFocus}
        clearButtonMode={clearButtonMode}
        returnKeyType="done"
        onSubmitEditing={
          (event) => {
            let text = event.nativeEvent.text
            if (text === '') {
              alert ('Please enter ingredients')
            }
            else if (whiteSpace.test(text)) {
              alert ('Please enter proper ingredients')
            }
            else {
              this._workBeforeTransition(text)
            }
          }
        }
      />
    )
  }
  _renderIOS() {
    return (
      // This view divides the screen into 17 segments.  The bottom 8 segments
      // are left blank for the keyboard.
      <KeyboardAvoidingView behavior='padding' style={CommonStyles.flexContainer}>
        {this._renderImage()}
        {this._renderSpinner()}
        {/*Need this View wrapping TextInput to support single sided border
          text input line.*/}
        <KeyboardAvoidingView behavior='padding'
          style={[CommonStyles.singleSegmentView,
                  CommonStyles.universalInputView,
                  CommonStyles.universalMargin]}>
          {this._renderTextInput(true)}
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
  _renderAndroid() {
    return (
      // This view divides the screen into 17 segments.  The bottom 8 segments
      // are left blank for the keyboard.
      <View style={CommonStyles.flexContainer}>
        {this._renderImage()}
        {/*Need this View wrapping TextInput to support single sided border
          text input line.*/}
        <View
          style={[CommonStyles.singleSegmentView,
                  CommonStyles.universalInputView,
                  CommonStyles.universalMargin]}>
          {this._renderTextInput(false)}
        </View>
      </View>
    )
  }
  render() {
    // Same issue and code as in Selected.js (TODO: less c+p)
    //
    // TODO: This is really a hack/workaround for 1.5 Android, but there are a number of
    //       problems:
    //         - Android's keyboard doesn't lose focus when you click on the picture
    //           which usually causes the keyboard to drop down and the picture
    //           to become larger.
    //         - There are nested KeyboardAvoidingViews below--not sure if this is
    //           recommended or causes flicker. A fix is not straightforward either
    //           as there are issues with the text bar disappearing etc.
    //       When time permits this needs to be restyled.
    return (Platform.OS === 'ios' ? this._renderIOS() : this._renderAndroid())

  }
}
