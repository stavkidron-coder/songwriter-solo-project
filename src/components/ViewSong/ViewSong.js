import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Container} from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class SongPage extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_SONG'});
    }

    render() {
        return (
        <>
            <Jumbotron>
                <Container>
                    <h2>View Song Page</h2>
                </Container>
            </Jumbotron>

            {JSON.stringify(this.props.store)}

        </>
        );
    }
}

export default connect(mapStoreToProps)(SongPage);