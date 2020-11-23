import React, {Component} from 'react';

class SectionItem extends Component {

    componentDidMount() {
        // this.props.dispatch({type: 'GET_SECTIONS_BY_ID'});
    }
    
    render() {
        return(
            <div className="sectionCard">
                <p>{this.props.songSection.section}</p>
                <p>{this.props.songSection.chords}</p>
            </div>
        )
    }
}

export default SectionItem;