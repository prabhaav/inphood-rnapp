'use strict'
import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  Platform,
  TextInput,
  TouchableHighlight
} from 'react-native'

import CommonStyles from './styles/common-styles'
import Button from './Button'
import Comb from 'tcomb-form-native'

var Form = Comb.form.Form
// TODO: Complete this with complete list
var Diet = Comb.enums({
  N: 'No Specific Diet',
  V: 'Vegetarian',
  U: 'Vegan',
  P: 'Paleo',
})
var Height = Comb.enums({
  H83: '6\'11\"',
  H82: '6\'10\"',
  H81: '6\'9\"',
  H80: '6\'8\"',
  H79: '6\'7\"',
  H78: '6\'6\"',
  H77: '6\'5\"',
  H76: '6\'4\"',
  H75: '6\'3\"',
  H74: '6\'2\"',
  H73: '6\'1\"',
  H72: '6\'0\"',
  H71: '5\'11\"',
  H70: '5\'10\"',
  H69: '5\'9\"',
  H68: '5\'8\"',
  H67: '5\'7\"',
  H66: '5\'6\"',
  H65: '5\'5\"',
  H64: '5\'4\"',
  H63: '5\'3\"',
  H62: '5\'2\"',
  H61: '5\'1\"',
  H60: '5\'0\"',
  H59: '4\'11\"',
  H58: '4\'10\"',
  H57: '4\'9\"',
  H56: '4\'8\"',
  H55: '4\'7\"',
  H54: '4\'6\"',
  H53: '4\'5\"',
  H52: '4\'4\"',
  H51: '4\'3\"',
  H50: '4\'2\"',
  H49: '4\'1\"',
  H48: '4\'0\"',
  H47: '3\'11\"',
  H46: '3\'10\"',
  H45: '3\'9\"',
  H44: '3\'8\"',
  H43: '3\'7\"',
  H42: '3\'6\"',
  H41: '3\'5\"',
  H40: '3\'4\"',
  H39: '3\'3\"',
  H38: '3\'2\"',
  H37: '3\'1\"',
  H36: '3\'0\"',
})

// TODO: This component really sucks, but I wasn't able to
// get react-form to work after ~2 hours.  Talk to PBJ about
// getting react-form to work and scoping out some of this
// data for MVP (i.e. Location, Height, picture--should
// really be a picker from the camera roll)
//
// There's all kinds of problems to deal with here too:
// - Diet has a '-' enum
// - Things take forever when you click on edit boxes
//
// If we don't scope things mentioned above out, we'll need
// to add storage to them in Firebase and better pickers
// for things like height / weight (with units etc.)
// TODO: A confirm password entry that makes you enter it twice, matchinglike
//
var UserProfileForm = Comb.struct({
  first_name: Comb.String,
  last_name: Comb.String,
  email: Comb.String,
  birthday: Comb.Date,
  diet: Diet,
  height: Height,
  password: Comb.maybe(Comb.String),
  picture: Comb.maybe(Comb.String),
})

export default class UserProfile extends Component {
  constructor(props) {
    super(props)
  }
  /////////////////////////////////////////////////////////////////////////////
  // Conversion methods to/from enums
  //
  // heightEnumToHeightStr converts something like H71 to '5\'11\"'
  heightEnumToHeightStr(heightEnumStr) {
    if(heightEnumStr) {
      let heightInInchesStr = heightEnumStr.substr(1,2)
      let heightInInches = parseInt(heightInInchesStr)

      let numFeet = Math.floor(heightInInches / 12)
      let remainderInches = heightInInches % 12

      return String(numFeet) + '\'' + String(remainderInches) + '\"'
    }
  }
  // heightStrToHeightEnum converts something like '5\'11\"' to H71
  heightStrToHeightEnum(heightStr) {
    if (heightStr) {
      let splitHeightStrArr = heightStr.split("\'")
      let feetStr = splitHeightStrArr[0]
      let inchStr = splitHeightStrArr[1].replace('\"', '')

      let numFeet = parseInt(feetStr)
      let numInches = parseInt(inchStr)

      return 'H' + String( (numFeet*12) + numInches )
    }
  }
  dietEnumToDietStr(dietEnumStr) {
    switch (dietEnumStr) {
      case 'N':
        return('No Specific Diet')
      case 'V':
        return('Vegetarian')
      case 'U':
        return('Vegan')
      case 'P':
        return('Paleo')
      default:
        return('')
    }
  }
  dietStrToDietEnum(dietStr) {
    switch (dietStr) {
      case 'No Specific Diet':
        return('N')
      case 'Vegetarian':
        return('V')
      case 'Vegan':
        return('U')
      case 'Paleo':
        return('P')
      default:
        return('')
    }
  }
  /////////////////////////////////////////////////////////////////////////////
  //
  storeFormData() {
    let value = this.refs.form.getValue()
    if (value) {
      // value is read only, ergo modifiableValue:
      let modifiableValue = {
        first_name: value.first_name,
        last_name: value.last_name,
        birthday: value.birthday,
        // Convert enums to their values for storage to db:
        height: this.heightEnumToHeightStr(value.height),
        diet: this.dietEnumToDietStr(value.diet),
        email: value.email,
        password: value.password,
        picture: value.picture,
      }
      this.props._storeForm(modifiableValue)
      this.props._storeSettings(modifiableValue)
      this.props.goBack()
    }
  }
  birthdayDateFormat(date) {
    if (date) {
      let monthString = ''
      switch(date.getMonth()) {
        case 0:
          monthString = 'January'
          break;
        case 1:
          monthString = 'February'
          break;
        case 2:
          monthString = 'March'
          break;
        case 3:
          monthString = 'April'
          break;
        case 4:
          monthString = 'May'
          break;
        case 5:
          monthString = 'June'
          break;
        case 6:
          monthString = 'July'
          break;
        case 7:
          monthString = 'August'
          break;
        case 8:
          monthString = 'September'
          break;
        case 9:
          monthString = 'October'
          break;
        case 10:
          monthString = 'November'
          break;
        default:
          // error will always be December b/c it's a great month!
          monthString = 'December'
          break;
      }
      let newDateString = monthString + ' ' + String(date.getDate()) + ', ' + String(date.getFullYear())

      return (newDateString)
    }
  }
  render() {
    // Minimum user age is 13 for our product (California Law)
    // TODO: Need warning somewhere about this and parental consent
    //
    //    millisecondsFor13Years = 13 yrs * 365.25 d/yr * 24 hr/d * 60 min/hr *
    //                             60 sec/min * 1000ms/sec
    let millisecondsFor13Years = 13 * 365.25 * 24 * 60 * 60 * 1000
    let maximumDate = new Date(Date.now() - millisecondsFor13Years)

    if (this.props.auth.result.provider === "facebook.com") {
      let emailStr = this.props.settings.email
      let getEmail = ((emailStr === null) || (emailStr.trim() === ''))
      let hideEmail = !getEmail

      // User Profile form for FACEBOOK AUTHENTICATED USERS:
      //
      var options = {
        fields: {
          first_name: {
            editable: false,
          },
          last_name: {
            editable: false,
          },
          birthday: {
            mode: 'date',
            maximumDate: maximumDate,
            config: {
              format: this.birthdayDateFormat,
            }
          },
          diet: {
            error: 'Please select a diet ...',
            nullOption: {value: '', text: 'Choose a diet ...'},
          },
          height: {
            error: 'Please select your height ...',
            nullOption: {value: '', text: 'Select your height ...'},
          },
          email: {
            error: 'Please provide a valid email address ...',
            autoCapitalize: 'none',
            autoCorrect: false,
            editable: getEmail,
            hidden: hideEmail,
          },
          password: {
            editable: false,
            hidden: true,
          },
          picture: {
            editable: false,
            hidden: true,
          },
        },
      };
    } else {
      // User Profile form for EMAIL AUTHENTICATED USERS:
      //
      var options = {
        fields: {
          first_name: {
            error: 'Please enter your first name'
          },
          birthday: {
            mode: 'date',
            maximumDate: maximumDate,
            config: {
              format: this.birthdayDateFormat,
            }
          },
          diet: {
            error: 'Please select a diet ...',
            nullOption: {value: '', text: 'Choose a diet ...'},
          },
          height: {
            error: 'Please select your height ...',
            nullOption: {value: '', text: 'Select your height ...'},
          },
          email: {
            error: 'Please provide a valid email address ...',
            autoCapitalize: 'none',
            autoCorrect: false,
            hidden: true,
          },
          password: {
            autoCapitalize: 'none',
            autoCorrect: false,
            secureTextEntry: true,
            hidden: true,
          },
          picture: {
            editable: false,
            hidden: true,
          },
        },
      }
    }

    let value = {
      first_name: this.props.settings.first_name,
      last_name: this.props.settings.last_name,
      email: this.props.settings.email,
      birthday: new Date(this.props.settings.birthday),
      height: this.heightStrToHeightEnum(this.props.settings.height),
      diet: this.dietStrToDietEnum(this.props.settings.diet),
      picture: this.props.settings.picture,
    }
    const scrollViewSegments = 8.2
    const buttonSegment = 0.8
    const spacerSegement = 1
    return (
      <View style={{flex: 1}}>

        <View style={{flex: scrollViewSegments}}>
          <ScrollView
            contentContainerStyle={CommonStyles.universalFormScrollingContainer}>
              <Form
                ref="form"
                value={value}
                type={UserProfileForm}
                options={options}/>
              <View style={CommonStyles.flexContainer}/>
          </ScrollView>
        </View>

        <View style={{flex: buttonSegment, backgroundColor: 'white'}}>
          <Button
            onPress={this.storeFormData.bind(this)}
            label='Submit'
            color='#006400'
          />
        </View>

        <View style={{flex: spacerSegement, backgroundColor: 'white'}}/>
      </View>
    )
  }
}
