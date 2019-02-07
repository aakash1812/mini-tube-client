import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';


class StreamDelete extends React.Component {

    renderContent = () => {
        if (!this.props.stream){
            return "Are you sure you want to delete this stream :"
        }

        return `Are you sure you want to delete this stream : ${this.props.stream.title}`
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui primary button">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </React.Fragment>  
        );
    }

    render() {
        return(
            <div>
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return(
        {
            stream : state.streams[ownProps.match.params.id]
        }
    );
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);