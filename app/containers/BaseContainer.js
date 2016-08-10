import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Base from '../components/Base'
import * as actionCreators from '../actions/Actions'

function mapStateToProps (state) {
  return {
    navigation: state.navReducer,
    auth: state.authReducer,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Base)
