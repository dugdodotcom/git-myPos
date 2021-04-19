
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// get components
import SettingForm from '../../components/SettingForm/SettingForm';

// Import Selectors
import { getSetting } from '../../SettingReducer';

// Import Action
import { fetchSetting, addSettingRequest } from '../../SettingActions';

export class SettingPage extends Component {

  handleEditSetting = (tax) => {
    this.props.dispatch(addSettingRequest({ tax }));
  };

  render() {
    return (
      <div>
        <h2>Setting Form</h2>
        <SettingForm saveSetting={this.handleEditSetting} setting={this.props.setting} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
SettingPage.need = [params => {
  return fetchSetting(params.id);
}];


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    setting: getSetting(state, props.params.id),
  };
}

SettingPage.propTypes = {
  setting: PropTypes.shape({
    tax: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(SettingPage);
