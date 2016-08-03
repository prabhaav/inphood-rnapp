import React, { Component } from "react";

import Camera  from '../containers/CameraContainer'
import Library from '../containers/LibraryContainer'

import ScrollableTabView from 'react-native-scrollable-tab-view'

export default class Media extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollableTabView
        tabBarUnderlineColor="black"
        tabBarActiveTextColor="black"
        tabBarPosition="bottom"
        style={{paddingBottom: 50}}
        locked={true}
      >
        <Library tabLabel="Library" changeTab={this.props.changeTab}/>
        <Camera tabLabel="Camera" changeTab={this.props.changeTab}/>
      </ScrollableTabView>
    )
  }
}
