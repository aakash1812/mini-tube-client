import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

//  'props' object can only be accessed inside StreamEdit function


// const StreamEdit = (props) => {
//     console.log(props);
//     console.log(props.match.params.id);
//     return(
//         <div>StreamEdit</div>
//     );
// };

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream){
            return(
                <div></div>
            );
        } 
        return(
            <div>
                <h3>Edit a Stream</h3>

                {/* 'initialValues' is a property of Redux-forms */}

                <StreamForm initialValues={{Title : this.props.stream.Title, Description : this.props.stream.Description}} onSubmit={this.onSubmit} />
            </div>
        );
        
    }

}





// 'state' object can only be access inside mapStateTo Props function.

// But we need to match 'id' inside props to 'state', so as to get desired information.

// Thus another argument of mapStateTOProps i.e. ownProps is a reference of 'props' object inside StreamEdit function


const mapStateToProps = (state, ownProps) => {
    return(
        { stream : state.streams[ownProps.match.params.id] }
    ); 
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);