import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  Switch,
  Platform,
  StyleSheet,
  TextInput,
  Picker,
  Dimensions,
  TouchableHighlight
} from 'react-native'

import Button from './Button'
import Spinner from 'react-native-loading-spinner-overlay'

var { width, height } = Dimensions.get('window');

export default class Caption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animating: false,
      size: this.props.gallery.photos.length,
      meal: false,
      recipe: false,
      breakfast: false,
      lunch: false,
      dinner: false,
      snack: false,
      caption: '',
    }
  }
  _workBeforeTransition() {
    const {meal, recipe, breakfast, lunch, dinner, snack} = this.state
    // if (!meal && !recipe) {
    //   alert ('Please pick meal category')
    //   return
    // }
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
    let whiteSpace = new RegExp(/^\s+$/)
    if (this.state.caption === '') {
      alert ('Please enter ingredients')
      return
    }
    else if (whiteSpace.test(this.state.caption)) {
      alert ('Please enter ingredients')
      return
    }
    this.props._storeCaption(this.state.caption)
    if (!breakfast && !lunch && !dinner && !snack) {
      alert ('Please pick meal type')
      return
    }
    else {
      if (this.props._library) {
        this.props.addLibraryMealData(mealType)
        this.props.sendFirebaseInitLibrary()
        this.props._transmit()
      }
      else {
        this.props.addCameraMealData(mealType)
        this.props.sendFirebaseInitCamera()
        this.props._transmit()
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.gallery.photos.length > this.state.size) {
    //   this.props._transmit()
    // }
  }
  render() {
    let whiteSpace = new RegExp(/^\s+$/)
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            autoCapitalize="none"
            placeholder="Enter ingredients..."
            returnKeyType="done"
            onEndEditing={
              (event) => {
                let text = event.nativeEvent.text
                if (text === '') {
                  alert ('Please enter ingredients')
                }
                else if (whiteSpace.test(text)) {
                  alert ('Please enter ingredients')
                }
                else {
                  this.setState({caption: text})
                }
              }
            }
            style={styles.default}
          />
          <TouchableHighlight onPress={this.props._handleBackAction}>
            <Image
              style={styles.gif}
              source={{uri: this.props._selectedPhoto}}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Spinner color='black' visible={this.state.animating} />
        </View>
        {/* <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 40}}>
            <Switch
              onValueChange={(value) => {
                if (value) {
                  this.setState({meal: value, recipe: !value})
                }
                else {
                  this.setState({meal: value})
                }
              }}
              value={this.state.meal} />
            <Text style={{fontSize: 18, marginLeft: 10}}>Meal</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 40}}>
            <Switch
            onValueChange={(value) => {
              if (value) {
                this.setState({recipe: value, meal: !value})
              }
              else {
                this.setState({recipe: value})
              }
            }}
            value={this.state.recipe} />
            <Text style={{fontSize: 18, marginLeft: 10}}>Recipe</Text>
          </View>
        </View> */}
        <View style={{flexDirection: 'column', marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
            <Switch
              onValueChange={(value) => {
                if (value) {
                  this.setState({
                    breakfast: value,
                    lunch: !value,
                    dinner: !value,
                    snack: !value,
                  })
                }
                else {
                  this.setState({breakfast: value})
                }
              }}
              value={this.state.breakfast} />
            <Text style={{fontSize: 18, marginLeft: 10}}>Breakfast</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 30}}>
            <Switch
            onValueChange={(value) => {
              if (value) {
                this.setState({
                  breakfast: !value,
                  lunch: value,
                  dinner: !value,
                  snack: !value,
                })
              }
              else {
                this.setState({lunch: value})
              }
            }}
            value={this.state.lunch} />
            <Text style={{fontSize: 18, marginLeft: 10}}>Lunch</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 30}}>
            <Switch
            onValueChange={(value) => {
              if (value) {
                this.setState({
                  breakfast: !value,
                  lunch: !value,
                  dinner: value,
                  snack: !value,
                })
              }
              else {
                this.setState({dinner: value})
              }
            }}
            value={this.state.dinner} />
            <Text style={{fontSize: 18, marginLeft: 10}}>Dinner</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 30}}>
            <Switch
            onValueChange={(value) => {
              if (value) {
                this.setState({
                  breakfast: !value,
                  lunch: !value,
                  dinner: !value,
                  snack: value,
                })
              }
              else {
                this.setState({snack: value})
              }
            }}
            value={this.state.snack} />
            <Text style={{fontSize: 18, marginLeft: 10, marginBottom: 50}}>Snack</Text>
          </View>
        </View>
        <Button onPress={this._workBeforeTransition.bind(this)} label='Send'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    paddingTop: 64,
    zIndex: 3,
    backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
  },
  gif: {
    width: 80,
    height: 80,
  },
  default: {
    height: 80,
    borderWidth: 1.5,
    borderColor: 'black',
    flex: 1,
    fontSize: 20,
    padding: 4,
  },
})
