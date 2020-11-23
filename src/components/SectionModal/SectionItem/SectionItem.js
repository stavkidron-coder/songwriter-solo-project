import React, {Component} from 'react';

class SectionItem extends Component {

    componentDidMount() {
        this.stringifyData();
    }

    stringifyData = () => {
        console.log('section item existing sections', this.props.existingSections.reduxState.sectionsReducer);
        
    }
    
    render() {
        return(
            <>
            {/* {JSON.stringify(this.props.existingSections)} */}
            <div className="sectionCard">
                <p>{this.props.songSection.section}</p>
                <p>{this.props.songSection.chords}</p>
            </div>
            </>
        )
    }
}

export default SectionItem;