import React, {Component} from 'react';

class SectionItem extends Component {
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