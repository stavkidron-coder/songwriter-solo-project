import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Completed extends Component {

  render() {
    return (
      <div>
        <h2>Completed</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Completed);